const enablementItems = [
  {
    title: "MSMEs & Enterprises",
    description:
      "Multi-lingual customer support workflows, onboarding, appointment management, and full retention in local dialects.",
  },
  {
    title: "Government",
    description:
      "24/7 voice channels for statistics, permits, emergency services, saving RM300M+ each year via digital channels.",
  },
  {
    title: "Health",
    description:
      "Medical bots, patient documentation, telemedicine, and voice-certified triages for inclusive care delivery.",
  },
  {
    title: "Education & Research",
    description:
      "AI tutors, accessibility-first learning, and domain-ready corpora for Malaysian AI innovations.",
  },
  {
    title: "Accessibility",
    description:
      "Recogniser sign languages and Braille AI, augmenting for the disabled and eliminating bias.",
  },
  {
    title: "Community Services",
    description:
      "Regional hotlines, disaster response, and civic programs powered by dialect-aware voice assistants.",
  },
];

const missionItems = [
  {
    title: "AI Sovereignty",
    description:
      "Malaysia owns the technology, IP, and data—no dependency on foreign platforms for critical voice AI.",
  },
  {
    title: "Digital Inclusion",
    description:
      "Bringing rural Malaysia online by bridging dialect gaps and accelerating nationwide digital literacy.",
  },
  {
    title: "Economic Growth",
    description:
      "Unlocking the RM1.4T ASEAN voice economy with new industries, AI talent, and cross-border jobs.",
  },
];

const foundationItems = [
  {
    title: "Research Grants",
    description:
      "Support Malaysian and international researchers advancing voice AI, linguistics, and accessibility.",
  },
  {
    title: "Entrepreneur Onboarding",
    description:
      "Build a national builder network via training, voice bot factories, and healthcare, retail, education pilots.",
  },
  {
    title: "Open Innovation",
    description:
      "Host hackathons, developer challenges, and public APIs to grow Malaysia’s AI ecosystem collaboratively.",
  },
  {
    title: "Community Programs",
    description:
      "Deploy literacy, accessibility, and inclusion initiatives in partnership with civic and community leaders.",
  },
];

function DecorativeIcon() {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d4ed8]/10 via-[#60a5fa]/10 to-[#1d4ed8]/20 text-[#1d4ed8]">
      <svg
        className="h-6 w-6" 
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="6" width="16" height="12" rx="3" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] w-full bg-[#f1f5ff] text-[#0f172a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-28 pt-28 sm:px-6 lg:px-10">
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#e3edff] via-white to-[#c9ddff] px-6 py-20 text-center shadow-[0_32px_96px_rgba(15,23,42,0.12)] sm:px-12">
          <div
            className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#bfd3ff]/70 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute bottom-[-4rem] right-[-3rem] h-64 w-64 rounded-full bg-[#dbe8ff]/80 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-3xl flex-col gap-6">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
              About Suara
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl">
              Malaysia’s National Voice AI Platform
            </h1>
            <p className="text-lg leading-relaxed text-[#1f2937]">
              Suara is the nation-first sovereign voice AI built to understand Malaysia’s linguistic diversity, with 95%+ accuracy across seven major dialects.
            </p>
            <div className="flex justify-center">
              <a
                href="#foundation"
                className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(29,78,216,0.35)] transition hover:bg-[#153ea8]"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_64px_rgba(15,23,42,0.08)] sm:px-10" id="story">
          <div className="mx-auto max-w-4xl space-y-5 text-center sm:text-left">
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Suara is Malaysia’s commercial voice AI infrastructure.
            </h2>
            <p className="text-base leading-relaxed text-[#1f2937]">
              We are solving a critical national challenge: Malaysian speakers—especially in rural areas—are poorly understood by global AI models due to dialect diversity. Suara is building the first voice AI that truly understands Malaysia’s linguistic richness.
            </p>
            <p className="text-base leading-relaxed text-[#1f2937]">
              Every dialect, accent, and voice is recognized—empowering institutions to deliver services with empathy, speed, and cultural fluency across the country.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_72px_rgba(15,23,42,0.08)] sm:px-10" id="enablement">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e8f0ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
              What Suara Enables
            </span>
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Powering Malaysia’s voice-driven future for inclusivity, sovereignty, and opportunity.
            </h2>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enablementItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#dbe8ff] bg-[#f8fbff] p-6 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(15,23,42,0.08)]"
              >
                <DecorativeIcon />
                <h3 className="text-xl font-semibold text-[#102240]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#1f2f4a]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_72px_rgba(15,23,42,0.08)] sm:px-10" id="mission">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e8f0ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
              Our National Mission
            </span>
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">
              Aligning Malaysia’s voice AI with strategic pillars for MAKMUR economy plans.
            </h2>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missionItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#dbe8ff] bg-white p-6 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <DecorativeIcon />
                <h3 className="text-xl font-semibold text-[#102240]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#1f2f4a]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white px-6 py-12 shadow-[0_24px_72px_rgba(15,23,42,0.08)] sm:px-10" id="foundation">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-[#e8f0ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
              Suara Foundation
            </span>
            <h2 className="text-3xl font-semibold text-[#0f172a] sm:text-4xl">Our Future Plan</h2>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {foundationItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#dbe8ff] bg-[#f8fbff] p-6 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <DecorativeIcon />
                <h3 className="text-xl font-semibold text-[#102240]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#1f2f4a]">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] px-6 py-14 text-white shadow-[0_28px_80px_rgba(29,78,216,0.35)] sm:px-12">
          <div
            className="absolute inset-y-0 right-0 h-full w-1/2 rounded-l-full bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-20"
            aria-hidden
          />
          <div className="relative flex flex-col items-start gap-6 text-left sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-3xl font-semibold leading-tight">Join the Suara Movement</h2>
              <p className="text-base leading-relaxed text-white/90">
                Co-lead the future of Malaysian voice AI. Partner with us to build inclusive, sovereign, and trusted voice solutions for every community.
              </p>
            </div>
            <a
              href="mailto:hello@suara.ai"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1d4ed8] shadow-[0_12px_32px_rgba(255,255,255,0.25)] transition hover:bg-[#f1f5ff]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

