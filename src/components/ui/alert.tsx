import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full border-l-4 px-4 py-3 text-sm font-body",
  {
    variants: {
      variant: {
        default:
          "border-l-gray bg-gray text-text-primary",
        error:
          "border-l-error-primary bg-error-secondary text-error-primary",
        success:
          "border-l-success-primary bg-success-secondary text-success-primary",
        warning:
          "border-l-warning-primary bg-warning-secondary text-warning-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AlertVariantProps = VariantProps<typeof alertVariants>;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertVariantProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 className={cn("font-semibold mb-1", className)} ref={ref} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div className={cn("text-sm [&_p]:leading-relaxed", className)} ref={ref} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
