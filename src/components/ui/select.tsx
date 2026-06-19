import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  "w-full px-3 py-2 border font-body text-sm focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors appearance-none cursor-pointer pr-8",
  {
    variants: {
      state: {
        default: "border-gray bg-base text-text-primary focus:border-black",
        error: "border-error-primary bg-error-secondary text-error-primary focus:border-error-primary",
        success:
          "border-success-primary bg-success-secondary text-success-primary focus:border-success-primary",
      },
      size: {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-2",
        lg: "text-base px-4 py-3",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

type SelectVariantProps = VariantProps<typeof selectVariants>;

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    SelectVariantProps {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, state, size, ...props }, ref) => (
    <select
      className={cn(selectVariants({ state, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Select.displayName = "Select";

export { Select, selectVariants };
