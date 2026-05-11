# Development Agents & Standards

## Agent Behavior Guide

### Frontend Development Agent
- **Focus**: React components, UI implementation, state management with Zustand
- **Standards**: TypeScript-first, component composition, reusable patterns
- **Quality Gates**: Type safety, accessibility compliance, responsive design

### API Integration Agent
- **Focus**: Jikan API v4 integration, TanStack Query setup, data fetching
- **Standards**: Proper error handling, caching strategies, request optimization
- **Quality Gates**: API reliability, performance monitoring

### State Management Agent
- **Focus**: Zustand store design, local persistence with local2json
- **Standards**: Clear action names, immutable updates, middleware composition
- **Quality Gates**: State consistency, localStorage sync

## Coding Standards

### TypeScript Conventions
- Use strict mode enabled
- Define interfaces for all data structures
- Avoid `any` type; use generics where applicable
- Export types alongside implementations

### Component Patterns
- Functional components with hooks
- Props interface definition required
- Memoization for expensive renders
- Clear separation of concerns

### Naming Conventions
- Components: PascalCase (e.g., `MangaCard`)
- Functions/variables: camelCase (e.g., `fetchMangaDetails`)
- Constants: UPPER_SNAKE_CASE (e.g., `MAX_PAGE_SIZE`)
- Stores: descriptive names (e.g., `useMangaLibrary`)

### File Organization
- Components in `/src/components/`
- Pages in `/src/pages/`
- Hooks in `/src/hooks/`
- Stores in `/src/stores/`
- Types in `/src/types/`
- Utils in `/src/utils/`

## UI/UX Guidelines

### Responsive Design
- Mobile-first approach
- Support for mobile, tablet, desktop viewports
- Touch-friendly interface elements

### Accessibility
- WCAG 2.1 Level AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support

### Design Consistency
- Consistent spacing and typography
- Color palette adherence
- Component library reusability
- Visual hierarchy clarity

## Performance Standards

### React Optimization
- Code splitting by route
- Lazy loading for images
- Memoization for expensive computations
- Avoid unnecessary re-renders

### API Efficiency
- Cache management with TanStack Query
- Request deduplication
- Pagination for large lists
- Error boundary implementation
