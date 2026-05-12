## ADDED Requirements

### Requirement: Display community score in visually prominent highlight section
The system SHALL display the manga's community score (based on user ratings and reviews) in a circular badge with distinctive styling to draw user attention as a key decision-making factor.

#### Scenario: Community score badge displays correctly
- **WHEN** manga detail page loads with score data
- **THEN** system displays circular badge with score number (e.g., "9.2") in large text, centered in badge

#### Scenario: Badge uses distinctive visual treatment
- **WHEN** community score badge renders
- **THEN** badge uses teal/cyan background color, contrasting text, positioned prominently in a dedicated section with descriptive label "Community Score - Based on user ratings and reviews"

#### Scenario: Score update reflects in badge
- **WHEN** community score data is updated from API
- **THEN** badge immediately reflects new score value

### Requirement: Provide context about the score
The system SHALL include descriptive text explaining that the score is based on user ratings and reviews.

#### Scenario: Score description displays
- **WHEN** community score section renders
- **THEN** system displays label "Based on user ratings and reviews" below or next to the score badge
