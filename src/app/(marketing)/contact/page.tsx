const contactChannels = [
  {
    title: "Talk to Sales",
    description:
      "Explore how Suara.ai can support your agency or organisation. We align pricing and pilots around measurable impact goals.",
    action: {
      label: "sales@suara.ai",
      href: "mailto:sales@suara.ai",
    },
  },
  {
    title: "Partner Support",
    description:
      "Already working with us? Reach the response team for deployment updates, troubleshooting, and training requests.",
    action: {
      label: "support@suara.ai",
      href: "mailto:support@suara.ai",
    },
  },
  {
    title: "Media & Community",
    description:
      "Connect with our communications crew for press, events, and community storytelling around Malaysian voice AI.",
    action: {
      label: "media@suara.ai",
      href: "mailto:media@suara.ai",
    },
  },
];

const officeSchedule = [
  {
    day: "Monday – Friday",
    info: "09:00 – 18:00 MYT",
  },
  {
    day: "Saturday",
    info: "Community clinics by appointment",
  },
  {
    day: "Public Holidays",
    info: "Monitoring team on-call for critical incidents",
  },
];

const engagementSteps = [
  {
    heading: "Share your goals",
    text: "Tell us about the voices you want to uplift, the services you operate, and the accessibility challenges you face.",
  },
  {
    heading: "Co-design a plan",
    text: "We map the right data sources, workflows, and language models before proposing pilots or long-term rollouts.",
  },
  {
    heading: "Activate & measure",
    text: "Launch inclusive dialogue channels with clear metrics, impact dashboards, and ongoing support.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How soon will the team reply?",
    answer:
      "We acknowledge new requests within one business day. Priority partners get routed directly to their assigned success manager.",
  },
  {
    question: "Where do meetings happen?",
    answer:
      "We host virtual sessions or meet at our Kuala Lumpur office. Field visits across Malaysian states are scheduled quarterly.",
  },
  {
    question: "Do you provide demos?",
    answer:
      "Yes. We offer guided demos featuring dialect coverage, sentiment layers, and operations dashboards tailored to your use case.",
  },
  {
    question: "Can communities reach you directly?",
    answer:
      "Community organisations can request translation support, hotline pilots, or open data collaborations via the forms above.",
  },
];

function ChannelCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: { label: string; href: string };
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 text-left shadow-[0_22px_60px_rgba(15,23,42,0.1)]">
      <h3 className="text-xl font-semibold text-[#102240]">{title}</h3>
      <p className="text-base leading-relaxed text-[#1f2f4a]">{description}</p>
      <a
        href={action.href}
        className="inline-flex max-w-max items-center rounded-full border border-[#2563eb]/20 bg-[#2563eb]/10 px-4 py-2 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#2563eb]/20"
      >
        {action.label}
      </a>
    </article>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f3f6ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#e6efff] via-white to-[#ceddff] px-8 py-20 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-14">
          <div className="relative mx-auto flex max-w-3xl flex-col gap-5">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              Contact Suara.ai
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Let’s build Malaysia’s voice future together.
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              Whether you want to launch a pilot, request platform support, or collaborate on community programmes, this is the best place to reach us.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_28px_72px_rgba(15,23,42,0.1)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Choose the channel that fits your request
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Direct email routes connect you with the right Suara.ai specialists. We’ll respond quickly and recommend next steps.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <ChannelCard key={channel.title} {...channel} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
                How engagement works
              </h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                We co-design programmes with you—balancing community trust, operational readiness, and measurable outcomes.
              </p>
            </div>
            <div className="grid gap-5">
              {engagementSteps.map((step) => (
                <article
                  key={step.heading}
                  className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-lg font-semibold text-[#102240]">{step.heading}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#1f2f4a]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <div className="mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Office hours & locations</h2>
              <p className="text-base leading-relaxed text-[#1f2937]">
                Visit us in Kuala Lumpur or schedule virtual sessions. We can also arrange regional visits with partners across Malaysia.
              </p>
              <div className="rounded-2xl border border-[#d7e3ff] bg-[#f6f9ff] p-6">
                <h3 className="text-lg font-semibold text-[#102240]">Suara.ai Headquarters</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1f2f4a]">
                  Level 23, Vision Exchange Tower<br />
                  Kuala Lumpur, Malaysia 50450
                </p>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl border border-[#d7e3ff] bg-white/95 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
              {officeSchedule.map((slot) => (
                <div key={slot.day} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
                    {slot.day}
                  </span>
                  <span className="text-base font-medium text-[#0f172a]">{slot.info}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-12">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Frequently asked questions</h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Still curious? These quick answers cover common requests before you speak with a Suara.ai teammate.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FAQ_ITEMS.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-[#d7e3ff] bg-[#f7faff] p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold text-[#102240]">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1f2f4a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

