import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { PartnerHero } from "@/components/sections/partner-hero";

export default function PartnerPage() {
  return (
    <>
      <Header />
      {/* The shared Header is `relative` at every breakpoint, but the live mobile
          header is `fixed` (out of flow). Below sm we pull main up by the 55px
          header height so the hero starts at y=0 — matching the live full-page
          screenshot — instead of being pushed down by the relative header's flow
          box. (Not fixing this in the shared Header component, per guide.) */}
      <main className="-mt-[55px] sm:mt-0">
        {/* Source `<section class="pt-24 lg:pt-0 lg:mt-24">` — a single hero+form
            band. PartnerHero is the full faithful reproduction of that section
            (h1 + value props + the "انضم الينا كشريك" form, incl. the form
            heading and the mobile hero). It already bakes `pt-24 lg:pt-0`, so the
            wrapper only adds the section's `lg:mt-24`. The separate PartnerForm
            component re-renders this SAME source section (without the heading,
            and hiding the hero below lg), so rendering it here doubled the band
            (+472px / 45% mismatch); it is intentionally omitted. */}
        <div className="lg:mt-24">
          <PartnerHero />
        </div>
        <div className="mb-14 mt-20">
          <DisclaimerBand />
        </div>
      </main>
      <Footer />
    </>
  );
}
