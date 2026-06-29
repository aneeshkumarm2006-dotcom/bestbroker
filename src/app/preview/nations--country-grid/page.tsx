import { NationsGrid } from "@/components/sections/nations-grid";

/**
 * Isolated preview for nations--country-grid.
 *
 * At <640px the live site's <header> is `position: fixed`, so it overlaps the
 * top of this (first) section and is therefore baked into the 375 reference
 * crop. We reproduce that mobile header band here (preview-only, `sm:hidden`)
 * so the isolated crop matches; the section component itself stays header-free
 * for page assembly. At >=640px the live header is `relative` (above the
 * section, excluded from the 768/1440 crops) so it is hidden here.
 */
export default function Preview() {
  return (
    <div className="relative">
      <header className="absolute left-0 top-0 z-50 w-full bg-ink sm:hidden">
        <div className="container mx-auto">
          <div className="flex w-full items-center justify-between px-6">
            <a href="/gcc" className="py-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/gcc/logo.svg"
                alt="Best broker ai"
                width={180}
                height={31}
              />
            </a>
            <button
              type="button"
              aria-label="menu"
              className="relative -ml-3 flex h-12 w-12 flex-col items-start justify-center gap-[5px]"
            >
              <span className="h-0.5 w-6 bg-gold" />
              <span className="h-0.5 w-6 bg-gold" />
              <span className="h-0.5 w-6 bg-gold" />
            </button>
          </div>
        </div>
      </header>
      <NationsGrid />
    </div>
  );
}
