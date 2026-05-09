## ADDED Requirements

### Requirement: Zustand store for shopping cart
The system SHALL manage cart state using Zustand with localStorage persistence. Cart state SHALL store product IDs and quantities.

#### Scenario: Add product to cart
- **WHEN** user adds a product to cart with quantity 1
- **THEN** cart state updates and persists to localStorage

#### Scenario: Update cart quantity
- **WHEN** user changes quantity of a cart item
- **THEN** cart state updates and new quantity persists

#### Scenario: Remove product from cart
- **WHEN** user removes a product from cart
- **THEN** cart state updates and localStorage is updated

#### Scenario: Cart persists across page reload
- **WHEN** user adds items to cart and reloads page
- **THEN** cart items are restored from localStorage

### Requirement: Zustand store for favorites
The system SHALL manage favorites (wishlist) using Zustand with localStorage persistence. Favorites SHALL store a list of product IDs.

#### Scenario: Toggle product favorite
- **WHEN** user clicks favorite icon on a product
- **THEN** product is added/removed from favorites and persists

#### Scenario: Favorites persist across reload
- **WHEN** user favorites items and reloads page
- **THEN** favorites are restored from localStorage

### Requirement: Zustand store for product cache
The system SHALL maintain a product cache in Zustand that stores all fetched products by ID, serving as the single source of truth for product data.

#### Scenario: Product cache is populated on app load
- **WHEN** app initializes and fetches products
- **THEN** products are stored in cache store by ID

#### Scenario: Cart uses cached product data
- **WHEN** user views cart
- **THEN** cart items are enriched with full product data from cache (name, price, image)

### Requirement: Selectors return computed state
The system SHALL use Zustand selectors to compute derived state like cart total, item count, and enriched cart items with product details.

#### Scenario: Cart total is calculated
- **WHEN** user views cart
- **THEN** cart total is computed as sum of (price × quantity) for all items

#### Scenario: Cart item count is accurate
- **WHEN** user views cart badge
- **THEN** badge shows correct total item count (sum of all quantities)
