import { lpBrokers } from "@/components/amwal-lp/brokers";
import { LpContainer } from "@/components/amwal-lp/container";
import { GreenCta } from "@/components/amwal-lp/green-cta";

/**
 * Free-text article below the broker list. The reference is Quill CMS output
 * (`div.free-content` + `ql-align-right` classes) styled by `brokers.css`:
 *
 *   div.free-content *                     { margin: 0; padding: revert }
 *   div.free-content h2                    { font-size: 24px }   // 36px via inherited 1.5
 *   div.free-content p, ol, ul, li         { font-size: 18px; line-height: 32px }
 *   div.free-content div.free_content_cta  { width: 100%; padding: 30px 30% }
 *   @media (max-width: 768px) { h2 18px · p/li 14/26 · cta padding 30px · .free-content pt 32px }
 *
 * Because every margin is zeroed, ALL vertical rhythm in the reference comes
 * from the CMS's empty `<p><br></p>` filler nodes — one blank line box (32px,
 * 26px below 768) between blocks, plus a leading empty `<h2>` (36px / 27px).
 * Those are reproduced here as real margins/one decorative spacer so the markup
 * stays clean and semantic while the measured box height matches exactly
 * (1216 content width → 1280×1118 @1440, 768×1068 @768, 375×1562 @375).
 *
 * Breakpoint note: the reference's mobile block is `max-width: 768px`
 * (INCLUSIVE), while Tailwind's `max-md:` is 767.98px. At exactly 768 the
 * reference already shows the small article type, so the overrides below use
 * the literal `[@media(max-width:768px)]` at-rule rather than `max-md:`.
 */

/** One blank CMS line box between blocks: 32px @≥768, 26px below. */
const GAP = "mt-8 [@media(max-width:768px)]:mt-[26px]";

/** 24/36 700 → 18/27 700 at ≤768. */
const H2 =
  "text-[24px] font-bold leading-9 [@media(max-width:768px)]:text-[18px] [@media(max-width:768px)]:leading-[27px]";

/** 18/32 400 → 14/26 400 at ≤768. */
const BODY =
  "text-[18px] leading-8 [@media(max-width:768px)]:text-[14px] [@media(max-width:768px)]:leading-[26px]";

/**
 * Most runs are wrapped by the CMS in `<span style="color: rgb(0,0,0)">`, so they
 * paint PURE black — only the two blocks the editor typed unstyled ("اختيار وسيط
 * التداول" + its paragraph) inherit the page's `#212427`. Verified against the
 * reference pixels; keeping both is what makes the diff land.
 */
const CMS_BLACK = "text-[#000000]";

/**
 * Decimal `<ol>`, UA `padding-inline-start: 40px` restored by `padding: revert`.
 * The colour span sits *inside* each `<li>` in the source, so the `::marker`
 * digits keep the inherited `#212427` while the text goes black.
 */
const LIST = `list-decimal ps-10 ${BODY} ${CMS_BLACK} marker:text-[#212427]`;

const CTA_LABEL = `ابدا التداول مع ${lpBrokers[0].name}`;
const CTA_HREF = lpBrokers[0].href;

const ASSET_CLASSES = [
  "المعادن الثمينة: الذهب والفضة وغيرها من السلع القيمة.",
  "الموارد الطاقية: النفط والغاز الطبيعي وغيرها من السلع.",
  "الأسهم: حصص في شركات عالمية رائدة مثل ابل امازون سامسونج.",
];

const BENEFITS = [
  "الوصول إلى الأسواق العالمية: يمكنك التداول في مناطق مثل الولايات المتحدة وأوروبا وآسيا والخليج من خلال منصة واحدة.",
  "تنوع الأسواق: من المعادن والسلع إلى أسهم الشركات الكبرى، يمكنك اختيار المجالات التي تناسب أهدافك.",
  "المرونة والتحكم: التداول في أي وقت، مع القدرة على ضبط حجم المخاطرة لكل صفقة وفقًا لأهدافك.",
  "أدوات تحليل متقدمة: استخدام الرسوم البيانية الحية والمؤشرات التقنية وبيانات السوق الفورية لاتخاذ قرارات مستنيرة.",
  "فرص التعلم: توفر العديد من المنصات موارد تعليمية وحسابات تجريبية لممارسة الاستراتيجيات دون مخاطر.",
];

/**
 * In-article CTA: full-width wrapper with `padding: 30px 30%` (30px flat below
 * 768) around the flat `#03A64A` button — 18/27 700 uppercase, 16/22 padding,
 * 15px gap, trailing chevron rotated 180° so it points inline-end in RTL.
 */
function ArticleCta() {
  return (
    <div className={`w-full px-[30%] py-[30px] [@media(max-width:768px)]:px-[30px] ${GAP}`}>
      <GreenCta
        flat
        href={CTA_HREF}
        className="gap-[15px] px-[22px] py-4 text-center [@media(max-width:768px)]:text-[14px] [@media(max-width:768px)]:leading-[21px]"
      >
        {CTA_LABEL}
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          aria-hidden="true"
          focusable="false"
          className="shrink-0 rotate-180"
        >
          <path
            d="M1.42898 16.0711L8.50005 9L1.42898 1.92893"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </GreenCta>
    </div>
  );
}

export default function ArticleContent() {
  return (
    <section className="text-[#212427]">
      <LpContainer className="[@media(max-width:768px)]:pt-8">
        {/* Leading empty CMS heading — one h2 line box of pure whitespace. */}
        <div aria-hidden="true" className="h-9 [@media(max-width:768px)]:h-[27px]" />

        <h2 className={`${H2} ${CMS_BLACK}`}>ما هو التداول عبر الإنترنت؟</h2>

        <p className={`${BODY} ${CMS_BLACK} ${GAP}`}>
          التداول عبر الإنترنت هو عملية شراء وبيع الأصول من خلال المنصات الإلكترونية، بهدف
          الاستفادة من تغيرات الأسعار في الأسواق العالمية.{" "}
        </p>
        <p className={`${BODY} ${CMS_BLACK}`}>
          يمكن للمتداولين الاستثمار في مجموعة متنوعة من الأسواق، بما في ذلك:
        </p>

        <ol className={`${LIST} ${GAP}`}>
          {ASSET_CLASSES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <p className={`${BODY} ${CMS_BLACK} ${GAP}`}>
          تتيح هذه التنوعات للمتداولين الوصول إلى عدة أسواق، وتنويع محافظهم الاستثمارية، وتطبيق
          استراتيجيات مختلفة بناءً على ظروف السوق.
        </p>

        <ArticleCta />

        <h2 className={`${H2} ${CMS_BLACK} ${GAP}`}>فوائد التداول عبر الإنترنت</h2>

        <ol className={`${LIST} ${GAP}`}>
          {BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2 className={`${H2} ${GAP}`}>اختيار وسيط التداول</h2>

        <p className={`${BODY} ${GAP}`}>
          جميع وسطاء التداول لدينا موثوقون ويمكنك اختيار أي منهم للبدء بسهولة في التداول. كل
          وسيط يوفر منصة تداول مستقرة وأدوات تحليل متقدمة لدعم قراراتك، مع مستويات أمان عالية
          وطرق دفع مرنة لتسهيل الإيداع والسحب. قبل البدء، يمكنك تجربة الحساب التجريبي لتتعرف على
          المنصة وتختبر استراتيجياتك بدون مخاطر، ومع دعم العملاء المتوفر دائمًا، ستتمكن من إدارة
          استثماراتك بثقة وراحة.
        </p>

        <ArticleCta />
      </LpContainer>
    </section>
  );
}
