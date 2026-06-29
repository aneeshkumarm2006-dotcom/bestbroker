import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-cta transition-[filter,transform,background-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary CTA / submit: indigo→violet gradient, white bold text.
        green:
          "bg-brand-gradient font-bold text-white shadow-control hover:-translate-y-0.5 hover:shadow-glow",
        gold: "bg-accent font-bold text-accent-foreground hover:brightness-95",
        outline:
          "border border-brand/30 bg-white font-semibold text-brand hover:border-brand hover:bg-brand/5",
        ghost: "font-medium text-ink hover:bg-brand/5",
        link: "font-semibold text-brand underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 text-base",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
