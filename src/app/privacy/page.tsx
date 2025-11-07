const principles = [
  {
    title: "Transparency",
    description:
      "We explain what data we collect, why we need it, and how it fuels the Suara experience. No hidden terms, no surprise sharing.",
  },
  {
    title: "Choice",
    description:
      "You decide how we communicate with you, what feedback journeys you participate in, and when your details should be removed.",
  },
  {
    title: "Protection",
    description:
      "Security practices—encryption, access controls, and continuous monitoring—keep sensitive voice data out of the wrong hands.",
  },
];

const dataPractices = [
  {
    heading: "Data we collect",
    copy: "Account details, engagement analytics, and content you submit through voice or text channels. We avoid collecting anything unrelated to providing Suara services.",
  },
  {
    heading: "How it’s used",
    copy: "To deliver insights, improve dialect coverage, send operational updates, and comply with policies. Aggregated data may inform national reports but never reveals personal identities.",
  },
  {
    heading: "When we share",
    copy: "Third parties only assist with processing (for example, secure hosting or analytics). They must meet strict confidentiality requirements and can’t reuse your data.",
  },
];

const rights = [
  {
    title: "Access",
    description: "Request a copy of data we hold about you at any time. We respond within 30 days or faster when local laws require it.",
  },
  {
    title: "Corrections",
    description: "Spot an error? Let us know and we’ll update or annotate your information so it stays accurate and fair.",
  },
  {
    title: "Deletion",
    description: "Ask us to remove your records. We erase them unless retention is required for legal, security, or contractual reasons, in which case we’ll explain why.",
  },
  {
    title: "Opt-out",
    description: "Withdraw from research pilots, marketing updates, or SMS alerts directly from the message or by contacting our privacy team.",
  },
];

const retention = [
  {
    heading: "Storage timelines",
    copy: "Feedback data is kept only as long as programmes run or regulations demand. We anonymise or delete records when campaigns end.",
  },
  {
    heading: "Security routines",
    copy: "Regular penetration tests, role-based access reviews, and encryption of data in transit and at rest safeguard every interaction.",
  },
  {
    heading: "Incident response",
    copy: "If something goes wrong, we notify affected partners promptly, outline containment steps, and follow regulatory reporting obligations.",
  },
];

const contacts = [
  {
    label: "Privacy Team",
    value: "privacy@suara.ai",
    href: "mailto:privacy@suara.ai",
  },
  {
    label: "Data Protection Officer",
    value: "dpo@suara.ai",
    href: "mailto:dpo@suara.ai",
  },
  {
    label: "Office",
    value: "Kuala Lumpur, Malaysia (appointments only)",
  },
];

function SummaryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 text-left shadow-[0_20px_56px_rgba(15,23,42,0.1)]">
      <h3 className="text-xl font-semibold text-[#0f172a]">{title}</h3>
      <p className="text-base leading-relaxed text-[#1f2937]">{description}</p>
    </article>
  );
}

function DetailCard({
  heading,
  copy,
}: {
  heading: string;
  copy: string;
}) {
  return (
    <article className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
      <h3 className="text-lg font-semibold text-[#102240]">{heading}</h3>
      <p className="mt-2 text-base leading-relaxed text-[#1f2f4a]">{copy}</p>
    </article>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f3f7ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#eaf1ff] via-white to-[#cfddff] px-8 py-20 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-14">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-5">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Privacy Policy
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Your voice, safeguarded every step of the way.
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              This page summarises how Suara.ai collects, uses, and protects information. It complements local regulations and partner agreements without replacing them.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Our guiding principles
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Every privacy decision connects back to these commitments so communities can participate with confidence.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {principles.map((item) => (
              <SummaryCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              How Suara.ai handles data
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              We limit collection, control access, and keep you informed about how information supports national voice AI programmes.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {dataPractices.map((item) => (
              <DetailCard key={item.heading} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Your privacy rights</h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Whether you’re a citizen participant or an institutional partner, we honour standard data protection rights across jurisdictions.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rights.map((item) => (
              <SummaryCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Retention & security</h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              We combine policy, technology, and training so sensitive information stays protected from collection to deletion.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {retention.map((item) => (
              <DetailCard key={item.heading} {...item} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto grid gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0f172a]">Need to talk to us?</h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                Reach out for privacy requests, partnership compliance checks, or general questions about how Suara.ai processes information.
              </p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-[#d7e3ff] bg-[#f6f9ff] p-6">
              {contacts.map((item) => (
                <div key={item.label} className="space-y-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                    {item.label}
                  </dt>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-medium text-[#0f172a] transition hover:text-[#2563eb]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-[#0f172a]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

