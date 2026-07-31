"use client";

import { useEffect, useState } from "react";

import { LpContainer } from "@/components/amwal-lp/container";
import { useLanguage, type Lang } from "@/lib/i18n";

/**
 * Builds "الجمعة 31 يوليو 2026" / "Friday 31 July 2026" — weekday, day, month
 * and year with no comma and Latin digits in both languages.
 */
function formatDate(date: Date, lang: Lang): string {
  const parts = new Intl.DateTimeFormat(
    lang === "en" ? "en-GB" : "ar-AE-u-nu-latn",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).formatToParts(date);

  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return [pick("weekday"), pick("day"), pick("month"), pick("year")]
    .filter(Boolean)
    .join(" ");
}

/**
 * Full-bleed 40px freshness band under the navbar: today's date (gold) on the
 * start side, the compliance line opposite on desktop. The date is genuinely
 * "today", resolved in an effect after mount to avoid a hydration mismatch
 * across midnight/timezone boundaries.
 */
export default function LastUpdatedBand() {
  const { t, lang } = useLanguage();
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    setUpdatedAt(formatDate(new Date(), lang));
  }, [lang]);

  return (
    <div className="border-b border-t border-divider bg-white/60">
      <LpContainer className="flex items-center justify-center py-2 text-xs md:justify-between">
        <p className="text-sm leading-5">
          {t("آخر تحديث")}{" "}
          <span className="font-bold text-brand" suppressHydrationWarning>
            {updatedAt}
          </span>
        </p>
        {/* Compliance line inherited from the reference's header bar. */}
        <p className="hidden text-muted md:block">
          {t("المعلومات الاستثمارية المقدمة في هذه الصفحة هي لأغراض تعليمية فقط.")}
        </p>
      </LpContainer>
    </div>
  );
}
