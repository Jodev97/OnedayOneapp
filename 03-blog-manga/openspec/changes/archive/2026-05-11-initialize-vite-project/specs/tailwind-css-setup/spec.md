## ADDED Requirements

### Requirement: Tailwind CSS Installation and Configuration
The system SHALL include Tailwind CSS v4 with a configuration file that defines the design system colors, spacing, and typography.

#### Scenario: Tailwind CSS classes work in components
- **WHEN** developer uses Tailwind class (e.g., `className="px-4 py-2 bg-primary"`)
- **THEN** styles are applied correctly to the element

#### Scenario: CSS variables resolve from config
- **WHEN** application runs
- **THEN** CSS variables (--primary, --background, etc.) are available to all stylesheets

#### Scenario: Build includes only used styles
- **WHEN** production build completes
- **THEN** CSS file only contains styles for classes actually used in the application (tree-shaking)

### Requirement: Design System Color Palette
The system SHALL define and apply the design system colors (from template) with support for light and dark modes using CSS variables.

#### Scenario: Dark mode colors apply
- **WHEN** `.dark` class is added to html element
- **THEN** CSS variables update to dark mode values (background: oklch(0.13 0.01 240), foreground: oklch(0.95 0 0), etc.)

#### Scenario: Light mode colors apply
- **WHEN** `.dark` class is removed
- **THEN** CSS variables reset to light mode values (background: oklch(1 0 0), foreground: oklch(0.145 0 0), etc.)

#### Scenario: Components use semantic color names
- **WHEN** developer applies color class like `bg-card` or `text-foreground`
- **THEN** correct color from palette is applied based on current theme

### Requirement: Custom CSS Variables
The system SHALL expose CSS custom properties for colors, spacing, and typography that match the design system specification.

#### Scenario: All design system colors available
- **WHEN** developer inspects CSS variables in browser DevTools
- **THEN** all colors defined in design system are available (primary, secondary, accent, destructive, muted, border, input, ring, sidebar variants, chart colors)

#### Scenario: Radius variable controls border radius
- **WHEN** elements use rounded utilities (rounded-sm, rounded-md, rounded-lg, rounded-xl)
- **THEN** radius values scale based on --radius CSS variable

#### Scenario: Sidebar colors available
- **WHEN** sidebar component uses sidebar-related classes
- **THEN** sidebar-specific colors (sidebar, sidebar-foreground, sidebar-primary, etc.) apply correctly

### Requirement: Font Configuration
The system SHALL configure the Geist font family as primary sans-serif and Geist Mono as monospace.

#### Scenario: Geist font loads
- **WHEN** application loads
- **THEN** Geist font is used for body text and headings

#### Scenario: Fallback fonts work
- **WHEN** Geist font fails to load
- **THEN** system fonts provide acceptable fallback (Geist Fallback, system-ui, -apple-system, sans-serif)

#### Scenario: Mono font for code
- **WHEN** code or pre elements are rendered
- **THEN** Geist Mono font is applied

### Requirement: Dark Mode Toggle Support
The system SHALL support switching between light and dark modes by toggling the `.dark` class on the document root.

#### Scenario: Theme toggle changes colors immediately
- **WHEN** `.dark` class is toggled on html element
- **THEN** all colors update instantly without page reload

#### Scenario: Preference persists across sessions
- **WHEN** user sets theme preference (via settings page)
- **THEN** preference is saved to localStorage and restored on reload

#### Scenario: System preference detected on first load
- **WHEN** application first loads
- **THEN** theme is set based on system preference (prefers-color-scheme media query) if no saved preference exists

### Requirement: Responsive Utilities
The system SHALL provide responsive breakpoint utilities for mobile-first responsive design.

#### Scenario: Mobile styles apply by default
- **WHEN** no breakpoint prefix is used (e.g., `px-4`)
- **THEN** style applies to mobile viewport (< 640px)

#### Scenario: Breakpoint prefixes work
- **WHEN** breakpoint prefixes are used (sm:, md:, lg:, xl:, 2xl:)
- **THEN** styles apply at corresponding viewport widths (640px, 768px, 1024px, 1280px, 1536px)

#### Scenario: Grid columns change with viewport
- **WHEN** grid layout uses responsive columns (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **THEN** number of columns increases on larger screens

### Requirement: PostCSS Integration
The system SHALL include PostCSS with Tailwind and Autoprefixer plugins for CSS processing.

#### Scenario: Tailwind directives are processed
- **WHEN** stylesheets use @tailwind directives
- **THEN** Tailwind injects utilities, components, and base styles

#### Scenario: Vendor prefixes are added
- **WHEN** CSS properties require vendor prefixes
- **THEN** Autoprefixer automatically adds them for browser compatibility
