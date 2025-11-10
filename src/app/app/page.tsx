"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { RegionSelector } from "@/training-app/components/region-selector"
import { HibiscusTransition } from "@/training-app/components/hibiscus-transition"
import { FlagSwipeTransition } from "@/training-app/components/flag-swipe-transition"
import { AuthButton } from "@/training-app/components/auth-button"
import { usePrivy } from "@privy-io/react-auth"
import { useToast } from "@/training-app/hooks/use-toast"

export default function HomePage() {
  const router = useRouter()
  const { ready, authenticated } = usePrivy()
  const { toast } = useToast()
  const [showTransition, setShowTransition] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [showLandingAnimation, setShowLandingAnimation] = useState<boolean | null>(null)

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenLandingAnimation")
    setShowLandingAnimation(!hasSeenAnimation)
  }, [])

  const handleLandingAnimationComplete = () => {
    sessionStorage.setItem("hasSeenLandingAnimation", "true")
    setShowLandingAnimation(false)
  }

  const handleRegionSelect = (region: string) => {
    // Check if user is authenticated
    if (!ready || !authenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "Please login to proceed",
      })
      return
    }

    setSelectedRegion(region)
    localStorage.setItem("selectedRegion", region)
    setShowTransition(true)
  }

  const handleTransitionComplete = () => {
    router.push("/app/training")
  }

  if (showLandingAnimation === null) {
    return null // or a loading state
  }

  if (showLandingAnimation) {
    return <HibiscusTransition onComplete={handleLandingAnimationComplete} duration={1} />
  }

  if (showTransition && selectedRegion) {
    return <FlagSwipeTransition region={selectedRegion} onComplete={handleTransitionComplete} />
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-16 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-6 h-72 w-72 rounded-full bg-amber-100/40 blur-[110px]" />
      </div>
      <Link href="/" className="absolute top-4 left-4 md:top-6 md:left-8 z-10">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-lg shadow-slate-200/80 backdrop-blur">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EBBF]">
            <Image src="/assets/microphone-2.svg" alt="Suara.ai microphone logo" width={24} height={24} priority />
          </span>
          <span className="text-lg font-semibold text-slate-900">
            <span className="text-[#040914]">Suara.</span>
            <span className="text-[#2563eb]">ai</span>
          </span>
        </div>
      </Link>
      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-10">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3 py-1.5 shadow-lg shadow-slate-200/80 backdrop-blur">
          <AuthButton />
        </div>
      </div>
      <RegionSelector onSelectRegion={handleRegionSelect} />
    </div>
  )
}
