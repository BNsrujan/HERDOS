# "Rugged Premium" Design System

A design system for HERDOS that sits between two ideas that usually fight each other: **rugged** (built to take a hit, functional, no-nonsense) and **premium** (considered, confident, well-made).

## Design Philosophy

The Rugged Premium aesthetic resolves the tension between ruggedness and premium quality through concrete, enforced design rules rather than generic polish:

### Core Principles

1. **Zero Border-Radius (Non-Negotiable)**
   - Every component—buttons, cards, inputs, badges, modals, alerts, tags—has hard, square corners.
   - No `rounded-*` Tailwind utilities anywhere in the codebase.
   - This is the single most important rule. It's what reads as "built," not "decorated."

2. **Borders and Offset Hard-Shadows Over Soft Blur**
   - Depth comes from a 1–2px solid border plus a flat, non-blurred offset shadow (e.g., `4px 4px 0 #070707`).
   - Think stamped metal plate, not floating glass.
   - Hard shadows: `4px 4px 0px #070707` (default), `2px 2px 0px #070707` (compact).

3. **No Gradients**
   - Flat fills only.

4. **Strategic Typography**
   - **Cal Sans** (Display): Headings, hero statements. Large, used with restraint. Never for body copy.
   - **Plus Jakarta Sans** (Body): Paragraphs, form labels, UI copy, navigation.
   - **JetBrains Mono** (Mono): Eyebrow text, tags, labels, SKUs/IDs, timestamps, prices, numbered steps, button micro-labels (uppercase with letter-spacing).

5. **High-Contrast, Deliberate Color Use**
   - Primary dark green (`#1A3C2A`): Brand anchor for primary buttons, active states, key icons.
   - Tertiary amber (`#F4A622`): Sparing accent for highlights or one signature moment per screen (never a second primary).
   - Secondary light green (`#B5DDA2`): Background tints only—fails WCAG AA as text on white.
   - Semantic colors for states (error, success, warning).

6. **Generous Whitespace and Oversized Type**
   - Ruggedness lives in edges and materials (borders, shadows, mono labels).
   - Spacing and type scale should feel unhurried and considered, not cramped.

---

## Design Tokens

### Brand Colors

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `primary` | `#1A3C2A` | Primary buttons, active states, key icons, primary text |
| `secondary` | `#B5DDA2` | Background/fill tint only (fails contrast for text) |
| `tertiary` | `#F4A622` | Sparing accent for highlights, one signature moment per screen |
| `base` | `#FFFFFF` | White base, button fills |
| `black` | `#070707` | Near-black, shadows, borders, high-contrast text |
| `gray` | `#EAEAEA` | Light gray, borders, backgrounds, disabled states |

### Semantic Colors

#### Error
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `error-primary` | `#F04438` | Error icons, borders, solid fills in alerts |
| `error-secondary` | `#FEE4E2` | Error background tints |

#### Success
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `success-primary` | `#17B26A` | Success icons, borders, solid fills |
| `success-secondary` | `#DCFAE6` | Success background tints |

#### Warning
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `warning-primary` | `#F79009` | Warning icons, borders, solid fills |
| `warning-secondary` | `#FEF0C7` | Warning background tints |

### Text Colors

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `text-primary` | `#000000` | Body text, primary labels |
| `text-secondary` | `#494949` | Secondary labels, supporting text |
| `text-tertiary` | `#8B928C` | Metadata, captions, non-essential info (use sparingly) |

**Important**: `text-tertiary` is borderline on white backgrounds—restrict it to non-essential captions, never for body copy or interactive labels.

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-hard` | `4px 4px 0px #070707` | Default elevation for cards, dropdowns, modals |
| `shadow-hard-sm` | `2px 2px 0px #070707` | Compact elevation for buttons, inputs, badges |

### Border Radius

**All border-radius values are `0px`.** This is enforced at the Tailwind config level and in the CSS baseline. No exceptions.

### Typography

| Role | Font | Sizes | Notes |
|------|------|-------|-------|
| Display / Headings | Cal Sans | h1–h4 (auto-sized) | Hero statements, page titles. Large, used with restraint. |
| Body / UI Text | Plus Jakarta Sans | xs–xl | Paragraphs, labels, nav, form fields. Default reading font. |
| Mono / Utility | JetBrains Mono | xs–base | Eyebrows, tags, timestamps, prices, button micro-copy. |

#### Font Loading

- **Plus Jakarta Sans** and **JetBrains Mono**: Loaded via `next/font/google` in `app/layout.tsx`.
- **Cal Sans**: Loaded via `next/font/local` (requires `.woff2` files in `public/fonts/` — see layout.tsx TODO).

---

## Component Library

All components are built with **class-variance-authority (CVA)** for variant management and enforce zero border-radius, hard shadows, and semantic color usage.

### Button

**Variants:**
- `primary` (dark green fill, white text)
- `secondary` (white fill, black border, dark green text)
- `tertiary` (amber fill, black text)
- `destructive` (error-primary fill)
- `ghost` (no fill, no border, underline on hover)

**Sizes:**
- `sm` (small, uppercase mono micro-copy with letter-spacing)
- `md` (medium)
- `lg` (large)

**Features:**
- Zero radius, `shadow-hard-sm`.
- Uppercase + letter-spacing in mono for `sm` size only.
- Visible focus ring (2px offset, black).
- All variants have active scale-down effect.

**Do's:**
- Use `primary` for main actions.
- Use `secondary` for alternative actions.
- Use `ghost` for navigation or low-priority actions.

**Don'ts:**
- Don't use multiple primary buttons on the same screen.
- Don't mix button variants without clear purpose.

### Card

**Features:**
- Zero radius, 1px `gray` border, optional `shadow-hard`.
- Optional accent top-border stripe (2–4px, semantic color) for status/category.

**Variants:**
- `accentBorder`: `none`, `primary`, `secondary`, `tertiary`, `error`, `success`, `warning`.
- `elevated`: `true` (full shadow) or `false` (compact shadow).

**Do's:**
- Use accent borders to denote status or category.
- Pair accent borders with semantic colors for consistency.

**Don'ts:**
- Don't use cards without borders.
- Don't use soft shadows—only hard shadows.

### Input / Textarea / Select

**Features:**
- Zero radius, 1px border (`gray` default, `black` on focus).
- Error/success states with semantic colors.
- Label in Plus Jakarta Sans, helper/error text in JetBrains Mono (small).

**Variants:**
- `state`: `default`, `error`, `success`.
- `size`: `sm`, `md`, `lg`.

**Do's:**
- Show error state clearly with error-primary border and error-secondary background.
- Use helper text in mono for clarity.

**Don'ts:**
- Don't hide error messages.
- Don't use tertiary green as input text—it fails contrast.

### Badge / Tag

**Features:**
- Zero radius, mono font, uppercase, built from semantic color pairs.
- Fill = `*-secondary`, text/border = `*-primary`.

**Variants:**
- `variant`: `default`, `primary`, `secondary`, `tertiary`, `error`, `success`, `warning`.
- `size`: `sm`, `md`, `lg`.

**Do's:**
- Use semantic variants to match context (error badges for warnings, success badges for confirmed states).
- Combine badges to show multiple attributes.

**Don'ts:**
- Don't use badges for primary information—use them for metadata.

### Alert / Banner

**Features:**
- Built from semantic color pairs (error/success/warning).
- Zero radius, 4px left-border accent in `*-primary` color, `*-secondary` background.

**Variants:**
- `variant`: `default`, `error`, `success`, `warning`.

**Sub-components:**
- `Alert` (container)
- `AlertTitle` (heading)
- `AlertDescription` (content)

**Do's:**
- Use alerts for state changes, confirmations, or important information.
- Pair title and description for clarity.

**Don'ts:**
- Don't use soft shadows in alerts.
- Don't use alerts for casual information.

### Typography: Heading, Text, Mono

#### Heading

**Variants:**
- `level`: `h1`, `h2`, `h3`, `h4` (h1 = 5xl, h4 = 2xl).
- `color`: `primary`, `secondary`, `tertiary`.

**Features:**
- Cal Sans (or fallback if not loaded), bold, tight leading.

**Do's:**
- Use h1 for page titles, h2 for sections, h3/h4 for subsections.
- Use color variants to establish hierarchy or deemphasize.

**Don'ts:**
- Don't use Cal Sans for body copy.
- Don't use more than one h1 per page.

#### Text

**Variants:**
- `size`: `xs`, `sm`, `base`, `lg`, `xl`.
- `weight`: `normal`, `medium`, `semibold`, `bold`.
- `color`: `primary`, `secondary`, `tertiary`.
- `leading`: `tight`, `normal`, `relaxed`, `loose`.

**Features:**
- Plus Jakarta Sans, defaults to `base` size, `normal` weight, `primary` color, `normal` leading.

**Do's:**
- Use `text-secondary` or `text-tertiary` for supporting information.
- Match leading to content (tight for labels, relaxed for body).

**Don'ts:**
- Don't use `text-tertiary` for essential information—it's reserved for metadata.

#### Mono

**Variants:**
- `size`: `xs`, `sm`, `base`.
- `weight`: `normal`, `medium`, `semibold`.
- `color`: `primary`, `secondary`, `tertiary`.
- `uppercase`: `true` (default, with letter-spacing), `false`.

**Features:**
- JetBrains Mono, defaults to `sm` size, `medium` weight, `secondary` color, uppercase with tracking.

**Do's:**
- Use for prices, IDs, timestamps, tags, micro-copy.
- Uppercase and letter-spacing create visual texture without clutter.

**Don'ts:**
- Don't use for body paragraphs.
- Don't disable uppercase for body-like content.

---

## Accessibility Notes

### Color Contrast

- **`secondary` (`#B5DDA2`)**: Fails WCAG AA as text on white. Use as background only.
- **`warning-secondary` (`#FEF0C7`)**, **`success-secondary` (`#DCFAE6`)**, **`error-secondary` (`#FEE4E2`)**: Light tints, fail WCAG AA as text on white. Use as backgrounds with darker text/icons.
- **`text-tertiary` (`#8B928C`)**: Borderline on white backgrounds. Restrict to non-essential captions and metadata, not body or interactive labels.

### Focus States

- All interactive components have visible 2px offset focus ring in `black`.
- The zero-radius, hard-edged aesthetic makes strong focus rings easy to design well—lean into them rather than relying on color alone.

### Semantic HTML

- Use `<Alert>` with `role="alert"` for important messages.
- Buttons have accessible focus states and proper disabled handling.
- Inputs and Textareas have associated labels and helper text for clarity.

### Best Practices

- Always pair colors: use semantic color primaries for text/icons/borders and secondaries for backgrounds.
- Test color contrast with a WCAG checker before shipping.
- Ensure focus rings are visible on all interactive elements.
- Never hide focus indicators for aesthetics.

---

## Implementation Files

### Token Source of Truth
- **`src/lib/tokens.ts`**: TypeScript constants for all color values, shadows, and font families. Referenced by Tailwind config and used for dynamic theming.

### Configuration
- **`tailwind.config.ts`**: Extends Tailwind theme with all design tokens. Forces all `border-radius` utilities to `0px` via plugin. Exports `shadow-hard` and `shadow-hard-sm` utilities.
- **`app/globals.css`**: Defines CSS custom properties for all tokens. Forces `border-radius: 0` globally.
- **`app/layout.tsx`**: Loads fonts via `next/font`. Applies font CSS variables to root HTML.

### Component Library
- **`src/components/ui/`**: All reusable components (button, card, input, etc.), built with CVA.
- **`src/components/ui/index.ts`**: Centralized exports for all components.

### Utilities
- **`src/lib/utils.ts`**: Classname merging utility (`cn`).

---

## Usage Examples

### Basic Button

```tsx
import { Button } from "@/components/ui";

export function MyComponent() {
  return (
    <>
      <Button variant="primary" size="md">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <Button variant="ghost">Cancel</Button>
    </>
  );
}
```

### Card with Accent

```tsx
import { Card } from "@/components/ui";

export function StatusCard() {
  return (
    <Card accentBorder="success" elevated>
      <h2>Success!</h2>
      <p>Your changes have been saved.</p>
    </Card>
  );
}
```

### Form with Validation

```tsx
import { Input, Textarea, Button, Alert, AlertTitle, AlertDescription } from "@/components/ui";
import { useState } from "react";

export function ContactForm() {
  const [error, setError] = useState("");

  return (
    <>
      {error && (
        <Alert variant="error">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Input type="email" placeholder="Email" state={error ? "error" : "default"} />
      <Textarea placeholder="Message" />
      <Button variant="primary">Send</Button>
    </>
  );
}
```

### Typography Hierarchy

```tsx
import { Heading, Text, Mono } from "@/components/ui";

export function Article() {
  return (
    <>
      <Heading level="h1">Breaking News</Heading>
      <Mono size="sm">Published 2 hours ago</Mono>
      <Text size="lg" weight="semibold">Summary</Text>
      <Text>Lorem ipsum dolor sit amet...</Text>
      <Heading level="h2">Details</Heading>
      <Text>More details here.</Text>
    </>
  );
}
```

---

## Verification Checklist

- [ ] No `rounded-*` classes used anywhere in the codebase (enforced by Tailwind plugin).
- [ ] All borders are hard (`0px` radius).
- [ ] All shadows are hard-offset (`4px 4px 0px` or `2px 2px 0px`).
- [ ] No gradients used.
- [ ] Color contrast passes WCAG AA for all text.
- [ ] Focus rings are visible on all interactive elements.
- [ ] Fonts are loaded via `next/font` (Cal Sans still needs local files).
- [ ] All components use semantic colors appropriately.
- [ ] Mono font is used for utility/label information, not body.
- [ ] No secondary green used as text on white backgrounds.

---

## Future Enhancements

- [ ] Add Cal Sans local font files once sourced.
- [ ] Add component-specific animation guidelines (scale, slide, fade—never blur).
- [ ] Expand badge variants for custom use cases.
- [ ] Add form layout components (FormField, FormGroup, FormSection).
- [ ] Create a Storybook instance for component showcase and testing.
- [ ] Document spacing scale (xs–xl) as part of tokens.

---

## Questions?

Refer to the individual component files in `src/components/ui/` or the token source in `src/lib/tokens.ts` for implementation details. All components are documented with inline comments and TypeScript types.
