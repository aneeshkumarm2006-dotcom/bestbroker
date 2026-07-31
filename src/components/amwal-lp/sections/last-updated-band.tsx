"use client";

import { useEffect, useState } from "react";

import { LpContainer } from "@/components/amwal-lp/container";

/**
 * Builds "الجمعة 31 يوليو 2026" — weekday, day, month and year with no comma
 * and Latin digits (the plain ar-AE pattern would emit "الجمعة، ٣١ يوليو ٢٠٢٦").
 */
function formatArabicDate(date: Date): string {
  const parts = new Intl.DateTimeFormat("ar-AE-u-nu-latn", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(date);

  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return [pick("weekday"), pick("day"), pick("month"), pick("year")]
    .filter(Boolean)
    .join(" ");
}

/**
 * Full-bleed 40px freshness band under the header — amwal's layout, Mizan's
 * theme (divider rules, gold date). The date is genuinely "today", resolved in
 * an effect after mount to avoid a hydration mismatch across midnight/timezone
 * boundaries; the empty first paint keeps the band height stable.
 */
export default function LastUpdatedBand() {
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    setUpdatedAt(formatArabicDate(new Date()));
  }, []);

  return (
    <div className="border-b border-t border-divider bg-white/60">
      <LpContainer className="flex justify-center py-2 text-xs md:justify-start">
        <p className="text-sm leading-5">
          آخر تحديث{" "}
          <span className="font-bold text-brand" suppressHydrationWarning>
            {updatedAt}
          </span>
        </p>
      </LpContainer>
    </div>
  );
}
