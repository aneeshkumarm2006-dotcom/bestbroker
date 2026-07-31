import { cn } from "@/lib/utils";

/**
 * Conversion CTA for the /mizan-uae-ar landing page, in Mizan's brand system
 * (file keeps its historical name from the clone pass; the styling is now
 * Mizan's, not the reference's green):
 * - default: gold `brand-gradient` — same as the home page's "زيارة الموقع"
 * - `flat`: dark-navy ink — the secondary CTA style used in the article
 * Both: white label, `rounded-cta`, control shadow, lift + glow on hover.
 */
export function GreenCta({
  flat = false,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { flat?: boolean }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center rounded-cta font-bold text-white shadow-control transition-all hover:-translate-y-0.5",
        flat
          ? "bg-ink text-[18px] leading-[27px] hover:bg-navy-deep"
          : "bg-brand-gradient text-[14px] leading-5 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
