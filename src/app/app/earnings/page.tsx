"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { TrainingSubmission } from "@/training-app/lib/supabase"

import { Card } from "@/training-app/components/ui/card"
import { fetchUserSubmissions } from "@/training-app/lib/training-service"
import { Button } from "@/training-app/components/ui/button"
import { Mic, ArrowLeft, DollarSign, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

interface Submission {
  id: string
  originalText: string
  correctedText: string
  region?: string | null
  earnings: number
  submittedAt: string
}

export default function EarningsPage() {
  const router = useRouter()
  const [totalEarnings, setTotalEarnings] = useState(0)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const totalPoints = Math.round(totalEarnings * 100)
  const lastSubmission = submissions.length > 0 ? formatDate(submissions[0].submittedAt) : null

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (!storedUserId) {
      router.push("/app/dashboard")
      return
    }

    fetchEarningsData(storedUserId)
  }, [router])

  const fetchEarningsData = async (userId: string) => {
    try {
      const submissionsData = await fetchUserSubmissions(userId)
      const formatted: Submission[] = (submissionsData.submissions || []).map((submission: TrainingSubmission) => ({
        id: submission.id,
        originalText: submission.original_text,
        correctedText: submission.corrected_text,
        region: submission.region,
        earnings: Number(submission.earnings ?? 0),
        submittedAt: submission.submitted_at,
      }))
      setSubmissions(formatted)
      setTotalEarnings(Number(submissionsData.totalEarnings ?? 0))
    } catch (error) {
      console.error("Error fetching earnings data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-MY", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/app/training" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <Mic className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Suara Training</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">Your Earnings</h1>
            <p className="text-muted-foreground">Track your progress and earnings history</p>
          </div>

          {/* Earnings Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Points Earned</span>
              </div>
              <div className="text-3xl font-bold text-secondary">{totalPoints}</div>
            </Card>

            <Card className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mic className="h-5 w-5" />
                <span className="text-sm">Total Submissions</span>
              </div>
              <div className="text-3xl font-bold text-primary">{submissions.length}</div>
            </Card>

            <Card className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="h-5 w-5" />
                <span className="text-sm">Total Earnings (RM)</span>
              </div>
              <div className="text-3xl font-bold text-foreground">RM {totalEarnings.toFixed(2)}</div>
              {lastSubmission && (
                <p className="text-xs text-muted-foreground">Last submission on {lastSubmission}</p>
              )}
            </Card>
          </div>

          {/* Submissions History */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Submission History</h2>

            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-muted-foreground">No submissions yet</p>
                <Link href="/app/training">
                  <Button>Start Training</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {submissions.map((submission, index) => {
                  const sequence = submissions.length - index
                  const pointsEarned = Math.round(submission.earnings * 100)
                  return (
                    <div
                      key={submission.id}
                      className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-primary">#{sequence}</span>
                            {submission.region && (
                              <span className="text-xs bg-muted px-2 py-1 rounded">{submission.region}</span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground line-clamp-2">{submission.correctedText}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(submission.submittedAt)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-secondary">+{pointsEarned} Points</div>
                          <div className="text-xs text-muted-foreground">≈ RM {submission.earnings.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Link href="/app/training">
              <Button size="lg">Continue Training</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
