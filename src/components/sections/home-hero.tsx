"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

/**
 * home--hero — `main > section:nth-of-type(1)` on /gcc home.
 * RTL two-column: copy + country picker on the right, businessman
 * illustration on the left (desktop); stacked (illustration on top) on
 * mobile. The outer `lg:mt-16` page margin is intentionally NOT included
 * (crop is the section border-box).
 */

export interface HeroCountry {
  /** data-name in the source (label shown after selection). */
  name: string;
  /** data-link target route. */
  link: string;
  /** flag-icons country code (fib fi-<code>). */
  code: string;
}

// Extracted verbatim from reference/source/html/home.html (the .country-list).
const COUNTRIES: HeroCountry[] = [
  { name: "Bahrain GCC AR", link: "/gcc/best-broker-gcc-bh-ar", code: "bh" },
  { name: "Bahrain GCC AR", link: "/gcc/best-broker-gcc-bh-ar-oil", code: "bh" },
  { name: "GCC Tests", link: "/gcc/best-broker-gcc-uae-ar-tests", code: "kw" },
  { name: "Jordan GCC AR", link: "/gcc/best-broker-gcc-jo-ar", code: "jo" },
  { name: "Kuwait GCC AR", link: "/gcc/best-broker-gcc-kw-ar", code: "kw" },
  {
    name: "Kuwait Local Stocks GCC AR",
    link: "/gcc/best-broker-gcc-kw-ar-localstocks",
    code: "kw",
  },
  { name: "Kuwait Oil GCC AR", link: "/gcc/best-broker-gcc-kw-ar-oil", code: "kw" },
  { name: "Oman GCC AR", link: "/gcc/best-broker-gcc-om-ar", code: "om" },
  { name: "Oman Oil GCC AR", link: "/gcc/best-broker-gcc-om-ar-oil", code: "om" },
  { name: "Qatar GCC AR", link: "/gcc/best-broker-gcc-qa-ar", code: "qa" },
  { name: "Qatar Oil GCC AR", link: "/gcc/best-broker-gcc-qa-ar-oil", code: "qa" },
  { name: "Saudi Arabia GCC AR", link: "/gcc/best-broker-gcc-sa-ar", code: "sa" },
  {
    name: "Saudi Arabia Islamic GCC AR",
    link: "/gcc/best-broker-gcc-sa-ar-islamic",
    code: "sa",
  },
  {
    name: "Saudi Arabia Oil GCC AR",
    link: "/gcc/best-broker-gcc-sa-ar-oil",
    code: "sa",
  },
  {
    name: "United Arab Emirates GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar",
    code: "ae",
  },
  {
    name: "United Arab Emirates GCC AR Salik",
    link: "/gcc/best-broker-gcc-uae-ar-salik",
    code: "ae",
  },
  {
    name: "United Arab Emirates Local Stocks GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar-localstocks",
    code: "ae",
  },
  {
    name: "United Arab Emirates Oil GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar-oil",
    code: "ae",
  },
];

export interface HomeHeroProps {
  countries?: HeroCountry[];
}

export function HomeHero({ countries = COUNTRIES }: HomeHeroProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<HeroCountry | null>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Close the list when clicking outside (mirrors script.js window click).
  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  const go = () => {
    if (selected) window.location.href = selected.link;
  };

  return (
    <section>
      {/* Mirrors the live default Tailwind `.container` (100% with breakpoint
          max-widths), NOT the 90%/85% shared primitive — the hero columns rely
          on the full container width at mobile to size correctly. */}
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-24 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-0">
          {/* Copy + picker */}
          <div className="flex-1">
            <div className="w-full text-center lg:w-11/12 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-bold text-brand">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {t("مقارنة مستقلة ومحايدة")}
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight lg:text-5xl lg:leading-tight">
                {t("ابحث عن")} <br />
                <span className="text-gradient font-extrabold">{t("الوسيط الأفضل")}</span>{t(" لك!")}
              </h1>
              <p className="mt-6 text-muted lg:mt-8">
                {t(
                  "سوف نساعدك في العثور على الوسيط الأنسب لاحتياجاتك! افهم الاختلافات بين أفضل الوسطاء في كل بلد."
                )}
              </p>
              <p className="mt-6 font-bold lg:mt-8">
                {t("اختر البلد لتجد الوسيط الأفضل لك")}
              </p>

              <div className="mt-6 flex items-start gap-4 lg:mt-11 lg:gap-6">
                {/* Country picker (custom combobox) */}
                <div className="relative w-full">
                  <div
                    ref={boxRef}
                    className={cn(
                      "absolute left-0 top-0 z-10 w-full cursor-pointer rounded-control border border-divider bg-white px-6 py-4 shadow-control transition-colors hover:border-brand/40 lg:py-5",
                      open && "border-brand/40 ring-2 ring-brand/15"
                    )}
                  >
                    <div
                      className="flex items-center justify-between"
                      role="button"
                      tabIndex={0}
                      aria-haspopup="listbox"
                      aria-expanded={open}
                      onClick={() => setOpen((v) => !v)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpen((v) => !v);
                        }
                      }}
                    >
                      <p className={cn("text-right font-semibold", !selected && "text-muted")}>{selected ? selected.name : t("اختر البلد")}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={cn(
                          "origin-center transform transition-transform",
                          open && "rotate-180"
                        )}
                        width="13"
                        height="8"
                        viewBox="0 0 13 8"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12.4341 1.15674L6.65687 6.93395L1.00002 1.2771"
                          stroke="black"
                          strokeOpacity="0.5"
                        />
                      </svg>
                    </div>
                    <ul
                      role="listbox"
                      className={cn(
                        "no-scrollbar overflow-y-scroll border-t border-divider",
                        open
                          ? "mt-4 h-80 pb-4"
                          : "invisible h-0 opacity-0"
                      )}
                    >
                      {countries.map((c, i) => (
                        <li
                          key={`${c.link}-${i}`}
                          role="option"
                          aria-selected={selected?.link === c.link}
                          className="mt-4 flex cursor-pointer items-center gap-2 rounded-lg border-b border-divider px-2 py-3 text-left transition-colors hover:bg-brand/5 hover:text-brand"
                          onClick={() => {
                            setSelected(c);
                            setOpen(false);
                          }}
                        >
                          <div
                            className={cn(
                              "fib aspect-[4/3] w-10 rounded-md",
                              `fi-${c.code}`
                            )}
                          />
                          {c.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Go button */}
                <button
                  type="button"
                  onClick={go}
                  disabled={!selected}
                  aria-label={t("اذهب")}
                  className="flex flex-shrink-0 basis-2/12 cursor-pointer items-center justify-center rounded-control bg-brand-gradient py-5 shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:hover:translate-y-0 disabled:hover:shadow-control lg:py-6"
                >
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.77472 1.76004L2.93539 7.64317L8.77472 13.5263"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto w-7/12 flex-1 pt-24 lg:w-auto lg:pt-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl lg:h-96 lg:w-96"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/illu-1_a.svg"
              className="relative z-[1] lg:ml-auto lg:w-[400px]"
              alt="Find out with us the Best Broker for you!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
