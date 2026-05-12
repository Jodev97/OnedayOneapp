## Why

Users need a dedicated detail view to explore comprehensive information about individual manga titles. Currently, the app only provides browsing and discovery. A detail page enables users to make informed reading decisions by viewing complete metadata, community scores, and related recommendations.

## What Changes

- **New Route**: `/manga/[id]` dynamic route for individual manga pages
- **Data Integration**: Fetch detailed manga information from Jikan API including scores, rankings, author info, serialization details
- **UI Components**: 
  - Large cover image display with action buttons (Add to List, Share)
  - Statistics panel (score, rank, popularity, chapters, volumes)
  - Full metadata sections (titles, status, type, rating, author, serialization)
  - Community score highlight component
  - Related manga carousel/grid showing recommendations
- **Navigation**: Back to home link and integration with existing home page manga cards

## Capabilities

### New Capabilities
- `manga-detail-page`: Display comprehensive manga information with cover, metadata, statistics, synopsis, and related recommendations
- `manga-statistics-panel`: Show score, rank, popularity, chapter and volume counts in a visually distinct panel
- `community-score-highlight`: Highlight community rating with visual emphasis (circular badge design)
- `related-manga-carousel`: Display related/recommended manga titles in a grid with filtering by status

### Modified Capabilities
- `manga-discovery`: Add clickable manga cards that navigate to detail page with dynamic route parameter

## Impact

- **Routes**: Add `/manga/[id]` route with dynamic parameter handling
- **API**: Leverage existing Jikan API integration, fetch additional details (authors, serialization, related works)
- **Components**: Create new MangaDetailPage, StatisticsPanel, CommunityScore, RelatedMangaGrid components
- **Styling**: Extend dark theme to accommodate new layout sections and data-rich panels
- **Navigation**: Update home page MangaCard component to link to detail page
