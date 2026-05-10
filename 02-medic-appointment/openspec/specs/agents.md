# Agent Behavior & Coding Standards

## Agent Guidelines

### Code Quality Standards
- **Language**: TypeScript with strict mode enabled
- **Framework**: React 18+ with functional components and hooks
- **State Management**: Zustand for global state
- **Styling**: Tailwind CSS with utility-first approach
- **Type Safety**: Strict typing throughout, no `any` unless unavoidable
- **Testing**: Unit tests for utilities and state logic, optional component tests

### React Component Guidelines
- Use functional components exclusively
- Leverage hooks: `useState`, `useEffect`, `useCallback`, `useMemo` as needed
- Keep components focused and single-responsibility
- Extract custom hooks for reusable logic
- Prop drilling should be minimal (use Zustand for shared state)

### State Management
**Zustand** (App/UI State):
- Create focused stores for app state (UI, filters, modals)
- Use selectors to prevent unnecessary re-renders
- Keep store actions simple and pure
- Document store interfaces clearly

**TanStack Query** (Server/Data State):
- Use queries for fetching appointment and doctor data
- Use mutations for booking, cancelling, rescheduling
- Leverage automatic caching and synchronization
- Use `useQuery` and `useMutation` hooks for data operations
- Keep query keys organized and consistent
- Handle loading and error states with Query state

### Styling with Tailwind CSS
- Use responsive classes (sm:, md:, lg:, xl:)
- Apply consistent spacing using Tailwind's scale
- Use semantic color naming (primary, secondary, danger, success)
- Avoid custom CSS unless absolutely necessary
- Ensure accessible color contrast ratios

### File Organization
```
src/
├── routes/          # TanStack Router file-based routes
│   ├── __root.tsx
│   ├── index.tsx
│   ├── appointments/
│   ├── doctors/
│   └── bookings/
├── components/      # Reusable components
├── stores/          # Zustand stores
├── queries/         # TanStack Query definitions
├── mutations/       # TanStack Query mutations
├── types/           # TypeScript types and interfaces
├── utils/           # Utility functions
└── hooks/           # Custom React hooks
```

### Routing (TanStack Router)
- Use file-based routing in `src/routes/`
- Define routes as `.tsx` files
- Use route parameters for dynamic segments
- Leverage loader functions for data prefetching
- Support lazy loading of route components
- Use search params for filtering and pagination

### TypeScript Conventions
- Define interfaces for all data structures
- Use explicit return types on functions
- Avoid type inference ambiguity
- Use `readonly` for immutable data

## UI/Design Standards
- Clean, minimal design aligned with medical/healthcare aesthetic
- Consistent spacing and typography
- Clear visual hierarchy
- Accessible buttons and interactive elements (min 44px tap targets)
- Responsive design mobile-first approach
- Loading states and error states clearly communicated

## TEST 
- alway finish the feature check the test pass an the app can build

## Documentation
- JSDoc comments for complex functions
- Type definitions serve as primary documentation
- Comments explain WHY, not WHAT
- Keep README updated with setup and feature documentation
