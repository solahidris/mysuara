import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { StaticWaveform } from "@/components/ui/waveform";
import { HomeFooter } from "@/components/home/home-footer";

const heroHighlights = [
  "Co-created with ministries, NGOs, and enterprises across Malaysia",
  "Dialects, accessibility, and security tracked every quarter",
  "RapidScreen intelligence keeps feedback loops continuously learning",
];

const roadmapPhases = [
  {
    period: "Q1 2025",
    focus: "Dialects & Coverage",
    items: [
      "Expand Sabah & Sarawak dialect models with community recordings",
      "Launch Malay–English code-switching boosters across channels",
      "Publish accessibility scorecards for inclusive design partners",
    ],
  },
  {
    period: "Q2 2025",
    focus: "Operational Excellence",
    items: [
      "Release live-ops incident automation for government hotlines",
      "Introduce anonymised benchmarking dashboards for NGOs",
      "Complete ISO/IEC 27001 readiness via external audit",
    ],
  },
  {
    period: "Q3 2025",
    focus: "Ecosystem & Integrations",
    items: [
      "Debut open developer programme with SDK and sandbox access",
      "Ship plug-and-play connectors for CRM and ticketing partners",
      "Host national voice AI challenge with universities and startups",
    ],
  },
  {
    period: "Q4 2025",
    focus: "Impact & Governance",
    items: [
      "Roll out outcomes analytics tying feedback to policy decisions",
      "Launch national observatory for voice inclusion metrics",
      "Publish public transparency report on data stewardship",
    ],
  },
];

const milestoneTimeline = [
  {
    label: "Phase 01",
    title: "Inclusive Coverage",
    description:
      "Co-develop dialect and accessibility releases with regional councils, ensuring inclusive experiences nationwide.",
    icon: "/assets/icon-phase-coverage.svg",
    accent: "from-[#bfdbfe40] via-[#60a5fa24] to-transparent",
  },
  {
    label: "Phase 02",
    title: "Operational Mastery",
    description:
      "Automate live operations, elevate QA, and deliver visibility across ministries, enterprises, and contact centres.",
    icon: "/assets/icon-phase-ops.svg",
    accent: "from-[#c7d2fe40] via-[#a5b4fc33] to-transparent",
  },
  {
    label: "Phase 03",
    title: "Open Ecosystem",
    description:
      "Launch developer kits, integrations, and co-innovation programmes so partners can extend Suara everywhere.",
    icon: "/assets/icon-phase-open.svg",
    accent: "from-[#3b82f61a] via-[#60a5fa22] to-transparent",
  },
  {
    label: "Phase 04",
    title: "Measured Impact",
    description:
      "Publish dashboards, policy scorecards, and transparency reports tying every release to measurable outcomes.",
    icon: "/assets/icon-phase-impact.svg",
    accent: "from-[#0f172a1a] via-[#2563eb1f] to-transparent",
  },
];

const guidingPrinciples = [
  {
    title: "Community First",
    description:
      "Field testing happens alongside community organisations, ensuring launches respect cultural nuance and accessibility needs.",
  },
  {
    title: "Co-build with Partners",
    description:
      "Product councils, roadmap summits, and RapidScreen data rooms keep ministries, NGOs, and enterprises in the driver’s seat.",
  },
  {
    title: "Transparent Progress",
    description:
      "Quarterly releases publish what shipped, what shifted, and what’s next—grounded in data your teams can trust.",
  },
];

const partnerProgrammes = [
  {
    title: "Roadmap Council",
    description:
      "Bi-monthly working group aligning priorities across ministries, GLCs, NGOs, and private sector innovators.",
  },
  {
    title: "Dialect Labs",
    description:
      "Community-led recording drives, annotation sprints, and inclusive design reviews for Malaysia’s diverse voices.",
  },
  {
    title: "Security Forum",
    description:
      "Joint taskforce with InfoSec leads to pressure-test releases and maintain sovereign-grade governance.",
  },
];

const engagementSteps = [
  {
    heading: "Share priorities",
    text: "Highlight journeys that matter—public safety, healthcare, inclusion. We calibrate the backlog together.",
  },
  {
    heading: "Co-design pilots",
    text: "Prototype workflows with Suara practitioners, test dialect performance, and validate compliance criteria.",
  },
  {
    heading: "Measure outcomes",
    text: "Track ROI, service improvements, and policy wins with RapidScreen analytics and quarterly briefings.",
  },
  {
    heading: "Scale nationally",
    text: "Graduate pilots into sovereign infrastructure and community programmes with shared success scorecards.",
  },
];

const metrics = [
  { value: "12", label: "Partner councils guiding quarterly releases" },
  { value: "68%", label: "Average automation lift across pilot journeys" },
  { value: "16 regions", label: "Dialect coverage targeted by year end" },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[var(--bg)] text-[var(--ink)]">
      <div className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-28 pt-24 sm:px-6 lg:px-10">
        <AnimatedSection className="relative isolate overflow-hidden rounded-[36px] border border-[#2563eb1a] bg-gradient-to-br from-[#eef3ff] via-white to-[#dbe8ff] px-6 py-16 shadow-[0_32px_88px_rgba(4,9,20,0.12)] sm:px-10 lg:px-16">
          <div className="absolute inset-0 opacity-60">
            <GridPattern width={64} height={64} className="[mask-image:linear-gradient(to_bottom_right,transparent,rgba(37,99,235,0.18),rgba(37,99,235,0.12))]" />
          </div>
          <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2563eb24] bg-[#2563eb12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1d4ed8]">
                Product Roadmap
              </span>
              <h1 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] text-[var(--ink)]">
                Building Malaysia’s sovereign voice infrastructure together.
              </h1>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Every milestone is co-designed with councils, community partners, and enterprises so Suara delivers inclusive voice automation that Malaysia can trust.
              </p>
              <ul className="grid gap-2 text-sm text-[#1d3350]">
                {heroHighlights.map((highlight) => (
                  <li key={highlight} className="inline-flex items-start gap-3 rounded-[18px] bg-white/70 px-4 py-3 text-left shadow-[0_12px_28px_rgba(4,9,20,0.04)] backdrop-blur">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#2563eb]" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_42px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Join The Council
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2563eb2e] bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8] shadow-[0_14px_32px_rgba(37,99,235,0.14)] transition hover:-translate-y-0.5"
                >
                  Explore Vision
                </Link>
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-[360px] place-items-center">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#60a5fa33] via-[#1d4ed824] to-[#93c5fd48] blur-3xl" aria-hidden />
              <div className="relative w-full overflow-hidden rounded-[40px] border border-white/40 bg-white/70 shadow-[0_26px_64px_rgba(37,99,235,0.24)] backdrop-blur">
                <div className="absolute inset-0 opacity-35">
                  <GridPattern width={48} height={48} className="text-[#1d4ed8]" />
                </div>
                <div className="relative flex h-full flex-col gap-6 px-10 py-12 text-center">
                  <span className="inline-flex justify-center text-xs font-semibold uppercase tracking-[0.32em] text-[#1d4ed8]/70">
                    Quarter Pulse
                  </span>
                  <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_40px_rgba(37,99,235,0.22)]">
                    <StaticWaveform height={96} barWidth={9} barGap={7} barColor="#2563eb" fadeEdges className="w-full" />
                  </div>
                  <div className="grid gap-3 text-left text-xs text-[#1d3350b3]">
                    <div className="flex items-center justify-between rounded-2xl bg-[#2563eb10] px-4 py-3">
                      <span className="font-semibold text-[#1d4ed8]">Q2 · Operational Excellence</span>
                      <span>On Track · 88%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1f] bg-white/70 px-4 py-3">
                      <span className="font-semibold text-[#1d3350]">Q3 · Ecosystem & Integrations</span>
                      <span>In Review · 62%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-[#2563eb1a] bg-white/80 p-6 text-left shadow-[0_18px_40px_rgba(4,9,20,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(4,9,20,0.12)]"
              >
                <p className="text-[clamp(26px,3vw,34px)] font-semibold text-[#1d4ed8]">{metric.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1d3350b3]">{metric.label}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.12}
          className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10"
        >
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Quarterly Milestones
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              2025 roadmap anchored on four nationwide missions.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Each quarter advances dialect coverage, operational excellence, ecosystem reach, and measurable impact.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {roadmapPhases.map((quarter, index) => (
              <article
                key={quarter.period}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-[28px] border border-[#2563eb1a] bg-white p-7 shadow-[0_24px_60px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_72px_rgba(4,9,20,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb14] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#2563eb12] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1d4ed8]">
                    {quarter.period}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1d3350b3]">Phase {index + 1}</span>
                </div>
                <h3 className="relative text-xl font-semibold text-[var(--ink)]">{quarter.focus}</h3>
                <ul className="relative space-y-3 text-sm text-[#1d3350b3]">
                  {quarter.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#2563eb]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.2}
          className="relative isolate overflow-hidden rounded-[34px] border border-[#2563eb1a] bg-white px-6 py-16 shadow-[0_28px_72px_rgba(4,9,20,0.12)] sm:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_52%)] opacity-70" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                Milestone Journey
              </span>
              <h2 className="text-[clamp(30px,3vw,44px)] font-semibold leading-[1.12] text-[var(--ink)]">
                A phased plan that scales from dialect coverage to measurable outcomes.
              </h2>
              <p className="text-base leading-relaxed text-[#1d3350b3]">
                Each phase spans multiple releases, pilot cohorts, and audit cycles so partners can adopt confidently at national scale.
              </p>
            </div>
            <div className="grid gap-6">
              {milestoneTimeline.map((phase) => (
                <article key={phase.title} className="group relative flex gap-5 rounded-[28px] border border-[#2563eb1a] bg-white/90 p-6 shadow-[0_22px_54px_rgba(4,9,20,0.08)] backdrop-blur">
                  <div className={`relative grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${phase.accent} border border-[#2563eb1a]`}>
                    <Image src={phase.icon} alt={phase.title} width={40} height={40} className="opacity-90" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb80]">{phase.label}</span>
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{phase.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1d3350b3]">{phase.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.26}
          className="grid gap-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Guiding Principles
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              The values that steer every roadmap decision.
            </h2>
            <p className="text-base leading-relaxed text-[#1d3350b3]">
              Even when timelines flex, these principles stay constant. They help every partner trust the plan and the pace.
            </p>
          </div>
          <div className="grid gap-6">
            {guidingPrinciples.map((theme) => (
              <article key={theme.title} className="rounded-[26px] border border-[#2563eb1f] bg-[#f8fbff] p-7 shadow-[0_22px_50px_rgba(4,9,20,0.08)]">
                <h3 className="text-lg font-semibold text-[var(--ink)]">{theme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1d3350b3]">{theme.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.32}
          className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10"
        >
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Partner Programmes
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              Collaborate with us every quarter—in the field and in the cloud.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Structured programmes keep your teams looped into design sprints, governance reviews, and launch playbooks.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-3">
            {partnerProgrammes.map((programme) => (
              <article
                key={programme.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563eb14] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
                <h3 className="relative text-lg font-semibold text-[var(--ink)]">{programme.title}</h3>
                <p className="relative text-sm leading-relaxed text-[#1d3350b3]">{programme.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.38}
          className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10"
        >
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Co-creation Flow
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              A closed-loop playbook from insight to nationwide rollout.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              We align priorities, co-design solutions, measure outcomes, and scale with governance baked in.
            </p>
          </header>
          <div className="relative grid gap-6 lg:grid-cols-4">
            {engagementSteps.map((step, index) => (
              <article
                key={step.heading}
                className="group relative flex h-full flex-col gap-4 rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb80]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-[var(--ink)]">{step.heading}</h3>
                <p className="text-sm leading-relaxed text-[#1d3350b3]">{step.text}</p>
                {index !== engagementSteps.length - 1 && (
                  <span className="absolute right-[-26px] top-1/2 hidden h-[1px] w-16 -translate-y-1/2 bg-gradient-to-r from-[#2563eb33] via-[#2563eb22] to-transparent lg:block" aria-hidden />
                )}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={0.44}
          className="relative isolate overflow-hidden rounded-[34px] border border-[#2563eb1a] bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] px-6 py-16 text-white shadow-[0_32px_88px_rgba(29,78,216,0.32)] sm:px-12"
        >
          <div className="absolute inset-0 opacity-20">
            <GridPattern width={52} height={52} className="text-white" />
          </div>
          <div className="relative flex flex-col items-start gap-8 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Ready To Collaborate
              </span>
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-tight">
                Co-build Malaysia’s voice AI roadmap with Suara.
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Invite us into your next service initiative, policy programme, or community rollout. Together we’ll design, deploy, and scale sovereign voice solutions that deliver measurable change.
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
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5"
              >
                Review Platform
              </Link>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.5} className="w-full">
          <HomeFooter />
        </AnimatedSection>
      </div>
    </main>
  );
}

