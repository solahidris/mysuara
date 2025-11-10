"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Check, Loader2, Edit2, Pencil, Wallet, AlertCircle } from "lucide-react"
import { usePrivy } from "@privy-io/react-auth"
import type { TrainingSubmission } from "@/training-app/lib/supabase"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/training-app/components/ui/dialog"
import type { StoredSubmission } from "@/training-app/lib/submission-storage"
import { Button } from "@/training-app/components/ui/button"
import { AutoResizeTextarea } from "@/training-app/components/ui/auto-resize-textarea"
import { Response } from "@/training-app/components/ui/response"
import { useToast } from "@/training-app/hooks/use-toast"
import { AudioRecorder } from "@/training-app/components/audio-recorder"
import { HistoryModal } from "@/training-app/components/history-modal"
import { AuthButton } from "@/training-app/components/auth-button"
import { StepIndicator } from "@/training-app/components/step-indicator"
import {
  createSubmission as createSubmissionRecord,
  deleteSubmission as deleteSubmissionRecord,
  fetchUserSubmissions,
  getNextStory,
  getOrCreateUser,
} from "@/training-app/lib/training-service"

export default function TrainingPage() {
  const { toast } = useToast()
  const router = useRouter()
  const { ready, authenticated, user } = usePrivy()
  const [userId, setUserId] = useState<string | null>(null)
  const [region, setRegion] = useState<string | null>(null)
  const [originalText, setOriginalText] = useState("")
  const [correctedText, setCorrectedText] = useState("")
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [currentStoryId, setCurrentStoryId] = useState<number | null>(null)
  const [currentStoryTitle, setCurrentStoryTitle] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [step, setStep] = useState<"original" | "correction" | "audio">("original")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [submissions, setSubmissions] = useState<StoredSubmission[]>([])
  const [totalEarnings, setTotalEarnings] = useState(0)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const initialStoryRequested = useRef(false)
  const hasFetchedSubmissions = useRef(false)
  const cachedSubmissions = useRef<StoredSubmission[] | null>(null)
  const lastStoryId = useRef<number | null>(null)
  const userIdRef = useRef<string | null>(null)
  const regionRef = useRef<string | null>(null)
  const storyUserRef = useRef<string | null>(null)
  const cachedTotalEarnings = useRef(0)

  const blobToDataUrl = (blob: Blob) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = () => reject(reader.error)
      reader.readAsDataURL(blob)
    })

  // Check authentication status
  useEffect(() => {
    if (ready && !authenticated) {
      setShowLogoutDialog(true)
    }
  }, [ready, authenticated])

  // Countdown and redirect when logged out
  useEffect(() => {
    if (showLogoutDialog) {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown(countdown - 1)
        }, 1000)
        return () => clearTimeout(timer)
      } else {
        router.push("/app")
      }
    }
  }, [showLogoutDialog, countdown, router])

  // Initialize user and load data
  const loadSubmissions = useCallback(
    async (userIdToLoad: string, force = false) => {
      if (!userIdToLoad) return

      if (!force && hasFetchedSubmissions.current && cachedSubmissions.current) {
        setSubmissions(cachedSubmissions.current)
        setTotalEarnings(cachedTotalEarnings.current)
        return
      }

      try {
        const data = await fetchUserSubmissions(userIdToLoad)

        const formattedSubmissions: StoredSubmission[] = data.submissions.map((sub: TrainingSubmission) => ({
          id: sub.id,
          timestamp: new Date(sub.submitted_at).getTime(),
          originalText: sub.original_text,
          correctedText: sub.corrected_text,
          audioData: sub.audio_url || null,
          region: sub.region || "",
          earnings: Number(sub.earnings),
        }))

        hasFetchedSubmissions.current = true
        cachedSubmissions.current = formattedSubmissions
        cachedTotalEarnings.current = Number(data.totalEarnings)

        setSubmissions(formattedSubmissions)
        setTotalEarnings(cachedTotalEarnings.current)
      } catch (error) {
        console.error("Error loading submissions:", error)
      }
    },
    []
  )

  const loadNextText = useCallback(
    async (options?: { userId?: string | null; region?: string | null; force?: boolean }) => {
      const targetUserId = options?.userId ?? userIdRef.current
      const targetRegion = options?.region ?? regionRef.current

      setIsStreaming(true)
      setOriginalText("")
      setCorrectedText("")
      setAudioBlob(null)
      setCurrentStoryId(null)
      setCurrentStoryTitle("")
      setStep("original")

      try {
        const data = await getNextStory({ userId: targetUserId, region: targetRegion })

        if ("completed" in data && data.completed) {
          toast({
            title: "Congratulations!",
            description: data.message || "You have completed all available stories!",
          })
          setIsStreaming(false)
          return
        }

        if (!data.text) {
          throw new Error("No text received")
        }

        if (!options?.force && lastStoryId.current && data.storyId === lastStoryId.current) {
          setIsStreaming(false)
          return
        }

        lastStoryId.current = data.storyId ?? null

        setCurrentStoryId(data.storyId)
        setCurrentStoryTitle(data.title || "")
        setOriginalText(data.text)
        setCorrectedText(data.text)
        storyUserRef.current = targetUserId ?? null
      } catch (error) {
        setIsStreaming(false)
        toast({
          variant: "destructive",
          title: "Error loading text",
          description: error instanceof Error ? error.message : "Please try again",
        })
      }
    },
    [toast]
  )

  useEffect(() => {
    if (!ready) return

    const initializeUser = async () => {
      const storedRegion = localStorage.getItem("selectedRegion")

      if (!storedRegion) {
        router.push("/app")
        return
      }

      const previousRegion = regionRef.current
      setRegion(storedRegion)
      regionRef.current = storedRegion
      if (previousRegion !== storedRegion) {
        initialStoryRequested.current = false
        lastStoryId.current = null
      }

      if (!authenticated || !user) {
        setUserId(null)
        userIdRef.current = null
        if (storyUserRef.current) {
          storyUserRef.current = null
          initialStoryRequested.current = false
          hasFetchedSubmissions.current = false
          cachedSubmissions.current = null
          cachedTotalEarnings.current = 0
          lastStoryId.current = null
        }
      }

      let activeUserId: string | null = userIdRef.current

      if (ready && authenticated && user) {
        try {
          const email =
            user.email?.address || user.twitter?.username || user.google?.email || user.id

          const createdUser = await getOrCreateUser({
            email,
            privyId: user.id,
            region: storedRegion,
          })

          activeUserId = createdUser.id

          setUserId(createdUser.id)
          userIdRef.current = createdUser.id
          localStorage.setItem("userId", createdUser.id)
          hasFetchedSubmissions.current = false
          cachedSubmissions.current = null
          await loadSubmissions(createdUser.id, true)
        } catch (error) {
          console.error("❌ Error initializing user:", error)
        }
      }

      if (activeUserId && activeUserId !== storyUserRef.current) {
        initialStoryRequested.current = false
        hasFetchedSubmissions.current = false
        cachedSubmissions.current = null
      }

      if (!initialStoryRequested.current) {
        await loadNextText({ region: storedRegion, userId: activeUserId, force: true })
        initialStoryRequested.current = true
        storyUserRef.current = activeUserId ?? null
      }
    }

    initializeUser()
  }, [router, ready, authenticated, user, loadSubmissions, loadNextText])

  const handleChangeRegion = () => {
    router.push("/app")
  }

  const handleStreamComplete = () => {
    setIsStreaming(false)
    setTimeout(() => {
      setStep("correction")
    }, 300)
  }

  const handleSubmitCorrection = async () => {
    if (!correctedText.trim() || isLoading) return
    setStep("audio")
  }

  const handleEdit = () => {
    setStep("correction")
    setAudioBlob(null)
  }

  const handleFinalSubmit = async () => {
    setIsLoading(true)

    try {
      // Submit to Supabase if user is authenticated, otherwise save to localStorage
      if (userId) {
        console.log('🚀 Submitting to Supabase...', {
          userId,
          storyId: currentStoryId,
          storyTitle: currentStoryTitle,
          originalText: originalText.substring(0, 50) + '...',
          correctedText: correctedText.substring(0, 50) + '...',
          hasAudio: !!audioBlob,
          region,
        })

        const result = await createSubmissionRecord({
          userId,
          storyId: currentStoryId,
          originalText,
          correctedText,
          region: region || "",
          audioBlob,
        })

        console.log('✅ Submission successful!', result)

        await loadSubmissions(userId, true)
      } else {
        // Fallback to localStorage if not authenticated
        const earnings = 0.1
        const newSubmission: StoredSubmission = {
          id: Date.now().toString(),
          timestamp: Date.now(),
          originalText,
          correctedText,
          audioData: audioBlob ? await blobToDataUrl(audioBlob) : null,
          region: region || "",
          earnings,
        }

        const updatedSubmissions = [newSubmission, ...submissions].slice(0, 10)
        cachedSubmissions.current = updatedSubmissions
        hasFetchedSubmissions.current = true
        cachedTotalEarnings.current = totalEarnings + earnings
        setSubmissions(updatedSubmissions)
        setTotalEarnings(cachedTotalEarnings.current)
      }

      toast({
        title: "Submission successful!",
        description: "You earned 10 Points",
      })

      setIsTransitioning(true)

      // Wait for transition animation then load next text
      setTimeout(() => {
        void (async () => {
          await loadNextText({ force: true })
          setIsLoading(false)
          setTimeout(() => {
            setIsTransitioning(false)
          }, 100)
        })()
      }, 500)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again",
      })
      setIsLoading(false)
    }
  }

  const handleDeleteSubmission = async (submissionId: string) => {
    await deleteSubmissionRecord(submissionId)
    const currentUserId = userIdRef.current
    if (currentUserId) {
      await loadSubmissions(currentUserId, true)
    }
  }

  if (!ready) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-6 flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" aria-label="Loading training experience" />
      </div>
    )
  }

  return (
    <>
      {/* Logout Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <DialogTitle className="text-xl">Oh No! Error</DialogTitle>
            </div>
            <DialogDescription className="text-base space-y-3">
              <p>Please login to continue training.</p>
              <p className="font-semibold text-foreground">
                You will be redirected to the homepage in{" "}
                <span className="text-destructive text-lg">{countdown}</span> second{countdown !== 1 ? 's' : ''}...
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white px-4 py-8 text-slate-900 md:px-8">
        <div className="max-w-7xl mx-auto mb-10">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white px-4 py-4 shadow-xl shadow-slate-200/70 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:px-4">
            {/* Earnings Badge (non-interactive) - Left Side */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 shadow-md shadow-slate-200/60">
              <Wallet className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">{totalEarnings * 100} Points</span>
            </div>

            {/* Action Buttons - Right Side */}
            <div className="flex items-center gap-3">
              {/* Change Region Button */}
              <button
                onClick={handleChangeRegion}
                className="h-full px-4 py-3 cursor-pointer flex items-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-md shadow-slate-200/60 transition hover:bg-slate-50"
                title={`Change region (${region})`}
              >
                {region && (
                  <img
                    src={`/images/flags/${region.toLowerCase().replace(/\s+/g, "-")}.png`}
                    alt={`${region} flag`}
                    className="h-4 w-6 rounded-[2px] object-cover shadow-md shadow-slate-200/70"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                )}
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">Change State</span>
              </button>

              <HistoryModal submissions={submissions} onDelete={handleDeleteSubmission} />
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white shadow-md shadow-slate-200/60">
                <AuthButton />
              </div>
            </div>
          </div>
        </div>

        {/* Main content centered */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white px-6 py-8 shadow-2xl shadow-slate-200/60 backdrop-blur-sm md:px-10 md:py-12">
            <div
              className={`space-y-8 transition-all duration-200 ease-in-out ${isTransitioning ? "opacity-0 -translate-x-full scale-95" : "opacity-100 translate-x-0 scale-100"
                }`}
            >
              <StepIndicator currentStep={step} isAudioComplete={Boolean(audioBlob)} />

              <div className="relative">
                <div
                  className={`space-y-4 transition-all duration-200 ease-in-out ${step === "audio" ? "absolute inset-x-0 -translate-y-12 opacity-0" : "translate-y-0 opacity-100"
                    }`}
                >
                  <div className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3 py-2 text-slate-600 shadow-md shadow-slate-200/60">
                    <svg
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">AI Reference Text</span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-slate-200/60 md:px-5">
                    {originalText ? (
                      <Response
                        key={originalText}
                        isStreaming={isStreaming}
                        onStreamComplete={handleStreamComplete}
                        className="text-sm leading-relaxed text-slate-700 md:text-base"
                      >
                        {originalText}
                      </Response>
                    ) : (
                      <span className="text-sm italic text-slate-500 md:text-base">
                        {isStreaming ? "Loading..." : "Loading text..."}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`transition-all duration-200 ease-in-out ${step === "original" ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                    } ${step === "audio"
                      ? "-translate-y-[180px]"
                      : step === "correction"
                        ? "mt-8"
                        : ""
                    }`}
                >
                  <div className={`space-y-4 ${step === "audio" ? "space-y-3" : ""}`}>
                    {step === "audio" ? (
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/60">
                        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-emerald-500" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                              Your Text
                            </span>
                          </div>
                          <button
                            onClick={handleEdit}
                            disabled={isLoading}
                            className="cursor-pointer flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-md shadow-slate-200/60 transition-all hover:bg-slate-50 hover:scale-102 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Edit2 className="h-4 w-4" />
                            Edit Text
                          </button>
                        </div>
                        <div className="px-4 py-3 md:px-5">
                          <p className="text-sm leading-relaxed text-slate-700 md:text-base">{correctedText}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-1 px-1">
                          <span className="text-base font-semibold text-slate-900 md:text-lg">Edit Your Text</span>
                          <p className="text-xs text-slate-500 md:text-sm">
                            Correct any errors and adjust the text to match your dialect
                          </p>
                        </div>
                        <AutoResizeTextarea
                          value={correctedText}
                          onChange={(e) => setCorrectedText(e.target.value)}
                          placeholder="Edit the text to correct any errors..."
                          className="rounded-2xl border border-slate-300 bg-white text-base font-medium text-slate-800 md:text-lg"
                          disabled={isStreaming || isLoading}
                        />
                      </>
                    )}

                    {step === "correction" && (
                      <div className="flex justify-center pt-4">
                        <button
                          onClick={handleSubmitCorrection}
                          disabled={isStreaming || isLoading || !correctedText.trim()}
                          className="cursor-pointer flex items-center gap-2.5 rounded-lg border border-blue-100 bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-[400ms] hover:bg-blue-500 md:text-base disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Pencil className="h-5 w-5 text-white" />
                          Apply Changes
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {step === "audio" && (
                  <div className="mt-8 space-y-6 rounded-3xl border border-blue-100 bg-gradient-to-b from-blue-50 via-white to-blue-50 p-6 shadow-2xl shadow-blue-100 md:p-8">
                    <div className="space-y-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 md:text-base">
                          Record Your Voice
                        </h3>
                      </div>
                      <p className="text-lg font-bold text-slate-900 md:text-xl">
                        Read the text above clearly in your natural dialect
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5">
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs font-medium text-slate-600">Max: 30 seconds</span>
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-200 ease-in-out ${step === "audio" ? "translate-y-0 opacity-100" : "h-0 translate-y-12 overflow-hidden opacity-0"
                        }`}
                    >
                      <AudioRecorder
                        key={originalText}
                        onRecordingComplete={(blob) => setAudioBlob(blob)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                )}
              </div>

              {step === "audio" && (
                <div className="mb-20 flex justify-center">
                  <button
                    onClick={handleFinalSubmit}
                    disabled={isLoading || !audioBlob}
                    className="cursor-pointer flex items-center gap-2.5 rounded-lg border border-blue-100 bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-200 transition-all duration-[400ms] hover:bg-blue-500 md:text-base disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin text-white" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        {audioBlob && <Check className="h-5 w-5 text-white" />}
                        Submit & Next
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
