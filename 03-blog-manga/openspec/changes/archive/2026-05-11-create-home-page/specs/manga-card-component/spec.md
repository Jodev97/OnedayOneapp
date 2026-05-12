## ADDED Requirements

### Requirement: Manga card displays cover image
The manga card component SHALL display a cover image for the manga with appropriate dimensions and styling.

#### Scenario: Card displays cover image
- **WHEN** manga card component is rendered
- **THEN** cover image displays at the top of the card
- **THEN** image has a 2:3 aspect ratio (typical book cover ratio)
- **WHEN** image fails to load
- **THEN** placeholder image or fallback styling displays

### Requirement: Manga card displays title and metadata
The manga card component SHALL display the manga title, status badge, and genre tags.

#### Scenario: Card displays title
- **WHEN** manga card is rendered
- **THEN** manga title displays clearly below the cover image
- **THEN** title is truncated if longer than card width with ellipsis

#### Scenario: Card displays status badge
- **WHEN** manga card is rendered
- **THEN** status badge displays near the title
- **THEN** badge shows: "Ongoing", "Completed", or "Hiatus"
- **THEN** badge color corresponds to status

#### Scenario: Card displays genres
- **WHEN** manga card is rendered
- **THEN** genre tags display below the title
- **THEN** each genre is shown as a separate small tag
- **THEN** tags are truncated if too many for card width

### Requirement: Manga card is interactive
The manga card component SHALL respond to user interactions with visual feedback.

#### Scenario: Card responds to hover
- **WHEN** user hovers over the card on desktop
- **THEN** card appears to lift (shadow effect)
- **THEN** opacity or brightness increases slightly
- **WHEN** user moves mouse away
- **THEN** card returns to normal state

#### Scenario: Card is clickable
- **WHEN** user clicks the card
- **THEN** user navigates to the manga detail page
- **THEN** cursor shows pointer style on hover

### Requirement: Manga card is reusable
The manga card component SHALL accept props for manga data and be usable in any grid context.

#### Scenario: Card renders with provided data
- **WHEN** manga card component is used with manga object prop
- **THEN** card displays all data from the manga object
- **THEN** card is independent and can be used in different sections

#### Scenario: Card handles different screen sizes
- **WHEN** card is rendered in responsive grid
- **THEN** card scales appropriately for mobile, tablet, and desktop
- **THEN** text remains readable at all sizes

### Requirement: Manga card uses dark theme
The manga card component SHALL use dark theme colors consistent with the application.

#### Scenario: Card uses dark background
- **WHEN** card is rendered
- **THEN** background color is dark shade
- **THEN** text colors are light/bright for readability
- **THEN** border or shadow provides visual definition
