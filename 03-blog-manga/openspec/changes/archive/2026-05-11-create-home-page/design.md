## Context

The MangaVerse application is a React + TypeScript + Tailwind CSS project with Vite as the build tool. The project has established design patterns and a style guide. The home page is the primary entry point and will set the visual and interaction patterns for the rest of the application.

Current state: Basic project setup is complete with routing infrastructure ready. No home page component exists yet.

## Goals / Non-Goals

**Goals:**
- Create a visually distinctive home page that showcases MangaVerse branding
- Implement responsive design that works across desktop, tablet, and mobile
- Build reusable components (manga cards, genre buttons) for use elsewhere in the app
- Establish dark theme implementation pattern for consistent application styling
- Demonstrate Jikan-inspired API stats display pattern

**Non-Goals:**
- Actual backend API integration (use mock data for now)
- Advanced animations or transitions beyond basic hover states
- SEO optimization (can be added later)
- Accessibility audit beyond WCAG basic guidelines
- Real-time data updates or streaming

## Decisions

### 1. Component Architecture
**Decision**: Use a modular component structure with feature-specific folders
- `Home.tsx` - main page component
- `Header.tsx` - navigation header (reusable)
- `HeroSection.tsx` - stats display
- `LatestReleasesGrid.tsx` - manga cards grid
- `MangaCard.tsx` - individual card component (reusable)
- `PopularSection.tsx` - trending manga section
- `GenreBrowser.tsx` - genre navigation
- `Footer.tsx` - footer (reusable)

**Rationale**: This enables component reuse across pages and keeps concerns separated. Makes testing and maintenance easier.

**Alternatives considered**: 
- Monolithic Home component - simpler initially but harder to maintain and test
- Separate UI library - adds complexity not needed at this stage

### 2. Dark Theme Implementation
**Decision**: Use Tailwind's dark mode variant system with CSS variables for colors
- Define dark theme palette in `tailwind.config.ts`
- Use `dark:` prefix for dark-specific styles
- Store theme state in context/provider if needed for toggle later

**Rationale**: Tailwind's built-in dark mode is lightweight and integrates well with the existing setup. CSS variables allow future theme customization.

**Alternatives considered**:
- CSS-in-JS (emotion/styled-components) - adds runtime overhead
- Hardcoded dark colors - less maintainable and harder to change

### 3. Data Structure for Manga
**Decision**: Use TypeScript interfaces for type safety with mock data arrays
```typescript
interface Manga {
  id: string;
  title: string;
  coverUrl: string;
  genres: string[];
  status: 'ongoing' | 'completed' | 'hiatus';
  description: string;
  rating?: number;
  chapterCount?: number;
}
```

**Rationale**: Establishes contract for real API integration later. TypeScript ensures type safety.

### 4. Responsive Grid Layout
**Decision**: Use Tailwind grid utilities with responsive breakpoints
- Desktop: 5-column grid for Latest Releases
- Tablet: 3-column grid
- Mobile: 1-2 column grid

**Rationale**: Tailwind's responsive classes handle all breakpoints without custom media queries. Uses established grid patterns.

### 5. Genre Navigation UX
**Decision**: Genre buttons that filter/highlight, with "All" button as default
- Interactive button group showing available genres
- Visual feedback on active selection
- Can expand to filter latest releases later

**Rationale**: Simple, intuitive UX pattern. Supports future filtering functionality without architectural changes.

## Risks / Trade-offs

**Risk**: Mock data won't reflect real API structure
- **Mitigation**: Define interfaces based on Jikan API spec; mock data follows real structure. Minimal refactoring needed for real API.

**Risk**: Dark theme only - may need light theme support later
- **Mitigation**: Tailwind's dark mode architecture supports adding light theme easily without rewriting.

**Risk**: Hero stats are hardcoded values
- **Mitigation**: Extract to configuration object; trivial to wire to real API later.

**Risk**: No image optimization for manga covers
- **Mitigation**: Use Next.js Image component or React image lazy-loading later; basic `<img>` tags sufficient for MVP.

**Risk**: Component testing coverage
- **Mitigation**: Establish testing patterns with first components; can be retrofitted for all components.

## Migration Plan

1. Create all component files in `src/components/home/` directory
2. Implement mock data in `src/data/mockManga.ts`
3. Build components bottom-up: MangaCard → Grid/Section components → Layout component → Home page
4. Update `src/App.tsx` or router to include home page route
5. Test responsive design at breakpoints
6. Verify dark theme applies correctly across all sections
7. No deployment concerns - purely frontend feature

## Open Questions

- Should the hero stats be clickable to navigate to stats/analytics pages? not for now.
- Should genre tags on manga cards be clickable to filter other content? yes.
- Do we want infinite scroll or pagination for Latest Releases? no.
- Should Popular This Season show different content based on actual manga data (with filters)? yes.
