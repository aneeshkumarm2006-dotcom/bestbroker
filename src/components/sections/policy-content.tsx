/**
 * policy-content — shared layout for the Cookie Policy and Privacy Policy
 * pages. Mirrors the home/nations design system (gold eyebrow + gradient
 * heading + lead paragraph), then renders an ordered list of policy sections.
 *
 * Every visible string is authored in Arabic and routed through `t()` so the
 * pages render in both Arabic and English exactly like the rest of the site.
 */

"use client";

import { useLanguage } from "@/lib/i18n";
import { PageContainer } from "@/components/ui/container";

export type PolicySection = {
  /** Section heading (Arabic source string, keyed in the i18n dictionary). */
  heading: string;
  /** Body paragraphs (Arabic source strings). */
  paragraphs: string[];
};

export function PolicyContent({
  eyebrow,
  title,
  lead,
  sections,
  updated,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  sections: PolicySection[];
  updated: string;
}) {
  const { t } = useLanguage();
  return (
    <section className="py-16 lg:py-24">
      <PageContainer>
        {/* Section header — mirrors the home page eyebrow + gradient heading. */}
        <p className="text-sm font-bold text-brand">{t(eyebrow)}</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink lg:text-5xl lg:leading-tight">
          <span className="text-gradient">{t(title)}</span>
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{t(lead)}</p>
        <div className="mt-5 h-1.5 w-20 rounded-full bg-brand-gradient" />

        {/* Policy body. */}
        <div className="mt-10 max-w-3xl space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-ink lg:text-2xl">
                {t(section.heading)}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{t(p)}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted opacity-80">{t(updated)}</p>
      </PageContainer>
    </section>
  );
}
