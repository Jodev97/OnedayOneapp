## ADDED Requirements

### Requirement: Display related manga recommendations in a grid or carousel format
The system SHALL fetch and display manga titles related to the current manga (sequels, prequels, spin-offs, etc.) in a visually organized grid showing cover images, titles, status badges, and genres.

#### Scenario: Related manga grid displays below main content
- **WHEN** manga detail page loads
- **THEN** system fetches related manga from Jikan API `/manga/{id}/relations` endpoint and displays in a grid layout with section title "Related Manga - You might also enjoy these titles"

#### Scenario: Each related manga card displays essential information
- **WHEN** related manga grid renders
- **THEN** each card shows cover image, manga title, status badge (e.g., "Not Yet Released", "Ongoing"), release season/year, type (Manga/Light Novel), and primary genres

#### Scenario: User can interact with related manga cards
- **WHEN** user clicks on a related manga card
- **THEN** app navigates to detail page for that manga

#### Scenario: Related manga section handles empty state
- **WHEN** manga has no related titles
- **THEN** system hides the related manga section entirely or displays "No recommendations available"

#### Scenario: Related manga responsive layout
- **WHEN** page is viewed on desktop
- **THEN** related manga displays in a 3-column grid
- **WHEN** page is viewed on mobile
- **THEN** related manga displays in a single-column or 2-column layout based on viewport width

### Requirement: Filter and display relationship types appropriately
The system SHALL display related manga with clear indication of their relationship to the main title when available.

#### Scenario: Related manga shows relationship context
- **WHEN** related manga renders and relationship type is available (e.g., "Sequel of", "Prequel of")
- **THEN** system displays relationship context to help user understand connection

#### Scenario: Handle missing relationship type
- **WHEN** related manga data lacks relationship type information
- **THEN** system displays manga card without relationship label
