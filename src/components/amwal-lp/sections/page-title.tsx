import { LpContainer } from "@/components/amwal-lp/container";

/**
 * Page title block — amwal's placement and scale (40px desktop start-aligned,
 * 26px centered mobile), Mizan's voice: dark-navy ink with the key phrase in
 * the brand's gold gradient, set in Cairo like the rest of the site.
 */
export default function PageTitle() {
  return (
    <section>
      <LpContainer>
        <div className="pt-[1vh]">
          <h1 className="mb-4 pt-[2vh] text-start text-[40px] font-bold leading-tight text-ink max-md:text-center max-md:text-[26px] max-md:leading-[34px]">
            اختر <span className="text-gradient font-extrabold">الوسيط الأفضل</span>{" "}
            في الامارات وابدأ التداول في دقائق!
          </h1>
        </div>
      </LpContainer>
    </section>
  );
}
