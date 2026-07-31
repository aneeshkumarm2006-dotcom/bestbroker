import { lpBrokers } from "@/components/amwal-lp/brokers";
import { LpContainer } from "@/components/amwal-lp/container";
import { GreenCta } from "@/components/amwal-lp/green-cta";

/**
 * Educational article below the broker list — amwal's structure (three H2
 * blocks, two numbered lists, two in-article CTAs at the reference's
 * `padding: 30px 30%` rhythm), Mizan's theme: navy ink text, gold-underlined
 * headings, dark-navy flat CTAs.
 */

const GAP = "mt-8 [@media(max-width:768px)]:mt-[26px]";

const H2 =
  "text-[24px] font-bold leading-9 text-ink [@media(max-width:768px)]:text-[18px] [@media(max-width:768px)]:leading-[27px]";

const BODY =
  "text-[18px] leading-8 text-ink/80 [@media(max-width:768px)]:text-[14px] [@media(max-width:768px)]:leading-[26px]";

const LIST = `list-decimal ps-10 ${BODY} marker:font-bold marker:text-brand`;

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

/** Gold underline bar under each article heading — home-page section style. */
function H2Bar() {
  return <div className="mt-2 h-1 w-14 rounded-full bg-brand-gradient" />;
}

function ArticleCta() {
  return (
    <div
      className={`w-full px-[30%] py-[30px] [@media(max-width:768px)]:px-[30px] ${GAP}`}
    >
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
    <section id="about" className="scroll-mt-24">
      <LpContainer className="pt-10 [@media(max-width:768px)]:pt-8">
        <h2 className={H2}>ما هو التداول عبر الإنترنت؟</h2>
        <H2Bar />

        <p className={`${BODY} ${GAP}`}>
          التداول عبر الإنترنت هو عملية شراء وبيع الأصول من خلال المنصات الإلكترونية، بهدف
          الاستفادة من تغيرات الأسعار في الأسواق العالمية.{" "}
        </p>
        <p className={BODY}>
          يمكن للمتداولين الاستثمار في مجموعة متنوعة من الأسواق، بما في ذلك:
        </p>

        <ol className={`${LIST} ${GAP}`}>
          {ASSET_CLASSES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <p className={`${BODY} ${GAP}`}>
          تتيح هذه التنوعات للمتداولين الوصول إلى عدة أسواق، وتنويع محافظهم الاستثمارية، وتطبيق
          استراتيجيات مختلفة بناءً على ظروف السوق.
        </p>

        <ArticleCta />

        <h2 className={`${H2} ${GAP}`}>فوائد التداول عبر الإنترنت</h2>
        <H2Bar />

        <ol className={`${LIST} ${GAP}`}>
          {BENEFITS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>

        <h2 className={`${H2} ${GAP}`}>اختيار وسيط التداول</h2>
        <H2Bar />

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
