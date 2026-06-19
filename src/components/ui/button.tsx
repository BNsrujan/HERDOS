import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles - all buttons share these
  "inline-flex items-center justify-center gap-2 font-mono font-semibold uppercase tracking-wide transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-base border border-primary shadow-hard-sm hover:bg-opacity-90 active:shadow-none",
        secondary:
          "bg-base text-primary border-2 border-primary shadow-hard-sm hover:bg-gray active:shadow-none",
        tertiary:
          "bg-tertiary text-black border border-tertiary shadow-hard-sm hover:bg-opacity-90 active:shadow-none",
        destructive:
          "bg-error-primary text-base border border-error-primary shadow-hard-sm hover:bg-opacity-90 active:shadow-none",
        ghost:
          "bg-transparent text-primary border-0 shadow-none hover:underline active:scale-100",
      },
      size: {
        sm: "px-3 py-1.5 text-xs leading-tight",
        md: "px-4 py-2 text-sm leading-normal",
        lg: "px-6 py-3 text-base leading-normal",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
