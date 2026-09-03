import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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

/** True when `href` sends the user to Evest. */
export function isEvestHref(href?: string) {
  return (
    typeof href === "string" &&
    EVEST_LINK_HOSTS.some((host) => href.includes(host))
  )
}

/**
 * `evest_redirect` when the href points at Evest, otherwise nothing — so the
 * class is driven by the broker data instead of hardcoded per call site.
 */
export function evestRedirectClass(href?: string) {
  return isEvestHref(href) ? EVEST_REDIRECT_CLASS : undefined
}
