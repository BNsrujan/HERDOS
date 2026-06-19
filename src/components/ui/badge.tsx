import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono font-semibold uppercase tracking-wide border",
  {
    variants: {
      variant: {
        default:
          "bg-gray text-text-primary border-text-primary",
        primary:
          "bg-primary text-base border-primary",
        secondary:
          "bg-secondary text-text-primary border-secondary",
        tertiary:
          "bg-tertiary text-black border-tertiary",
        error:
          "bg-error-secondary text-error-primary border-error-primary",
        success:
          "bg-success-secondary text-success-primary border-success-primary",
        warning:
          "bg-warning-secondary text-warning-primary border-warning-primary",
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BadgeVariantProps {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
