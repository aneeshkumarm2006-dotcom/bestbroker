import { Header } from "@/components/sections/header";
import { HomeHero } from "@/components/sections/home-hero";

export default function Preview() {
  return (
    <>
      {/*
       * Below `sm` the live site header is `position: fixed` (source markup:
       * `fixed sm:relative`), so it overlays the hero's top edge and appears in
       * the mobile reference crop. Reproduce that fixed overlay for the isolated
       * screenshot only; at >= sm the header is in normal flow (its own section)
       * and is excluded from the hero crop, so we hide it here.
       */}
      <div className="fixed inset-x-0 top-0 z-50 sm:hidden">
        <Header />
      </div>
      <HomeHero />
    </>
  );
}
