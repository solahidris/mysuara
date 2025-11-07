import Image from "next/image";

import { cn } from "@/lib/utils";
import { StaticWaveform } from "@/components/ui/waveform";

const heroBubbles = [
  {
    text: "Nǐ hǎo",
    position: "left-[-40px] top-8",
    transform: "translate(-30%, -30%) rotate(-2deg)",
  },
  {
    text: "Selamat datang",
    position: "right-[-60px] top-[18px]",
    transform: "translate(30%, -20%) rotate(1deg)",
  },
  {
    text: "Apa khabar",
    position: "left-[-50px] bottom-4",
    transform: "translate(-25%, 25%) rotate(1deg)",
  },
  {
    text: "வணக்கம்",
    position: "right-[-70px] bottom-6",
    transform: "translate(35%, 20%) rotate(-1deg)",
  },
];

const pulseDelays = [
  "0s",
  "calc(var(--pulse-duration) / 3)",
  "calc(2 * var(--pulse-duration) / 3)",
];

export function HeroSection() {
  return (
    <>
      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#2563eb] bg-[#2563eb0f] px-[14px] py-[6px] text-[12px] font-medium tracking-[0.02em] text-[#40475a]">
            <span className="inline-flex text-[#2563eb]" aria-hidden="true">
              <Image src="/assets/flash.png" alt="" width={13} height={13} />
            </span>
            AI-Powered
          </span>
          <h1 className="flex flex-col items-center gap-3 text-[clamp(36px,6vw,64px)] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
            <span>Cutting edge voice models</span>
            <span>
              for <span className="text-[clamp(46px,7vw,80px)] text-[#2563eb]">Malaysians.</span>
            </span>
          </h1>
          <p className="mt-2 text-[clamp(18px,2.2vw,24px)] leading-[1.4] text-[var(--muted)]">
            Empowering voices across Malaysia with cutting-edge AI technology
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition will-change-transform hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(37,99,235,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
              href="#contact"
            >
              <span className="inline-flex text-white" aria-hidden="true">
                <Image src="/assets/microphone-2.svg" alt="" width={18} height={18} />
              </span>
              Speak to Suara
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2563eb24] px-6 py-3 text-[15px] font-semibold text-[#2563eb] transition hover:-translate-y-0.5"
              href="#learn-more"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="relative mt-12 mx-auto flex h-[400px] w-full max-w-7xl flex-col items-center gap-10 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="absolute left-1/2 top-1/2 z-20 grid h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 place-items-center">
          <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            {pulseDelays.map((delay) => (
              <span
                key={delay}
                className="pulse-ring-anim absolute block h-[44%] w-[44%] rounded-full bg-[#2563EB40]"
                style={{
                  borderWidth: "var(--pulse-border)",
                  borderColor: "rgba(var(--pulse-color), var(--pulse-alpha))",
                  animationDelay: delay,
                  transform: "scale(0.7)",
                }}
              />
            ))}
          </div>
          <button
            className="relative z-20 grid h-[140px] w-[140px] place-items-center rounded-full bg-[rgba(37,99,235,0.84)] text-white shadow-[0_18px_40px_rgba(30,64,175,0.35),inset_0_2px_6px_rgba(255,255,255,0.25)] transition active:translate-y-[1px] active:scale-[0.995]"
            aria-label="Start speaking"
          >
            <Image src="/assets/microphone-2.svg" alt="" width={28} height={28} priority />
          </button>
          {heroBubbles.map((bubble) => (
            <span
              key={bubble.text}
              className={cn(
                "absolute z-30 whitespace-nowrap rounded-2xl border border-[#d6e4ff] px-3 py-2 font-semibold text-[var(--chip-ink)] mx-20 lg:mx-0",
                bubble.position,
              )}
              style={{
                backgroundColor: "var(--chip-bg)",
                boxShadow: "var(--shadow)",
                transform: bubble.transform,
              }}
            >
              {bubble.text}
            </span>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 flex w-full max-w-[360px] -translate-x-1/2 -translate-y-1/2 justify-center opacity-90 lg:max-w-7xl">
          <StaticWaveform
            height={140}
            barWidth={10}
            barGap={7}
            fadeEdges
            barColor="#90A4F3"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
}

