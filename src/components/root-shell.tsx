import { Cairo } from "next/font/google";

import { LanguageProvider } from "@/lib/i18n";
import { LANG_DIR, type Lang } from "@/lib/lang";

// Mizan renders site-wide in Cairo, which ships both Arabic and Latin glyphs —
// a deliberate brand typeface (the former theme fell back to the system font).
// The English mirror keeps it, so /en is the same page in the same voice.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const GTM_ID = "GTM-K2GRK6KD";

/**
 * The document shell shared by both root layouts. `/` (Arabic) and `/en`
 * (English) live in separate route groups so each can own its own `<html>`
 * element — that is the only way the server HTML can carry the right
 * `lang`/`dir` per language. Everything else about the two documents is
 * identical, so it lives here instead of being copy-pasted.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} dir={LANG_DIR[lang]} className={cairo.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-surface font-sans text-ink antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
