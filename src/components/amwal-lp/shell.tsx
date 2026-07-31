/**
 * Route-scoped wrapper for the /mizan-uae-ar landing page. The page keeps the
 * amwal reference's LAYOUT (section order, geometry, logical-property flow)
 * but renders in Mizan's own theme: Cairo (inherited from the root layout's
 * `--font-cairo` via the `font-sans` token), warm cream surface and dark-navy
 * ink. Direction is NOT forced here — the LanguageProvider drives the
 * document's `lang`/`dir`, so the toggle flips this page along with the rest
 * of the site (sections use logical utilities throughout).
 */
export function LpShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface font-sans text-[16px] font-normal leading-6 text-ink antialiased">
      {children}
    </div>
  );
}
