## Context

Building a lightweight, type-safe e-commerce frontend SPA that demonstrates modern React patterns. The application must be fast, maintainable, and suitable for learning. Stack: Vite (fast bundling), React 18 (composition), TanStack Router (type-safe routing), Zustand (minimal state management), Tailwind CSS (utility-first styling), FakeStoreAPI (public data source), Playwright (user-focused testing), TypeScript strict mode.

## Goals / Non-Goals

**Goals:**
- Establish a clean, modular frontend architecture that's easy to understand and extend
- Implement all core e-commerce flows: listing, search, cart, favorites, checkout
- Ensure type safety with TypeScript strict mode throughout
- Achieve fast build and dev performance with Vite
- Provide comprehensive E2E test coverage of user-critical flows
- Use public APIs only (FakeStoreAPI, LocalStorage, no backend)
- Create reusable, accessible UI components

**Non-Goals:**
- Backend implementation or API server
- User authentication or accounts
- Payment processing or real transactions
- Admin dashboard or content management
- Analytics or tracking
- Dark mode (focus on light theme)
- Internationalization (English only)

## Decisions

### 1. **Vite + React 18 + TypeScript Strict Mode**
**Why:** Vite offers instant HMR and fast builds. React 18 with TypeScript strict enables modern patterns with full type safety, catching errors at compile time.
**Alternatives considered:** Webpack (slower), Create React App (less control), JavaScript (lose type safety).
**Rationale:** Speed + type safety + modern DX = faster iteration and fewer bugs.

### 2. **TanStack Router over React Router**
**Why:** TanStack Router provides file-based routing, route loaders with data preloading, automatic code splitting, and superior TypeScript support.
**Alternatives considered:** React Router (imperative, less type-safe), Remix (requires backend).
**Rationale:** File-based routing is more maintainable; loaders prevent waterfall requests; type-safe route params eliminate bugs.

### 3. **Zustand for State Management**
**Why:** Minimal boilerplate, no Provider setup, hooks-based, great TypeScript support, built-in `persist` middleware for localStorage.
**Alternatives considered:** Redux (overkill, verbose), Context API (no persistence, harder to debug), Jotai (more distributed).
**Rationale:** For a client-side SPA, Zustand's simplicity and persistence out-of-box reduce complexity without sacrificing clarity.

### 4. **Separate Stores: Cart, Favorites, Product Cache**
**Why:** Atomic stores keep concerns separate and allow selective persistence (cache doesn't need to persist, cart/favorites do).
**Rationale:** Better composability; easier to reason about state updates; each store has a single responsibility.

### 5. **FakeStoreAPI + Client-Side Caching**
**Why:** Public, free API; no authentication. Product cache in Zustand prevents refetching and serves as the single source of truth for product data.
**Rationale:** Frontend-only, no backend dependency. Cache ensures cart/favorites enrichment is always fast.

### 6. **Tailwind CSS + Mobile-First Design**
**Why:** Utility-first approach minimizes custom CSS; mobile-first ensures responsive works on all devices; rapid UI iteration.
**Rationale:** Reduces CSS maintenance; consistent spacing and colors; easy for teams to adopt.

### 7. **LocalStorage for Persistence**
**Why:** Simple, synchronous, sufficient for cart and favorites on single device.
**Alternatives considered:** IndexedDB (overkill), SessionStorage (lost on close).
**Rationale:** Fast enough for this scope; no complexity needed.

### 8. **Playwright for E2E Testing**
**Why:** Cross-browser, user-focused selectors (getByRole, getByLabel), mocks API via `page.route`, deterministic and fast.
**Rationale:** Tests user behavior, not implementation; API mocking ensures repeatability.

### 9. **Modular Folder Structure**
```
src/
  routes/           # TanStack Router file-based routes
  components/       # Reusable UI and business components
  stores/           # Zustand stores (cart, favorites, products)
  api/              # API client functions
  lib/              # Utilities, helpers, shared types
  types/            # Data interfaces
  App.tsx           # Root component
  main.tsx          # Entry point
```
**Rationale:** Clear separation of concerns; easy to navigate; scales well.

### 10. **Fetch API instead of Axios**
**Why:** Native browser API; less overhead; modern async/await syntax.
**Rationale:** Reduces dependency count; sufficient for this scope.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **FakeStoreAPI Downtime** → Product catalog unreachable | Document API in README; consider fallback mock data. Not critical for learning/demo. |
| **No Backend** → Cannot handle real order/payment processing | Checkout is simulated only. Scope clearly defined in proposal. |
| **Single Device State** → Cart/favorites lost on browser clear or new device | LocalStorage is sufficient for this scope. Document in UI or README. |
| **Large Product Dataset** → Performance degradation with many products | FakeStoreAPI has ~20 products; client-side filtering works fine. Revisit if API changes. |
| **Testing Flakiness** → Playwright tests depend on API mocking stability | Mock all API calls; use stable selectors; isolate tests. |
| **TypeScript Strict Mode** → Slower initial development | Catches bugs early; reduces bugs in long term. Worth the upfront cost. |

## Migration Plan

1. Initialize Vite project with React, TypeScript, Router dependencies
2. Set up Tailwind CSS and linting (ESLint, Prettier)
3. Create folder structure
4. Implement Zustand stores with persistence
5. Build API client and product cache
6. Create routes and pages
7. Build UI components
8. Implement search, cart, favorites, checkout flows
9. Add Playwright tests
10. Document in README

## Open Questions

- Should search include category filtering or keyword only? → **Decision:** Both. Keyword + category dropdown on product listing.
- How many products to load initially? → **Decision:** Load all from FakeStoreAPI (~20), paginate with "Load More" button.
- Should cart display product images? → **Decision:** Yes, thumbnails in drawer for visual feedback.
- Error handling for API failures? → **Decision:** Toast notifications + fallback UI state.
