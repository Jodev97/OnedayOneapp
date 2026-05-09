## ADDED Requirements

### Requirement: Fetch products from FakeStoreAPI
The system SHALL fetch all products from FakeStoreAPI (`https://fakestoreapi.com/products`) on app initialization. Products SHALL be cached in the product store.

#### Scenario: Products are fetched on app load
- **WHEN** app initializes
- **THEN** FakeStoreAPI is called and products are cached

#### Scenario: API error is handled
- **WHEN** FakeStoreAPI is unreachable
- **THEN** error state is set and error message displays to user

#### Scenario: Products have required fields
- **WHEN** products are fetched
- **THEN** each product has id, title, price, description, image, category

### Requirement: Fetch product categories
The system SHALL fetch product categories from FakeStoreAPI to support category filtering in search.

#### Scenario: Categories are loaded
- **WHEN** app initializes
- **THEN** categories are fetched and available for filtering

### Requirement: API client with error handling
The system SHALL provide an API client module that wraps fetch calls with error handling, typed responses, and retry logic for transient failures.

#### Scenario: API call includes error handling
- **WHEN** API call fails with network error
- **THEN** error is caught and returned as typed error object

#### Scenario: API response is validated
- **WHEN** API returns data
- **THEN** response shape is validated before storing in cache

### Requirement: No authentication required
The system SHALL use only public endpoints that require no authentication. All API calls use HTTP GET requests.

#### Scenario: Public API is accessible
- **WHEN** user with no credentials accesses app
- **THEN** all features work without login or tokens

### Requirement: Caching prevents duplicate API calls
The system SHALL avoid refetching products by storing them in the product cache. Product list is fetched once per app session.

#### Scenario: Products are not refetched
- **WHEN** user navigates between pages
- **THEN** cached products are used without additional API calls
