import type { Broker } from "@/components/sections/broker-list";

export type { Broker };

/** Per-route data for the 18 templated broker-detail pages. */
export interface RouteData {
  /** Short slug id, e.g. "uae", "sa-oil". */
  slug: string;
  /** Full Next.js path, e.g. "best-broker-gcc-uae-ar" (segment under /gcc). */
  segment: string;
  /** Title-band H1 (Arabic, verbatim from source). */
  title: string;
  /** ISO country code for the title-band flag (ae, sa, qa, kw, om, bh, jo). */
  flagCode: string;
  /** Broker-list intro subtitle paragraph (Arabic, verbatim). */
  intro: string;
  /** Ranked broker cards for this route. */
  brokers: Broker[];
}
