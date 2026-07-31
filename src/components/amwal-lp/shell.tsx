/**
 * Route-scoped wrapper for the /mizan-uae-ar landing page. The page keeps the
 * amwal reference's LAYOUT (section order, geometry, RTL flow) but renders in
 * Mizan's own theme: Cairo (inherited from the root layout's `--font-cairo`
 * via the `font-sans` token), warm cream surface and dark-navy ink.
 * Forced `dir="rtl"` shields the page from the site-wide language toggle —
 * this campaign page is Arabic-only.
 */
export function LpShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-surface font-sans text-[16px] font-normal leading-6 text-ink antialiased"
    >
      {children}
    </div>
  );
}
