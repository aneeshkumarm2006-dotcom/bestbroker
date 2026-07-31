import { LpContainer } from "@/components/amwal-lp/container";

/**
 * `footer` — full-bleed dark band closing the /mizan-uae-ar page. Amwal's
 * layout (brand column right in RTL, wide text column with policy links,
 * disclaimer, rule, ad-disclosure), Mizan's theme: the brand's deep navy
 * instead of near-black, with the gold-badge white-wordmark logo.
 *
 * The copyright block is duplicated (`hidden md:block` in the brand column,
 * `block md:hidden` last) so it sits under the logo on desktop but at the very
 * bottom of the stack on mobile.
 */

const COPYRIGHT_LINES = [
  "حقوق الطبع والنشر © 2026 ميزان",
  "Aeternum Tech srl. جميع الحقوق محفوظة.",
  " ",
  "VAT IT17738071004",
];

const POLICY_LINKS = [
  { label: "سياسة ملفات تعريف الارتباط", href: "#" },
  { label: "سياسة الخصوصية", href: "#" },
];

const DISCLAIMER =
  "تم تصميم هذا الموقع لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت، وهو يضم معلومات حول مجموعة واسعة من المنتجات والخدمات. يتم توفير بعض التفاصيل، بما في ذلك على سبيل المثال لا الحصر الأسعار والعروض الترويجية، من قبل شركائنا وهي ديناميكية وقادرة على التغيير في أي لحظة دون إشعار مسبق. على الرغم من أن المحتوى الخاص بنا يعتمد على بحث شامل، فلا ينبغي اعتباره نصيحة قانونية أو مهنية أو تنبؤًا، ولا ينبغي الاعتماد عليه على هذا النحو. لا تشكل قوائم الشركات على هذا الموقع تأييدًا. نحن لسنا مستشارين استثماريين أو سماسرة، ولا نقدم أي منتجات أو خدمات مباشرة للمستخدمين النهائيين، بل نسهل الاتصالات بين المستخدمين ومنصات شركائنا. يُحظر تمامًا إعادة الإنتاج غير المصرح به، كليًا أو جزئيًا.";

const AD_DISCLOSURE_PARAGRAPHS = [
  "هذا الموقع هو مورد مجاني عبر الإنترنت يسعى جاهدًا لتقديم محتوى مفيد وميزات مقارنة لزوارنا. نحن نقبل تعويضات إعلانية من الشركات التي تظهر على الموقع، مما قد يؤثر على الموقع والترتيب الذي يتم به تقديم العلامات التجارية (و/أو منتجاتها)، وقد يؤثر أيضًا على النتيجة المخصصة لها. لا تعني قوائم الشركات على هذه الصفحة التأييد. لا نعرض جميع مقدمي الخدمة في السوق. باستثناء ما هو منصوص عليه صراحةً في شروط الاستخدام الخاصة بنا، فإن جميع التصريحات والضمانات المتعلقة بالمعلومات المقدمة على هذه الصفحة غير مسؤولة.",
  "المعلومات، بما في ذلك الأسعار، التي تظهر على هذا الموقع قد تخضع للتغيير في أي وقت",
];

function Copyright({ className }: { className?: string }) {
  return (
    <p className={`mt-9 text-sm leading-[26px] ${className ?? ""}`}>
      {COPYRIGHT_LINES.map((line, i) => (
        <span key={i}>
          {line}
          {i < COPYRIGHT_LINES.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

export default function Footer() {
  return (
    <footer id="disclaimer" className="bg-navy-gradient pb-20 pt-[60px] text-white/60">
      <LpContainer>
        <div className="flex flex-col gap-5 md:flex-row md:gap-20">
          {/* Brand column — right-hand side under RTL */}
          <div className="flex shrink-0 items-center justify-center md:block md:basis-[20%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/logo-footer-white.svg"
              alt="ميزان"
              width={214}
              height={68}
              className="aspect-[214/68] w-[214px] object-contain"
            />
            <Copyright className="hidden md:block" />
          </div>

          {/* Text column */}
          <div className="md:basis-[65%]">
            <ul className="mb-10 flex flex-wrap justify-center gap-3 text-base leading-6 text-white underline decoration-[0.3px] md:justify-start md:gap-5">
              {POLICY_LINKS.map((link) => (
                <li
                  key={link.label}
                  className="basis-[40%] text-center md:basis-auto md:text-start"
                >
                  <a
                    href={link.href}
                    className="transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mb-8 border-b border-white/15 pb-8 text-center text-sm leading-6 md:text-start">
              {DISCLAIMER}
            </p>

            <p className="text-center text-xs leading-5 md:text-start">
              <span className="block font-bold text-white/80">إفصاح إعلاني</span>
              {AD_DISCLOSURE_PARAGRAPHS[0]}
              <br />
              <br />
              {AD_DISCLOSURE_PARAGRAPHS[1]}
            </p>
          </div>

          {/* Mobile-only copy of the copyright block, last in the stack */}
          <Copyright className="block text-center md:hidden" />
        </div>
      </LpContainer>
    </footer>
  );
}
