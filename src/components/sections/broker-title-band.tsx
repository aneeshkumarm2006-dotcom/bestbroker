import { Container } from "@/components/ui/container";

export interface BrokerTitleBandProps {
  /** H1 copy for the broker-detail route (Arabic, verbatim from source). */
  title?: string;
  /** ISO country code matching a flag under /assets/img/flags/<code>.svg. */
  flagCode?: string;
}

/**
 * Gold title band shared by every broker-detail route.
 * Source: `section.heading__section` (gcc/landing-style.css).
 *   - full-bleed gold background (#D6BB64)
 *   - centered flex: H1 + country flag, gap 20px
 *   - container padding 35px 0 (desktop) / 10px 0 (mobile)
 *   - H1 28px/700/lh42 desktop, 18px/lh30 mobile
 *   - H1 renders in Rubik (Latin) + system Arabic fallback (see `rubik` above)
 */
export function BrokerTitleBand({
  title = "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
  flagCode = "ae",
}: BrokerTitleBandProps) {
  return (
    <section className="relative w-full overflow-hidden bg-navy-gradient">
      {/* Accent glow + bottom hairline */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <Container className="relative flex items-center justify-center gap-5 py-[10px] md:py-[35px]">
        <h1 className="text-[18px] font-extrabold leading-[30px] text-white md:text-[28px] md:leading-[42px]">
          {title}
        </h1>
        <span
          role="img"
          aria-label={`flag-${flagCode}`}
          className="block aspect-[16/9] w-full max-w-[50px] shrink-0 rounded-md border border-white/40 bg-cover bg-left-top shadow-lg"
          style={{ backgroundImage: `url('/assets/img/flags/${flagCode}.svg')` }}
        />
      </Container>
    </section>
  );
}
