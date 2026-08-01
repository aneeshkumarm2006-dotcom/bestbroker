import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Affiliate host every Evest redirect goes through. */
export const EVEST_LINK_HOST = "evestpartners.com"

/** Hook class required on every button that redirects the user to Evest. */
export const EVEST_REDIRECT_CLASS = "evest_redirect"

/** True when `href` sends the user to Evest. */
export function isEvestHref(href?: string) {
  return typeof href === "string" && href.includes(EVEST_LINK_HOST)
}

/**
 * `evest_redirect` when the href points at Evest, otherwise nothing — so the
 * class is driven by the broker data instead of hardcoded per call site.
 */
export function evestRedirectClass(href?: string) {
  return isEvestHref(href) ? EVEST_REDIRECT_CLASS : undefined
}
