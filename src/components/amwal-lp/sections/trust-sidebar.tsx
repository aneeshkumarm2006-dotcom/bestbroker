/**
 * Left-hand trust column of the /mizan-uae-ar clone (RTL: it sits left of the
 * broker list). Three stacked blocks, in reference DOM order:
 *
 *   1. the mascot illustration — wrapper `w-3/4 me-4`, so 223x181 inside the
 *      298px column at 1440 and 127x103 inside the 170px column at 768;
 *   2. the "local expertise" card — 22/33 bold heading with a gold run;
 *   3. the "why use us" card — 24/32 bold heading with a gold run plus four
 *      gold-icon benefit rows (16/24 bold title + 16/24 body).
 *
 * The page assembly owns the column itself (`hidden md:flex flex-col pb-4
 * basis-1/4`), which is also why nothing here is rendered below `md`. This
 * component only emits the column's content, wrapped in a `flex flex-col` so
 * it behaves identically whether it is dropped straight into that column or
 * previewed standalone.
 *
 * Rebranded: the reference's "أموال أونلاين" becomes "ميزان" in the "why"
 * heading (the gold run keeps covering the verb + brand); every other Arabic
 * string is verbatim from the reference source.
 */

type Benefit = {
  icon: string;
  alt: string;
  /** Intrinsic SVG size — the reference renders these icons unscaled. */
  width: number;
  height: number;
  title: string;
  body: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: "/assets/img/amwal-lp/diamond-gold.svg",
    alt: "",
    width: 16,
    height: 17,
    title: "أفضل الخيارات فقط",
    body: "نقارن ونختار لك أفضل العروض",
  },
  {
    icon: "/assets/img/amwal-lp/moneybag-gold.svg",
    alt: "",
    width: 12,
    height: 17,
    title: "وفر وقتك ومالك",
    body: "اعثر على الحل الأنسب لك في ثوانٍ معدودة",
  },
  {
    icon: "/assets/img/amwal-lp/chart-gold.svg",
    alt: "",
    width: 16,
    height: 15,
    title: "بيانات محدثة دائمًا",
    body: "نتحقق من العروض والشروط باستمرار لنقدم لك معلومات موثوقة.",
  },
  {
    icon: "/assets/img/amwal-lp/handshake-gold.svg",
    alt: "",
    width: 22,
    height: 14,
    title: "سهل وآمن",
    body: "فلاتر سهلة الاستخدام وتقييمات مفصلة لمساعدتك على اتخاذ القرار بثقة.",
  },
];

export default function TrustSidebar() {
  return (
    <div className="flex flex-col">
      <div className="me-4 w-3/4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/amwal-lp/sidebar-guy.png"
          alt=""
          width={811}
          height={656}
          className="h-auto w-full"
        />
      </div>

      <section
        aria-labelledby="trust-sidebar-expertise"
        className="flex flex-col items-center gap-5 rounded-lg bg-white p-6 text-start shadow"
      >
        <div>
          <h2
            id="trust-sidebar-expertise"
            className="text-[22px] font-bold leading-[33px]"
          >
            خبرتنا <span className="text-[#D6BB64]">المحلية في</span> الأسواق
            المالية
          </h2>
          <p className="pt-4 text-base leading-6">
            يقدم لك خبراؤنا المحليون أفضل الخيارات المالية لمساعدتك في اتخاذ
            قرارات ذكية
          </p>
        </div>
      </section>

      <section
        aria-labelledby="trust-sidebar-why"
        className="mt-2 flex flex-col rounded-lg border border-[#F2F2F2] border-b-[#CECECE] p-6 shadow"
      >
        <h2
          id="trust-sidebar-why"
          className="text-2xl font-bold leading-8"
        >
          لماذا <span className="text-[#D6BB64]">تستخدم ميزان</span>؟
        </h2>
        <ul className="flex flex-col">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              className={
                "flex items-start gap-2 px-1 pb-4 " +
                (index === 0 ? "pt-12" : "pt-4")
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={benefit.icon}
                alt={benefit.alt}
                width={benefit.width}
                height={benefit.height}
                aria-hidden="true"
                // `box-content`: the reference sets no width/height on these
                // icons, so its `ps-2 pt-1` sits outside the intrinsic box.
                // Keeping the attributes (for CLS) under border-box would
                // shrink the glyphs instead.
                className="box-content ps-2 pt-1"
              />
              <div className="flex flex-col">
                <p className="font-bold">{benefit.title}</p>
                <p>{benefit.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
