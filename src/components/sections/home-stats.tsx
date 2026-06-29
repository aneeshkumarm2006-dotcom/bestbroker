"use client";

import { useLanguage } from "@/lib/i18n";

const STATS = [
  { value: "1,000,000+", label: "مستخدم" },
  { value: "50+", label: "دولة" },
  { value: "500+", label: "مراجعة" },
];

export function HomeStats() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-divider">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="grid grid-cols-3 divide-x divide-x-reverse divide-divider">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center py-8 text-center">
              <span className="text-2xl font-extrabold text-brand lg:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-muted lg:text-base">
                {t(stat.label)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
