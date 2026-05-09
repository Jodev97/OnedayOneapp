## Why

Modern e-commerce requires a fast, lightweight frontend experience. This change establishes a complete React SPA foundation with Vite, TanStack Router, Zustand, and Tailwind CSS—enabling rapid development of a browsable, searchable product catalog with cart and favorites management. The setup prioritizes type safety, developer experience, and frontend-first architecture using only public APIs, making it maintainable and scalable for learning and production.

## What Changes

- Initialize a Vite project with React 18, TypeScript, and TanStack Router
- Establish modular folder structure: `routes/`, `components/`, `stores/`, `api/`, `lib/`, `types/`
- Set up Zustand stores for cart, favorites, and product cache with localStorage persistence
- Integrate FakeStoreAPI for product data with caching and error handling
- Build core pages: product listing, product detail, cart/checkout, and search
- Implement responsive design with Tailwind CSS and mobile-first approach
- Configure Playwright for end-to-end testing of critical user flows
- Add TypeScript strict mode, ESLint, and Prettier for code quality

## Capabilities

### New Capabilities
- `project-setup`: Vite build configuration, dependencies, TypeScript setup, and tooling
- `routing`: TanStack Router with file-based routing, loaders, and code splitting
- `state-management`: Zustand stores for cart, favorites, and product cache with persistence
- `api-integration`: FakeStoreAPI client with caching, error handling, and data normalization
- `product-catalog`: Product listing with pagination/infinite scroll and advanced search with debounce and filters
- `cart-system`: Add/remove/update quantity in cart with local persistence and totals calculation
- `favorites-system`: Toggle favorites with persistence and visual indicators
- `checkout-flow`: Checkout simulation that clears cart and shows confirmation
- `responsive-design`: Mobile-first Tailwind CSS layouts with semantic HTML and accessibility
- `testing-setup`: Playwright end-to-end testing for critical flows (listing, search, cart, checkout, favorites)
- `ui-components`: Reusable UI primitives (ProductCard, SearchBar, CategoryFilter, CartDrawer, Toast, LoadingSkeleton)

### Modified Capabilities
<!-- No existing capabilities to modify for a new project -->

## Impact

- **Code Structure**: Creates entire `src/` directory with modular architecture
- **Dependencies**: Adds React, Vite, TanStack Router, Zustand, Tailwind CSS, Playwright, TypeScript
- **APIs**: Integrates with FakeStoreAPI (public, no authentication required)
- **Testing**: All critical user flows covered by E2E tests
- **Development**: Fast HMR via Vite, strict TypeScript, integrated linting and formatting
- **Browser Storage**: LocalStorage used for cart and favorites persistence
