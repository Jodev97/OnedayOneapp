## ADDED Requirements

### Requirement: Playwright E2E testing framework
The system SHALL use Playwright for end-to-end testing. Tests run on Chromium browser and validate user-facing behavior.

#### Scenario: Playwright tests run
- **WHEN** developer runs `npm run test` or `npx playwright test`
- **THEN** all tests execute on Chromium and results display in terminal

#### Scenario: Tests are isolated
- **WHEN** each test runs
- **THEN** localStorage is cleared before test starts

### Requirement: Test product listing
The system SHALL have tests validating product listing displays correctly with all product information.

#### Scenario: Product list displays
- **WHEN** test navigates to home page
- **THEN** product grid displays with at least 5 products

#### Scenario: Product cards show information
- **WHEN** test views product grid
- **THEN** each card displays image, title, price, and action buttons

### Requirement: Test product search
The system SHALL have tests validating search functionality with and without results.

#### Scenario: Search filters products
- **WHEN** test types in search bar
- **WHEN** debounce timer expires
- **THEN** product list updates to show only matching products

#### Scenario: Search with no results
- **WHEN** test searches for non-existent product
- **THEN** empty state message displays

#### Scenario: Clear search
- **WHEN** test clears search input
- **THEN** all products display again

### Requirement: Test cart operations
The system SHALL have tests validating add to cart, update quantity, remove from cart, and cart persistence.

#### Scenario: Add to cart from listing
- **WHEN** test clicks "Add to Cart" on product
- **THEN** product appears in cart and badge updates

#### Scenario: Update cart quantity
- **WHEN** test opens cart and increases quantity
- **THEN** cart total updates

#### Scenario: Remove from cart
- **WHEN** test clicks remove button on cart item
- **THEN** item disappears and total updates

#### Scenario: Cart persists
- **WHEN** test adds items and reloads page
- **THEN** cart items are restored

### Requirement: Test favorites operations
The system SHALL have tests validating favorite toggle and persistence.

#### Scenario: Favorite product
- **WHEN** test clicks favorite icon
- **THEN** icon becomes filled and product is favorited

#### Scenario: Unfavorite product
- **WHEN** test clicks filled favorite icon
- **THEN** icon becomes outline and product is unfavorited

#### Scenario: Favorites persist
- **WHEN** test favorites items and reloads page
- **THEN** favorites are restored

### Requirement: Test checkout flow
The system SHALL have tests validating checkout completes successfully and cart clears.

#### Scenario: Complete checkout
- **WHEN** test has items in cart and clicks "Complete Purchase"
- **THEN** confirmation message displays and cart is empty

### Requirement: Test navigation
The system SHALL have tests validating navigation between routes works without full page reload.

#### Scenario: Navigate to product detail
- **WHEN** test clicks product link
- **THEN** detail page loads with product information

#### Scenario: Navigate back
- **WHEN** test clicks browser back button
- **THEN** previous page loads

### Requirement: Test responsive behavior
The system SHALL have tests validating layout works on mobile and desktop viewports.

#### Scenario: Mobile layout
- **WHEN** test sets viewport to 375x667 (mobile)
- **THEN** page displays in single column with responsive spacing

#### Scenario: Desktop layout
- **WHEN** test sets viewport to 1920x1080 (desktop)
- **THEN** page displays product grid with multiple columns

### Requirement: Mock API calls
The system SHALL use `page.route` to intercept API calls and return mock data, ensuring tests are deterministic and don't depend on live API.

#### Scenario: API calls are mocked
- **WHEN** test runs
- **THEN** FakeStoreAPI calls are intercepted and mock data returned
