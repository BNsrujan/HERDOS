import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-display font-bold leading-tight tracking-tight",
  {
    variants: {
      level: {
        h1: "text-5xl",
        h2: "text-4xl",
        h3: "text-3xl",
        h4: "text-2xl",
      },
      color: {
        primary: "text-text-primary",
        secondary: "text-text-secondary",
        tertiary: "text-text-tertiary",
      },
    },
    defaultVariants: {
      level: "h1",
      color: "primary",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: "h1" | "h2" | "h3" | "h4";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", color, ...props }, ref) => {
    const Component = level as keyof JSX.IntrinsicElements;
    return React.createElement(
      Component,
      {
        className: cn(headingVariants({ level, color, className })),
        ref,
        ...props,
      } as any
    );
  }
);
Heading.displayName = "Heading";

// Text component for body copy
const textVariants = cva("font-body", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
    },
    leading: {
      tight: "leading-tight",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "primary",
    leading: "normal",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, leading, ...props }, ref) => (
    <p
      className={cn(textVariants({ size, weight, color, leading, className }))}
      ref={ref}
      {...props}
    />
  )
);
Text.displayName = "Text";

// Mono component for eyebrows, labels, timestamps, prices, etc.
const monoVariants = cva("font-mono", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    color: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      tertiary: "text-text-tertiary",
    },
    uppercase: {
      true: "uppercase tracking-wider",
      false: "",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "medium",
    color: "secondary",
    uppercase: true,
  },
});

interface MonoProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof monoVariants> {}

const Mono = React.forwardRef<HTMLSpanElement, MonoProps>(
  ({ className, size, weight, color, uppercase, ...props }, ref) => (
    <span
      className={cn(monoVariants({ size, weight, color, uppercase, className }))}
      ref={ref}
      {...props}
    />
  )
);
Mono.displayName = "Mono";

export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  Mono,
  monoVariants,
  type HeadingProps,
  type TextProps,
  type MonoProps,
};
