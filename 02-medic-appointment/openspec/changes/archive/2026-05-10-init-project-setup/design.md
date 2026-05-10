## Context

This is a greenfield React SPA project for medical appointment management. All data is client-side with no backend API. The tech stack includes React 18, TanStack Router, TanStack Query, Zustand, Tailwind CSS, TypeScript, Vite, and pnpm package manager. Initial setup must establish the foundation for all subsequent feature development.

## Goals / Non-Goals

**Goals:**
- Initialize Vite with React 18 and TypeScript strict mode enabled
- Set up TanStack Router file-based routing with root layout
- Configure TanStack Query with QueryClient and provider hierarchy
- Initialize Zustand store pattern with example app state
- Configure Tailwind CSS with custom theme colors for medical context
- Create project directory structure following standard conventions
- Establish TypeScript path aliases for cleaner imports
- Create README with setup instructions

**Non-Goals:**
- Implement any appointment management features
- Create page components beyond root layout
- Set up authentication or user management
- Configure backend API integration
- Set up CI/CD or deployment
- Add testing framework (can be added later)

## Decisions

**1. Vite over Create React App**
- **Decision**: Use Vite as build tool
- **Rationale**: Faster dev server, faster builds, native ES modules, better DX with React 18
- **Alternative Considered**: Create React App (slower, more opinionated)

**2. TanStack Router over React Router**
- **Decision**: Use TanStack Router v1 with file-based routing
- **Rationale**: Type-safe routing, file-based structure reduces boilerplate, search params handling, loader pattern for data prefetching
- **Alternative Considered**: React Router (more mature, less type-safe)

**3. TanStack Query for server state**
- **Decision**: Use TanStack Query v5 for data fetching, caching, and synchronization
- **Rationale**: Automatic caching, stale-while-revalidate pattern, mutations with automatic refetch, excellent with localStorage
- **Alternative Considered**: Just Zustand (less feature-rich for data state)

**4. Zustand for app state**
- **Decision**: Zustand for UI state (modals, filters, loading indicators)
- **Rationale**: Lightweight, simple API, good for UI state separate from data state
- **Alternative Considered**: Redux, Jotai (overkill for app state)

**5. Tailwind CSS configuration**
- **Decision**: Custom theme with medical context colors (calming blues, health greens, warning reds)
- **Rationale**: Professional healthcare aesthetic, consistent color system
- **Alternative Considered**: Default Tailwind colors (too generic for medical app)

**6. TypeScript strict mode**
- **Decision**: Enable strict mode in tsconfig.json
- **Rationale**: Catches type errors early, better DX, required for TanStack Router type safety
- **Alternative Considered**: Normal mode (less safe)

**7. File structure organization**
- **Decision**: Separate concerns into `routes/`, `components/`, `queries/`, `mutations/`, `stores/`, `types/`, `utils/`, `hooks/`
- **Rationale**: Clear separation of concerns, scalable as app grows
- **Alternative Considered**: Flat structure (harder to navigate at scale)

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| TanStack Router file-based routing requires build-time generation | Use build scripts to generate routes, test thoroughly before first feature |
| TypeScript strict mode may slow initial development | Worth it for long-term maintainability; most slowdown is setup phase |
| localStorage persistence not suitable for large datasets | Monitor performance; migrate to IndexedDB if needed later |
| Zustand + TanStack Query split may be confusing | Clear documentation in README, examples in code comments |
| No backend means all logic client-side, limited scalability | Fine for MVP; migration path documented for future backend |

## Migration Plan

No migration needed - this is initial setup. After completion:
1. Project will be ready for feature development
2. No backwards compatibility concerns
3. Future changes can build directly on this foundation

## Open Questions

- Should we add ESLint/Prettier at setup time or leave for later? → Recommend: Later (simpler initial setup)
- Should we add Vitest for unit tests at setup time? → Recommend: Later (not blocking features)
- Do we need environment-based config? → Probably later when we add localStorage/API integration details
