import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { Lang } from "@/lib/lang"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Affiliate hosts an Evest redirect can go through. Campaigns move between
 * networks, so every host we have ever sent traffic to stays listed — a link
 * whose host is missing here silently loses its GTM tracking class.
 */
export const EVEST_LINK_HOSTS = ["evest-ads.com", "evestpartners.com"]

/** Hook class required on every button that redirects the user to Evest. */
export const EVEST_REDIRECT_CLASS = "evest_redirect"

/**
 * Per-edition Evest hook classes. Each market's GTM container listens for its
 * own class, and that class is also what lets Evest carry GCLID/UTM params
 * across the redirect — so the South Africa container needs its own name
 * rather than reusing the UAE one.
 */
export const EVEST_MARKET_CLASS: Partial<Record<Lang, string>> = {
  en: "evestSouthAfrica",
}

/** True when `href` sends the user to Evest. */
export function isEvestHref(href?: string) {
  return (
    typeof href === "string" &&
    EVEST_LINK_HOSTS.some((host) => href.includes(host))
  )
}

/**
 * The GTM hook classes for an Evest CTA, or nothing when the href does not
 * point at Evest — driven by the broker data and the active edition instead
 * of hardcoded per call site.
 *
 * `evest_redirect` stays on every edition (the shared hook both containers
 * already use); the market class is added on top where one exists, so South
 * Africa gets `evest_redirect evestSouthAfrica`.
 */
export function evestRedirectClass(href?: string, lang?: Lang) {
  if (!isEvestHref(href)) return undefined
  const market = lang ? EVEST_MARKET_CLASS[lang] : undefined
  return market ? `${EVEST_REDIRECT_CLASS} ${market}` : EVEST_REDIRECT_CLASS
}
