## ADDED Requirements

### Requirement: Toggle product favorite
The system SHALL allow users to favorite/unfavorite products from listing and detail pages. Favorites are stored in Zustand with localStorage persistence.

#### Scenario: Favorite product from listing
- **WHEN** user clicks heart icon on product card
- **THEN** product is added to favorites and heart becomes filled

#### Scenario: Unfavorite product
- **WHEN** user clicks filled heart icon
- **THEN** product is removed from favorites and heart becomes empty

#### Scenario: Favorite from detail page
- **WHEN** user clicks favorite button on detail page
- **THEN** product is favorited and button state updates

#### Scenario: Favorite action shows feedback
- **WHEN** product is favorited/unfavorited
- **THEN** toast notification confirms action

### Requirement: Visual favorite indicator
The system SHALL display favorite status visually. Products in favorites show filled heart; non-favorited show outline.

#### Scenario: Favorite icon is filled for favorited products
- **WHEN** product is in favorites
- **THEN** favorite icon appears filled/highlighted

#### Scenario: Favorite icon is outline for non-favorited
- **WHEN** product is not in favorites
- **THEN** favorite icon appears as outline

### Requirement: Favorites page or section
The system SHALL provide a way to view all favorited products. Users can browse or manage favorites in a dedicated section.

#### Scenario: View all favorites
- **WHEN** user navigates to favorites page or section
- **THEN** all favorited products are displayed in grid

#### Scenario: Empty favorites state
- **WHEN** user has no favorites
- **THEN** message displays "No favorites yet"

#### Scenario: Remove favorite from favorites page
- **WHEN** user clicks remove on favorited product
- **THEN** product is removed and list updates

### Requirement: Favorites persistence
The system SHALL persist favorites to localStorage. Favorites are restored on page reload or app restart.

#### Scenario: Favorites persist across reload
- **WHEN** user favorites items and reloads page
- **THEN** favorites are restored from localStorage

### Requirement: Favorite count or indicator
The system SHALL show total number of favorited items (optional badge in header).

#### Scenario: Favorites count displays
- **WHEN** user has favorited products
- **THEN** count appears in favorites section or header
