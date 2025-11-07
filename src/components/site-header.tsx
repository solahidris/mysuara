'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/roadmap", label: "Roadmap" },
];

const ContactIcon = () => (
  <span
    className="inline-flex items-center justify-center"
    aria-hidden="true"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l1.47-1.47a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h2.75a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.25 1.01l-1.47 1.47Z"
        fill="currentColor"
      />
    </svg>
  </span>
);

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <Link
          className="inline-flex items-center gap-2.5 text-xl font-semibold text-neutral-900"
          href="/"
        >
          <span
            className="inline-flex items-center justify-center rounded-full bg-[#2563EBBF] p-1"
            aria-hidden="true"
          >
            <Image
              src="/assets/microphone-2.svg"
              alt=""
              width={28}
              height={28}
              priority
            />
          </span>
          <span className="inline-flex">
            <span className="text-[#040914]">Suara.</span>
            <span className="text-[#2563eb]">ai</span>
          </span>
        </Link>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-full border border-neutral-200/80 bg-white/85 text-neutral-900 shadow-lg transition will-change-transform md:hidden",
            "hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          )}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span
            className={cn(
              "h-[2px] w-[18px] rounded-full bg-neutral-900 transition-transform duration-200 ease-in-out",
              isOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-[2px] w-[18px] rounded-full bg-neutral-900 transition-opacity duration-200 ease-in-out",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-[2px] w-[18px] rounded-full bg-neutral-900 transition-transform duration-200 ease-in-out",
              isOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>

        <nav
          id="primary-navigation"
          className={cn(
            "absolute left-4 right-4 top-[calc(100%+12px)] grid gap-4 rounded-2xl border border-neutral-200 bg-white/95 p-5 text-base font-medium shadow-2xl transition-all duration-200 md:static md:flex md:translate-y-0 md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:text-sm md:shadow-none",
            isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "-translate-y-2 pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
          )}
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className="text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:text-neutral-900 focus-visible:outline-none"
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:hidden"
            href="/contact"
            onClick={closeMenu}
          >
            <ContactIcon />
            Contact Us
          </Link>
        </nav>

        <Link
          className="hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:inline-flex"
          href="/contact"
        >
          <ContactIcon />
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
