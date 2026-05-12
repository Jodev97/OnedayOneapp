## ADDED Requirements

### Requirement: Error Boundary for API Failures
The system SHALL gracefully handle Jikan API errors and display user-friendly error messages when data cannot be fetched.

#### Scenario: API request fails due to network error
- **WHEN** the Jikan API request fails (network unavailable, timeout)
- **THEN** the system displays an error message: "Unable to load manga data. Please check your connection and try again."

#### Scenario: API returns a server error
- **WHEN** the Jikan API returns an HTTP 500 or 503 error
- **THEN** the system displays: "The manga service is temporarily unavailable. Please try again later."

#### Scenario: API returns invalid data
- **WHEN** the Jikan API returns malformed or unexpected data
- **THEN** the system logs the error and displays a generic fallback message without crashing

### Requirement: Retry Logic
The system SHALL automatically retry failed API requests with exponential backoff.

#### Scenario: Automatic retry on first failure
- **WHEN** an API request fails
- **THEN** the system automatically retries after 1 second

#### Scenario: Exponential backoff on multiple failures
- **WHEN** multiple consecutive API requests fail
- **THEN** the system increases the retry delay (1s, 2s, 4s) up to a maximum of 10 seconds

#### Scenario: Stop retrying after max attempts
- **WHEN** API requests fail after 3 consecutive retry attempts
- **THEN** the system stops retrying and displays an error message to the user

### Requirement: Timeout Protection
The system SHALL prevent indefinite waiting on API requests.

#### Scenario: Request timeout
- **WHEN** a Jikan API request takes longer than 10 seconds
- **THEN** the system cancels the request and displays a timeout error message
