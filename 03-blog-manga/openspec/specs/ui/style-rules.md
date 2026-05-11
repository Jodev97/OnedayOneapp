# Style Rules & CSS Guidelines

## CSS Architecture

### File Structure

```
/app
  globals.css          # Main theme + Tailwind imports
/styles
  globals.css          # Alternative/light mode styles
/components
  ui/                  # Shadcn UI components
    *.tsx             # Pre-built components with CSS modules
  page-components/    # Page-specific components
/public/styles/       # Global utility styles (optional)
```

### CSS Imports & Cascading

```css
/* app/globals.css - Primary stylesheet */
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

/* CSS Variables for theming */
:root {
  /* theme colors */
}

.dark {
  /* dark mode overrides */
}

@theme inline {
  /* Tailwind theme extensions */
}

@layer base {
  /* Base element styles */
}

@layer components {
  /* Reusable component styles */
}

@layer utilities {
  /* Utility classes */
}
```

---

## Tailwind CSS Configuration

### Base Configuration

```javascript
// tailwind.config.ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        // ... other colors as CSS variables
      },
      fontFamily: {
        sans: ['Geist', 'Geist Fallback'],
        mono: ['Geist Mono', 'Geist Mono Fallback'],
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
    },
  },
  darkMode: ['class', '.dark'],
  plugins: [require('tailwindcss-animate')],
}
```

### CSS Variables Usage

All colors defined as CSS custom properties:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  /* ... */
}
```

Tailwind then maps these to utility classes:
- `bg-background` → `background-color: var(--background)`
- `text-foreground` → `color: var(--foreground)`
- `border-primary` → `border-color: var(--primary)`

---

## Color Application Rules

### Text Colors

```css
/* Primary text */
.text-foreground     /* Body text */
.text-muted-foreground /* Secondary text, disabled */

/* Links & Interactive */
.text-primary           /* Links */
.hover:text-primary/80  /* Link hover */

/* Headings */
.text-foreground        /* All headings */
```

### Background Colors

```css
/* Page backgrounds */
.bg-background   /* Main page background */
.bg-card         /* Card backgrounds */
.bg-popover      /* Popover/dropdown backgrounds */
.bg-sidebar      /* Sidebar backgrounds */

/* Interactive elements */
.bg-primary      /* Primary buttons */
.bg-secondary    /* Secondary buttons */
.bg-accent       /* Accent elements */
```

### Border Colors

```css
/* All borders default to --border */
.border           /* Default border */
.border-input     /* Form input borders */
.border-primary   /* Focused input */

/* Variants */
.border-destructive  /* Error states */
.border-muted        /* Disabled states */
```

### State Colors

```css
/* Hover states */
.hover:bg-primary/90  /* Darken primary */
.hover:text-primary   /* Emphasize text */

/* Focus states */
.focus-visible:ring-2
.focus-visible:ring-offset-2
.focus-visible:ring-primary

/* Disabled states */
.disabled:opacity-50
.disabled:cursor-not-allowed
```

---

## Component Styling Patterns

### Buttons

```css
/* Primary Button */
.bg-primary
.text-primary-foreground
.hover:bg-primary/90
.focus-visible:ring-2
.disabled:opacity-50

/* Secondary Button */
.border
.border-primary
.text-primary
.hover:bg-primary/10
.focus-visible:ring-2

/* Destructive Button */
.bg-destructive
.text-destructive-foreground
.hover:bg-destructive/90
```

### Forms

```css
/* Input Base */
.h-10
.px-3
.py-2
.text-base
.bg-input
.border
.border-input
.rounded-md
.placeholder:text-muted-foreground

/* Input Focus */
.focus:border-primary
.focus:ring-1
.focus:ring-primary
.focus:outline-none

/* Input Disabled */
.disabled:bg-muted
.disabled:text-muted-foreground
.disabled:cursor-not-allowed
.disabled:opacity-50
```

### Cards

```css
/* Card Base */
.bg-card
.text-card-foreground
.rounded-lg
.border
.border-border
.shadow

/* Card Hover (Optional) */
.hover:shadow-lg
.hover:border-primary/50

/* Card Padding Variants */
.p-3  /* Compact */
.p-4  /* Standard */
.p-6  /* Spacious */
```

### Badges

```css
/* Default */
.bg-secondary
.text-secondary-foreground
.rounded-full
.px-3
.py-1
.text-sm
.font-medium

/* Status Badge */
.bg-accent
.text-accent-foreground

/* Destructive Badge */
.bg-destructive
.text-destructive-foreground
```

---

## Responsive Classes

### Grid Layouts

```css
/* 1 column on mobile, 2 on tablet, 3 on desktop */
.grid
.grid-cols-1
.sm:grid-cols-2
.lg:grid-cols-3

/* Flexible gaps */
.gap-2     /* Mobile */
.gap-4     /* Tablet/Desktop */
.md:gap-6
```

### Flexbox Layouts

```css
/* Stack on mobile, row on desktop */
.flex
.flex-col
.gap-4
.md:flex-row
.md:gap-6

/* Space-between for alignment */
.flex
.justify-between
.items-center
```

### Display & Visibility

```css
/* Hide on mobile, show on desktop */
.hidden
.md:block

/* Show on mobile, hide on desktop */
.md:hidden

/* Responsive text sizes */
.text-base
.md:text-lg
.lg:text-xl
```

### Width & Height

```css
/* Full width with padding */
.w-full
.px-4
.md:px-6
.lg:px-8

/* Container sizing */
.max-w-7xl
.mx-auto

/* Image aspect ratios */
.aspect-square
.aspect-video
.aspect-auto
```

---

## Dark Mode Implementation

### CSS Custom Properties Strategy

```css
/* Light mode (default in :root) */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
}

/* Dark mode */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.488 0.243 264.376);
}
```

### Tailwind Dark Mode Classes

```css
/* Usage in templates */
.dark:bg-background  /* Dark mode background */
.dark:text-foreground /* Dark mode text */

/* In Tailwind config */
darkMode: ['class', '.dark'],
```

### Dark Mode Toggle Implementation

```typescript
// Check system preference
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply dark class to html element
document.documentElement.classList.add('dark');
```

---

## Spacing Scale & Rhythm

### Standard Spacing Values

```css
/* CSS Variables */
--space-1:   0.25rem  /* 4px */
--space-2:   0.5rem   /* 8px */
--space-3:   0.75rem  /* 12px */
--space-4:   1rem     /* 16px */
--space-6:   1.5rem   /* 24px */
--space-8:   2rem     /* 32px */
--space-12:  3rem     /* 48px */
--space-16:  4rem     /* 64px */

/* Tailwind classes */
.p-2    /* 8px padding */
.p-4    /* 16px padding */
.gap-4  /* 16px gap */
.mb-6   /* 24px margin-bottom */
```

### Vertical Rhythm

```css
/* Line-height should be 1.5em for body text */
body {
  line-height: 1.5;  /* 24px for 16px text */
}

/* Margin/padding should align to 4px grid */
.h-1 = 4px
.h-2 = 8px
.h-3 = 12px
.h-4 = 16px
```

---

## Typography Rules

### Heading Hierarchy

```css
h1 {
  font-size: 1.875rem;  /* 30px */
  line-height: 1.2;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;    /* 24px */
  line-height: 1.3;
  font-weight: 700;
}

h3 {
  font-size: 1.25rem;   /* 20px */
  line-height: 1.4;
  font-weight: 600;
}

body, p {
  font-size: 1rem;      /* 16px */
  line-height: 1.5;     /* 24px */
  font-weight: 400;
}

small, .text-sm {
  font-size: 0.875rem;  /* 14px */
  line-height: 1.4;
}
```

### Font Weight Usage

```css
.font-normal      /* 400 - Body text */
.font-medium      /* 500 - Labels, secondary */
.font-semibold    /* 600 - Buttons, emphasis */
.font-bold        /* 700 - Headings, strong */
```

---

## Accessibility & Focus States

### Focus Visible (Keyboard Navigation)

```css
/* All interactive elements */
*:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

/* Tailwind utility */
.focus-visible:ring-2
.focus-visible:ring-offset-2
.focus-visible:ring-primary
```

### High Contrast Mode

```css
/* Support for high contrast mode */
@media (prefers-contrast: more) {
  :root {
    --border: oklch(0.2 0.01 240);
  }
}
```

### Reduced Motion

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Contrast Ratios

```
Text on background:     4.5:1 minimum
Large text (24px+):     3:1 minimum
Graphics & UI:          3:1 minimum
```

---

## Shadow & Elevation Rules

### Shadow Scale

```css
.shadow-none      /* No shadow */
.shadow-sm        /* Subtle: 0 1px 2px rgba(0,0,0,0.05) */
.shadow           /* Standard: 0 1px 3px rgba(0,0,0,0.1) */
.shadow-md        /* Medium: 0 4px 6px rgba(0,0,0,0.1) */
.shadow-lg        /* Large: 0 10px 15px rgba(0,0,0,0.1) */
.shadow-xl        /* Extra Large: 0 20px 25px rgba(0,0,0,0.1) */
```

### Elevation Usage

```css
/* Level 1: Base elements */
.shadow-sm

/* Level 2: Cards, standard elevation */
.shadow

/* Level 3: Floating elements, buttons on hover */
.shadow-md

/* Level 4: Modals, important overlays */
.shadow-lg

/* Level 5: Dropdowns, tooltips, menus */
.shadow-xl
```

---

## Animation & Transitions

### Transition Classes

```css
/* Duration */
.transition      /* 150ms default */
.duration-75
.duration-100
.duration-200    /* Recommended for UI */
.duration-300
.duration-500

/* Timing function */
.ease-in-out     /* Default */
.ease-in
.ease-out
.ease-linear

/* Property specific */
.transition-colors     /* Color changes */
.transition-opacity    /* Fade effects */
.transition-transform  /* Scale/move */
.transition-all        /* All properties */
```

### Animation Classes

```css
/* Tailwind animations */
.animate-pulse      /* Subtle pulsing */
.animate-spin       /* Loading spinner */
.animate-bounce     /* Attention-grabbing */

/* Custom animations */
.animate-fade-in    /* Custom: 200ms fade */
.animate-slide-up   /* Custom: 300ms slide */
```

### Disabled Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## Layer Organization

### Tailwind Layers

```css
@layer base {
  /* Default element styles */
  html, body, h1, h2, p, etc.
}

@layer components {
  /* Reusable component classes */
  .card { /* ... */ }
  .button { /* ... */ }
}

@layer utilities {
  /* Additional utility classes */
  .truncate-2 { /* ... */ }
}
```

### CSS Specificity

- Avoid `!important` unless necessary
- Use Tailwind utilities first
- Create components for repeated patterns
- Layer base < components < utilities

---

## Performance Optimization

### CSS Optimization

1. **Tree-shaking:** Tailwind removes unused classes in production
2. **Caching:** Critical CSS inlined; fonts preloaded
3. **Minification:** CSS minified for production
4. **Purging:** Unused selectors removed

### Image Optimization

```css
/* Use Next.js Image component */
<Image
  src={url}
  alt={alt}
  width={width}
  height={height}
  placeholder="blur"
  quality={75}
/>
```

### Font Loading

```css
/* Preload critical fonts */
<link
  rel="preload"
  href="/fonts/geist.woff2"
  as="font"
  type="font/woff2"
  crossOrigin
/>
```

---

## Implementation Checklist

- [ ] Copy template's `globals.css` to app
- [ ] Copy theme variables from template
- [ ] Update `tailwind.config.ts` with theme colors
- [ ] Implement dark mode toggle in ThemeProvider
- [ ] Import Geist fonts
- [ ] Set up CSS variables for colors
- [ ] Test responsive breakpoints
- [ ] Verify dark mode colors
- [ ] Check accessibility contrast ratios
- [ ] Test keyboard navigation
- [ ] Performance audit (Lighthouse)
