import { LpContainer } from "@/components/amwal-lp/container";

/**
 * Page title block — reference markup:
 *   <div class="container mx-auto px-8"><div class="pt-[1vh]">
 *     <h1 class="text-[26px] md:text-[40px] font-bold mb-4 pt-[2vh]
 *                text-center md:text-start leading-7.5 md:leading-normal">
 *
 * The mobile step-down lives in a `max-width: 768px` block on the target, so 768
 * itself renders at the desktop 40/60 — expressed here with `max-md:` overrides
 * on top of desktop base values (`md:` min-width would invert the boundary).
 *
 * `pt-[2vh]` is viewport-height dependent (18px at the 900px-tall QA viewport);
 * kept verbatim so the block tracks the reference on any viewport.
 *
 * The CMS emits a trailing empty paragraph inside the h1 (`<p><br></p>`) which
 * contributes one full line box — 60px @≥768 / 30px below. Reproduced as a
 * decorative, aria-hidden block so the heading stays valid, accessible markup
 * (an h1 may not contain <p>) while keeping the measured 138px box height.
 */
export default function PageTitle() {
  return (
    <section>
      <LpContainer>
        <div className="pt-[1vh]">
          <h1 className="mb-4 pt-[2vh] text-start text-[40px] font-bold leading-normal text-[#212427] max-md:text-center max-md:text-[26px] max-md:leading-[30px]">
            اختر الوسيط الافضل في الامارات وابدأ التداول في دقائق!
            <span aria-hidden="true" className="block">
              &nbsp;
            </span>
          </h1>
        </div>
      </LpContainer>
    </section>
  );
}
