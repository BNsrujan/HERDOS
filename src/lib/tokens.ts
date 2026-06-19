/**
 * "Rugged Premium" Design System - Token Source of Truth
 *
 * All design tokens are defined here as TypeScript constants.
 * These values are referenced by Tailwind config and used for
 * dynamic theming, inline styles, and third-party component integration.
 */

// Brand Colors
export const brandColors = {
  primary: "#1A3C2A",     // Dark green - primary buttons, active states, key icons
  secondary: "#B5DDA2",   // Light green - background/fill tint only (fails contrast as text)
  tertiary: "#F4A622",    // Amber - sparing accent, one signature moment per screen
  base: "#FFFFFF",        // White base
  black: "#070707",       // Near-black
  gray: "#EAEAEA",        // Light gray
} as const;

// Semantic Colors - Error
export const semanticError = {
  primary: "#F04438",     // Error icon, border, solid fill
  secondary: "#FEE4E2",   // Error background tint
} as const;

// Semantic Colors - Success
export const semanticSuccess = {
  primary: "#17B26A",     // Success icon, border, solid fill
  secondary: "#DCFAE6",   // Success background tint
} as const;

// Semantic Colors - Warning
export const semanticWarning = {
  primary: "#F79009",     // Warning icon, border, solid fill
  secondary: "#FEF0C7",   // Warning background tint
} as const;

// Text Colors
export const textColors = {
  primary: "#000000",     // Body text, primary labels
  secondary: "#494949",   // Secondary labels, captions
  tertiary: "#8B928C",    // Metadata, non-essential captions (use sparingly)
} as const;

// Combined color palette for Tailwind config
export const colors = {
  // Brand
  primary: brandColors.primary,
  secondary: brandColors.secondary,
  tertiary: brandColors.tertiary,
  base: brandColors.base,
  black: brandColors.black,
  gray: brandColors.gray,

  // Semantic - Error
  "error-primary": semanticError.primary,
  "error-secondary": semanticError.secondary,

  // Semantic - Success
  "success-primary": semanticSuccess.primary,
  "success-secondary": semanticSuccess.secondary,

  // Semantic - Warning
  "warning-primary": semanticWarning.primary,
  "warning-secondary": semanticWarning.secondary,

  // Text
  "text-primary": textColors.primary,
  "text-secondary": textColors.secondary,
  "text-tertiary": textColors.tertiary,
} as const;

// Shadows
export const shadows = {
  hard: "4px 4px 0px #070707",      // Default elevation (cards, dropdowns, modals)
  "hard-sm": "2px 2px 0px #070707", // Smaller elevation (buttons, inputs, badges)
} as const;

// Border Radius - Always 0
export const borderRadius = {
  none: "0px",
  sm: "0px",
  md: "0px",
  lg: "0px",
  full: "0px",
  DEFAULT: "0px",
} as const;

// Font families (referenced via CSS variables)
export const fontFamilies = {
  display: "var(--font-display)",  // Cal Sans - headings, hero statements
  body: "var(--font-body)",        // Plus Jakarta Sans - body, UI text, labels
  mono: "var(--font-mono)",        // JetBrains Mono - tags, eyebrows, timestamps, prices
} as const;

// Type-safe access to all tokens
export const tokens = {
  colors,
  shadows,
  borderRadius,
  fontFamilies,
} as const;

// Export individual namespace objects for convenience
export const semanticColors = {
  error: semanticError,
  success: semanticSuccess,
  warning: semanticWarning,
} as const;
