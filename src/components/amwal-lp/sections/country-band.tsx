import { LpContainer } from "@/components/amwal-lp/container";

/**
 * The reference ships a 4:3 raster (`flagcdn.com/24x18/ae.png`) drawn into a
 * 20×15 box, i.e. the 2:1 UAE flag squashed vertically. The project's own
 * `/assets/img/flags/ae.svg` has a 12×6 viewBox, so an `<img>` would letterbox
 * it to 20×10 inside that box; `preserveAspectRatio="none"` is what forces the
 * same fill the reference has, and it can only be set on an inline SVG. The
 * geometry below is a verbatim copy of the asset's four paths.
 */
function UaeFlag() {
  return (
    <svg
      viewBox="0 0 12 6"
      preserveAspectRatio="none"
      role="img"
      aria-label="الإمارات العربية المتحدة"
      className="h-[15px] w-5 shrink-0"
    >
      <path fill="#00843d" d="M0 0h12v6H0z" />
      <path fill="#fff" d="M0 2h12v4H0z" />
      <path d="M0 4h12v2H0z" />
      <path fill="#c8102e" d="M0 0h3v6H0z" />
    </svg>
  );
}

/**
 * Full-bleed `#EFEFEF` band under the page title: a 20×15 UAE flag on each side
 * of the country line, centred below `md` and start-aligned (right in RTL) from
 * `md` up. `py-2` around the 24px line box is what makes the band exactly 40px.
 *
 * Spacing note: the reference's inner row also carries `md:mt-6 mb-4`. Those
 * margins collapse out of the band (they are the 24px/16px gaps to the title
 * above and the broker list below), so they belong to page assembly, not here —
 * keeping them would make the isolated preview 80px tall instead of 40px.
 */
export default function CountryBand() {
  return (
    <div className="w-full bg-[#EFEFEF]">
      <LpContainer className="flex items-center justify-center gap-2 py-2 md:justify-start">
        <UaeFlag />
        {/* The reference stack is `"Open Sans", sans-serif`, and Open Sans has
            no Arabic subset, so this line renders in the OS generic sans-serif
            (Segoe UI here) at 178.8px. The shell's `next/font` stack inserts an
            Arial-based adjusted fallback ahead of `sans-serif`, which swallows
            the Arabic and shrinks the line to 148px — pinning the generic
            family back restores the reference metrics. Remove this once
            `LpShell` opts out with `adjustFontFallback: false`. */}
        <p className="text-center [font-family:sans-serif]">
          افضل الوسطاء في الامارات
        </p>
        <UaeFlag />
      </LpContainer>
    </div>
  );
}
