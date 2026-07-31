import { cn } from "@/lib/utils";

/**
 * The reference's green CTA. Two variants exist on the page:
 * - broker-card "زيارة الموقع": green GRADIENT (180deg #28A745→#149532), 14/20 700
 * - in-article CTA: FLAT #03A64A, 18/27 700 uppercase
 * Both: white label, 4px radius, hover shadow 0 4px 8px rgba(0,0,0,.2).
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
        "flex items-center justify-center rounded font-bold text-white transition-shadow hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]",
        flat
          ? "bg-[#03A64A] text-[18px] uppercase leading-[27px]"
          : "bg-[linear-gradient(180deg,#28A745_0%,#149532_100%)] text-[14px] leading-5",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
