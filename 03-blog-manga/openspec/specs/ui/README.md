# UI Design System - Manga Blog Application

## Overview

This folder contains comprehensive UI specifications, design system guidelines, and styling rules for the Manga Blog Application. All documentation is based on the template's Shadcn UI + Tailwind CSS architecture.

---

## Folder Contents

### 📄 design-system.md
**Complete design system specification**

Covers:
- Color palette (dark manga theme + light mode)
- CSS variables and color mapping
- Typography (fonts, sizes, weights, line-heights)
- Spacing system (4px base unit)
- Border radius scale
- Shadow & elevation levels
- Component sizing (buttons, inputs, cards)
- Responsive breakpoints
- Dark mode implementation
- Accessibility standards (WCAG 2.1 AA)
- Animation & transitions
- Density & whitespace patterns

**Key Features:**
- Complete color reference table
- Font stack and sizing scale
- Spacing rhythm guidelines
- Elevation system
- Browser support matrix
- Success metrics

---

### 📄 pages-components.md
**Page architecture and component design specifications**

Covers 7 main pages:

1. **Home Page** (`/`)
   - Hero section with CTA
   - Featured manga grid
   - Call-to-action sections
   - Footer

2. **Explore Page** (`/explore`)
   - Advanced filtering (Jikan API v4)
   - Search functionality
   - Genre, status, type, year, score filters
   - Paginated results grid

3. **Details Page** (`/manga/[id]`)
   - Comprehensive manga information
   - Rating and status input
   - Related manga recommendations
   - Tabbed interface (Overview, Reviews, Stats)

4. **My Library Page** (`/library`)
   - Personal collection management
   - Grid and list view modes
   - Status tracking (Reading, Completed, On Hold, Dropped)
   - Rating management
   - Empty state handling

5. **Blog Page** (`/blog`)
   - Static article listing
   - Featured articles section
   - Article detail view
   - Search functionality

6. **Settings Page** (`/settings`)
   - Theme selection (light/dark/system)
   - Language preference
   - Notification toggles
   - Save/reset controls

7. **404 Error Page** (`/404`)
   - Error messaging
   - Navigation suggestions
   - Return to home CTA

**Additional Sections:**
- Reusable component patterns (MangaCard, FilterSection, LibraryCard, ArticleCard)
- Responsive design strategy (mobile-first)
- Loading & empty states
- Interaction patterns
- Performance considerations (image optimization, code splitting)

---

### 📄 style-rules.md
**CSS architecture and styling guidelines**

Covers:
- CSS file structure and organization
- Tailwind CSS configuration
- CSS variables usage and application
- Color application rules (text, background, borders, states)
- Component styling patterns (buttons, forms, cards, badges)
- Responsive classes (grid, flexbox, display, sizing)
- Dark mode implementation
- Spacing scale & rhythm
- Typography rules
- Accessibility & focus states
- Shadow & elevation rules
- Animation & transitions
- Layer organization
- Performance optimization

**Key Sections:**
- Tailwind layer strategy (@layer base/components/utilities)
- CSS variable color mapping
- Dark mode toggle implementation
- Focus visible patterns
- High contrast & reduced motion support
- Shadow elevation scale
- Animation best practices
- Implementation checklist

---

## Quick Reference

### Color Variables

**Dark Mode (Primary)**
```css
--background: oklch(0.13 0.01 240)      /* Very dark blue */
--foreground: oklch(0.95 0 0)           /* White */
--primary: oklch(0.75 0.15 180)         /* Cyan/teal */
--card: oklch(0.18 0.01 240)            /* Dark blue */
```

**Light Mode**
```css
--background: oklch(1 0 0)              /* White */
--foreground: oklch(0.145 0 0)          /* Dark gray */
--primary: oklch(0.205 0 0)             /* Dark blue/black */
--card: oklch(1 0 0)                    /* White */
```

### Typography

```
Font Stack:    Geist, Geist Fallback, system fonts
Base Size:     16px (1rem)
Line Height:   1.5 (24px)
Base Weight:   400 (normal)
Heading Weight: 700 (bold)
```

### Spacing

```
Base Unit:     4px (0.25rem)
Common Sizes:  p-2 (8px), p-4 (16px), p-6 (24px)
Gap Values:    gap-2 (8px), gap-4 (16px), gap-6 (24px)
```

### Border Radius

```
Small:   4px    (rounded-sm)
Medium:  8px    (rounded-lg) - Standard
Large:   12px   (rounded-xl)
Full:    9999px (rounded-full)
```

### Responsive Breakpoints

```
Mobile:   < 640px    (no prefix)
Tablet:   640-1024px (sm:, md:)
Desktop:  >= 1024px  (lg:, xl:)
Large:    >= 1536px  (2xl:)
```

---

## Implementation Guide

### 1. Setup Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Copy Styles from Template
- Copy `template/app/globals.css` → `app/globals.css`
- Copy color variables and theme configuration
- Update `tailwind.config.ts` with CSS variables

### 3. Configure Dark Mode
```typescript
// tailwind.config.ts
export default {
  darkMode: ['class', '.dark'],
  // ... other config
}
```

### 4. Implement Theme Provider
```typescript
// components/theme-provider.tsx
export function ThemeProvider({ children }) {
  // Handle light/dark mode toggle
  // Persist preference to localStorage
}
```

### 5. Test Responsive Design
- Test at 375px (mobile)
- Test at 640px (tablet)
- Test at 1024px (desktop)
- Test dark/light modes
- Test keyboard navigation

### 6. Accessibility Audit
- Check color contrast (4.5:1 for text)
- Test keyboard navigation
- Test with screen reader
- Verify ARIA labels
- Check focus indicators

---

## Component Library Reference

All pre-built components available from `/template/components/ui/`:

**Form Components:**
- Input, Textarea, Select
- Checkbox, Radio, Toggle
- Label, Field, Form

**Layout Components:**
- Card, Container, Separator
- Alert, Badge
- Sidebar, Navigation, Tabs

**Overlay Components:**
- Dialog, Alert Dialog, Drawer
- Popover, Tooltip, Dropdown Menu
- Context Menu, Sheet

**Data Display:**
- Table, List, Item
- Pagination, Carousel
- Chart, Progress, Skeleton

**Feedback:**
- Toast, Toaster, Sonner
- Spinner, Loading States
- Empty States

**Navigation:**
- Button, Button Group, Link
- Breadcrumb, Menu Bar
- Navigation Menu, Hover Card

---

## Theme Customization

### Changing Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.75 0.15 180);  /* Cyan */
  /* Change to your color */
  --primary: oklch(0.75 0.15 120);  /* Green */
}

.dark {
  --primary: oklch(0.75 0.15 120);  /* Dark mode green */
}
```

### Changing Fonts

Update `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'fallback'],
    },
  },
}
```

Then load fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap');
```

### Changing Spacing

Update CSS variables:

```css
:root {
  --radius: 0.5rem;  /* 8px default */
  /* Change to 1rem for larger radius */
  --radius: 1rem;
}
```

---

## Best Practices

### ✅ Do's
- Use Tailwind utilities first
- Follow spacing scale (4px units)
- Maintain color contrast (4.5:1)
- Test responsive layouts
- Use semantic HTML
- Support dark mode
- Optimize images
- Lazy load components
- Test keyboard navigation
- Use CSS variables for theming

### ❌ Don'ts
- Avoid inline styles
- Don't use arbitrary colors (use variables)
- Don't break semantic HTML
- Don't skip alt text for images
- Don't forget focus states
- Don't ignore mobile experience
- Don't use color alone for meaning
- Don't animate everything
- Don't hardcode theme colors
- Don't ignore performance

---

## Resources

### Template Files
- `template/app/globals.css` - Base styles
- `template/components.json` - Shadcn config
- `template/components/ui/` - Component library
- `template/package.json` - Dependencies

### External References
- [Shadcn UI Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [OKLCH Color Space](https://oklch.evilmartians.io)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Updates & Maintenance

### When to Update
- Color scheme changes
- New component additions
- Breaking design changes
- Accessibility improvements
- Browser support updates

### How to Update
1. Edit relevant specification file
2. Update corresponding implementation
3. Test across all pages
4. Document breaking changes
5. Update version in MEMORY.md

---

## Design System Version

**Version:** 1.0  
**Last Updated:** 2026-05-11  
**Next Review:** 2026-08-11  
**Maintained By:** Design System Team

---

## Questions & Support

For questions about:
- **Design System:** See design-system.md
- **Page Layouts:** See pages-components.md
- **CSS Implementation:** See style-rules.md
- **Shadcn UI:** Visit template/components/ui/
- **Tailwind CSS:** Visit tailwindcss.com

---

## Navigation

Back to main specs:
- [agents.md](../agents.md) - Development standards
- [project.md](../project.md) - Project specification
- [assumptions.md](../assumptions.md) - Decisions & assumptions
