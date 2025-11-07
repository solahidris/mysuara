const roadmapQuarters = [
  {
    period: "Q1 2025",
    focus: "Dialects & Coverage",
    items: [
      "Expand Sabah & Sarawak dialect models with community recordings",
      "Launch Malay-English code-switching boosters across all channels",
      "Publish accessibility scorecards for inclusive design partners",
    ],
  },
  {
    period: "Q2 2025",
    focus: "Operational Excellence",
    items: [
      "Release live-ops incident automation for government hotlines",
      "Introduce anonymised benchmarking dashboards for NGOs",
      "Gain ISO/IEC 27001 readiness through external security audit",
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

const milestoneThemes = [
  {
    title: "Community First",
    description:
      "Every roadmap milestone includes field testing with community organisations to ensure features address real needs and respect cultural nuance.",
  },
  {
    title: "Co-Build with Partners",
    description:
      "We invite ministries, NGOs, and enterprises into product councils, allowing shared prioritisation and co-ownership of new capabilities.",
  },
  {
    title: "Transparent Progress",
    description:
      "Quarterly updates highlight what shipped, what shifted, and what’s next, so stakeholders stay informed and confident in our direction.",
  },
];

const engagementSteps = [
  {
    heading: "Share your priorities",
    text: "Tell us which journeys matter most—public safety, healthcare, digital inclusion, or others. We align the backlog with collective needs.",
  },
  {
    heading: "Co-design pilots",
    text: "Work shoulder-to-shoulder with Suara practitioners to prototype workflows, test language models, and validate success metrics.",
  },
  {
    heading: "Measure outcomes",
    text: "Track improvements against baseline KPIs and report impact to funders, constituents, and leadership teams.",
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f3f6ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#e7f0ff] via-white to-[#cfddff] px-8 py-20 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-14">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-5">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Product Roadmap
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Building the national voice AI infrastructure together.
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              This roadmap stays fluid, grounded in community input and partner collaboration. It shows how Suara evolves to bridge every voice to meaningful action.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">2025 Milestones</h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Each quarter focuses on a distinct pillar: language coverage, operational excellence, ecosystem growth, and transparent impact.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {roadmapQuarters.map((quarter) => (
              <article
                key={quarter.period}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 text-left shadow-[0_22px_60px_rgba(15,23,42,0.1)]"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2563eb]">
                    {quarter.period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-[#102240]">
                    {quarter.focus}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-[#1f2f4a]">
                  {quarter.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#2563eb]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Guiding Themes</h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                We keep the roadmap adaptable, but these principles stay constant so progress remains equitable and impactful.
              </p>
            </div>
            <div className="grid gap-5">
              {milestoneThemes.map((theme) => (
                <article
                  key={theme.title}
                  className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-[#102240]">{theme.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1f2f4a]">{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Become a Roadmap Partner</h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Join the councils, pilots, and open forums that shape Suara.ai. Here’s how the collaboration works.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {engagementSteps.map((step) => (
              <article
                key={step.heading}
                className="flex h-full flex-col gap-3 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 text-left shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[#102240]">{step.heading}</h3>
                <p className="text-sm leading-relaxed text-[#1f2f4a]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#60a5fa] px-6 py-14 text-white shadow-[0_28px_80px_rgba(37,99,235,0.35)] sm:px-12">
          <div className="relative flex flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold leading-tight">Let’s build Malaysia’s voice future.</h2>
              <p className="text-base leading-relaxed text-white/90">
                Invite Suara.ai into your next feedback initiative. Together we can keep the roadmap aligned with the people who rely on it most.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8] shadow-[0_12px_32px_rgba(255,255,255,0.25)] transition hover:bg-[#f1f5ff]"
            >
              Contact Suara
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

