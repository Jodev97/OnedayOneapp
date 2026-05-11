# Design System - Manga Blog Application

## Overview

This design system provides comprehensive guidelines for building consistent, accessible, and visually appealing UI components for the Manga Blog Application. Based on the  Tailwind CSS architecture.

---

## Color Palette

### Dark Manga Theme (Primary - app/globals.css)

**Light Mode:**
- Background: `oklch(1 0 0)` - Pure white
- Foreground: `oklch(0.145 0 0)` - Dark gray
- Primary: `oklch(0.205 0 0)` - Dark blue/black
- Accent: `oklch(0.97 0 0)` - Light gray

**Dark Mode:**
- Background: `oklch(0.13 0.01 240)` - Very dark blue
- Foreground: `oklch(0.95 0 0)` - White/off-white
- Primary: `oklch(0.75 0.15 180)` - Cyan/teal
- Accent: `oklch(0.75 0.15 180)` - Cyan/teal

### Color Variables

| Variable | Dark Value | Light Value | Purpose |
|----------|-----------|-------------|---------|
| `--background` | `oklch(0.13 0.01 240)` | `oklch(1 0 0)` | Page background |
| `--foreground` | `oklch(0.95 0 0)` | `oklch(0.145 0 0)` | Text color |
| `--card` | `oklch(0.18 0.01 240)` | `oklch(1 0 0)` | Card background |
| `--primary` | `oklch(0.75 0.15 180)` | `oklch(0.205 0 0)` | Primary actions |
| `--secondary` | `oklch(0.25 0.01 240)` | `oklch(0.97 0 0)` | Secondary actions |
| `--accent` | `oklch(0.75 0.15 180)` | `oklch(0.97 0 0)` | Emphasis/highlights |
| `--destructive` | `oklch(0.6 0.2 25)` | `oklch(0.577 0.245 27.325)` | Dangerous actions |
| `--muted` | `oklch(0.25 0.01 240)` | `oklch(0.97 0 0)` | Disabled/inactive |
| `--border` | `oklch(0.3 0.01 240)` | `oklch(0.922 0 0)` | Borders |
| `--input` | `oklch(0.25 0.01 240)` | `oklch(0.922 0 0)` | Input fields |

### Sidebar Colors

| Variable | Purpose |
|----------|---------|
| `--sidebar` | Sidebar background |
| `--sidebar-foreground` | Sidebar text |
| `--sidebar-primary` | Sidebar active/hover state |
| `--sidebar-accent` | Sidebar accent elements |
| `--sidebar-border` | Sidebar borders |

### Chart Colors

```
--chart-1: oklch(0.75 0.15 180)  - Cyan
--chart-2: oklch(0.7 0.15 150)   - Green-cyan
--chart-3: oklch(0.65 0.15 200)  - Blue
--chart-4: oklch(0.8 0.1 60)     - Yellow
--chart-5: oklch(0.7 0.2 30)     - Orange-red
```

---

## Typography

### Font Stack

**Sans Serif (Primary):**
```css
font-family: 'Geist', 'Geist Fallback', system-ui, -apple-system, sans-serif;
```

**Monospace:**
```css
font-family: 'Geist Mono', 'Geist Mono Fallback', monospace;
```

### Font Sizes

| Size | Tailwind | Usage |
|------|----------|-------|
| XS | `text-xs` | `12px` - Captions, labels |
| SM | `text-sm` | `14px` - Small text, secondary |
| Base | `text-base` | `16px` - Body text |
| LG | `text-lg` | `18px` - Subheadings |
| XL | `text-xl` | `20px` - Section headers |
| 2XL | `text-2xl` | `24px` - Page titles |
| 3XL | `text-3xl` | `30px` - Major headings |

### Font Weights

| Weight | Tailwind | Usage |
|--------|----------|-------|
| 400 | `font-normal` | Body text |
| 500 | `font-medium` | Labels, secondary headings |
| 600 | `font-semibold` | Buttons, strong emphasis |
| 700 | `font-bold` | Headings, primary emphasis |

### Line Heights

| Height | Tailwind | Usage |
|--------|----------|-------|
| 1.25 | `leading-tight` | Headings |
| 1.5 | `leading-normal` | Body text |
| 1.75 | `leading-relaxed` | Large text blocks |

---

## Spacing System

### Base Unit: `0.25rem` (4px)

| Value | Pixels | Tailwind | Usage |
|-------|--------|----------|-------|
| 1 | 4px | `p-1` | Minimal padding/margin |
| 2 | 8px | `p-2` | Small spacing |
| 3 | 12px | `p-3` | Component padding |
| 4 | 16px | `p-4` | Standard spacing |
| 6 | 24px | `p-6` | Generous spacing |
| 8 | 32px | `p-8` | Section spacing |
| 12 | 48px | `p-12` | Large sections |

### Common Patterns

- **Card padding:** `p-4` to `p-6`
- **Section padding:** `py-8` to `py-12`
- **Element gaps:** `gap-2` to `gap-4`
- **Border radius:** `0.5rem` (8px) - `rounded-lg`

---

## Border Radius

| Class | Size | Usage |
|-------|------|-------|
| `rounded-sm` | `calc(0.5rem - 4px)` = `4px` | Subtle rounding |
| `rounded-md` | `calc(0.5rem - 2px)` = `6px` | Slight rounding |
| `rounded-lg` | `0.5rem` = `8px` | Standard - buttons, cards |
| `rounded-xl` | `calc(0.5rem + 4px)` = `12px` | Prominent rounding |
| `rounded-full` | `9999px` | Circles, pills |

---

## Shadows & Elevation

### Elevation Levels

| Level | Tailwind Class | Usage |
|-------|---|---|
| 1 | `shadow-sm` | Subtle elevation |
| 2 | `shadow` (default) | Standard cards |
| 3 | `shadow-md` | Floating elements |
| 4 | `shadow-lg` | Dialogs, modals |
| 5 | `shadow-xl` | Dropdowns, tooltips |

---

## Component Sizing

### Button Sizes

```
Small:   h-8, px-3, text-sm
Medium:  h-10, px-4, text-base (default)
Large:   h-12, px-6, text-lg
```

### Input Sizes

```
Standard: h-10, px-3, text-base
Large:    h-12, px-4, text-lg
```

### Card Sizes

```
Compact:  p-3, gap-2
Standard: p-4, gap-3
Spacious: p-6, gap-4
```

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind |
|-----------|-------|----------|
| Mobile | `< 640px` | (no prefix) |
| Tablet | `640px - 1024px` | `sm:`, `md:` |
| Desktop | `>= 1024px` | `lg:`, `xl:` |
| Large Desktop | `>= 1536px` | `2xl:` |

---

## Dark Mode

### Implementation

```css
@custom-variant dark (&:is(.dark *));

.dark {
  /* dark mode variables */
}
```

### Usage

```jsx
<div className="dark">
  {/* Dark mode content */}
</div>
```

Toggle dark mode via `html.dark` or `className="dark"` on root element.

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance

- **Color Contrast:** Minimum 4.5:1 for text, 3:1 for graphics
- **Focus States:** Visible focus indicators using `--ring` color
- **Interactive Elements:** Minimum 44x44px touch targets
- **Semantic HTML:** Proper heading hierarchy, ARIA labels
- **Keyboard Navigation:** Full keyboard support

### Focus States

```css
@apply focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring
```

### Skip Links

Include skip-to-content links at the start of pages.

---

## Animation & Transitions

### Standard Transitions

```css
transition-duration: 200ms
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
```

### Tailwind Animation Classes

- `animate-pulse` - Subtle pulsing
- `animate-spin` - Loading spinners
- `animate-bounce` - Attention-grabbing
- `animate-fade` - Custom fade effects

---

## Density & Whitespace

### Spacing Patterns

**Comfortable:** Recommended for most applications
- Padding: 16px (p-4)
- Gap: 16px (gap-4)
- Line height: 1.5 (leading-normal)

**Compact:** For data-heavy layouts
- Padding: 8px (p-2)
- Gap: 8px (gap-2)
- Line height: 1.25 (leading-tight)

**Spacious:** For content-focused pages
- Padding: 24px (p-6)
- Gap: 24px (gap-6)
- Line height: 1.75 (leading-relaxed)

---

## Component Implementation

All components are built using Tailwind CSS utilities without external UI libraries:
- Buttons, Links, Badges (Tailwind utilities)
- Cards, Containers, Alerts (semantic HTML + Tailwind)
- Forms, Inputs, Selects, Checkboxes, Radios (HTML5 + Tailwind styling)
- Dialogs, Modals, Popovers, Tooltips (custom implementations with Tailwind)
- Tables, Lists, Pagination (HTML elements + Tailwind)
- Sidebar, Navigation, Tabs (custom React components + Tailwind)
- Loading states, Empty states, Skeletons (custom React + animations)

---

## Implementation Notes

1. Use CSS variables for theming
2. Leverage Tailwind CSS utilities
3. Maintain consistent spacing rhythm
4. Ensure accessible color contrast
5. Support light/dark mode toggle
6. Test responsive layouts at breakpoints
7. Optimize images with Next.js Image component
