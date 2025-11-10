"use client"

import { useState } from "react"

const malaysianRegions = [
  { name: "Perlis", x: 7, y: 14, flag: "/images/flags/perlis.png" },
  { name: "Kedah", x: 9, y: 26, flag: "/images/flags/kedah.png" },
  { name: "Penang", x: 3, y: 35, flag: "/images/flags/penang.png" },
  { name: "Perak", x: 10, y: 38, flag: "/images/flags/perak.png" },
  { name: "Kelantan", x: 17, y: 32, flag: "/images/flags/kelantan.png" },
  { name: "Terengganu", x: 24, y: 38, flag: "/images/flags/terengganu.png" },
  { name: "Pahang", x: 22, y: 56, flag: "/images/flags/pahang.png" },
  { name: "Selangor", x: 12, y: 50, flag: "/images/flags/selangor.png" },
  { name: "Kuala Lumpur", x: 9, y: 59, flag: "/images/flags/kuala-lumpur.png" },
  { name: "Putrajaya", x: 15, y: 59, flag: "/images/flags/putrajaya.png" },
  { name: "Negeri Sembilan", x: 14, y: 68, flag: "/images/flags/negeri-sembilan.png" },
  { name: "Melaka", x: 16, y: 78, flag: "/images/flags/melaka.png" },
  { name: "Johor", x: 25, y: 76, flag: "/images/flags/johor.png" },
  { name: "Sabah", x: 84, y: 32, flag: "/images/flags/sabah.png" },
  { name: "Sarawak", x: 62, y: 68, flag: "/images/flags/sarawak.png" },
  { name: "Labuan", x: 70, y: 42, flag: "/images/flags/labuan.png" },
]

interface RegionSelectorProps {
  onSelectRegion: (region: string) => void
}

export function RegionSelector({ onSelectRegion }: RegionSelectorProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const handleRegionClick = (region: string) => {
    setSelectedRegion(region)
    onSelectRegion(region)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-slate-50 to-white px-6 py-12 text-slate-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-10 h-[20rem] w-[20rem] rounded-full bg-amber-100/40 blur-[140px]" />
      </div>
      <div className="relative w-full max-w-5xl space-y-12">
        <div className="mx-auto max-w-xl text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-md shadow-blue-100">
            Training Access
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Select a State</h1>
          <p className="text-sm text-slate-600 sm:text-base">Tap a flag below to begin your data collection journey.</p>
        </div>

        <div className="relative w-full rounded-[2.25rem] border border-slate-200 bg-white px-6 py-8 shadow-xl shadow-slate-200/70 backdrop-blur-sm sm:px-10 sm:py-12">
          <div className="relative w-full aspect-[2/1] overflow-hidden rounded-[1.75rem]">
            <img src="/images/malaysia-map.png" alt="Malaysia Political Map" className="h-full w-full object-contain opacity-95" />

            {malaysianRegions
              .filter((region) => region.flag)
              .map((region) => (
                <div
                  key={region.name}
                  className="group absolute cursor-pointer p-1 transition-transform duration-200"
                  style={{
                    left: `${region.x}%`,
                    top: `${region.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => handleRegionClick(region.name)}
                  onMouseEnter={() => setHoveredRegion(region.name)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  <div className="relative">
                    <div className="rounded-md border border-slate-200 bg-white p-[3px] shadow-lg shadow-slate-200/70 backdrop-blur-sm">
                      <img
                        src={region.flag || "/placeholder.svg"}
                        alt={`${region.name} flag`}
                        className={`w-[3vw] h-[2.25vw] min-w-[20px] min-h-[15px] max-w-[48px] max-h-[36px] md:w-[5vw] md:h-[3.75vw] md:min-w-[32px] md:min-h-[24px] rounded-sm object-cover shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] transition-all duration-300 ${
                          hoveredRegion && hoveredRegion !== region.name ? "opacity-40" : "hover:scale-105"
                        }`}
                      />
                    </div>
                    <div
                      className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap transition-all duration-200 ${
                        hoveredRegion === region.name
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-1 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-slate-700 shadow-lg shadow-slate-200/60">
                        {region.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
