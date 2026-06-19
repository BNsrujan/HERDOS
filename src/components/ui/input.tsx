import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full px-3 py-2 border font-body text-sm focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
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

type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, size, ...props }, ref) => (
    <input
      className={cn(inputVariants({ state, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input, inputVariants };
