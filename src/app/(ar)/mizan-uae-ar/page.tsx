import { permanentRedirect } from "next/navigation";

/**
 * The landing page that lived here is now the home page (src/app/page.tsx).
 * next.config.mjs already 301s this route; this is a belt-and-braces fallback
 * so the old ad URL can never render a second copy of the page.
 */
export default function Page() {
  permanentRedirect("/");
}
