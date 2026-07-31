import { LpContainer } from "@/components/amwal-lp/container";

/** UAE flag drawn inline so it can fill the 20×15 box like the reference. */
function UaeFlag() {
  return (
    <svg
      viewBox="0 0 12 6"
      preserveAspectRatio="none"
      role="img"
      aria-label="الإمارات العربية المتحدة"
      className="h-[15px] w-5 shrink-0 rounded-[2px]"
    >
      <path fill="#00843d" d="M0 0h12v6H0z" />
      <path fill="#fff" d="M0 2h12v4H0z" />
      <path d="M0 4h12v2H0z" />
      <path fill="#c8102e" d="M0 0h3v6H0z" />
    </svg>
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
  return (
    <div className="w-full border-y border-divider bg-white">
      <LpContainer className="flex items-center justify-center gap-2 py-2 md:justify-start">
        <UaeFlag />
        <p className="text-center text-sm font-semibold text-ink">
          افضل الوسطاء في الامارات
        </p>
        <UaeFlag />
      </LpContainer>
    </div>
  );
}
