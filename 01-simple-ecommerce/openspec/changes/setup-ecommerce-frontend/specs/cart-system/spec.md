## ADDED Requirements

### Requirement: Add products to cart
The system SHALL allow users to add products to cart from listing, detail pages, or cart drawer. Adding product with same ID increases quantity instead of duplicating.

#### Scenario: Add from product listing
- **WHEN** user clicks "Add to Cart" on product card
- **THEN** product with quantity 1 is added to cart

#### Scenario: Add from product detail
- **WHEN** user selects quantity and clicks "Add to Cart"
- **THEN** product is added with selected quantity

#### Scenario: Add duplicate product increases quantity
- **WHEN** user adds product already in cart
- **THEN** quantity is incremented, not duplicated

#### Scenario: Add to cart success toast
- **WHEN** product is added to cart
- **THEN** success toast notification appears

### Requirement: Remove products from cart
The system SHALL allow users to remove products from cart. Removing sets quantity to 0.

#### Scenario: Remove product from cart
- **WHEN** user clicks remove button on cart item
- **THEN** product is removed from cart

#### Scenario: Remove from cart updates total
- **WHEN** product is removed
- **THEN** cart total is recalculated immediately

### Requirement: Update product quantity
The system SHALL allow users to adjust quantity of items in cart with increment/decrement buttons or manual input.

#### Scenario: Increment quantity
- **WHEN** user clicks + button on cart item
- **THEN** quantity increases by 1 and total updates

#### Scenario: Decrement quantity
- **WHEN** user clicks - button on cart item
- **THEN** quantity decreases by 1 (min 1)

#### Scenario: Manual quantity input
- **WHEN** user enters quantity directly
- **THEN** cart updates with new quantity

### Requirement: Cart drawer or page
The system SHALL display cart as a sidebar drawer or dedicated page showing items, quantities, prices, and totals.

#### Scenario: Cart drawer opens
- **WHEN** user clicks cart icon in header
- **THEN** cart drawer slides in from right with all items displayed

#### Scenario: Cart displays item details
- **WHEN** cart drawer is open
- **THEN** each item shows product image, title, quantity, price, subtotal

#### Scenario: Cart shows totals
- **WHEN** user views cart
- **THEN** subtotal, tax (if applicable), and total are displayed

### Requirement: Cart item count badge
The system SHALL display item count on cart icon in header. Count updates in real-time.

#### Scenario: Cart badge shows item count
- **WHEN** items are in cart
- **THEN** cart icon shows total number of items (sum of quantities)

#### Scenario: Badge updates on add/remove
- **WHEN** product is added or removed
- **THEN** badge count updates instantly

### Requirement: Empty cart state
The system SHALL display appropriate message when cart is empty.

#### Scenario: Empty cart message
- **WHEN** user opens empty cart
- **THEN** message "Your cart is empty" displays with link to products

### Requirement: Cart persistence
The system SHALL persist cart state to localStorage. Cart is restored on page reload or app restart.

#### Scenario: Cart persists across reload
- **WHEN** user adds items and refreshes page
- **THEN** cart items are restored from localStorage
