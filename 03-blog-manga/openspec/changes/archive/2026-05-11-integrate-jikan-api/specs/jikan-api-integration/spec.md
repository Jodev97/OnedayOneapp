## ADDED Requirements

### Requirement: Jikan API Service Layer
The system SHALL provide a dedicated service module that encapsulates all communication with the Jikan API, handling request construction, response parsing, and error handling.

#### Scenario: Fetch manga by genre
- **WHEN** the application requests manga data for a specific genre
- **THEN** the service returns a list of manga objects with title, image, rating, synopsis, and status from Jikan API

#### Scenario: Handle API errors gracefully
- **WHEN** the Jikan API is unavailable or returns an error
- **THEN** the service throws a descriptive error that can be caught and displayed to the user

#### Scenario: Cache API responses
- **WHEN** the same genre is requested multiple times in a session
- **THEN** the service returns cached results without making redundant API calls

### Requirement: Jikan API Data Mapping
The system SHALL transform Jikan API responses into a consistent internal data structure for use throughout the application.

#### Scenario: Map manga properties
- **WHEN** Jikan API returns manga data
- **THEN** the service extracts and maps title, malId, imageUrl, rating, chapters, status, synopsis, and genres to internal Manga objects

#### Scenario: Handle missing optional fields
- **WHEN** Jikan API response lacks optional fields (e.g., synopsis, rating)
- **THEN** the service provides sensible defaults (empty strings, 0, N/A) without breaking the mapping
