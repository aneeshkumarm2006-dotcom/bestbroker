import { LpContainer } from "@/components/amwal-lp/container";

/**
 * Brand bar under the ticker tape — 76px tall inside the stepped container
 * (`pt-4 px-8 pb-2`, plus `pb-2` on the row).
 *
 * RTL: the logo is the first DOM node, so it lands on the right and the
 * advertiser disclosure on the left. Below `md` the disclosure is dropped and
 * the logo centres, exactly as in the reference.
 *
 * Rebrand: Mizan's wordmark replaces amwal's `logo-black.svg`. Amwal's rendered
 * slot is 140×44.4 and Mizan's mark is a squatter 176×40, so the box keeps the
 * reference's dimensions and `object-contain` centres the artwork inside it —
 * otherwise the whole page below would ride up ~13px.
 */
export default function HeaderBar() {
  return (
    <LpContainer className="pt-4 pb-2 text-xs leading-4 text-[#212427]">
      <div className="flex items-center justify-center pb-2 md:justify-between">
        <a href="/" aria-label="ميزان">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/gcc/logo.svg"
            alt="ميزان"
            width={140}
            height={44}
            className="h-[44.4px] w-[140px] object-contain"
          />
        </a>
        {/*
          The reference computes `"Open Sans", sans-serif` here, and since Open
          Sans ships no Arabic subset the glyphs come from the generic
          `sans-serif` (365px wide for this string at 12px). `next/font`'s
          Arial-metric fallback in LpShell intercepts them first and renders
          only 288px, so the family is pinned to `sans-serif` for this
          Arabic-only run. Can be dropped once the shell opts out of the
          adjusted fallback (`adjustFontFallback: false`).
        */}
        <p className="hidden text-start font-[sans-serif] md:block">
          المعلومات الاستثمارية المقدمة في هذه الصفحة هي لأغراض تعليمية فقط.
        </p>
      </div>
    </LpContainer>
  );
}
