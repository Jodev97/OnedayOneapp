# Simple E-Commerce Store

A lightweight, modern e-commerce frontend SPA built with React 18, TypeScript, Vite, TanStack Router, Zustand, and Tailwind CSS. Uses FakeStoreAPI for product data with no backend dependency.

## Features

- **Product Listing** with grid view, search, and category filtering
- **Product Detail** page with quantity selection
- **Shopping Cart** with add, remove, and quantity update
- **Favorites** management with persistence
- **Checkout Simulation** with order confirmation
- **Responsive Design** mobile-first with Tailwind CSS
- **Type-Safe** with TypeScript strict mode
- **Fast Dev** with Vite HMR
- **End-to-End Tests** with Playwright

## Tech Stack

- **Build Tool:** Vite 8
- **UI Framework:** React 18 + TypeScript
- **Routing:** TanStack Router (file-based)
- **State Management:** Zustand with localStorage persistence
- **Styling:** Tailwind CSS
- **Testing:** Playwright
- **Code Quality:** ESLint, Prettier
- **API:** FakeStoreAPI (public, no auth)

## Project Structure

```
src/
├── routes/          # TanStack Router file-based routes
│   ├── root.route.tsx         # Root layout
│   ├── index.route.tsx        # Product listing
│   ├── product.$id.route.tsx  # Product detail
│   ├── checkout.route.tsx     # Cart & checkout
│   └── favorites.route.tsx    # Favorites page
├── components/      # Reusable UI components
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   ├── Button.tsx
│   └── Toast.tsx
├── stores/          # Zustand stores
│   ├── cartStore.ts
│   ├── favoritesStore.ts
│   ├── productCacheStore.ts
│   └── selectors.ts
├── api/             # API client & functions
│   ├── client.ts
│   └── products.ts
├── types/           # TypeScript interfaces
│   └── product.ts
├── lib/             # Utilities
│   └── toast.ts
├── index.css        # Tailwind styles
└── main.tsx         # Entry point
```

## Setup & Installation

### Prerequisites
- Node.js 18+
- pnpm 10+

### Install Dependencies

```bash
pnpm install
```

### Development Server

```bash
pnpm dev
```

Opens at `http://localhost:5173` with HMR enabled.

### Production Build

```bash
pnpm build
```

Generates optimized bundle in `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Scripts

- `pnpm dev` — Start dev server with HMR
- `pnpm build` — Build for production
- `pnpm preview` — Preview production build locally
- `pnpm lint` — Check code with ESLint
- `pnpm format` — Format code with Prettier
- `pnpm test` — Run Playwright E2E tests
- `pnpm test:ui` — Run tests with UI mode
- `pnpm test:debug` — Run tests with debugger

## State Management

### Zustand Stores

**cartStore** — Shopping cart with add, remove, update quantity
- Persists to localStorage: `cart-store`

**favoritesStore** — Wishlist of product IDs
- Persists to localStorage: `favorites-store`

**productCacheStore** — Cached products and categories (non-persistent)
- Single source of truth for product data
- Used by cart/favorites selectors to enrich with full details

### Selectors (src/stores/selectors.ts)

- `useCartTotal()` — Calculate total price
- `useCartItemCount()` — Get total item quantity
- `useEnrichedCartItems()` — Get cart items with full product details
- `useFavoriteCount()` — Get favorites count

## API Integration

**FakeStoreAPI** endpoints used:
- `GET /products` — Fetch all products
- `GET /products/:id` — Fetch single product
- `GET /products/categories` — Fetch categories
- `GET /products/category/:name` — Fetch products by category

**Caching Strategy:**
- Products fetched once per session and cached in `productCacheStore`
- Cart/favorites enrichment uses cached product data for fast selectors
- No automatic refetching

## Testing

### E2E Tests with Playwright

Tests run on Chromium and include:
- Product listing display
- Search and filtering
- Add to cart
- Favorites toggle
- Navigation
- Responsive layouts

```bash
pnpm test          # Run all tests
pnpm test:ui       # Interactive UI mode
pnpm test:debug    # Debug mode
```

**Mock API Calls:** Tests use `page.route` to mock FakeStoreAPI responses, ensuring deterministic tests.

## Code Quality

### TypeScript Strict Mode

All files use `strict: true` in tsconfig.json:
- `noImplicitAny` — No implicit any types
- `noUnusedLocals` — Unused variables error
- `noUnusedParameters` — Unused parameters error
- `noImplicitReturns` — All code paths must return

### ESLint & Prettier

```bash
pnpm lint          # Check code style
pnpm format        # Auto-format code
```

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Fast Build:** Vite with instant HMR
- **Code Splitting:** TanStack Router automatically splits routes
- **Image Optimization:** Product images lazy-loaded from FakeStoreAPI
- **State Updates:** Zustand selective subscriptions minimize re-renders
- **Bundle Size:** ~150KB gzipped (before optimization)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on buttons
- Color contrast compliance
- Alt text on images

## Limitations

- **No Real Backend:** Checkout is simulated, cart/favorites stored locally only
- **No Authentication:** Public API, no user accounts
- **Limited Products:** FakeStoreAPI has ~20 products
- **No Payment Processing:** No real transactions or payment gateway
- **Single Device:** Cart/favorites not synced across devices

## Future Enhancements

- Real backend with user authentication
- Persistent multi-device state (server-side)
- Payment gateway integration
- Admin dashboard
- Advanced filtering and sorting
- Product reviews and ratings
- Wishlist sharing
- Order history
- Inventory management

## License

ISC
