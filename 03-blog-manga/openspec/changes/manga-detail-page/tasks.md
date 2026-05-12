## 1. Setup and Routing

- [ ] 1.1 Create `/src/pages/MangaDetail/index.tsx` route file for dynamic `[id]` parameter
- [ ] 1.2 Install or configure React Router for dynamic segments if needed
- [ ] 1.3 Update main route configuration to include new detail page route

## 2. Component Structure

- [ ] 2.1 Create `MangaDetailPage.tsx` main container component
- [ ] 2.2 Create `StatisticsPanel.tsx` component for score, rank, popularity, chapters, volumes
- [ ] 2.3 Create `CommunityScore.tsx` component for circular score badge with description
- [ ] 2.4 Create `RelatedMangaGrid.tsx` component for displaying related manga
- [ ] 2.5 Create `MangaInfoSection.tsx` component for author, serialization, type, status details

## 3. API Integration

- [ ] 3.1 Create API utility function to fetch manga details from Jikan API `/manga/{id}`
- [ ] 3.2 Create API utility function to fetch related manga from Jikan API `/manga/{id}/relations`
- [ ] 3.3 Add error handling and loading states for both API calls
- [ ] 3.4 Extract manga ID from URL parameter using React Router

## 4. Layout and Styling

- [ ] 4.1 Implement responsive CSS Grid/Flexbox layout for desktop (left sidebar, right content)
- [ ] 4.2 Implement mobile layout with vertical stacking (cover at top, content below)
- [ ] 4.3 Style cover image container with action buttons (Add to List, Share)
- [ ] 4.4 Apply dark theme styling to all sections (background colors, text colors)
- [ ] 4.5 Add teal/cyan accent color to statistics icons, community score badge, buttons

## 5. Data Display Implementation

- [ ] 5.1 Implement title display (English and Japanese names)
- [ ] 5.2 Implement status badges and type/rating display
- [ ] 5.3 Implement synopsis section with full text
- [ ] 5.4 Implement StatisticsPanel with all metrics (score, rank, popularity, chapters, volumes)
- [ ] 5.5 Implement CommunityScore badge with visual styling
- [ ] 5.6 Implement MangaInfoSection with author and serialization information

## 6. Related Manga Feature

- [ ] 6.1 Fetch related manga data and handle empty state
- [ ] 6.2 Implement RelatedMangaGrid component layout (responsive columns)
- [ ] 6.3 Add click handlers to related manga cards for navigation
- [ ] 6.4 Display relationship type labels if available

## 7. Navigation and UX

- [ ] 7.1 Add "Back to Home" navigation link at top of page
- [ ] 7.2 Update home page `MangaCard.tsx` to navigate to detail page on click
- [ ] 7.3 Implement loading skeleton or spinner while fetching data
- [ ] 7.4 Add fallback UI for missing data sections

## 8. Action Buttons

- [ ] 8.1 Implement "Add to List" button with click handler (placeholder behavior or toast)
- [ ] 8.2 Implement "Share" button with native share API or custom share modal
- [ ] 8.3 Style buttons consistently with app design

## 9. Testing and Refinement

- [ ] 9.1 Test page navigation with various manga IDs
- [ ] 9.2 Test responsive design on mobile, tablet, desktop breakpoints
- [ ] 9.3 Test error handling with invalid manga IDs
- [ ] 9.4 Test loading states and API failures
- [ ] 9.5 Verify all related manga cards navigate correctly
- [ ] 9.6 Test dark theme consistency across all sections

## 10. Integration and Deployment

- [ ] 10.1 Ensure home page MangaCard navigation to detail page works end-to-end
- [ ] 10.2 Test back navigation from detail page to home
- [ ] 10.3 Verify image loading and optimization
- [ ] 10.4 Test with real Jikan API data
- [ ] 10.5 Deploy changes to production
