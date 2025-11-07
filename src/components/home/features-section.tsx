import Image from "next/image";

import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { BarVisualizer } from "@/components/ui/bar-visualizer";
import { ScrollingWaveform } from "@/components/ui/waveform";
import { StaticWaveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";

type FeatureContentKey = "multilingual" | "stt" | "access" | "ai";

const mlBubbles = [
  {
    text: "Apa khabar?",
    className: "left-[clamp(24px,8vw,140px)] top-[54px]",
  },
  {
    text: "How are you?",
    className: "right-[clamp(24px,8vw,160px)] top-[78px]",
  },
  {
    text: "Nǐ hǎo ma?",
    className: "left-[clamp(24px,8vw,160px)] bottom-[52px]",
  },
  {
    text: "நலமா?",
    className: "right-[clamp(24px,8vw,120px)] bottom-[38px]",
  },
];

const featureCards: Array<{
  title: string;
  body: string;
  content: FeatureContentKey;
}> = [
  {
    title: "Multilingual Understanding",
    body:
      "Recognizes Malay, English, Mandarin, Tamil, and dialect nuances to keep every conversation clear.",
    content: "multilingual",
  },
  {
    title: "Accurate Speech-to-Text",
    body:
      "Advanced acoustic modeling delivers precise transcripts even in noisy, real-world environments.",
    content: "stt",
  },
  {
    title: "Cross-Platform Access",
    body:
      "Seamless deployment across web, mobile, and telephony with unified Suara APIs.",
    content: "access",
  },
  {
    title: "AI-Powered Precision",
    body:
      "RapidScreen insights continuously tune Suara voice models for faster, smarter responses.",
    content: "ai",
  },
];

function renderFeatureContent(content: FeatureContentKey) {
  switch (content) {
    case "multilingual":
      return (
        <div
          className="relative h-[320px] overflow-hidden rounded-[22px]"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
          }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <GridPattern
              style={{ border: "none" }}
              width={40}
              height={40}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
              )}
            />
          </div>
          <div
            className="absolute left-1/2 top-[56%] grid h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
            style={{
              background:
                "radial-gradient(75% 60% at 50% 35%, #e9f1ff, #dbe7ff)",
              boxShadow:
                "0 10px 26px rgba(4,9,20,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
            aria-hidden="true"
          >
            <span
              className="absolute inset-[-18px] rounded-full"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(207,224,255,0.48), rgba(207,224,255,0) 70%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            />
            <Image
              src="/assets/microphone-blue.svg"
              alt="Microphone"
              width={33}
              height={33}
              className="relative drop-shadow-[0_1px_1px_rgba(4,9,20,0.12)]"
            />
          </div>
          {mlBubbles.map((bubble) => (
            <span
              key={bubble.text}
              className={cn(
                "absolute rounded-[12px] bg-[#2563eb] px-4 py-3 text-sm font-bold text-white",
                bubble.className,
              )}
              style={{ boxShadow: "0 10px 24px rgba(37,99,235,0.18)" }}
            >
              {bubble.text}
              <span className="absolute bottom-[-14px] left-1/2 h-0 w-0 -translate-x-1/2 border-[8px] border-transparent border-t-[#2563eb] drop-shadow-[0_2px_2px_rgba(37,99,235,0.18)]" />
            </span>
          ))}
        </div>
      );
    case "stt":
      return (
        <div
          className="relative grid min-h-[260px] place-items-center overflow-hidden rounded-[22px]"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-90">
            <GridPattern
              style={{ border: "none" }}
              width={40}
              height={40}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
              )}
            />
          </div>
          <div
            className="absolute left-[4%] top-1/2 h-[166px] w-[84px] -translate-y-1/2 rounded-full bg-[#2563eb1a]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px rgba(37,99,235,0.1)",
            }}
          />
          <div
            className="absolute right-[12%] top-1/2 h-[166px] w-[84px] -translate-y-1/2 rounded-full bg-[#2563eb1a]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.8), 0 10px 24px rgba(37,99,235,0.1)",
            }}
          />
          <div className="absolute left-[12%] top-1/2 flex h-[208px] w-[85px] -translate-y-1/2 items-center justify-center rounded-full bg-[#2563eb33] p-5">
            <ScrollingWaveform height={150} barWidth={4} barGap={3} barColor="#2563EB" />
          </div>
          <button
            className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full"
            style={{
              background:
                "radial-gradient(65% 60% at 50% 35%, #0338c9, #2563EB)",
              boxShadow:
                "0 16px 36px rgba(30,63,174,0.3), inset 0 -10px 22px rgba(0,0,0,0.25), inset 0 10px 16px rgba(255,255,255,0.22)",
            }}
            aria-label="Record"
          >
            <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-transparent">
              <Image src="/assets/microphone-2.svg" alt="" width={33} height={33} />
            </span>
          </button>
          <div className="absolute right-[12%] top-1/2 flex h-[208px] w-[85px] -translate-y-1/2 items-center justify-center rounded-full bg-[#2563eb33] p-5">
            <div className="ml-3 flex h-[140px] w-[140px] rotate-90 items-center justify-center">
              <BarVisualizer state="listening" barCount={15} demo />
            </div>
          </div>
        </div>
      );
    case "access":
      return (
        <div
          className="relative h-[260px] overflow-hidden rounded-[18px]"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
          }}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <GridPattern
              style={{ border: "none" }}
              width={40}
              height={40}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
              )}
            />
          </div>
          <div className="absolute inset-x-0 top-[20%] h-[600px] rounded-full border border-blue-500/60" />
          <div className="absolute left-[10%] top-[40%] h-[600px] w-[80%] rounded-full border border-[#72A2F9]" />
          <div
            className="absolute left-[4%] top-[50%] grid h-[64px] w-[64px] place-items-center rounded-full text-white"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
              boxShadow:
                "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Image src="/assets/icon-chat.svg" alt="Chat" width={26} height={26} />
          </div>
          <div
            className="absolute left-[40%] top-[8%] grid h-[64px] w-[64px] place-items-center rounded-full text-white lg:left-[45%]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
              boxShadow:
                "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Image src="/assets/icon-globe.svg" alt="Web" width={26} height={26} />
          </div>
          <div
            className="absolute right-[4%] top-[50%] grid h-[64px] w-[64px] place-items-center rounded-full text-white"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 35%, #6d95ff, #2c56c9)",
              boxShadow:
                "0 14px 28px rgba(37,99,235,0.28), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Image src="/assets/icon-phone.svg" alt="Phone" width={24} height={24} />
          </div>
        </div>
      );
    case "ai":
      return (
        <div
          className="relative flex min-h-[240px] w-full flex-col items-center justify-center rounded-[18px]"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0) 0%, rgba(223,233,255,0.1) 100%)",
          }}
        >
          <GridPattern
            style={{ border: "none" }}
            width={40}
            height={40}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
            )}
          />
          <div className="relative h-full w-full">
            <div className="absolute bottom-[45%] left-[6%] flex gap-5 lg:left-[22%]">
              {["/assets/chatgpt.png", "/assets/llama.png"].map((src) => (
                <div
                  key={src}
                  className="w-max rounded-xl bg-white p-3 text-3xl font-semibold text-[#3E80F7]"
                  style={{ boxShadow: "inset 0 1px 6px rgba(37,99,235,0.1)" }}
                >
                  <Image src={src} alt="Model" width={100} height={60} />
                </div>
              ))}
            </div>
            <div
              className="absolute left-[25%] mt-4 w-max rounded-xl bg-white px-6 py-4 text-3xl font-semibold text-[#3E80F7] lg:left-[35%]"
              style={{ boxShadow: "inset 0 1px 6px rgba(37,99,235,0.1)" }}
            >
              <Image src="/assets/elevenlabs.png" alt="ElevenLabs" width={100} height={60} />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="mt-28 flex w-full flex-col items-center px-4">
      <div className="flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-4xl font-semibold text-[#29282b]">
          Suara <span className="text-[#3e80f7]">×</span> RapidScreen
        </h2>
        <p className="max-w-xl text-2xl leading-[1.55] text-[#29282b80] lg:text-right">
          Our advanced AI models are trained to understand diverse Malaysian dialects and languages through RapidScreen AI, ensuring accurate voice recognition across all communities.
        </p>
      </div>

      <div className="mt-20 grid w-full max-w-7xl grid-cols-1 gap-7 md:grid-cols-2">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="relative flex min-h-[220px] flex-col gap-4 overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white p-8 shadow-[0_18px_38px_rgba(4,9,20,0.08)]"
          >
            <div className="relative z-10">
              <h3 className="text-[28px] font-semibold text-[#29282b]">{card.title}</h3>
              <p className="mt-3 text-xl leading-[1.6] text-[rgba(41,40,43,0.72)]">{card.body}</p>
            </div>
            <div className="relative z-10 mt-4 flex-1">{renderFeatureContent(card.content)}</div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

