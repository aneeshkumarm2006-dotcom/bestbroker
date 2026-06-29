/**
 * nations--country-grid — "جميع البلدان" section from /gcc/nations.
 *
 * Source markup (reference/source/html/nations.html, `main > section:nth-of-type(1)`):
 *   <section class="lg:mt-16">           <- outer top margin EXCLUDED (assembly adds it)
 *     <div class="container mx-auto px-6 lg:px-24 lg:pl-0">
 *       <h1 class="mb-6 lg:mb-14 text-3xl lg:text-5xl font-medium pt-24 lg:pt-0">...</h1>
 *       <div class="flex flex-col lg:flex-row gap-0 lg:gap-14">
 *         <div class="flex-1"> ...links... </div>   (x4 — uneven: 5,5,5,3)
 *
 * Each link: flag chip (flag-icons `fib fi-<cc>`, w-12 / 4:3 / rounded-md) stacked
 * above the country name (flex-col, gap-2 = 8px, py-5 = 20px). RTL: columns flow
 * right-to-left, flag + text are start-aligned (= right).
 */

"use client";

import { useLanguage } from "@/lib/i18n";

type Country = {
  /** Display name, copied verbatim from source. */
  name: string;
  /** flag-icons country code (ae, sa, qa, kw, om, bh, jo). */
  cc: string;
  /** Destination route. */
  href: string;
};

// The four source columns, preserved verbatim (incl. the uneven 5/5/5/3 split and
// the literal flag codes — e.g. "GCC Tests" uses fi-kw in the source).
const COUNTRY_COLUMNS: Country[][] = [
  [
    { name: "Bahrain GCC AR", cc: "bh", href: "/gcc/best-broker-gcc-bh-ar" },
    { name: "Bahrain GCC AR", cc: "bh", href: "/gcc/best-broker-gcc-bh-ar-oil" },
    { name: "GCC Tests", cc: "kw", href: "/gcc/best-broker-gcc-uae-ar-tests" },
    { name: "Jordan GCC AR", cc: "jo", href: "/gcc/best-broker-gcc-jo-ar" },
    { name: "Kuwait GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar" },
  ],
  [
    { name: "Kuwait Local Stocks GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar-localstocks" },
    { name: "Kuwait Oil GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar-oil" },
    { name: "Oman GCC AR", cc: "om", href: "/gcc/best-broker-gcc-om-ar" },
    { name: "Oman Oil GCC AR", cc: "om", href: "/gcc/best-broker-gcc-om-ar-oil" },
    { name: "Qatar GCC AR", cc: "qa", href: "/gcc/best-broker-gcc-qa-ar" },
  ],
  [
    { name: "Qatar Oil GCC AR", cc: "qa", href: "/gcc/best-broker-gcc-qa-ar-oil" },
    { name: "Saudi Arabia GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar" },
    { name: "Saudi Arabia Islamic GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar-islamic" },
    { name: "Saudi Arabia Oil GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar-oil" },
    { name: "United Arab Emirates GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar" },
  ],
  [
    { name: "United Arab Emirates GCC AR Salik", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-salik" },
    { name: "United Arab Emirates Local Stocks GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-localstocks" },
    { name: "United Arab Emirates Oil GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-oil" },
  ],
];

export function NationsGrid({
  columns = COUNTRY_COLUMNS,
}: {
  columns?: Country[][];
}) {
  const { t } = useLanguage();
  return (
    <section className="w-full">
      <div className="container mx-auto px-6 lg:px-24 lg:pl-0">
        <h1 className="pt-24 text-3xl font-extrabold text-ink lg:pt-0 lg:text-5xl">
          {t("جميع ")}<span className="text-gradient">{t("البلدان")}</span>
        </h1>
        <div className="mb-6 mt-4 h-1.5 w-20 rounded-full bg-brand-gradient lg:mb-14" />
        <div className="flex flex-col gap-0 lg:flex-row lg:gap-6">
          {columns.map((column, i) => (
            <div key={i} className="flex-1">
              {column.map((country) => (
                <a
                  key={country.href}
                  href={country.href}
                  className="group my-2 flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-divider hover:bg-white hover:shadow-card"
                >
                  <span
                    className={`fib fi-${country.cc} aspect-[4/3] w-12 shrink-0 rounded-md ring-1 ring-divider transition-transform group-hover:scale-105`}
                  />
                  <span className="font-semibold text-ink transition-colors group-hover:text-brand">
                    {country.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
