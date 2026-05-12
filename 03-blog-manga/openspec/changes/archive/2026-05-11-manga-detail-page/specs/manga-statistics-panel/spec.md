## ADDED Requirements

### Requirement: Display statistics panel with score, rank, popularity, chapters, and volumes
The system SHALL display a dedicated statistics panel showing manga score (0-10), rank (#), popularity rank (#), chapter count, and volume count in a visually distinct card format.

#### Scenario: Statistics panel renders with all available metrics
- **WHEN** manga detail page loads
- **THEN** statistics panel displays score, rank, popularity, chapters, and volumes with appropriate icons and labels

#### Scenario: Statistics values display with correct formatting
- **WHEN** statistics panel renders
- **THEN** score shows as "X.X/10" format, rank and popularity show with "#" prefix (e.g., "#10"), chapter and volume counts are plain numbers

#### Scenario: Panel uses consistent styling with app theme
- **WHEN** statistics panel renders
- **THEN** panel uses dark theme background, teal/cyan accent color for icons and labels, matches overall app design language

### Requirement: Handle missing statistics values
The system SHALL gracefully handle missing statistics data without breaking the layout.

#### Scenario: One or more statistics values are unavailable
- **WHEN** API response lacks rank, popularity, or other metric
- **THEN** system hides that metric from panel or displays "N/A" without affecting layout
