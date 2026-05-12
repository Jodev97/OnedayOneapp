## Context

The app currently displays hardcoded manga mockups in the HeroSection and genre-based listings. To provide a dynamic, realistic manga blog experience, we need to integrate the Jikan API, which provides comprehensive manga data from MyAnimeList. This requires refactoring data fetching logic, updating component structures to handle real API responses, and implementing proper error handling.

## Goals / Non-Goals

**Goals:**
- Replace mock manga data with real Jikan API data across all manga displays
- Support fetching manga by genre with pagination
- Implement proper loading and error states
- Maintain responsive design across all devices
- Optimize API calls with basic caching or request batching

**Non-Goals:**
- User authentication or manga list management (tracking favorites, ratings)
- Server-side caching or database persistence
- Implementing a complete search feature (basic genre filtering only)
- Admin dashboard or content management

## Decisions

**1. Use Jikan API with React Query (or native fetch with state management)**
- **Decision**: Create custom API service layer for Jikan API calls, handle state with React hooks (useState/useReducer)
- **Rationale**: Jikan API is free, well-documented, and covers manga data comprehensively. Using native fetch with custom hooks keeps dependencies minimal while allowing future migration to React Query if needed.
- **Alternative**: GraphQL Apollo Client - overkill for this use case; adds complexity without proportional benefit

**2. Separate API service from UI components**
- **Decision**: Create a dedicated `services/jikanService.ts` module for all API calls
- **Rationale**: Keeps components clean, makes API logic testable and reusable, simplifies mock/test data replacement
- **Alternative**: Inline API calls in components - leads to duplicated code and tight coupling

**3. Handle API errors and loading states gracefully**
- **Decision**: Display loading spinners during fetch, show user-friendly error messages, fall back to a cached/minimal dataset if available
- **Rationale**: Poor error handling degrades UX; users need feedback on what's happening
- **Alternative**: Fail silently - terrible UX, hard to debug

**4. Cache API responses at component level (initial approach)**
- **Decision**: Use React state with `useEffect` cleanup to cache fetched manga lists per genre, avoid redundant API calls within a session
- **Rationale**: Simple to implement, reduces API quota usage, no external dependencies
- **Alternative**: Server-side caching or Redis - unnecessary complexity for a frontend blog app

**5. Update HeroSection and genre listing components**
- **Decision**: Refactor HeroSection to fetch featured mangas from Jikan; update genre navigation to fetch and display real genre-filtered manga
- **Rationale**: Replaces mocks systematically across the app, ensures consistent data structure
- **Alternative**: Create separate API components - adds complexity

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| **API Rate Limits**: Jikan has rate limits; if app scales, we may hit them | Implement local caching, batch requests, add request debouncing |
| **API Downtime**: If Jikan is unavailable, app breaks | Cache data aggressively, provide offline fallback data, add retry logic |
| **Data Schema Changes**: If Jikan API updates, responses may break our parsing | Add defensive data parsing with fallbacks, monitor API docs for changes |
| **Performance**: Fetching on component mount may cause slow initial load | Lazy load genres, cache aggressively, consider pagination |

## Migration Plan

1. Create `services/jikanService.ts` with API helper functions
2. Update HeroSection to use Jikan API for featured manga
3. Update genre navigation components to fetch real data
4. Add loading and error UI states
5. Test with actual Jikan API calls
6. Remove mock data files
7. Deploy and monitor API usage

## Open Questions

- Should we implement client-side caching (localStorage) or rely on session state only? use client-side with caching
- What's the desired pagination strategy - infinite scroll or pagination buttons? use button scrolls
- Should genre fetching happen on app load (eager) or on-demand (lazy)? use lazy
