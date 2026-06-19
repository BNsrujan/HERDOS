import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "bg-base border border-gray shadow-hard p-6",
  {
    variants: {
      accentBorder: {
        none: "",
        primary: "border-t-4 border-t-primary",
        secondary: "border-t-4 border-t-secondary",
        tertiary: "border-t-4 border-t-tertiary",
        error: "border-t-4 border-t-error-primary",
        success: "border-t-4 border-t-success-primary",
        warning: "border-t-4 border-t-warning-primary",
      },
      elevated: {
        true: "shadow-hard",
        false: "shadow-hard-sm",
      },
    },
    defaultVariants: {
      accentBorder: "none",
      elevated: true,
    },
  }
);

type CardVariantProps = VariantProps<typeof cardVariants>;

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariantProps {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accentBorder, elevated, ...props }, ref) => (
    <div
      className={cn(cardVariants({ accentBorder, elevated, className }))}
      ref={ref}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card, cardVariants };
