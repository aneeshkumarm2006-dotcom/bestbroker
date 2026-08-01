"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

// Single-page site: every nav target is an anchor on this page.
const NAV_LINKS = [
  { href: "#brokers", label: "التصنيف" },
  { href: "#about", label: "من نحن" },
  { href: "#disclaimer", label: "تحذير المخاطر" },
];

/** Full site header — cream background, gold accents, dark navy nav links. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <header
      id="top"
      className="sticky top-0 z-50 flex w-full flex-col border-b border-divider bg-surface/95 backdrop-blur-sm"
    >
      <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <nav className="flex w-full flex-col items-center justify-between px-6 sm:flex-row lg:px-12">
          {/* Logo + hamburger row */}
          <div className="flex w-full flex-row flex-nowrap items-center justify-between self-start sm:w-auto sm:flex-none sm:self-center">
            <a href="#top" className="py-3 no-underline lg:py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lang === "en" ? "/assets/img/gcc/logo-en.svg" : "/assets/img/gcc/logo.svg"}
                alt={lang === "en" ? "Mizan" : "ميزان"}
                width={150}
                height={34}
              />
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="relative block h-12 w-12 cursor-pointer focus:outline-none sm:hidden"
            >
              <span
                className="absolute h-0.5 w-6 rounded-full bg-ink transition-transform"
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translateY(0px)"
                    : "translateY(-5px)",
                }}
              />
              <span
                className="absolute h-0.5 w-6 rounded-full bg-ink transition-opacity"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: "translateY(11px)",
                }}
              />
              <span
                className="absolute h-0.5 w-6 rounded-full bg-ink transition-transform"
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(0px)"
                    : "translateY(3px)",
                }}
              />
            </button>
          </div>

          {/* Nav links — in-page anchors only */}
          <div
            className={cn(
              "h-full w-full flex-col self-end pb-4 pt-2 sm:flex sm:w-auto sm:flex-row sm:self-center sm:py-0 sm:pb-0 lg:items-center lg:pt-0",
              menuOpen ? "flex" : "hidden"
            )}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full whitespace-nowrap border-b border-divider py-4 text-base font-semibold text-muted no-underline transition-colors hover:text-ink lg:border-none lg:px-6 lg:py-0 lg:hover:text-brand"
              >
                {t(link.label)}
              </a>
            ))}

            {/* Primary CTA — jumps to the ranked broker list */}
            <a
              className="mt-3 block whitespace-nowrap rounded-cta border-2 border-ink px-5 py-2 text-center text-sm font-bold text-ink no-underline transition-all hover:bg-ink hover:text-surface sm:mt-0 sm:w-auto lg:mr-4 lg:mt-0"
              href="#brokers"
              onClick={() => setMenuOpen(false)}
            >
              {t("قارن الآن")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
