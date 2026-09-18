"use client";

import { LpContainer } from "@/components/amwal-lp/container";
import { useLanguage } from "@/lib/i18n";
import { LANG_MARKET } from "@/lib/lang";

/**
 * The market's flag in the reference's 20×15 box. Both editions render the
 * SAME element — a span with the flag as a stretched background — so the two
 * documents keep an identical element tree (scripts/check-mirror.mjs) even
 * though the flag itself differs: `/` flies the UAE, `/en` South Africa.
 * `background-size: 100% 100%` fills the box the way the reference's
 * `preserveAspectRatio="none"` did.
 */
function MarketFlag({ src, label }: { src: string; label: string }) {
  return (
    <span
      role="img"
      aria-label={label}
      className="block h-[15px] w-5 shrink-0 rounded-[2px] bg-center bg-no-repeat [background-size:100%_100%]"
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
}

/**
 * Full-bleed country strip under the title — amwal's layout (flag + line,
 * centered below `md`, start-aligned from `md` up), Mizan's theme: white band
 * with warm divider rules instead of the reference's flat grey.
 *
 * Spacing note: the outer gaps (24px above at md+, 16px below) live in the
 * page assembly, not here.
 */
export default function CountryBand() {
  const { t, lang } = useLanguage();
  const flag = LANG_MARKET[lang].flag;
  const country = t("الإمارات العربية المتحدة");

  return (
    <div className="w-full border-y border-divider bg-white">
      <LpContainer className="flex items-center justify-center gap-2 py-2 md:justify-start">
        <MarketFlag src={flag} label={country} />
        <p className="text-center text-sm font-semibold text-ink">
          {t("افضل الوسطاء في الامارات")}
        </p>
        <MarketFlag src={flag} label={country} />
      </LpContainer>
    </div>
  );
}
