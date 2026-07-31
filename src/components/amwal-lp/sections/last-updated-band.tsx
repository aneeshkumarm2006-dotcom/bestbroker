"use client";

import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";

import { LpContainer } from "@/components/amwal-lp/container";

// The reference body stack is literally `"Open Sans", sans-serif`, and because
// Open Sans ships no Arabic subset the Arabic runs fall through to the OS
// sans-serif. `adjustFontFallback` is disabled on purpose: next/font's default
// metric-adjusted Arial fallback *does* carry Arabic glyphs, so it would swallow
// the Arabic before `sans-serif` is reached and render it ~11% too small.
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const fontStack = `${openSans.style.fontFamily}, sans-serif`;

/**
 * Builds "الجمعة 31 يوليو 2026" — the reference prints weekday, day, month and
 * year with no comma and Latin digits, so the parts are picked apart and
 * re-joined rather than using the locale's default pattern (ar-AE would emit
 * "الجمعة، ٣١ يوليو ٢٠٢٦").
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
 * Full-bleed 40px band under the header: 2px `#EFEFEF` rules top and bottom,
 * container-bound 14/20 copy that is centred on mobile and start-aligned (right
 * in RTL) from `md` up.
 *
 * The date is genuinely "today", so it is resolved in an effect after mount —
 * rendering it during SSR would risk a hydration mismatch across a midnight or
 * timezone boundary. The empty first paint keeps the band's height stable.
 */
export default function LastUpdatedBand() {
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    setUpdatedAt(formatArabicDate(new Date()));
  }, []);

  return (
    <div
      className="border-t-2 border-b-2 border-[#EFEFEF]"
      style={{ fontFamily: fontStack }}
    >
      <LpContainer className="flex justify-center py-2 text-xs md:justify-start">
        <p className="text-sm leading-5">
          آخر تحديث{" "}
          <span className="font-bold" suppressHydrationWarning>
            {updatedAt}
          </span>
        </p>
      </LpContainer>
    </div>
  );
}
