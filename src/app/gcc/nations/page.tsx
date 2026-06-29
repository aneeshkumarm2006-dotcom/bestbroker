import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { NationsGrid } from "@/components/sections/nations-grid";

export default function NationsPage() {
  return (
    <>
      <Header />
      {/* Live mobile header is `fixed` (out of flow); our shared header is
          `relative` and consumes ~55px. Pull main up under it below sm so the
          grid's baked `pt-24` clears the (overlapping) header — matches ref. */}
      <main className="-mt-[55px] sm:mt-0">
        <div className="lg:mt-16">
          <NationsGrid />
        </div>
        <div className="mb-14 mt-20">
          <DisclaimerBand />
        </div>
      </main>
      <Footer />
    </>
  );
}
