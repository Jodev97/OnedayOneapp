# Jikan API Integration Guide

## Overview

This manga blog application integrates with the **Jikan API** (MyAnimeList unofficial API) to fetch real, dynamic manga data instead of using hardcoded mock data.

## API Endpoints Used

### 1. Get Manga by Genre
```
GET https://api.jikan.moe/v4/manga?genres={genreId}&page={page}&limit=25&order_by=score&sort=desc
```

**Supported Genres:**
- Action (ID: 1)
- Adventure (ID: 2)
- Comedy (ID: 4)
- Drama (ID: 8)
- Fantasy (ID: 10)
- Horror (ID: 14)
- Mystery (ID: 7)
- Romance (ID: 22)
- Sci-Fi (ID: 24)
- Slice of Life (ID: 36)

### 2. Get Top Rated Manga
```
GET https://api.jikan.moe/v4/top/manga?limit={limit}&type=manga
```

## Rate Limiting

The Jikan API has rate limits:
- **Default**: 60 requests per minute
- **IP-based**: No authentication required
- **Caching**: Responses are cached for 5 minutes per session to minimize API calls

## Architecture

### Service Layer: `src/services/jikanService.ts`
- Handles all API communication
- Implements retry logic with exponential backoff
- Includes timeout protection (10 seconds)
- Manages response caching
- Maps Jikan API responses to internal Manga types

### Custom Hook: `src/hooks/useMangaData.ts`
- React hook for fetching manga data
- Manages loading and error states
- Supports featured and genre-specific queries
- Provides refetch functionality

### Data Transformation

Jikan API responses are transformed to match the internal `Manga` type:

```typescript
{
  id: manga.mal_id,
  title: manga.title,
  image: manga.images.jpg.large_image_url,
  synopsis: manga.synopsis,
  status: normalizedStatus,
  chapters: manga.chapters,
  rating: manga.score,
  genres: manga.genres.map(g => g.name),
  authors: manga.authors.map(a => a.name)
}
```

## Error Handling

### Network Errors
- Automatic retry with exponential backoff (1s → 2s → 4s)
- Max 3 retry attempts
- User-friendly error messages

### Timeout Handling
- Requests timeout after 10 seconds
- Prevents indefinite hanging

### API Errors
- HTTP 500+ errors trigger automatic retry
- User-friendly error displayed after max retries

## Components Using Jikan API

### HeroSection
- Displays top 5 rated manga
- Loading skeleton while fetching
- Error state with retry option

### LatestReleasesGrid
- Shows top 10 manga
- Loading state with skeletons

### PopularSection
- Displays top 25 manga
- Loading and error states

### GenreBrowser
- Fetches manga by selected genre
- Lazy-loads on genre selection
- Pagination support (25 manga per page)

## Caching Strategy

- **Session-level caching**: Responses cached in memory for 5 minutes
- **Per-genre caching**: Separate cache keys for each genre + page combination
- **Clear cache**: `jikanService.clearCache()` clears all cached data
- **Clear genre cache**: `jikanService.clearCacheForGenre(genre)` clears specific genre data

## Performance Considerations

1. **Lazy Loading**: Genres load on-demand (not on app startup)
2. **Caching**: 5-minute cache reduces redundant API calls
3. **Pagination**: Initial load shows 25 items, reducing data transfer
4. **Skeleton Screens**: Loading UI prevents layout shift

## Testing the Integration

### Manual Testing
1. Open the app in browser (usually http://localhost:5177)
2. Verify top manga display in hero section
3. Test genre selection in "Browse by Genre" section
4. Check loading states during data fetch
5. Test error handling by simulating network issues (browser DevTools)

### Chrome DevTools Testing
1. Open DevTools → Network tab
2. Filter by XHR/Fetch to see API calls
3. Observe cache behavior on repeated genre selections
4. Test timeout scenarios: DevTools → Throttle to "Offline" temporarily

## Troubleshooting

### Issue: "Unable to load manga data"
- Check internet connection
- Verify Jikan API is accessible: https://api.jikan.moe/v4/top/manga
- Check browser console for detailed errors

### Issue: Slow loading
- First load may take 2-3 seconds due to API latency
- Subsequent loads use cache (should be instant)
- Check browser DevTools Network tab for slow requests

### Issue: Genre not showing any manga
- Verify genre name matches list in `src/types/manga.ts` (GENRES)
- Check browser console for error messages
- Jikan may not have data for all genres

## Future Improvements

- [ ] Server-side caching with Redis for production
- [ ] Pagination UI for genre results
- [ ] Search functionality with fuzzy matching
- [ ] Manga detail page with full synopsis and author info
- [ ] User ratings and favorites (requires backend)
