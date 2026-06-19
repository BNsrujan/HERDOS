import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "w-full px-3 py-2 border font-body text-sm focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-none",
  {
    variants: {
      state: {
        default: "border-gray bg-base text-text-primary focus:border-black",
        error: "border-error-primary bg-error-secondary text-error-primary focus:border-error-primary",
        success:
          "border-success-primary bg-success-secondary text-success-primary focus:border-success-primary",
      },
      size: {
        sm: "text-xs px-2 py-1 min-h-16",
        md: "text-sm px-3 py-2 min-h-24",
        lg: "text-base px-4 py-3 min-h-32",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

type TextareaVariantProps = VariantProps<typeof textareaVariants>;

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaVariantProps {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state, size, ...props }, ref) => (
    <textarea
      className={cn(textareaVariants({ state, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
