## Why

The current manga listing uses hardcoded mock data, limiting the app to a fixed set of mangas and preventing real-time updates. By integrating the Jikan API (MyAnimeList unofficial API), we can display real, comprehensive manga data with genres, ratings, and synopses, enabling a dynamic and authentic manga blog experience.

## What Changes

- Replace hardcoded manga mock data with live Jikan API integration
- Fetch manga data by genre with pagination support
- Display real manga metadata (title, image, rating, synopsis, chapters, status)
- Add error handling and loading states for API calls
- Implement caching to optimize API usage

## Capabilities

### New Capabilities
- `jikan-api-integration`: Integration with Jikan API for fetching real manga data
- `manga-data-fetching`: Fetching manga by genre, with search and pagination
- `api-error-handling`: Handling API errors and network failures gracefully

### Modified Capabilities
- `manga-display`: Display logic now renders real API data instead of mocks

## Impact

- **Components affected**: HeroSection, genre navigation, manga listing components
- **New dependency**: Jikan API (external)
- **API calls**: GET requests to jikan.moe API endpoints
- **Data structure**: Manga objects now match Jikan API schema instead of mock format
- **Breaking change**: Components expecting mock data structure will need updates
