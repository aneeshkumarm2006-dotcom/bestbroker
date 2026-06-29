import Image from "next/image";

import { Button } from "@/components/ui/button";

/**
 * partner--hero — `main > section:nth-of-type(1)` of /gcc/partner (the `.pt-24`
 * block). Left (RTL: right) column = headline + "كيف نخلق قيمة لشركائنا" 3-up
 * value props; right (RTL: left) column = the "انضم الينا كشريك" sign-up form.
 *
 * NOTE on the mobile header bar: on the live site the section sits directly
 * under the GLOBAL header, which is `position: fixed` below the `sm` (640px)
 * breakpoint, so the section's `pt-24` reserves space and the fixed bar overlaps
 * the top of the section. The reference crop is the section's border box and
 * therefore captures that 55px black bar at 375 only. We reproduce it here as a
 * mobile-only (`sm:hidden`) overlay purely to match the crop; at >=640px the
 * live header is `relative` and is NOT part of this crop.
 */

const VALUE_PROPS = [
  {
    src: "/assets/img/gcc/illu-sm-1.svg",
    body: (
      <>
        نشبك الوسطاء والمستخدمين من خلال تقنية{" "}
        <span className="font-bold">الذكاء الاصطناعي</span>
      </>
    ),
  },
  {
    src: "/assets/img/gcc/illu-sm-2.svg",
    body: (
      <>
        نعزز ثقة المستخدم من خلال توفير مصدر{" "}
        <span className="font-bold">موثوق ومستقل</span> للمعلومات
      </>
    ),
  },
  {
    src: "/assets/img/gcc/illu-sm-3.svg",
    body: (
      <>
        نوفر <span className="font-bold">فرص استثمارية</span> اكبر لشركائنا
      </>
    ),
  },
];

const INPUTS = [
  { type: "text", name: "name", placeholder: "الاسم الكامل" },
  { type: "email", name: "email", placeholder: "البريد الإلكتروني" },
  { type: "tel", name: "phone", placeholder: "رقم التليفون", dir: "rtl" as const },
  { type: "text", name: "company", placeholder: "موقع الشركة" },
];

export function PartnerHero() {
  return (
    <section className="relative pt-24 lg:pt-0">
      {/* Mobile-only faux global header captured by the crop (see note above). */}
      <div className="absolute inset-x-0 top-0 z-10 bg-ink sm:hidden">
        <div className="flex items-center justify-between px-6">
          <span className="py-3">
            <Image
              src="/assets/img/gcc/logo.svg"
              alt="Best broker ai"
              width={180}
              height={31}
              priority
            />
          </span>
          <button
            type="button"
            aria-label="القائمة"
            className="relative flex h-12 w-12 flex-col justify-center gap-[6px]"
          >
            <span className="h-0.5 w-6 rounded-full bg-accent" />
            <span className="h-0.5 w-6 rounded-full bg-accent" />
            <span className="h-0.5 w-6 rounded-full bg-accent" />
          </button>
        </div>
      </div>

      {/* Mirrors the live Tailwind default `.container mx-auto px-6 lg:px-24`
          (breakpoint max-widths), NOT the project's 90%/85% Container. The
          value-prop illustrations fill the container width, so the container
          width is what drives their size at every breakpoint. */}
      <div className="mx-auto w-full px-6 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] lg:px-24 xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <div className="flex flex-col lg:flex-row">
          {/* Headline + value props */}
          <div className="basis-7/12">
            <div className="w-full lg:w-11/12">
              <h1 className="text-center text-3xl font-semibold leading-tight text-ink lg:text-left lg:text-5xl">
                انضم إلى شبكة{" "}
                <span className="text-gradient font-extrabold">الوسيط الأفضل</span>التي تضم
                أفضل الوسطاء في مجال الوساطة المالية في العالم.
              </h1>
              <p className="mt-6 text-center text-base text-muted lg:mt-10 lg:text-2xl">
                كيف نخلق قيمة لشركائنا:
              </p>
              <div className="mt-6 flex flex-col gap-6 lg:flex-row">
                {VALUE_PROPS.map((prop, i) => (
                  <div key={i} className="flex-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={prop.src}
                      alt="best broker ai"
                      className="mx-auto max-[756px]:w-1/2 lg:h-[150px]"
                    />
                    <p className="mt-6 text-center font-medium">{prop.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sign-up form */}
          <div className="relative basis-5/12 pt-12 lg:pt-0">
            <div className="absolute top-0 mx-auto h-0.5 w-8/12 border-l border-divider lg:left-0 lg:top-[15%] lg:h-[70%] lg:w-auto" />
            <div className="ml-auto w-full rounded-card border border-divider bg-white p-6 shadow-card lg:w-10/12 lg:p-8">
              <h3 className="mb-8 text-center text-2xl font-extrabold text-ink lg:mb-12 lg:text-3xl">
                انضم الينا كشريك
              </h3>
              <form>
                {INPUTS.map((input, i) => (
                  <input
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    dir={input.dir}
                    required
                    className={`block w-full rounded-control border border-divider bg-surface p-5 outline-none transition-all placeholder:text-muted focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15 ${
                      i > 0 ? "mt-5" : ""
                    }`}
                  />
                ))}
                <div className="mt-12 flex justify-center">
                  <Button
                    type="submit"
                    variant="green"
                    className="h-auto rounded-2xl px-10 py-5 uppercase tracking-wider shadow-control"
                  >
                    لننمو معاً
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
