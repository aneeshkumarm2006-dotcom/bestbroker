import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Site content wrapper — mirrors the live `.container`:
 *   width: calc(100% - 15%)  => 85% (>=768px),  mobile <768px => 90%
 *   max-width: 1440px, centered.
 */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-[90%] max-w-[1440px] md:w-[85%]", className)}
      {...props}
    />
  );
}

/**
 * Page content wrapper used by every section on the home page. Sharing it across
 * the inner pages keeps their gutters and max-widths identical to /gcc so the
 * whole site reads as one layout system.
 */
export function PageContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl",
        className
      )}
      {...props}
    />
  );
}
