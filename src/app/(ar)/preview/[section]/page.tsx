import { notFound } from "next/navigation";

import { LpShell } from "@/components/amwal-lp/shell";
import { lpSections } from "@/components/amwal-lp/sections";

export const metadata = { robots: { index: false, follow: false } };

export function generateStaticParams() {
  return Object.keys(lpSections).map((section) => ({ section }));
}

/**
 * Dev-only per-section preview for the /mizan-uae-ar clone QA loop, e.g.
 * /preview/broker-list. Renders one section inside the LP shell so pixel
 * diffs see the same font/direction context as the assembled page.
 */
export default function PreviewPage({
  params,
}: {
  params: { section: string };
}) {
  // The live site is a single page — previews only exist in local dev.
  if (process.env.NODE_ENV === "production") notFound();
  const Section = lpSections[params.section];
  if (!Section) notFound();
  return (
    <LpShell>
      <Section />
    </LpShell>
  );
}
