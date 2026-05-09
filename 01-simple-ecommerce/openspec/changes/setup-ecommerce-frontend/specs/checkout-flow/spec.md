## ADDED Requirements

### Requirement: Checkout page displays cart summary
The system SHALL provide a checkout page that shows cart items, quantities, prices, and total before completing purchase.

#### Scenario: Checkout page loads
- **WHEN** user navigates to checkout or clicks checkout button
- **THEN** checkout page displays with cart summary

#### Scenario: Checkout shows item details
- **WHEN** user views checkout page
- **THEN** all cart items are displayed with images, titles, quantities, and prices

#### Scenario: Checkout shows total
- **WHEN** user views checkout
- **THEN** subtotal and total are displayed

### Requirement: Checkout form (optional)
The system MAY include a simple form collecting user information (name, email, address) before completing purchase. This is simulated and not sent to backend.

#### Scenario: Checkout form is optional
- **WHEN** user reaches checkout
- **THEN** form fields are available to fill in (optional)

### Requirement: Complete purchase
The system SHALL clear the cart and display confirmation message after user completes checkout. This is a simulated transaction.

#### Scenario: Successful checkout
- **WHEN** user clicks "Complete Purchase" on checkout page
- **THEN** purchase is simulated, confirmation message displays, and cart is cleared

#### Scenario: Confirmation message
- **WHEN** purchase completes
- **THEN** message "Order confirmed! Thank you for your purchase." displays

#### Scenario: Cart is empty after checkout
- **WHEN** user completes purchase
- **THEN** cart is cleared (no items)

#### Scenario: Redirect after checkout
- **WHEN** checkout completes
- **THEN** user is redirected to home page or order confirmation page

### Requirement: Prevent checkout with empty cart
The system SHALL prevent users from proceeding to checkout if cart is empty.

#### Scenario: Checkout disabled when cart empty
- **WHEN** user cart is empty
- **THEN** checkout button is disabled or checkout page shows message "Cart is empty"

### Requirement: Back to shopping
The system SHALL provide option to return to product listing from checkout without completing purchase.

#### Scenario: Continue shopping button
- **WHEN** user is on checkout page
- **THEN** "Continue Shopping" button allows returning to product listing
