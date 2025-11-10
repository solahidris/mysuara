const termsSections = [
  {
    title: "Who We Are",
    description:
      "Suara.ai builds voice AI infrastructure for Malaysia. These terms outline the basics of using our website and products in a fair and respectful way.",
  },
  {
    title: "Using Our Services",
    description:
      "You agree to use Suara.ai only for lawful purposes, follow local regulations, and respect every community we serve. Don’t attempt to disrupt, reverse engineer, or misuse any part of the platform.",
  },
  {
    title: "Your Responsibilities",
    description:
      "Keep account credentials secure, share accurate information, and notify us immediately if you suspect unauthorized access. You are responsible for the actions taken through your credentials.",
  },
  {
    title: "Our Commitments",
    description:
      "We aim to provide reliable access, protect user data, and communicate updates in a timely manner. We may update or pause features to keep the platform secure and relevant.",
  },
];

const policySections = [
  {
    title: "Data We Handle",
    description:
      "We collect the minimum information required to deliver insights—mainly feedback inputs, usage analytics, and contact details you provide. We do not sell personal data to third parties.",
  },
  {
    title: "How We Use Information",
    description:
      "Data helps us refine Suara.ai, develop new features, and support civic partners. Aggregated insights may be shared, but individual voices stay protected unless you explicitly consent.",
  },
  {
    title: "Your Choices",
    description:
      "You can request access, updates, or deletion of your information by reaching out to our privacy team. Opt-out links appear in every communication we send.",
  },
  {
    title: "Staying Informed",
    description:
      "We review these terms regularly. When material changes occur, we’ll post updates here and notify registered partners via email. Continued use means you accept the latest version.",
  },
];

const contactDetails = [
  {
    label: "Email",
    value: "legal@suara.ai",
    href: "mailto:legal@suara.ai",
  },
  {
    label: "Office",
    value: "Kuala Lumpur, Malaysia (appointments only)",
  },
];

function SectionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-[#d9e4ff] bg-white/90 p-6 text-left shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
      <h3 className="text-xl font-semibold text-[#0f172a]">{title}</h3>
      <p className="text-base leading-relaxed text-[#1f2937]">{description}</p>
    </article>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f4f7ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#eaf1ff] via-white to-[#d3e1ff] px-8 py-16 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-14">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-5">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Terms & Privacy
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Simple guidelines for using Suara responsibly.
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              These summaries explain the essentials. They are not a substitute for dedicated legal counsel, but they help us stay transparent and aligned with every voice we serve.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Terms of Service (Quick Overview)
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              We aim for clarity without heavy legal jargon. These points reflect the spirit of collaboration and trust at the heart of Suara.ai.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {termsSections.map((section) => (
              <SectionCard key={section.title} {...section} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Privacy Policy (Essentials)
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Voice data is sensitive. We handle it with care, keep processes transparent, and give you choices wherever possible.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {policySections.map((section) => (
              <SectionCard key={section.title} {...section} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto grid gap-10 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0f172a]">Need something clarified?</h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                Reach out and we will connect you with someone from our governance or legal team. We welcome feedback that helps us protect communities better.
              </p>
            </div>
            <div className="grid gap-4 rounded-2xl border border-[#d9e4ff] bg-[#f6f9ff] p-6">
              {contactDetails.map((item) => (
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

