# Proof of Action - Design System

This document outlines the design language and UI patterns for the Proof of Action application. The aesthetic is heavily inspired by premium developer tools (like Supabase), featuring a dark, clean, and highly structured interface.

## 1. Color Tokens

- **Background (`--color-background`)**: Near-black / charcoal (`#0a0b0e`). The canvas is deep to make content pop.
- **Surface (`--color-surface`)**: Subtle secondary layer (`#12141a`) for cards and elevated sections.
- **Surface Hover (`--color-surface-hover`)**: Slightly lighter (`#1a1d24`) for interactive elements.
- **Border (`--color-border`)**: Soft, low-contrast separators (`#1e222b` or `rgba(255, 255, 255, 0.08)`).
- **Accent/Brand (`--color-base-blue`)**: Base-style electric blue (`#0052FF`). Used for primary actions, subtle glows, and active states.
- **Accent Hover (`--color-base-blue-hover`)**: Slightly darker/vibrant blue (`#0045d8`).
- **Foreground (`--color-foreground`)**: Crisp white (`#ffffff`) for primary text.
- **Foreground Muted (`--color-foreground-muted`)**: Soft gray (`#8a8f98`) for secondary text, helper text, and inactive icons.

## 2. Typography Hierarchy

Using `Inter` (or similar modern sans-serif) for clean readability.
- **Display/Hero**: 5xl-7xl, bold, tight tracking. Often features subtle gradient text.
- **H1 (Page Title)**: 3xl, bold, crisp white.
- **H2 (Section/Card Title)**: xl, semibold.
- **H3 (Sub-section)**: lg, medium.
- **Body Large**: base/lg, regular, muted. High line-height (relaxed).
- **Body Small**: sm, regular, muted. Used for metadata and helper text.
- **Labels/Badges**: xs, uppercase tracking or medium lowercase, for tags and statuses.

## 3. Spacing Rhythm

Consistent spacing is key to the "premium" feel.
- **Macro**: Large gaps between major page sections (`py-24`, `gap-16`).
- **Cards**: Generous internal padding (`p-6` or `p-8`).
- **Micro**: Tight grouping for related elements (e.g., label + input uses `gap-2`).

## 4. Card Styles

Cards are the primary structural element.
- **Background**: Solid surface color or extremely subtle glassmorphism.
- **Border**: 1px solid very subtle border (`border-border`).
- **Shadow**: No harsh drop shadows. If elevated, use a very soft, spread-out dark shadow or a faint colored glow.
- **Radius**: Medium-large rounding (`rounded-xl` or `rounded-2xl`).
- **Interactive Cards**: On hover, elevate slightly via background change (`hover:bg-surface-hover`) and subtle border highlight (`hover:border-base-blue/30`).

## 5. Button Styles

- **Primary**: Solid Base Blue, white text, subtle hover state. Medium border radius (`rounded-lg`).
- **Secondary**: Surface background, subtle border, white text. Hover brightens the surface.
- **Outline/Ghost**: Transparent, colored border/text.
- **Sizing**: `sm` (height 36px), `md` (height 44px), `lg` (height 52px).

## 6. Form Styles

Forms must feel technical but approachable.
- **Inputs**: Surface background, subtle border, text-sm, rounded-lg. Focus state rings blue with a subtle glow.
- **Labels**: Small, medium weight, muted text above inputs.
- **Selectors (Radio/Check cards)**: Instead of standard inputs, use selectable cards with icons and descriptions. Active state gets a blue border and subtle blue background tint.

## 7. Empty State Style

Empty states should never feel like an error.
- **Iconography**: Soft, large, muted icon or subtle illustration inside a circular or squircle container.
- **Messaging**: Clear H3 title, soft supportive body text.
- **Action**: Always provide a clear "next step" or CTA button right below.
- **Container**: Dashed border or a distinct surface background to denote an "empty" placeholder area.

## 8. Interaction & Layout Principles

- **Hover Effects**: Micro-interactions everywhere. Buttons shift, cards lighten, borders subtly glow. Transitions should be fast but smooth (`transition-all duration-200`).
- **Dashboard Layout**: 
  - Top rigid nav with breadcrumbs or clear branding.
  - Page header with title and high-level stats.
  - 2-column content: Primary action/workflow on the left (wider), contextual info/history on the right (narrower).
- **Gradients/Glows**: Used sparingly. A faint blue glow behind a primary element or a text gradient on the hero to draw the eye, avoiding heavy overuse.
