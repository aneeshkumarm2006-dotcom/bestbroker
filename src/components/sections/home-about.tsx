"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

const ASSETS = "/assets/img/gcc";

type AboutFeature = {
  /** Illustration filename under /assets/img/gcc */
  img: string;
  alt: string;
  title: string;
  body: string;
  /** At lg the card sits on the RIGHT (image on the LEFT) when true. */
  cardRight: boolean;
  /** Per-row extra classes on the flex row wrapper. */
  rowClassName: string;
  /** Per-row extra classes on the illustration <img>. */
  imgClassName: string;
  /** Per-row extra classes on the <h3> title. */
  titleClassName: string;
};

// Verbatim copy + illustration order from
// reference/source/html/home.html  →  main > section:nth-of-type(2)
const FEATURES: AboutFeature[] = [
  {
    img: "illu-2_a.svg",
    alt: "An independent and trustworthy publisher",
    title: "ناشر مستقل وجدير بالثقة",
    body: "نحن ملتزمون بتوفير معلومات محايدة وغير متحيزة لمستخدمينا. يقوم فريق الخبراء لدينا بمراجعة وتحليل الوسطاء والسوق بشكل مستمر، ولا يتأثر تحليلهم بأي مؤسسات مالية أو شركات وساطة.",
    cardRight: false,
    rowClassName: "flex flex-col lg:flex-row items-center",
    // .illu-2 { right: 3em } at lg overrides lg:-right-12 in the source.
    imgClassName: "-bottom-14 lg:bottom-auto lg:w-full lg:right-12",
    titleClassName: "mt-4 lg:mt-0",
  },
  {
    img: "illu-3_a.svg",
    alt: "Comparing world's best brokers",
    title: "نقارن أفضل الوسطاء في العالم",
    body: "يمكن لمستخدمي ميزان Mizan العثور على تحليلات وتقييمات للعلامات التجارية العالمية مثل eToro وCapital.com وPlus500، وكذلك الوسطاء الأكثر تخصصًا والأكثر تميزًا في هذا المجال",
    cardRight: true,
    rowClassName:
      "flex flex-col-reverse lg:flex-row items-center mt-4 relative lg:-right-12",
    // .index-illu-3 { height:408px } at lg, { width:60% } at <=756px.
    imgClassName:
      "-bottom-8 lg:bottom-auto lg:w-full lg:-left-12 lg:h-[408px] max-[756px]:w-3/5",
    titleClassName: "",
  },
  {
    img: "illu-4_a.svg",
    alt: "In over 50 countries",
    title: "نوفر خدماتنا في أكثر من 50 دولة",
    body: "بغض النظر عن مكان تواجد مستخدمينا، يهدف ميزان Mizan إلى تقديم خدمة شاملة من خلال تغطية أكثر من 50 دولة ما بين أوروبا وآسيا وأمريكا وأفريقيا.",
    cardRight: false,
    rowClassName: "flex flex-col lg:flex-row items-center",
    imgClassName: "-bottom-10 lg:bottom-auto lg:w-full lg:-right-12",
    titleClassName: "mt-4 lg:mt-0",
  },
  {
    img: "illu-5_a.svg",
    alt: "With over a million of users",
    title: "مع أكثر من مليون مستخدم",
    body: "مستخدمونا هم أقوى دليل على جودتنا: في عام 2022، زار موقع ميزان Mizan أكثر من مليون مستخدم لاتخاذ قرارات مستنيرة عند اختيار الوسيط الانسب لهم.",
    cardRight: true,
    rowClassName:
      "flex flex-col-reverse lg:flex-row items-center mt-4 relative lg:-right-12",
    imgClassName: "-bottom-8 lg:bottom-auto lg:w-full lg:-left-12",
    titleClassName: "",
  },
];

function Illustration({ feature }: { feature: AboutFeature }) {
  return (
    <div className="basis-4/12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${ASSETS}/${feature.img}`}
        alt={feature.alt}
        className={cn("relative mx-auto w-9/12", feature.imgClassName)}
      />
    </div>
  );
}

function FeatureCard({ feature }: { feature: AboutFeature }) {
  const { t } = useLanguage();
  return (
    <div className="basis-8/12">
      <div className="group relative overflow-hidden rounded-card border border-divider bg-white px-5 pb-8 pt-12 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glow lg:px-24 lg:py-12">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5 bg-brand-gradient"
        />
        <h3
          className={cn(
            "text-xl font-extrabold text-ink lg:text-2xl",
            feature.titleClassName,
          )}
        >
          {t(feature.title)}
        </h3>
        <p className="mt-8 leading-relaxed text-muted">{t(feature.body)}</p>
      </div>
    </div>
  );
}

export function HomeAbout({
  features = FEATURES,
}: {
  features?: AboutFeature[];
}) {
  const { t } = useLanguage();
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="mx-auto w-full border-t border-divider lg:w-10/12">
          <h2 className="mt-20 text-center text-4xl font-extrabold text-ink lg:mb-4">
            {t("من نحن؟")}
          </h2>
          <div className="mx-auto mb-11 mt-4 h-1.5 w-20 rounded-full bg-brand-gradient" />

          {features.map((feature) => (
            <div key={feature.img} className={feature.rowClassName}>
              {feature.cardRight ? (
                <>
                  <FeatureCard feature={feature} />
                  <Illustration feature={feature} />
                </>
              ) : (
                <>
                  <Illustration feature={feature} />
                  <FeatureCard feature={feature} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
