import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { StaticWaveform } from "@/components/ui/waveform";
import { BarVisualizer } from "@/components/ui/bar-visualizer";
import { HomeFooter } from "@/components/home/home-footer";
import { cn } from "@/lib/utils";

const heroHighlights = [
  "Co-created with linguists, accessibility councils, and community reviewers across Malaysia.",
  "Engineered for sovereign infrastructure, PDPA compliance, and transparent governance.",
  "Guided by human-in-the-loop operations that keep empathy at the core of every journey.",
];

const impactMetrics = [
  { value: "60+", label: "dialects & accents actively represented in our corpora" },
  { value: "18 pilots", label: "live across ministries, enterprises, and NGOs" },
  { value: "12 weeks", label: "from co-design workshop to sovereign launch" },
];

const storyPillars = [
  {
    title: "Sovereign By Design",
    description:
      "Data residency, model governance, and operational playbooks are controlled within Malaysia so critical services stay independent.",
    icon: "/assets/icon-globe.svg",
    iconBackground: "bg-[#1d4ed8]",
  },
  {
    title: "Inclusive At Scale",
    description:
      "Dialect reviewers, accessibility boards, and field researchers ensure experiences honour every Malaysian community.",
    icon: "/assets/microphone-white.svg",
    iconBackground: "bg-[#1d4ed8]",
  },
  {
    title: "Operationally Proven",
    description:
      "Live deployments across contact centres, emergency lines, and community programmes prove Suara performs under pressure.",
    icon: "/assets/icon-phone.svg",
    iconBackground: "bg-[#1d4ed8]",
  },
];

const serviceDomains = [
  {
    name: "Public Services & Policy",
    description:
      "Citizens get accurate, multilingual support for licensing, emergency response, and social assistance touchpoints.",
    icon: "/assets/icon-globe-blue.svg",
    accent: "from-[#1d4ed81c] via-[#2563eb24] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
  {
    name: "Healthcare & Wellbeing",
    description:
      "Telehealth triage, hospital hotlines, and population health programmes operate with culturally fluent voice AI.",
    icon: "/assets/icon-health.svg",
    accent: "from-[#2563eb1c] via-[#60a5fa24] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
  {
    name: "Citizen Experience",
    description:
      "Service bureaus, councils, and agencies automate routine workloads while keeping empathy and context intact.",
    icon: "/assets/icon-chat-blue.svg",
    accent: "from-[#3b82f61c] via-[#60a5fa22] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
  {
    name: "Enterprises & MSMEs",
    description:
      "Retail, financial services, and logistics brands deliver consistent multilingual journeys locally and regionally.",
    icon: "/assets/icon-briefcase.svg",
    accent: "from-[#2563eb14] via-[#4f46e522] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
  {
    name: "Education & Workforce",
    description:
      "Learning, skilling, and research initiatives gain voice-first interfaces, curricula, and experimentation sandboxes.",
    icon: "/assets/icon-cap.svg",
    accent: "from-[#0f172a1a] via-[#2563eb22] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
  {
    name: "Accessibility & Inclusion",
    description:
      "Assistive voice experiences co-designed with Deaf and disabled communities ensure technology respects every ability.",
    icon: "/assets/icon-accessibility.svg",
    accent: "from-[#1d4ed814] via-[#93c5fd22] to-transparent",
    iconBackground: "bg-[#2563eb12]",
  },
];

const foundingTimeline = [
  {
    period: "2019",
    title: "Research Origins",
    detail:
      "University labs and civic technologists begin documenting code-switching speech patterns across Sabah, Sarawak, and Peninsular Malaysia.",
  },
  {
    period: "2021",
    title: "Dialect Coalition",
    detail:
      "Community councils, accessibility advocates, and linguists form the Suara coalition to build an ethical Malaysian speech corpus.",
  },
  {
    period: "2023",
    title: "Platform Launch",
    detail:
      "Suara debuts as Malaysia’s sovereign voice intelligence stack with human-in-the-loop QA and managed deployment pods.",
  },
  {
    period: "2024",
    title: "Operational Pilots",
    detail:
      "Government hotlines, healthcare networks, and contact centres deploy Suara for multilingual routing, analytics, and compliance.",
  },
  {
    period: "2025",
    title: "Nationwide Scale",
    detail:
      "RapidScreen telemetry, roadmap councils, and partner ecosystems activate nationwide rollouts tied to measurable policy outcomes.",
  },
];

const leadershipPrinciples = [
  {
    title: "Human Oversight Always",
    description:
      "Supervisors, analysts, and linguists stay in control of every release with transparent audit trails and override tools.",
  },
  {
    title: "Impact You Can Measure",
    description:
      "Every deployment is paired with ROI scorecards, service metrics, and community feedback loops so value is proven, not promised.",
  },
  {
    title: "Transparency & Trust",
    description:
      "Partners receive release notes, bias reports, and governance briefings—because sovereign technology must stay accountable.",
  },
];

const coalitionStreams = [
  {
    title: "Roadmap Council",
    description:
      "Multi-sector leaders prioritise quarterly releases, co-design policies, and align funding to accelerate inclusive voice services.",
  },
  {
    title: "Dialect Labs",
    description:
      "Regional cohorts collect, annotate, and validate speech data so dialect coverage improves with community consent.",
  },
  {
    title: "Ops & Security Forum",
    description:
      "Operational teams and InfoSec leads pressure-test deployments, ensuring PDPA, SOC-2, and sovereign hosting controls stay intact.",
  },
  {
    title: "Innovation Fellowship",
    description:
      "Startups, researchers, and intrapreneurs gain mentorship, sandboxes, and grants to build new voice-first services on Suara.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[var(--bg)] text-[var(--ink)]">
      <div className="relative isolate mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-28 pt-24 sm:px-6 lg:px-10">
        <AnimatedSection className="relative isolate overflow-hidden rounded-[36px] border border-[#2563eb1a] bg-gradient-to-br from-[#eef3ff] via-white to-[#dbe8ff] px-6 py-16 shadow-[0_32px_88px_rgba(4,9,20,0.14)] sm:px-10 lg:px-16">
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
                About Suara
              </span>
              <h1 className="text-[clamp(38px,5vw,64px)] font-semibold leading-[1.05] text-[var(--ink)]">
                Malaysia’s sovereign voice intelligence movement.
              </h1>
              <p className="text-lg leading-relaxed text-[var(--muted)]">
                Suara unites linguists, engineers, and frontline teams to build a national voice AI that hears every Malaysian—and keeps
                sovereignty, inclusion, and measurable impact at the centre of every deployment.
              </p>
              <ul className="grid gap-2 text-sm text-[#1d3350]">
                {heroHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="inline-flex items-start gap-3 rounded-[18px] bg-white/70 px-4 py-3 text-left shadow-[0_12px_28px_rgba(4,9,20,0.04)] backdrop-blur"
                  >
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
                  Partner With Us
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
                <div className="absolute inset-0 opacity-35">
                  <GridPattern width={48} height={48} className="text-[#1d4ed8]" />
                </div>
                <div className="relative flex h-full flex-col gap-6 px-10 py-12 text-center">
                  <span className="inline-flex justify-center text-xs font-semibold uppercase tracking-[0.32em] text-[#1d4ed8]/70">
                    Cultural Signal Desk
                  </span>
                  <div className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_18px_40px_rgba(37,99,235,0.22)]">
                    <StaticWaveform height={96} barWidth={9} barGap={7} barColor="#2563eb" fadeEdges className="w-full" />
                  </div>
                  <div className="grid gap-3 text-left text-xs text-[#1d3350b3]">
                    <div className="flex items-center justify-between rounded-2xl bg-[#2563eb10] px-4 py-3">
                      <span className="font-semibold text-[#1d4ed8]">Kelantan Hotline</span>
                      <span>Empathy Pulse · 97%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[#2563eb1f] bg-white/70 px-4 py-3">
                      <span className="font-semibold text-[#1d3350]">Borneo Dialect Desk</span>
                      <span>Live QA · 92%</span>
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-[#2563eb1f] bg-white/80 p-4">
                    <BarVisualizer state="thinking" barCount={16} demo />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((metric) => (
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

        <AnimatedSection delay={0.1} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Our Mandate
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              Built to secure Malaysia’s voice infrastructure for generations.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Suara protects national data, elevates multi-dialect accessibility, and keeps operational control with Malaysian partners.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storyPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563eb14] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
                <div
                  className={cn(
                    "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb12]",
                    pillar.iconBackground,
                  )}
                >
                  <Image src={pillar.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </div>
                <h3 className="relative text-xl font-semibold text-[var(--ink)]">{pillar.title}</h3>
                <p className="relative text-sm leading-relaxed text-[#1d3350b3]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Who We Serve
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">Voice intelligence crafted with every Malaysian in mind.</h2>
            <p className="text-base text-[#1d3350b3]">
              From national hotlines to rural clinics, Suara’s coalition keeps services personal, contextual, and sovereign.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDomains.map((domain) => (
              <article
                key={domain.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${domain.accent} opacity-0 transition group-hover:opacity-100`} aria-hidden />
                <div
                  className={cn(
                    "relative inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                    domain.iconBackground ?? "bg-[#2563eb12]",
                  )}
                >
                  <Image src={domain.icon} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                </div>
                <h3 className="relative text-lg font-semibold text-[var(--ink)]">{domain.name}</h3>
                <p className="relative text-sm leading-relaxed text-[#1d3350b3]">{domain.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="space-y-12 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
            <div className="space-y-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                Founding Journey
              </span>
              <h2 className="text-[clamp(30px,3vw,44px)] font-semibold leading-[1.1] text-[var(--ink)]">
                A five-year path from research corridors to nationwide deployments.
              </h2>
              <p className="text-base leading-relaxed text-[#1d3350b3]">
                Our story is shaped by academics, policy shapers, frontline agents, and community leaders who demanded a sovereign, inclusive approach to voice AI.
              </p>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full border border-[#2563eb2e] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#1d4ed8] shadow-[0_14px_32px_rgba(37,99,235,0.14)] transition hover:-translate-y-0.5"
              >
                Explore Platform Features
              </Link>
            </div>
            <div className="relative grid gap-5">
              {foundingTimeline.map((milestone, index) => (
                <article
                  key={milestone.period}
                  className="relative flex gap-5 rounded-[26px] border border-[#2563eb1f] bg-[#f8fbff] p-6 shadow-[0_22px_52px_rgba(4,9,20,0.08)]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#2563eb12] text-sm font-semibold uppercase text-[#1d4ed8]">
                      {milestone.period}
                    </div>
                    {index !== foundingTimeline.length - 1 && (
                      <span className="h-full w-px flex-1 bg-gradient-to-b from-[#2563eb33] via-[#2563eb22] to-transparent" aria-hidden />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[var(--ink)]">{milestone.title}</h3>
                    <p className="text-sm leading-relaxed text-[#1d3350b3]">{milestone.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Leadership Commitments
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              Governance that keeps people, policy, and performance aligned.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Every Suara engagement is guided by transparent operating principles so partners know exactly how intelligence is delivered.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-3">
            {leadershipPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[26px] border border-[#2563eb1f] bg-[#f8fbff] p-7 text-left shadow-[0_22px_52px_rgba(4,9,20,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[var(--ink)]">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1d3350b3]">{principle.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="space-y-10 rounded-[34px] border border-[#2563eb12] bg-white px-6 py-16 shadow-[0_26px_70px_rgba(4,9,20,0.1)] sm:px-10">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#2563eb12] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              Coalition Programmes
            </span>
            <h2 className="text-[clamp(30px,3vw,44px)] font-semibold text-[var(--ink)]">
              Programmes that keep ministries, enterprises, and communities aligned every quarter.
            </h2>
            <p className="text-base text-[#1d3350b3]">
              Structured engagement streams make it simple to co-design, govern, and scale nationwide voice automation.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {coalitionStreams.map((stream) => (
              <article
                key={stream.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[26px] border border-[#2563eb1a] bg-white p-7 shadow-[0_22px_52px_rgba(4,9,20,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(4,9,20,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563eb14] via-transparent to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
                <h3 className="relative text-lg font-semibold text-[var(--ink)]">{stream.title}</h3>
                <p className="relative text-sm leading-relaxed text-[#1d3350b3]">{stream.description}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="relative isolate overflow-hidden rounded-[34px] border border-[#2563eb1a] bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] px-6 py-16 text-white shadow-[0_32px_88px_rgba(29,78,216,0.32)] sm:px-12">
          <div className="absolute inset-0 opacity-20">
            <GridPattern width={52} height={52} className="text-white" />
          </div>
          <div className="relative flex flex-col items-start gap-8 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                Join The Coalition
              </span>
              <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-tight">
                Let’s co-build Malaysia’s next decade of sovereign voice automation.
              </h2>
              <p className="text-sm leading-relaxed text-white/80">
                Invite us into your next service initiative, policy sprint, or community rollout. Together we’ll deliver voice journeys that are inclusive, resilient, and accountable.
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
        <AnimatedSection delay={0.4} className="w-full">
          <HomeFooter />
        </AnimatedSection>
      </div>
    </main>
  );
}

