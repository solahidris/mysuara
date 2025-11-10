import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { StaticWaveform } from "@/components/ui/waveform";
import { BarVisualizer } from "@/components/ui/bar-visualizer";

const heroStats = [
  {
    value: "95.4%",
    label: "Dialect accuracy across government pilots",
  },
  {
    value: "60+",
    label: "Malay, Mandarin, Tamil & indigenous dialect variants supported",
  },
  {
    value: "24 hrs",
    label: "Rapid deployment window with managed operations pod",
  },
  {
    value: "Tier IV",
    label: "Data residency with sovereign-grade security controls",
  },
];

const productSuites = [
  {
    name: "Suara Contact",
    description:
      "Voice AI copilots for contact centres, hotlines, and branch experiences fine-tuned to every region.",
    icon: "/assets/microphone-2.svg",
    accent: "from-[#2563eb1c] via-[#60a5fa1f] to-[#1d4ed822]",
    bullets: [
      "Multilingual IVR and live-agent assist",
      "Intent-aware escalations with sentiment context",
      "Works with Avaya, Genesys, and Twilio stacks",
    ],
  },
  {
    name: "Suara Field",
    description:
      "Hybrid voice and messaging agents for municipal teams, healthcare, and outreach programmes.",
    icon: "/assets/icon-phone.svg",
    accent: "from-[#1d4ed81c] via-[#93c5fd24] to-[#2563eb22]",
    bullets: [
      "Offline sync for rural deployments",
      "Task lists with auto-translation",
      "Secure case logging with PDPA compliance",
    ],
  },
  {
    name: "Suara Insight",
    description:
      "Real-time intelligence layer providing analytics, policy scorecards, and operational governance.",
    icon: "/assets/icon-globe.svg",
    accent: "from-[#0ea5e91c] via-[#2563eb24] to-[#3b82f622]",
    bullets: [
      "Executive dashboards with ROI trackers",
      "Audit trails and consent governance",
      "APIs for BI tools and data lakes",
    ],
  },
];

const capabilityHighlights = [
  {
    title: "Dialect-Ready ASR",
    description:
      "Transcribe Malay, English, Mandarin, Tamil, and more than 60 dialect variations with confidence scoring built for civic decision-making.",
    icon: "/assets/microphone-blue.svg",
    accent: "from-[#2563eb1f] via-[#93c5fd29] to-transparent",
  },
  {
    title: "Sentiment Layers",
    description:
      "Decode urgency, empathy, and cultural nuance so frontline teams can prioritise the right responses faster.",
    icon: "/assets/icon-chat.svg",
    accent: "from-[#3b82f61c] via-[#60a5fa22] to-transparent",
  },
  {
    title: "Action Playbooks",
    description:
      "Convert insights into templated responses, policy briefs, and outreach scripts ready for multilingual deployment.",
    icon: "/assets/flash.png",
    accent: "from-[#2563eb1c] via-[#4f46e522] to-transparent",
  },
  {
    title: "Voice Governance",
    description:
      "Manage consent, retention, and legal requests through a transparent dashboard built for public accountability.",
    icon: "/assets/globe.svg",
    accent: "from-[#1d4ed81c] via-[#1e3a8a26] to-transparent",
  },
  {
    title: "Live Ops Console",
    description:
      "Monitor live agent performance, automate QA, and trigger escalation paths for critical events in real time.",
    icon: "/assets/icon-phone.svg",
    accent: "from-[#0f172a1c] via-[#2563eb24] to-transparent",
  },
  {
    title: "Partner Integrations",
    description:
      "Connect securely with CRM, ticketing, and government systems via managed APIs and event streaming pipelines.",
    icon: "/assets/icon-globe.svg",
    accent: "from-[#0478571c] via-[#10b98124] to-transparent",
  },
];

const opsMetrics = [
  { value: "68%", label: "automation across inbound workloads" },
  { value: "+24 pts", label: "CSAT lift after 90 days" },
  { value: "99.95%", label: "uptime with sovereign hosting" },
];

const workflowSteps = [
  {
    label: "Collect",
    detail:
      "Launch surveys, hotlines, and kiosks that listen in native dialects while keeping consent front-and-centre.",
  },
  {
    label: "Understand",
    detail:
      "Enrich every utterance with sentiment, entities, and contextual tags tuned to Malaysian sociolects.",
  },
  {
    label: "Activate",
    detail:
      "Feed dashboards, alerts, and playbooks so teams respond quickly and track downstream impact.",
  },
  {
    label: "Improve",
    detail:
      "Close the loop with feedback analytics, ROI snapshots, and training updates that make every journey smarter.",
  },
];

const intelligenceLayers = [
  {
    title: "Inclusive by Design",
    description:
      "Human linguists, accessibility councils, and indigenous reviewers co-create every model release to keep outputs respectful and bias-aware.",
  },
  {
    title: "Secure & Sovereign",
    description:
      "Malaysian data residency, layered encryption, SOC-2 alignment, and role-based controls engineered for regulated sectors.",
  },
  {
    title: "Measurable Impact",
    description:
      "Scorecards for policy, service delivery, and economic outcomes tie voice insights to boardroom and parliamentary KPIs.",
  },
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most partners launch their first multilingual voice journey in 6–8 weeks, including discovery, data alignment, and go-live.",
  },
  {
    question: "Can we deploy on-premise?",
    answer:
      "Yes. Suara supports secure cloud, hybrid, and private deployments to meet government or regulated industry requirements.",
  },
  {
    question: "Do you support human oversight?",
    answer:
      "We blend AI automation with human-in-the-loop review. Analysts can verify transcripts, annotate sentiment, and flag training needs.",
  },
  {
    question: "Is custom training available?",
    answer:
      "We collaborate on domain-specific models for health, finance, and public service vocabularies to maintain accuracy where it matters most.",
  },
];

const testimonial = {
  quote:
    "“Suara reduced multilingual queue times by half within three months, while giving our analysts the context they need to make rapid, human decisions.”",
  name: "Nadiah Razak",
  role: "Chief Digital Officer, National Contact Centre Programme",
  avatar: "/assets/wavy-lines.svg",
};

const integrationLogos = [
  { name: "RapidScreen", src: "/assets/elevenlabs.png", width: 120, height: 40 },
  { name: "Open Source Llama", src: "/assets/llama.png", width: 120, height: 56 },
  { name: "Conversational Ops", src: "/assets/chatgpt.png", width: 120, height: 56 },
  { name: "Telecom Cloud", src: "/assets/globe.svg", width: 64, height: 64 },
  { name: "Civic Data Lake", src: "/assets/window.svg", width: 64, height: 64 },
  { name: "Secure Files", src: "/assets/file.svg", width: 56, height: 56 },
];

function SuiteCard({
  name,
  description,
  bullets,
  icon,
  accent,
}: (typeof productSuites)[number]) {
  return (
    <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[28px] border border-[#2563eb1a] bg-white p-8 shadow-[0_24px_60px_rgba(4,9,20,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_30px_80px_rgba(4,9,20,0.12)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`} aria-hidden />
      <div className="relative flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2563eb12]">
          <Image src={icon} alt="" width={30} height={30} />
        </span>
        <h3 className="text-2xl font-semibold text-[var(--ink)]">{name}</h3>
      </div>
      <p className="relative text-base leading-relaxed text-[#1d3350b3]">{description}</p>
      <ul className="relative space-y-3 text-sm text-[#1d3350]">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#2563eb15] text-[#1d4ed8]">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10.5 8.5 14 15 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function CapabilityCard({
  title,
  description,
  icon,
  accent,
}: (typeof capabilityHighlights)[number]) {
  return (
    <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition group-hover:opacity-100`} aria-hidden />
      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb12]">
        <Image src={icon} alt="" width={28} height={28} />
      </div>
      <h3 className="relative text-xl font-semibold text-[var(--ink)]">{title}</h3>
      <p className="relative text-sm leading-relaxed text-[#1d3350b3]">{description}</p>
    </article>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[var(--bg)] text-[var(--ink)]">
      <div className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-28 pt-24 sm:px-6 lg:px-10">
        <AnimatedSection className="relative isolate overflow-hidden rounded-[36px] border border-[#2563eb1a] bg-gradient-to-br from-[#eef3ff] via-white to-[#dbe8ff] px-6 py-18 shadow-[0_32px_88px_rgba(4,9,20,0.14)] sm:px-10 lg:px-16">
          <div className="absolute inset-0 opacity-60">
            <GridPattern
              width={64}
              height={64}
              className="[mask-image:linear-gradient(to_bottom_right,transparent,rgba(37,99,235,0.18),rgba(37,99,235,0.12))]"
            />
          </div>
          <div className="relative flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-7">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2563eb24] bg-[#2563eb12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1d4ed8]">
                Platform Features
              </span>
              <h1 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] text-[var(--ink)]">
                All-channel voice intelligence designed for Malaysia.
              </h1>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Suara unifies speech, sentiment, and service automation so federal agencies, enterprises, and communities can collaborate through natural voice—securely, inclusively, and at scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_42px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Book A Demo
                </Link>
                <Link
                  href="/roadmap"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2563eb2e] bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8] shadow-[0_14px_32px_rgba(37,99,235,0.14)] transition hover:-translate-y-0.5"
                >
                  View Roadmap
                </Link>
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-[360px] place-items-center">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#60a5fa33] via-[#1d4ed824] to-[#93c5fd48] blur-3xl" aria-hidden />
              <div className="relative w-full overflow-hidden rounded-[40px] border border-white/40 bg-white/70 shadow-[0_26px_64px_rgba(37,99,235,0.24)] backdrop-blur">
                <div className="absolute inset-0 opacity-40">
                  <GridPattern width={48} height={48} className="text-[#1d4ed8]" />
                </div>
                <div className="relative flex h-full flex-col gap-6 px-10 py-12 text-center">
                  <span className="inline-flex justify-center text-xs font-semibold uppercase tracking-[0.32em] text-[#1d4ed8]/70">
                    Live Dialect Monitor
                  </span>
                  <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_40px_rgba(37,99,235,0.22)]">
                    <StaticWaveform height={100} barWidth={9} barGap={7} barColor="#2563eb" fadeEdges className="w-full" />
                  </div>
                  <div className="grid gap-3 text-left text-xs text-[#1d3350b3]">
                    <div className="flex items-center justify-between rounded-2xl bg-[#2563eb10] px-4 py-3">
                      <span className="font-semibold text-[#1d4ed8]">Kelantan Hotline</span>
                      <span>Listening · 98%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1f] bg-white/70 px-4 py-3">
                      <span className="font-semibold text-[#1d3350]">Sabah Telehealth</span>
                      <span>Transcribing · 94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <article
                key={stat.value}
                className="rounded-2xl border border-[#2563eb1a] bg-white/80 p-6 text-left shadow-[0_18px_40px_rgba(4,9,20,0.08)] backdrop-blur"
              >
                <p className="text-[clamp(26px,3vw,34px)] font-semibold text-[#1d4ed8]">{stat.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1d3350b3]">{stat.label}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Product Suites
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">Modular capabilities that launch fast and scale nationwide.</h2>
            <p className="text-base text-[#1d3350b3]">
              Choose the suite that fits your operational reality—each one is composable, governed, and tuned to Malaysian workflows.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productSuites.map((suite) => (
              <SuiteCard key={suite.name} {...suite} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.18} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Core Capabilities
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">Every module engineered for inclusive, secure operations.</h2>
            <p className="text-base text-[#1d3350b3]">
              From first hello to policy impact, Suara keeps the loop closed with culturally fluent AI and human control points.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityHighlights.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.26} className="relative isolate overflow-hidden rounded-[34px] border border-[#2563eb1a] bg-gradient-to-br from-[#0f172a] via-[#1d2760] to-[#1d4ed8] px-6 py-16 text-white shadow-[0_34px_90px_rgba(9,20,60,0.52)] sm:px-12">
          <div className="absolute inset-0 opacity-35">
            <GridPattern width={56} height={56} className="text-white" />
          </div>
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                Live Command Centre
              </span>
              <h2 className="text-[clamp(30px,3.2vw,46px)] font-semibold leading-[1.08]">
                Observe, orchestrate, and improve every conversation in real time.
              </h2>
              <p className="text-base leading-relaxed text-white/80">
                Command dashboards bring together speech streams, operational KPIs, and compliance signals so your teams can coach agents, activate playbooks, and demonstrate ROI instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                {opsMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-[26px] border border-white/20 bg-white/10 px-6 py-4 text-left backdrop-blur">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="rounded-[24px] border border-white/15 bg-white/8 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">Agent Assist</span>
                    <p className="text-lg font-semibold text-white">Bahasa Hotline · Live</p>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80">Monitoring</span>
                </div>
                <div className="mt-6 rounded-[22px] border border-white/12 bg-[#111c3c]/60 p-6">
                  <BarVisualizer state="listening" barCount={18} demo />
                </div>
                <div className="mt-6 grid gap-3 text-sm text-white/80">
                  <div className="flex items-start justify-between rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                    <div>
                      <p className="font-semibold text-white">Compliance Coach</p>
                      <p className="text-xs text-white/70">Reminder sent · Consent disclosure completed</p>
                    </div>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">+12%</span>
                  </div>
                  <div className="flex items-start justify-between rounded-2xl border border-white/12 bg-white/5 px-4 py-3">
                    <div>
                      <p className="font-semibold text-white">Sentiment Pulse</p>
                      <p className="text-xs text-white/70">Positive · Mandailing dialect detected</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <section className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Orchestrated Workflow
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              A closed-loop flow that keeps teams aligned from insight to action.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Every step is instrumented with compliance, analytics, and collaboration hooks so nothing slips through the cracks.
            </p>
          </header>
          <div className="relative grid gap-6 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article
                key={step.label}
                className="group relative flex h-full flex-col gap-4 rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
              >
                <div className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb80]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-[var(--ink)]">{step.label}</h3>
                <p className="text-sm leading-relaxed text-[#1d3350b3]">{step.detail}</p>
                {index !== workflowSteps.length - 1 && (
                  <span className="absolute right-[-26px] top-1/2 hidden h-[1px] w-16 -translate-y-1/2 bg-gradient-to-r from-[#2563eb33] via-[#2563eb22] to-transparent lg:block" aria-hidden />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Intelligence Pillars
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              The guardrails that keep Suara trustworthy from day one.
            </h2>
            <p className="text-base leading-relaxed text-[#1d3350b3]">
              Sovereign-grade security, inclusive data practices, and measurable impact come as standard—not as optional upgrades.
            </p>
          </div>
          <div className="grid gap-5">
            {intelligenceLayers.map((layer) => (
              <article key={layer.title} className="rounded-[26px] border border-[#2563eb1f] bg-[#f8fbff] p-6 shadow-[0_20px_48px_rgba(4,9,20,0.08)]">
                <h3 className="text-lg font-semibold text-[var(--ink)]">{layer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1d3350b3]">{layer.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                Proven Outcomes
              </span>
              <p className="text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.15] text-[var(--ink)]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-[#2563eb12]">
                  <Image src={testimonial.avatar} alt="" width={32} height={32} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#1d3350b3]">{testimonial.role}</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 rounded-[26px] border border-[#2563eb1a] bg-[#f8fbff] p-6 shadow-[0_20px_52px_rgba(4,9,20,0.08)] text-sm text-[#1d3350b3]">
              <div className="flex justify-between">
                <span className="font-semibold text-[#1d4ed8]">Rollout Timeline</span>
                <span className="uppercase tracking-[0.24em] text-xs">Week 6</span>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1a] bg-white px-4 py-3">
                  <span>Contact centre automation</span>
                  <span className="text-[#1d4ed8]">68% live</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1a] bg-white px-4 py-3">
                  <span>Policy intelligence briefs</span>
                  <span className="text-[#1d4ed8]">3 releases</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1a] bg-white px-4 py-3">
                  <span>Accessibility audits</span>
                  <span className="text-[#1d4ed8]">100% coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Integrations & Partners
            </span>
            <h2 className="text-[clamp(30px,3vw,42px)] font-semibold text-[var(--ink)]">
              Built to plug into your existing communications and data fabric.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Suara works with local telcos, open-source models, and enterprise suites—without compromising sovereignty.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {integrationLogos.map((logo) => (
              <div
                key={logo.name}
                className="group flex h-28 flex-col items-center justify-center rounded-[24px] border border-[#2563eb1a] bg-[#f8fbff] px-5 py-4 text-center shadow-[0_18px_44px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_60px_rgba(4,9,20,0.12)]"
              >
                <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} className="opacity-80 transition group-hover:opacity-100" />
                <span className="mt-3 text-xs uppercase tracking-[0.24em] text-[#1d3350b3]">{logo.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Frequently Asked Questions
            </span>
            <h2 className="text-[clamp(30px,3vw,42px)] font-semibold text-[var(--ink)]">
              Everything teams ask before launching Suara.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Need deeper answers? Our specialists will walk you through deployment, integrations, and governance.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-[26px] border border-[#2563eb1a] bg-[#f8fbff] p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_62px_rgba(4,9,20,0.12)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1d3350b3]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate overflow-hidden rounded-[34px] border border-[#2563eb1a] bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] px-6 py-16 text-white shadow-[0_32px_88px_rgba(29,78,216,0.32)] sm:px-12">
          <div className="absolute inset-0 opacity-20">
            <GridPattern width={52} height={52} className="text-white" />
          </div>
          <div className="relative flex flex-col items-start gap-8 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Ready To Launch
              </span>
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-tight">
                Co-build your nationwide voice automation roadmap with Suara.
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Our team embeds with yours to deliver sovereign, inclusive, and high-performing voice journeys—backed by RapidScreen data loops and human-in-the-loop governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1d4ed8] shadow-[0_16px_38px_rgba(255,255,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#f0f4ff]"
              >
                Connect With Suara
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

