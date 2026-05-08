# Agent Instructions

## General Behavior

- **Role:** Senior Frontend Engineer focused on Clean Architecture and Type Safety.
- **Response Style:** Concise, results-oriented, and modular.
- **Decision Making:** Prioritize performance and maintainability. Always use TypeScript over JavaScript.

* Always prioritize simplicity, readability, and maintainability React best practices (functional components, hooks, composition).
* Follow a frontend-first architecture using local state and public APIs (optimistic updates, error handling, loading and empty states).
* Prefer functional and modular React patterns.
* Avoid unnecessary abstractions, overengineering, or enterprise patterns.
* Use TypeScript strictly with explicit typing whenever possible.
* Keep components small and reusable.
* Separate business logic from UI components.
* Prefer composition over inheritance.
* Use predictable folder structures and naming conventions.
* All generated code must be production-ready and consistent.

---

## Code Style

- Use arrow functions for components and utilities.
- Components defined with `export function ComponentName() {...}` or `export const ComponentName = () => {...}` as appropriate.
- Local state with `useState`, effects with `useEffect`, memoization with `useMemo`/`useCallback`.
- Zustand stores: create atomic or domain-scoped stores (cartStore, favoritesStore, searchStore). Use Zustand's `create` with full typing.
- TanStack Routes: follow file-based routing. Define routes with `createFileRoute`, loading data with `loader` and views with `component`.
- Tailwind: use utility classes, avoid custom CSS unless strictly necessary. Design mobile-first.
- Keep files focused on a single responsibility.
- API calls are encapsulated in async functions with try/catch error handling and return typed data use fetch not axios.
- Playwright tests will be written in the `e2e/` folder following the AAA pattern (Arrange, Act, Assert) and describing behavior from the user's perspective.
- Avoid files larger than 300 lines when possible.
- Suggested folder structure:
  - `src/routes/` (for TanStack routes)
  - `src/components/` (UI and business components)
  - `src/stores/` (Zustand stores)
  - `src/lib/` (helper functions, shared types)
  - `src/api/` (public API calls)
  - `src/types/` (data interfaces and types)
- Naming conventions:
  - Components: PascalCase
  - Hooks: camelCase with `use` prefix
  - Stores: camelCase with `Store` suffix
  - Utilities: camelCase
  - Constants: UPPER_SNAKE_CASE
- File naming:
  - React components: `ProductCard.tsx`
  - Hooks: `useCart.ts`
  - Stores: `cartStore.ts`
  - Pages: `products-page.tsx`

---

## UI Guideline

- Use a modern, clean and minimal ecommerce-inspired interface.
- Prioritize usability and responsive layouts.
- Mobile-first design approach.
- Use Tailwind spacing and layout utilities consistently.
- Maintain visual consistency across pages.
- Use reusable UI primitives whenever possible.
- Preferred UI patterns:
  - Product cards
  - Search bars
  - Category filters
  - Drawer cart
  - Toast notifications
  - Loading skeletons
- Use accessible HTML semantics.
- Ensure keyboard accessibility.
- Maintain sufficient color contrast.
- Keep animations subtle and performant.

---

## Data Handling

- The application is frontend-only.
- Use public ecommerce APIs as the data source.
- No custom backend should be implemented.
- Use local persistence when necessary:
  - LocalStorage
  - IndexedDB (optional)
- Zustand manages:
  - Cart state
  - Favorites state
  - User preferences
- Cache API responses when appropriate.
- Handle loading, empty, and error states explicitly.
- Never trust external API data shape without validation.
- Normalize API responses when needed.
- Avoid unnecessary refetching.
- Products are fetched from a public API (default: FakeStoreAPI: https://fakestoreapi.com/products).  
  Endpoints used: GET `/products`, GET `/products/categories`, GET `/products?limit=...`. Search and filtering are handled on the frontend after fetching all products (or using the limited endpoint if the API supports it).
- Cart and favorites state are stored in Zustand with localStorage persistence (using Zustand's `persist` middleware).
- Cart stores `{ productId, quantity }` and is enriched with full product data in selectors (merged with product cache).
- Favorites store `productId[]`.
- Product cache is managed in a separate store with a map `Record<number, Product>` to avoid repeated API calls and serve as the source of truth for product data.
- Local search: filters by title or category over cached products, implementing a 300ms debounce on the input.
- Purchase is simulated: a flow that empties the cart after a successful "checkout" and shows a confirmation message (possibly persisted as a mock order in an orders store).
- Loading, error, and empty states must be handled for every API call, propagating those states to the UI.

---

## Testing

- Use Playwright for end-to-end testing.
- Critical flows to test:
  - Product listing
  - Product search
  - Add to cart from list and detail view
  - Remove from cart adjust quantity
  - Favorites, remove, persistence on reload
  - Checkout simulation
  - Search products (debounce, results, no results).
  - Complete purchase (checkout) and verify empty cart and confirmation message.
- Tests should be deterministic and isolated.
- Use descriptive test names.
- Avoid flaky selectors.
- Prefer accessible selectors:
  - `getByRole`
  - `getByLabel`
  - `getByText`
- Include smoke tests for main routes.
- Validate responsive behavior for mobile and desktop.
- Tests are written using `test.describe` by functionality, with fixtures that simulate the UI.
- `page.route` is used to intercept API calls and mock test data, ensuring repeatability and speed.
- Tests are independent; each restores localStorage state before starting.

---

## Scope Control

- Keep the project intentionally simple.
- Do not introduce:
  - Microservices
  - Complex state machines
  - Backend infrastructure
  - Authentication systems
  - Payment gateways
  - Real order processing
- Checkout should be simulated only.
- Focus on core ecommerce functionality.
- Avoid premature optimization.
- Prefer simple solutions over scalable enterprise architecture.
- Use mock or public APIs instead of custom services.
- Only add dependencies when clearly justified.
- No admin routing or dashboard is added.
- If the user requests features outside this scope, point out they exceed the current scope and ask if they wish to expand it.
