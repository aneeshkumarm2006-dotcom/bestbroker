import { cn } from "@/lib/utils";

/**
 * Reference `.container mx-auto px-8` — stock stepped Tailwind container
 * (640/768/1024/1280/1536 steps, 32px inline padding), written out explicitly
 * so it can't drift with the site's own container settings.
 */
export function LpContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-8 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]",
        className
      )}
      {...props}
    />
  );
}
