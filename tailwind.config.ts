import type { Config } from "tailwindcss";
import { colors, shadows } from "./src/lib/tokens";

const config: any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors: brand, semantic, and text colors
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        base: colors.base,
        black: colors.black,
        gray: colors.gray,
        error: {
          primary: colors["error-primary"],
          secondary: colors["error-secondary"],
        },
        success: {
          primary: colors["success-primary"],
          secondary: colors["success-secondary"],
        },
        warning: {
          primary: colors["warning-primary"],
          secondary: colors["warning-secondary"],
        },
        text: {
          primary: colors["text-primary"],
          secondary: colors["text-secondary"],
          tertiary: colors["text-tertiary"],
        },
      },

      // Hard shadows (no soft blur)
      boxShadow: {
        hard: shadows.hard,
        "hard-sm": shadows["hard-sm"],
      },

      // Font families
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },
    },
  },

  // CRITICAL: Override all border-radius utilities to always be 0
  // This enforces the "Rugged Premium" design principle of square corners
  corePlugins: {
    borderRadius: true,
  },
  plugins: [
    // Custom plugin to force all rounded-* utilities to 0
    function ({ addUtilities, theme }: any) {
      const borderRadiusUtilities = {
        ".rounded-none": { "border-radius": "0px" },
        ".rounded-sm": { "border-radius": "0px" },
        ".rounded": { "border-radius": "0px" },
        ".rounded-md": { "border-radius": "0px" },
        ".rounded-lg": { "border-radius": "0px" },
        ".rounded-xl": { "border-radius": "0px" },
        ".rounded-2xl": { "border-radius": "0px" },
        ".rounded-3xl": { "border-radius": "0px" },
        ".rounded-full": { "border-radius": "0px" },
        ".rounded-t": { "border-radius": "0px" },
        ".rounded-r": { "border-radius": "0px" },
        ".rounded-b": { "border-radius": "0px" },
        ".rounded-l": { "border-radius": "0px" },
        ".rounded-tr": { "border-radius": "0px" },
        ".rounded-br": { "border-radius": "0px" },
        ".rounded-bl": { "border-radius": "0px" },
        ".rounded-tl": { "border-radius": "0px" },
        ".rounded-t-sm": { "border-radius": "0px" },
        ".rounded-t-md": { "border-radius": "0px" },
        ".rounded-t-lg": { "border-radius": "0px" },
        ".rounded-r-sm": { "border-radius": "0px" },
        ".rounded-r-md": { "border-radius": "0px" },
        ".rounded-r-lg": { "border-radius": "0px" },
        ".rounded-b-sm": { "border-radius": "0px" },
        ".rounded-b-md": { "border-radius": "0px" },
        ".rounded-b-lg": { "border-radius": "0px" },
        ".rounded-l-sm": { "border-radius": "0px" },
        ".rounded-l-md": { "border-radius": "0px" },
        ".rounded-l-lg": { "border-radius": "0px" },
      };
      addUtilities(borderRadiusUtilities);
    },
  ],
};

export default config;
