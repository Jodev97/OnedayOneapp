## ADDED Requirements

### Requirement: Configure TanStack Query with QueryClient and provider
TanStack Query SHALL be configured with a QueryClient instance and QueryClientProvider wrapping the application. Default cache settings SHALL be appropriate for client-side data management.

#### Scenario: QueryClient initialized with defaults
- **WHEN** the application starts
- **THEN** a QueryClient is created with sensible default cache times and stale time settings

#### Scenario: QueryClientProvider wraps application
- **WHEN** the application renders
- **THEN** QueryClientProvider is set up in the React tree, making useQuery and useMutation available

#### Scenario: Queries and mutations can be executed
- **WHEN** components use useQuery() or useMutation() hooks
- **THEN** they successfully execute and manage server state without errors

#### Scenario: Query caching works
- **WHEN** the same query is called multiple times
- **THEN** results are cached according to configured stale time, reducing unnecessary refetches

### Requirement: Set up query and mutation directory structure
Query and mutation definitions SHALL be organized in src/queries/ and src/mutations/ directories for easy discovery and reuse.

#### Scenario: Query definitions directory exists
- **WHEN** the project is initialized
- **THEN** src/queries/ directory is created and ready for query definitions

#### Scenario: Mutation definitions directory exists
- **WHEN** the project is initialized
- **THEN** src/mutations/ directory is created and ready for mutation definitions
