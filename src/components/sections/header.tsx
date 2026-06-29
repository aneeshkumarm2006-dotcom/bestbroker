"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

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

/** Full site header — cream background, gold accents, dark navy nav links. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      id="top"
      className="sticky top-0 z-50 flex w-full flex-col border-b border-divider bg-surface/95 backdrop-blur-sm"
    >
      <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <nav className="flex w-full flex-col items-center justify-between px-6 sm:flex-row lg:px-12">
          {/* Logo + hamburger row */}
          <div className="flex w-full flex-row flex-nowrap items-center justify-between self-start sm:w-auto sm:flex-none sm:self-center">
            <a href="/gcc" className="py-3 no-underline lg:py-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/gcc/logo.svg"
                alt="ميزان"
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

          {/* Nav links */}
          <div
            className={cn(
              "h-full w-full flex-col self-end pb-4 pt-2 sm:flex sm:w-auto sm:flex-row sm:self-center sm:py-0 sm:pb-0 lg:items-center lg:pt-0",
              menuOpen ? "flex" : "hidden"
            )}
          >
            {/* Compare-brokers dropdown */}
            <div className="menu-dropdown group relative w-full border-b border-divider py-4 lg:border-none lg:px-6">
              <div
                className="flex items-center justify-between lg:inline-block"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                <p className="cursor-default whitespace-nowrap text-base font-semibold text-muted transition-colors hover:text-ink lg:hover:text-brand lg:text-sm">
                  {t("قارن بين الوسطاء")}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "block origin-center transform transition-transform lg:hidden",
                    dropdownOpen && "rotate-180"
                  )}
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                >
                  <path
                    d="M12.4341 1.22279L6.65687 7.00001L1.00002 1.34315"
                    stroke="#6B6357"
                  />
                </svg>
              </div>
              <div
                className={cn(
                  "top-[60px] -left-32 flex-col gap-2.5 rounded-2xl border border-divider bg-surface py-4 transition delay-100 lg:absolute lg:mt-3 lg:flex-row lg:gap-12 lg:px-10 lg:py-8 lg:shadow-card lg:group-hover:flex",
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
                        className="mt-5 flex font-extrabold text-brand underline decoration-2 underline-offset-4 hover:text-brand-dark"
                      >
                        {t("المزيد من البلدان")}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Static nav links */}
            <a
              href="/gcc#about"
              className="w-full whitespace-nowrap border-b border-divider py-4 text-base font-semibold text-muted no-underline transition-colors hover:text-ink lg:border-none lg:px-6 lg:py-0 lg:hover:text-brand"
            >
              {t("من نحن")}
            </a>
            <a
              href="/gcc#disclaimer"
              className="w-full whitespace-nowrap border-b border-divider py-4 text-base font-semibold text-muted no-underline transition-colors hover:text-ink lg:border-none lg:px-6 lg:py-0 lg:hover:text-brand"
            >
              {t("تحذير المخاطر")}
            </a>

            {/* Partner CTA — outlined on desktop */}
            <a
              className="mt-3 block whitespace-nowrap rounded-cta border-2 border-ink px-5 py-2 text-center text-sm font-bold text-ink no-underline transition-all hover:bg-ink hover:text-surface sm:mt-0 sm:w-auto lg:mr-4 lg:mt-0"
              href="/gcc/partner"
            >
              {t("انضم إلينا كشريك")}
            </a>

            {/* Language toggle */}
            <div className="mt-3 sm:mt-0 lg:mt-0">
              <LanguageToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

/**
 * Minimal logo-only header used on broker-detail pages.
 */
export function BrokerHeader() {
  return (
    <header className="w-full">
      <div className="border-b border-divider bg-surface py-[15px] md:py-[20px]">
        <div className="mx-auto flex w-[38%] max-w-[1440px] items-center justify-center">
          <a href="/gcc">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/logo.svg"
              alt="ميزان"
              width={150}
              height={34}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
