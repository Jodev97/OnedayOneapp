## ADDED Requirements

### Requirement: Product Card component
The system SHALL provide a reusable ProductCard component displaying product image, title, price, and action buttons (Add to Cart, Favorite).

#### Scenario: Product card renders
- **WHEN** ProductCard component receives product data
- **THEN** component displays product image, title, price formatted with $ symbol

#### Scenario: Action buttons work
- **WHEN** user clicks buttons on ProductCard
- **THEN** Add to Cart and Favorite buttons trigger appropriate actions

### Requirement: Search Bar component
The system SHALL provide a reusable SearchBar component with debounced input for searching products.

#### Scenario: Search bar accepts input
- **WHEN** user types in search bar
- **THEN** input value updates

#### Scenario: Search debounces
- **WHEN** user types continuously
- **THEN** search function is called only after 300ms of inactivity

### Requirement: Category Filter component
The system SHALL provide a dropdown filter component allowing users to filter products by category.

#### Scenario: Category dropdown displays
- **WHEN** user views category filter
- **THEN** dropdown shows all available categories plus "All Categories" option

#### Scenario: Filter updates on selection
- **WHEN** user selects category
- **THEN** product list updates with filtered results

### Requirement: Cart Drawer component
The system SHALL provide a slide-in drawer displaying cart items with quantities, prices, and total.

#### Scenario: Cart drawer slides in
- **WHEN** user clicks cart icon
- **THEN** drawer slides in from right side

#### Scenario: Cart drawer displays items
- **WHEN** drawer is open
- **THEN** all cart items display with product images, titles, quantities, prices

#### Scenario: Drawer can close
- **WHEN** user clicks close button or outside drawer
- **THEN** drawer slides out

### Requirement: Toast notification component
The system SHALL provide non-blocking toast notifications for user actions (success, error, info).

#### Scenario: Success toast
- **WHEN** user adds product to cart
- **THEN** green success toast appears briefly in bottom-right

#### Scenario: Error toast
- **WHEN** action fails
- **THEN** red error toast appears with message

#### Scenario: Toast auto-dismisses
- **WHEN** toast displays
- **THEN** toast automatically dismisses after 3-4 seconds

### Requirement: Loading Skeleton component
The system SHALL display skeleton screens while products are loading to provide visual feedback.

#### Scenario: Skeletons display while loading
- **WHEN** products are being fetched
- **THEN** skeleton screens appear in product grid

#### Scenario: Skeletons are replaced with content
- **WHEN** products load
- **THEN** skeletons are replaced with actual product cards

### Requirement: Header/Navigation component
The system SHALL provide a consistent header with logo, navigation links, search bar, cart icon, and favorites link.

#### Scenario: Header displays consistently
- **WHEN** user views any page
- **THEN** header is visible with all navigation elements

#### Scenario: Cart badge shows count
- **WHEN** items are in cart
- **THEN** cart icon displays item count badge

#### Scenario: Navigation is responsive
- **WHEN** viewport resizes
- **THEN** header adapts (hamburger menu on mobile)

### Requirement: Button component
The system SHALL provide reusable Button component with consistent styling (primary, secondary, disabled states).

#### Scenario: Button states
- **WHEN** button is displayed
- **THEN** button shows appropriate state (default, hover, active, disabled)

#### Scenario: Button is accessible
- **WHEN** user navigates with keyboard
- **THEN** button is focusable and responds to Enter key

### Requirement: Accessible semantic HTML
The system SHALL use semantic HTML in all components with proper ARIA labels for screen readers.

#### Scenario: Components use semantic HTML
- **WHEN** developer inspects component HTML
- **THEN** components use semantic elements (button, nav, section, etc.)

#### Scenario: Interactive elements are labeled
- **WHEN** interactive component renders
- **THEN** element has appropriate aria-label or label text
