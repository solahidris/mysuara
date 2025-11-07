const featureHighlights = [
  {
    title: "Dialect-Ready ASR",
    description:
      "Accurately transcribe Malay, English, Tamil, Mandarin, and 60+ dialect variations with confidence scores tuned for civic decision-making.",
  },
  {
    title: "Sentiment Layers",
    description:
      "Unpack intent, urgency, and emotional nuance so agencies prioritise the right actions across region-specific needs.",
  },
  {
    title: "Action Playbooks",
    description:
      "Convert insights into templated responses, policy briefs, and outreach scripts ready for multilingual deployment.",
  },
  {
    title: "Voice Governance",
    description:
      "Manage consent, audit trails, and retention policies through a transparent dashboard built for public accountability.",
  },
  {
    title: "Live Ops Console",
    description:
      "Monitor real-time contact centre performance, automate follow-ups, and escalate critical events instantly.",
  },
  {
    title: "Partner Integrations",
    description:
      "Connect with widely used CRM, ticketing, and civic tech platforms through secure APIs and managed data pipelines.",
  },
];

const pillars = [
  {
    heading: "Inclusive by Design",
    copy: "Human linguists and community reviewers participate in every training cycle to keep outputs respectful and culturally accurate.",
  },
  {
    heading: "Secure & Sovereign",
    copy: "Data residency in Malaysia, full encryption in transit and at rest, plus SOC-2 aligned operational controls.",
  },
  {
    heading: "Measurable Impact",
    copy: "Every engagement produces scorecards that tie community feedback to policy wins, service improvements, and economic outcomes.",
  },
];

const workflowSteps = [
  {
    label: "Collect",
    detail:
      "Deploy surveys, hotlines, and conversational agents that listen in native dialects while respecting community consent.",
  },
  {
    label: "Understand",
    detail:
      "Suara’s AI stack enriches each interaction with sentiment, entity tagging, and thematic clustering built for Malaysian contexts.",
  },
  {
    label: "Activate",
    detail:
      "Deliver dashboards, alerts, and playbooks to cross-functional teams so they can respond quickly and track downstream impact.",
  },
  {
    label: "Improve",
    detail:
      "Close the loop with feedback analytics, ROI snapshots, and training data updates that keep experiences improving over time.",
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

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 text-left shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
      <h3 className="text-xl font-semibold text-[#102240]">{title}</h3>
      <p className="text-base leading-relaxed text-[#1f2f4a]">{description}</p>
    </article>
  );
}

export default function FeaturesPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f1f5ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#e0ecff] via-white to-[#c8dcff] px-8 py-20 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-14">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-5">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Platform Features
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Everything needed to understand every Malaysian voice.
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              Suara.ai merges deep language intelligence with operational tooling so teams can listen, respond, and prove impact with confidence.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Core Capabilities
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              From accurate speech recognition to action-ready reporting, each module works together to close feedback loops faster.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => (
              <Card key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <div className="mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
                Built on three essentials.
              </h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                The Suara platform focuses on inclusion, sovereignty, and measurable progress. Every feature connects back to these pillars so partners understand where value is created.
              </p>
            </div>
            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.heading}
                  className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-[#102240]">{pillar.heading}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1f2f4a]">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Feedback-to-Action Workflow
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              A guided journey keeps teams aligned at every stage, ensuring no insight is lost between collection and delivery.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article
                key={step.label}
                className="relative flex h-full flex-col gap-3 rounded-2xl border border-[#d7e3ff] bg-white p-6 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-sm font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-[#102240]">{step.label}</h3>
                <p className="text-sm leading-relaxed text-[#1f2f4a]">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              If you need something deeper, reach out and we’ll connect you with a specialist.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[#102240]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1f2f4a]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

