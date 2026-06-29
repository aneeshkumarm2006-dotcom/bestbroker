"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

/**
 * Country links shown inside the "قارن بين الوسطاء" dropdown (hidden until
 * hover on desktop / tap on mobile). Extracted verbatim from home.html.
 */
const COMPARE_GROUPS: { code: string; label: string; href: string }[][] = [
  [
    { code: "bh", label: "Bahrain GCC AR", href: "/gcc/best-broker-gcc-bh-ar" },
    { code: "bh", label: "Bahrain GCC AR", href: "/gcc/best-broker-gcc-bh-ar-oil" },
    { code: "kw", label: "GCC Tests", href: "/gcc/best-broker-gcc-uae-ar-tests" },
    { code: "jo", label: "Jordan GCC AR", href: "/gcc/best-broker-gcc-jo-ar" },
  ],
  [
    { code: "kw", label: "Kuwait GCC AR", href: "/gcc/best-broker-gcc-kw-ar" },
    { code: "kw", label: "Kuwait Local Stocks GCC AR", href: "/gcc/best-broker-gcc-kw-ar-localstocks" },
    { code: "kw", label: "Kuwait Oil GCC AR", href: "/gcc/best-broker-gcc-kw-ar-oil" },
    { code: "om", label: "Oman GCC AR", href: "/gcc/best-broker-gcc-om-ar" },
  ],
];

/** Full site header — black bar, logo on the right (RTL), white nav links. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      id="top"
      className="sticky top-0 z-50 flex w-full flex-col border-b border-white/10 bg-ink/90 shadow-[0_8px_30px_-12px_rgba(11,20,55,0.6)] backdrop-blur-md"
    >
      <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <nav className="flex w-full flex-col items-center justify-between px-6 sm:flex-row lg:px-24">
          {/* Logo + hamburger row */}
          <div className="flex w-full flex-row flex-nowrap items-center justify-between self-start sm:w-auto sm:flex-none sm:self-center">
            <a href="/gcc" className="py-3 no-underline lg:py-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/gcc/logo.svg"
                alt="Best broker ai"
                width={180}
                height={31}
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
                className="absolute h-0.5 w-6 rounded-full bg-accent transition-transform"
                style={{
                  transform: menuOpen
                    ? "rotate(45deg) translateY(0px)"
                    : "translateY(-5px)",
                }}
              />
              <span
                className="absolute h-0.5 w-6 rounded-full bg-accent transition-opacity"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: "translateY(11px)",
                }}
              />
              <span
                className="absolute h-0.5 w-6 rounded-full bg-accent transition-transform"
                style={{
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(0px)"
                    : "translateY(3px)",
                }}
              />
            </button>
          </div>

          {/* Nav links */}
          <div
            className={cn(
              "h-full w-full flex-col self-end pb-4 pt-2 sm:flex sm:w-auto sm:flex-row sm:self-center sm:py-0 sm:pb-0 lg:items-center lg:pt-0",
              menuOpen ? "flex" : "hidden"
            )}
          >
            {/* Compare-brokers dropdown */}
            <div className="menu-dropdown group relative w-full border-b border-white/10 py-5 lg:border-none lg:px-12">
              <div
                className="flex items-center justify-between lg:inline-block"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                <p className="cursor-default whitespace-nowrap text-lg font-bold text-white transition-colors lg:hover:text-accent">
                  {t("قارن بين الوسطاء")}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "block origin-center transform lg:hidden",
                    dropdownOpen && "rotate-180"
                  )}
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                >
                  <path
                    d="M12.4341 1.22279L6.65687 7.00001L1.00002 1.34315"
                    stroke="#67E8F9"
                  />
                </svg>
              </div>
              <div
                className={cn(
                  "top-[70px] -left-32 flex-col gap-2.5 rounded-2xl border border-divider bg-white py-4 transition delay-100 lg:absolute lg:mt-3 lg:flex-row lg:gap-12 lg:px-10 lg:py-8 lg:shadow-[0px_24px_50px_-20px_rgba(20,28,78,0.45)] lg:group-hover:flex",
                  dropdownOpen ? "flex" : "hidden"
                )}
              >
                {COMPARE_GROUPS.map((group, gi) => (
                  <div key={gi} className="w-full lg:w-52">
                    {group.map((c, ci) => (
                      <a
                        key={ci}
                        href={c.href}
                        className="group/link mb-3 flex flex-col items-start gap-3 rounded-xl p-2 text-ink transition-colors hover:bg-brand/5"
                      >
                        <div
                          className={cn(
                            "fib",
                            `fi-${c.code}`,
                            "h-8 w-11 flex-shrink-0 rounded-lg ring-1 ring-divider"
                          )}
                        />
                        <span className="leading-4 transition-colors group-hover/link:text-brand">
                          {c.label}
                        </span>
                      </a>
                    ))}
                    {gi === 1 && (
                      <a
                        href="/gcc/nations"
                        className="mt-5 flex font-extrabold text-brand underline decoration-2 underline-offset-4 hover:text-violet"
                      >
                        {t("المزيد من البلدان")}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              className="w-full py-2 text-lg font-bold text-white no-underline transition-colors lg:my-auto lg:ml-2 lg:rounded-cta lg:bg-brand-gradient lg:px-6 lg:py-2.5 lg:text-base lg:shadow-control lg:hover:-translate-y-0.5 lg:hover:shadow-glow"
              href="/gcc/partner"
            >
              {t("انضم الينا كشريك")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/**
 * Minimal logo-only header used on broker-detail pages (`.logo__bar`):
 * centered logo on a black bar, padding 25px (15px on mobile).
 */
export function BrokerHeader() {
  return (
    <header className="w-full">
      <div className="border-b border-white/10 bg-navy-gradient py-[15px] md:py-[25px]">
        <div className="mx-auto flex w-[38%] max-w-[1440px] items-center justify-center">
          <a href="/gcc">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/logo.svg"
              alt="BestBroker"
              width={180}
              height={31}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
