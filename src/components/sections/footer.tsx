/**
 * Global footer (home `footer`).
 *
 * Mirrors reference/source/css/gcc/footer.css for the home markup:
 *  - full-bleed black background, base color #606060 (`text-muted`)
 *  - padding 50px 0 90px (desktop) / 50px 0 (<=768px)
 *  - logo (right, RTL) + underlined white privacy links (left)
 *  - two columns: copyright (right, flex-basis 30%, 12px) + disclaimer block (left)
 *  - <=768px: stacked + centered logo/links, copyright centered with a top rule,
 *    disclaimer text stays right-aligned (RTL default)
 *
 * The 768px breakpoint is expressed with `max-[768px]:` so it triggers at
 * exactly 768px (matching the source `@media (max-width: 768px)`), unlike
 * Tailwind's `md:` which starts at min-width 768px.
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-navy-gradient pb-[90px] pt-[50px] text-slate-300 max-[768px]:pb-[50px]">
      {/* footer > div.container — 85% width, max 1440, centered, column flex */}
      <div className="mx-auto flex w-[85%] max-w-[1440px] flex-col">
        {/* .footerlogo__flex */}
        <div className="mb-[50px] flex items-center justify-between text-white max-[768px]:mb-[30px] max-[768px]:flex-col max-[768px]:gap-[30px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/gcc/logo.svg"
            alt="BestBroker"
            width={180}
            height={31}
          />
          {/* .footer__link */}
          <div className="flex items-center gap-[50px] text-[16px] max-[768px]:justify-center max-[768px]:gap-[20px] max-[768px]:text-[14px]">
            <a
              href="https://www.iubenda.com/privacy-policy/42723864"
              title="Privacy Policy"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              سياسة الخصوصية
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/42723864/cookie-policy"
              title="Cookie Policy"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              سياسة ملفات تعريف الارتباط
            </a>
          </div>
        </div>

        {/* .footertext__flex */}
        <div className="flex items-start max-[768px]:flex-col-reverse">
          {/* .copyright__text */}
          <div className="shrink-0 basis-[30%] text-[12px] max-[768px]:mt-[30px] max-[768px]:w-full max-[768px]:basis-auto max-[768px]:border-t max-[768px]:border-white/10 max-[768px]:pt-[30px] max-[768px]:text-center max-[768px]:text-[14px] max-[768px]:leading-[24px]">
            <p className="mt-0 opacity-80"> حقوق الطبع والنشر © 2026</p>
            <p className="mt-0 opacity-80">
              Aeternum Tech srl. جميع الحقوق محفوظة.
            </p>
            <p className="mt-0 opacity-80">VAT IT17738071004</p>
          </div>

          {/* .footer__paratxt */}
          <div className="text-[12px]">
            <p className="mb-[20px] mt-0 border-b border-white/10 pb-[50px] opacity-80">
              تم تصميم هذا الموقع لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر
              الإنترنت، وهو يضم معلومات حول مجموعة واسعة من المنتجات والخدمات. يتم
              توفير بعض التفاصيل، بما في ذلك على سبيل المثال لا الحصر الأسعار
              والعروض الترويجية، من قبل شركائنا وهي ديناميكية وقادرة على التغيير
              في أي لحظة دون إشعار مسبق. على الرغم من أن المحتوى الخاص بنا يعتمد
              على بحث شامل، فلا ينبغي اعتباره نصيحة قانونية أو مهنية أو تنبؤًا،
              ولا ينبغي الاعتماد عليه على هذا النحو. لا تشكل قوائم الشركات على هذا
              الموقع تأييدًا. نحن لسنا مستشارين استثماريين أو سماسرة، ولا نقدم أي
              منتجات أو خدمات مباشرة للمستخدمين النهائيين، بل نسهل الاتصالات بين
              المستخدمين ومنصات شركائنا. يُحظر تمامًا إعادة الإنتاج غير المصرح به،
              كليًا أو جزئيًا.
            </p>
            <h3 className="mb-[5px] mt-0 text-[14px] font-bold">إفصاح إعلاني</h3>
            <p className="mt-0 opacity-80">
              هذا الموقع هو مورد مجاني عبر الإنترنت يسعى جاهدًا لتقديم محتوى مفيد
              وميزات مقارنة لزوارنا. نحن نقبل تعويضات إعلانية من الشركات التي تظهر
              على الموقع، مما قد يؤثر على الموقع والترتيب الذي يتم به تقديم
              العلامات التجارية (و/أو منتجاتها)، وقد يؤثر أيضًا على النتيجة
              المخصصة لها. لا تعني قوائم الشركات على هذه الصفحة التأييد. لا نعرض
              جميع مقدمي الخدمة في السوق. باستثناء ما هو منصوص عليه صراحةً في شروط
              الاستخدام الخاصة بنا، فإن جميع التصريحات والضمانات المتعلقة
              بالمعلومات المقدمة على هذه الصفحة غير مسؤولة.
            </p>
            <p className="mt-[20px] opacity-80">
              المعلومات، بما في ذلك الأسعار، التي تظهر على هذا الموقع قد تخضع
              للتغيير في أي وقت
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
