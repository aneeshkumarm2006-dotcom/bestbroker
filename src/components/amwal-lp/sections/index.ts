import type { ComponentType } from "react";

import TickerTape from "./ticker-tape";
import HeaderBar from "./header-bar";
import LastUpdatedBand from "./last-updated-band";
import PageTitle from "./page-title";
import CountryBand from "./country-band";
import BrokerList from "./broker-list";
import TrustSidebar from "./trust-sidebar";
import ArticleContent from "./article-content";
import Footer from "./footer";

/**
 * Section registry for the /mizan-uae-ar clone. Owned by the orchestrator —
 * builder agents only replace their own section file, never this index.
 * Used by /preview/[section] for per-section QA and by the page assembly.
 */
export const lpSections: Record<string, ComponentType> = {
  "ticker-tape": TickerTape,
  "header-bar": HeaderBar,
  "last-updated-band": LastUpdatedBand,
  "page-title": PageTitle,
  "country-band": CountryBand,
  "broker-list": BrokerList,
  "trust-sidebar": TrustSidebar,
  "article-content": ArticleContent,
  footer: Footer,
};

export {
  TickerTape,
  HeaderBar,
  LastUpdatedBand,
  PageTitle,
  CountryBand,
  BrokerList,
  TrustSidebar,
  ArticleContent,
  Footer,
};
