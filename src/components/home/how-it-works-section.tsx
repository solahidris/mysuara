import Image from "next/image";

import ConversationDemo from "@/components/ui/conversation-demo/conversation-demo";
import OrbAutoPlay from "@/components/ui/orb-autoplay/orb-autoplay";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { BarVisualizer } from "@/components/ui/bar-visualizer";
import { ScrollingWaveform, StaticWaveform } from "@/components/ui/waveform";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  return (
    <section id="how" className="mt-28 flex w-full justify-center px-4">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 text-center">
        <h2 className="text-[clamp(48px,5.5vw,64px)] font-medium text-[var(--ink)]">
          How <span className="font-semibold text-[#2563eb]">Suara</span> Works
        </h2>
        <p className="text-[clamp(18px,2.2vw,24px)] leading-[1.5] text-[#04091480]">
          Voice AI designed for real conversations with seamless integration with leading AI platforms.
        </p>
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
            <div className="relative z-10 px-8 pb-6 pt-8 md:mb-10">
              <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Voice Input</h3>
              <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                Capture natural speech across Malay, English, Mandarin, and local dialects directly from web, phone, or WhatsApp.
              </p>
            </div>
            <div className="relative z-10 mx-8 mb-6 h-20 rounded-[18px]">
              <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <GridPattern
                  style={{ border: "none" }}
                  width={40}
                  height={40}
                  className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
                  )}
                />
              </div>
              <StaticWaveform
                height={150}
                barWidth={4}
                barGap={8}
                barColor="#2563eb"
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
              />
              <ScrollingWaveform
                height={150}
                barWidth={4}
                barGap={8}
                speed={40}
                fadeEdges
                barColor="#2563eb"
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
              />
            </div>
          </div>

          <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
            <div className="relative z-10 px-8 pb-6 pt-8">
              <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">AI Processing</h3>
              <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                Smart language understanding powered by Ilmu GPT and Llama ensures accurate comprehension and transcription.
              </p>
            </div>
            <div className="relative z-10 mx-8 mb-6 flex h-[240px] items-center justify-center overflow-hidden rounded-[22px]">
              <div className="absolute bottom-[10%] flex h-full w-[690px] items-center justify-center">
                <Image
                  src="/assets/wavy-lines.svg"
                  alt=""
                  width={200}
                  height={100}
                  style={{ width: "500px", height: "500px" }}
                  className="absolute"
                />
              </div>
              <div className="relative grid h-full w-full place-items-center">
                <span
                  className="absolute h-[95%] w-[65%] rounded-full"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(55% 55% at 50% 40%, rgba(147,180,255,0.35), rgba(147,180,255,0.12) 60%, rgba(147,180,255,0) 72%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 30px rgba(4,9,20,0.1)",
                    filter: "blur(0.3px)",
                  }}
                />
                <div
                  className="relative grid h-[150px] w-[150px] place-items-center overflow-hidden rounded-full"
                  style={{
                    boxShadow:
                      "0 22px 48px rgba(30,63,174,0.35), inset 0 -12px 30px rgba(0,0,0,0.25), inset 0 10px 18px rgba(255,255,255,0.22)",
                  }}
                >
                  <span
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 35%, #5a85ff 0%, #1e3fae 100%)",
                    }}
                  />
                  <OrbAutoPlay />
                  <span
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 40% 10%, rgba(255,255,255,0.45), rgba(255,255,255,0) 45%), radial-gradient(70% 60% at 60% 80%, rgba(255,255,255,0.1), rgba(255,255,255,0) 60%)",
                      mixBlendMode: "screen",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-[24px] border border-[rgba(4,9,20,0.06)] bg-white text-left shadow-[0_18px_38px_rgba(4,9,20,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(37,99,235,0.05)] to-[rgba(37,99,235,0.12)]" />
            <div className="relative z-10 px-8 pb-6 pt-8">
              <h3 className="mb-3 text-2xl font-semibold text-[var(--ink)]">Voice Output</h3>
              <p className="text-lg leading-[1.6] text-[rgba(4,9,20,0.72)]">
                Powered by Eleven Labs, generate smooth, natural responses with realistic voices for seamless conversations.
              </p>
            </div>
            <div className="relative z-10 mx-8 mb-6 flex h-full items-end justify-center rounded-[22px]">
              <div className="pointer-events-none absolute inset-0 opacity-85">
                <GridPattern
                  style={{ border: "none" }}
                  width={40}
                  height={40}
                  className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(29,78,216,0.66),transparent,transparent,rgba(29,78,216,0.66))]",
                  )}
                />
              </div>
              <div className="relative flex w-full items-end justify-center px-6 pb-6">
                <ConversationDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

