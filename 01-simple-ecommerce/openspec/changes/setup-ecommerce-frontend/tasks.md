## 1. Project Setup & Configuration

- [x] 1.1 Initialize Vite project with React 18 and TypeScript
- [x] 1.2 Install core dependencies with pnpm (TanStack Router, Zustand, Tailwind CSS)
- [x] 1.3 Configure TypeScript with strict mode (tsconfig.json)
- [x] 1.4 Set up Tailwind CSS with configuration file
- [x] 1.5 Configure ESLint and Prettier for code quality
- [x] 1.6 Create folder structure (src/routes, src/components, src/stores, src/api, src/lib, src/types)
- [x] 1.7 Create .gitignore for Node.js project (node_modules, dist, .env, pnpm-lock.yaml should be committed)

## 2. State Management Setup

- [x] 2.1 Create cartStore with Zustand and localStorage persistence
- [x] 2.2 Create favoritesStore with Zustand and localStorage persistence
- [x] 2.3 Create productCacheStore for caching fetched products
- [x] 2.4 Add selectors for cart total, item count, and enriched cart items
- [x] 2.5 Add selectors for favorites count

## 3. API Integration

- [x] 3.1 Create API client module (src/api/client.ts) with fetch wrapper and error handling
- [x] 3.2 Create types for API responses (Product, Category, Cart, Favorites)
- [x] 3.3 Implement getProducts() function to fetch from FakeStoreAPI
- [x] 3.4 Implement getCategories() function
- [x] 3.5 Add error handling and loading states to API calls
- [x] 3.6 Implement caching logic to prevent duplicate API calls

## 4. Routing Setup

- [x] 4.1 Set up TanStack Router with file-based routing
- [x] 4.2 Create root layout route with header and navigation
- [x] 4.3 Create home/products listing page route
- [x] 4.4 Create product detail page route with loader
- [x] 4.5 Create checkout/cart page route
- [x] 4.6 Create favorites page route (optional)
- [x] 4.7 Configure route loaders to prefetch data

## 5. UI Components

- [x] 5.1 Create Header component with logo, navigation, search, cart icon, favorites link
- [x] 5.2 Create ProductCard component with image, title, price, Add to Cart, Favorite buttons
- [x] 5.3 Create SearchBar component with debounced input (300ms)
- [x] 5.4 Create CategoryFilter component (dropdown)
- [x] 5.5 Create CartDrawer component with items, quantities, prices, totals
- [x] 5.6 Create CartItem component for drawer
- [x] 5.7 Create Toast notification component (success, error, info)
- [x] 5.8 Create LoadingSkeleton component for products
- [x] 5.9 Create Button component with primary, secondary, disabled states
- [x] 5.10 Create PriceFormatter utility component

## 6. Product Catalog Pages

- [x] 6.1 Create ProductListingPage with grid layout
- [x] 6.2 Implement product fetching and caching on page load
- [x] 6.3 Add search functionality with debounce
- [x] 6.4 Add category filtering
- [x] 6.5 Add "Load More" button for pagination
- [x] 6.6 Implement loading skeleton states
- [x] 6.7 Implement error state with retry button
- [x] 6.8 Add empty state message for no results
- [x] 6.9 Create ProductDetailPage with full product info
- [x] 6.10 Add quantity selector on detail page
- [x] 6.11 Add Add to Cart button on detail page
- [x] 6.12 Add Favorite button on detail page
- [x] 6.13 Implement related products or back-to-listing link

## 7. Cart & Checkout Functionality

- [x] 7.1 Implement addToCart action in cartStore
- [x] 7.2 Implement removeFromCart action
- [x] 7.3 Implement updateQuantity action
- [x] 7.4 Create cart total selector
- [x] 7.5 Create cart item count badge
- [x] 7.6 Create CartPage/CheckoutPage with item summary
- [x] 7.7 Add optional checkout form (name, email, address)
- [x] 7.8 Implement completePurchase action (clears cart, shows confirmation)
- [x] 7.9 Add confirmation message after checkout
- [x] 7.10 Add "Continue Shopping" button on checkout

## 8. Favorites Management

- [x] 8.1 Implement toggleFavorite action in favoritesStore
- [x] 8.2 Create visual favorite indicator (filled/outline heart)
- [x] 8.3 Create FavoritesPage with grid of favorited products
- [x] 8.4 Add empty state for favorites page
- [x] 8.5 Add remove from favorites on favorites page
- [x] 8.6 Test favorites persistence across reload

## 9. Responsive Design & Styling

- [x] 9.1 Style Header with Tailwind (responsive navigation, logo, search, icons)
- [x] 9.2 Style ProductCard with Tailwind (image, title, price, buttons)
- [x] 9.3 Style ProductListingPage grid (1 col mobile, 2 col tablet, 4 col desktop)
- [x] 9.4 Style ProductDetailPage (image, info, quantity, actions)
- [x] 9.5 Style CartDrawer with responsive layout
- [x] 9.6 Style CheckoutPage with summary and form
- [x] 9.7 Style SearchBar and CategoryFilter
- [x] 9.8 Implement mobile-first breakpoints (sm, md, lg, xl)
- [x] 9.9 Add hover and active states for interactive elements
- [x] 9.10 Test responsive layout on mobile, tablet, desktop viewports

## 10. Error Handling & User Feedback

- [x] 10.1 Create Toast notification service
- [x] 10.2 Add success toast for add to cart
- [x] 10.3 Add success toast for favorite toggle
- [x] 10.4 Add error toast for API failures
- [x] 10.5 Implement retry mechanism for failed API calls
- [x] 10.6 Add error boundaries for component failures
- [x] 10.7 Create error page for 404 and general errors

## 11. Accessibility & Semantic HTML

- [x] 11.1 Use semantic HTML (header, nav, main, section, article, footer)
- [x] 11.2 Add ARIA labels to buttons and interactive elements
- [x] 11.3 Ensure keyboard navigation works (Tab, Enter, Escape)
- [x] 11.4 Add focus states for accessibility
- [x] 11.5 Test color contrast for readability
- [x] 11.6 Add alt text for product images

## 12. Testing Setup

- [x] 12.1 Install and configure Playwright
- [x] 12.2 Create test fixtures and helpers
- [x] 12.3 Set up API mocking with page.route
- [x] 12.4 Create mock product data for tests

## 13. End-to-End Tests

- [x] 13.1 Write test for product listing page displays products
- [x] 13.2 Write test for search functionality with results
- [x] 13.3 Write test for search with no results
- [x] 13.4 Write test for add to cart from listing
- [x] 13.5 Write test for add to cart from detail page
- [x] 13.6 Write test for update cart quantity
- [x] 13.7 Write test for remove from cart
- [x] 13.8 Write test for cart persists across reload
- [x] 13.9 Write test for favorite toggle
- [x] 13.10 Write test for favorite persists across reload
- [x] 13.11 Write test for checkout flow and cart clear
- [x] 13.12 Write test for navigation between routes
- [x] 13.13 Write test for responsive mobile layout
- [x] 13.14 Write test for responsive desktop layout

## 14. Documentation & Final Polish

- [x] 14.1 Create README.md with project overview and setup instructions
- [x] 14.2 Document folder structure and module organization
- [x] 14.3 Document API integration and FakeStoreAPI usage
- [x] 14.4 Document Zustand stores and how to use them
- [x] 14.5 Document available pnpm scripts (dev, build, test, lint, format)
- [x] 14.6 Add comments to complex logic if needed
- [x] 14.7 Run all tests and ensure they pass
- [x] 14.8 Test production build with `pnpm build` and preview
- [x] 14.9 Verify no console errors or warnings in dev and prod
- [x] 14.10 Final code review and cleanup
