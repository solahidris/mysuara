export function HomeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-28 w-full overflow-hidden bg-white px-4 pb-10 pt-14">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col">
          <div className="text-[clamp(24px,3vw,34px)] font-bold tracking-[-0.01em] text-[#040914]">
            <span>Suara</span>
            <span className="text-[#2563eb]">.ai</span>
          </div>
          <p className="mt-3 text-base leading-[1.6] text-[rgba(4,9,20,0.65)]">
            Empowering voices across Malaysia with cutting-edge AI technology. Making voice AI accessible for everyone.
          </p>
        </div>
        <nav className="grid justify-items-start gap-6" aria-label="Footer">
          <div className="w-full">
            <h4 className="mb-3 font-semibold text-[#0b1323]">Resources</h4>
            <ul className="grid gap-3 text-[rgba(4,9,20,0.70)]">
              {[
                { href: "#about", label: "About" },
                { href: "#features", label: "Features" },
                { href: "#how", label: "How It Works" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-[#0b1323]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <hr className="my-10 mx-auto max-w-7xl border-t border-[rgba(23,23,23,0.08)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-5 text-[rgba(4,9,20,0.75)] md:flex-row md:items-center md:justify-between">
        <div className="inline-flex items-center gap-2 text-sm">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(4,9,20,0.20)] text-[12px]">
            ©
          </span>
          <span>{currentYear} Suara.ai. All rights reserved</span>
        </div>
        <div className="inline-flex items-center gap-6 text-sm" role="navigation" aria-label="Legal">
          <a className="border-b border-[rgba(4,9,20,0.18)] pb-[2px] transition hover:border-[rgba(4,9,20,0.36)]" href="/terms">
            Terms of Service
          </a>
          <a className="border-b border-[rgba(4,9,20,0.18)] pb-[2px] transition hover:border-[rgba(4,9,20,0.36)]" href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-22px] z-0 select-none text-center text-[20rem] font-extrabold leading-[0.9] text-transparent"
        style={{
          background: "linear-gradient(180deg, #2563EB, rgba(37,99,235,0.12))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          opacity: 0.2,
        }}
        aria-hidden="true"
      >
        Suara.ai
      </div>
    </footer>
  );
}

