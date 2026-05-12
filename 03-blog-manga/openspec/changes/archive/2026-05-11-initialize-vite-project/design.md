## Context

The Manga Blog Application requires a modern development environment. Currently, there's no initialized project - no Vite setup, no TypeScript configuration, no src structure, and no verified tech stack. The project exists as a git repository with comprehensive specifications but no runnable application.

Design specifications are documented in:
- `openspec/specs/ui/design-system.md` - Color palette, typography, spacing, accessibility standards
- `openspec/specs/ui/pages-components.md` - 7-page architecture and component designs
- `openspec/specs/ui/style-rules.md` - CSS implementation patterns and Tailwind configuration

We need to initialize the project structure that implements these specifications, creating the foundation for building the design system into the application.

**Current State:**
- Repository initialized with git
- OpenSpec specs and assumptions documented in openspec/specs/
- Complete UI design system specifications created
- No working development environment

**Constraints:**
- Must use Vite (fast build system)
- Must support React 19+ with TypeScript
- Must implement Tailwind CSS per openspec/specs/ui/design-system.md color palette
- Must follow directory structure outlined in openspec/specs/ui/pages-components.md
- Must adhere to CSS rules from openspec/specs/ui/style-rules.md
- Must support hot module replacement for development
- Must use strict TypeScript mode
- Must target modern browsers (latest 2 versions)

## Goals / Non-Goals

**Goals:**
1. Initialize a fully functional Vite + React + TypeScript project structure
2. Set up Tailwind CSS with OKLch color system per openspec/specs/ui/design-system.md
3. Create complete src/ directory structure (components, pages, stores, hooks, types, utils, styles)
4. Configure path aliases (@/ for imports)
5. Set up dev, build, and preview scripts
6. Verify project compiles without errors
7. Verify dev server runs and supports hot reload
8. Create minimal App.tsx to prove routing/rendering works
9. Document the project setup with reference to design specifications

**Non-Goals:**
- Building individual pages or features (those come after verification)
- Creating components beyond entry point
- Setting up authentication or backend
- Creating database schemas
- Building blog content system
- Implementing actual features

## Decisions

### 1. Build Tool: Vite (not webpack, Parcel, esbuild)
**Rationale:** Vite offers fastest dev server (instant HMR), smaller config, native ESM support, and excellent TypeScript integration. Aligns with modern React ecosystem standards.

**Alternatives Considered:**
- Next.js: Overkill for this project, adds unnecessary overhead
- Webpack: Too complex for initial setup, slower dev server
- Parcel: Less mature ecosystem, fewer TypeScript integrations

### 2. React Version: React 19 + TypeScript 5.x
**Rationale:** Latest stable versions provide best developer experience, type safety, and performance. React 19 has improved server components and hydration. TypeScript 5 provides better type inference.

**Alternatives Considered:**
- React 18: Stable but older, missing improvements
- JavaScript only: Loses type safety and IDE support

### 3. Styling: Tailwind CSS 4 with CSS Variables
**Rationale:** Implements OKLch color system defined in openspec/specs/ui/design-system.md via CSS variables. Supports dynamic theming (light/dark mode), design system consistency, and minimal CSS. CSS variables allow for seamless theme switching referenced in style-rules.md.

**Alternatives Considered:**
- Styled Components: More boilerplate, larger bundle
- CSS Modules: Less maintainable for design systems
- Inline styles: No reusability, poor performance

### 4. Directory Structure: Feature-based with Shared Utilities
**Rationale:** Clean separation between pages (routes), components (reusable), stores (state), hooks (logic), and utils (shared functions). Easy to find and modify related code.

**Structure:**
```
src/
├── app/                 # App entry point & layouts
├── pages/              # Page components (route-based)
├── components/         # Reusable UI components
├── components/ui/      # Shadcn UI components
├── stores/             # Zustand stores
├── hooks/              # Custom React hooks
├── types/              # TypeScript interfaces
├── utils/              # Utility functions & helpers
├── styles/             # Global styles & CSS variables
├── config/             # Configuration files
└── lib/                # Library functions & constants
```

**Alternatives Considered:**
- Monolithic src/ with everything flat: Hard to navigate, poor organization
- Barrel structure (index.ts everywhere): Slower builds, circular dependency risks

### 5. State Management: Zustand (configured, not implemented)
**Rationale:** Simple, lightweight store system. No boilerplate. Directly referenced in project spec. Stores folder created but populated only when features are built.

**Alternatives Considered:**
- Redux: Too much boilerplate for this project size
- Jotai/Recoil: Overkill for simple state needs

### 6. Routing: TanStack Router (configured, not implemented)
**Rationale:** Modern file-based router, supports nested routes. Part of TanStack ecosystem. Configuration structure created, actual routes added during feature implementation.

**Alternatives Considered:**
- React Router: Older, more verbose
- Remix: Server-side focus, not needed here

### 7. TypeScript Configuration: Strict Mode Enabled
**Rationale:** Catch errors at compile time. Better IDE support. Required by design system specs.

**Config:**
```json
{
  "strict": true,
  "strictNullChecks": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
}
```

### 8. Path Aliases: @ for src directory
**Rationale:** Cleaner imports (e.g., `@/components/MangaCard` instead of `../../../components/MangaCard`). Easier to refactor. Standard React convention.

**Configuration:**
```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## Risks / Trade-offs

### Risk: Vite's Caching in Development
**Impact:** Medium - occasional HMR failures requiring full page reload  
**Mitigation:** Document in dev guide; Clear node_modules/.vite if persistent issues

### Risk: TypeScript Strict Mode May Slow Initial Development
**Impact:** Low - type definitions needed upfront but prevents bugs later  
**Mitigation:** Accept as best practice; use type assertions only when necessary

### Risk: CSS Variables Performance in Dark Mode Toggle
**Impact:** Low - CSS variable lookup on each property  
**Mitigation:** CSS variables are native browser feature, fully optimized; no performance penalty

### Risk: TanStack Router Learning Curve
**Impact:** Low - routes added during feature work, not critical path for initial setup  
**Mitigation:** Use simple route structure initially; advance patterns added as needed

### Trade-off: Minimal App.tsx vs. Pre-built Pages
**Impact:** Takes extra step to build actual features  
**Rationale:** Better to verify stack works before building features; avoids scope creep

## Decisions Summary

| Decision | Choice | Reason |
|----------|--------|--------|
| Build Tool | Vite | Fast dev server, ESM native |
| React Version | 19.x | Latest, best DX |
| TypeScript | 5.x strict | Type safety |
| CSS | Tailwind 4 + CSS vars | Design system alignment |
| State | Zustand | Simple, lightweight |
| Routing | TanStack Router | Modern, nested routes |
| Structure | Feature-based | Clean separation, scalable |
| Paths | @ alias | Clean imports |

## Open Questions

1. Should we include Shadcn UI setup in this phase or wait until first feature?
   - **Answer:** Include folder structure for ui/ components; actual shadcn CLI setup deferred to feature implementation

2. Do we need environment variables (.env.local)?
   - **Answer:** Create .env.example with Jikan API endpoint; implement .env handling during API integration phase

3. Should src/config/ include router configuration?
   - **Answer:** Yes, create router config structure; populate with actual routes during feature implementation
