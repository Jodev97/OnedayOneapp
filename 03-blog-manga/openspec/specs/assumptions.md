# Tracked Assumptions & Decisions

## Overview
This document tracks all assumptions made during context generation, organized by category and impact level.

---

## Business Rules

### Assumption 1: Blog Content Management
**Status**: ✅ Resolved  
**Impact**: High  
**Decision**: Static, pre-created content

**Description**:
The Blog section uses static, pre-created blog posts and reviews stored within the application. There is no content management system (CMS) or user-generated content creation functionality.

**Rationale**:
- Simpler implementation and maintenance
- No need for complex moderation workflows
- Faster initial MVP
- Focus on core discovery and library features

**Implementation Details**:
- Blog content stored as static JSON/markdown files
- Content loaded at build time or startup
- Support for basic article metadata (title, author, date, category)
- Search functionality over static content

**Related Files**:
- Blog page component
- Static content assets
- Blog data schema

---

### Assumption 2: Library Tracking Scope
**Status**: ✅ Resolved  
**Impact**: High  
**Decision**: Rating & Status Only

**Description**:
The "My Library" feature supports only status tracking (Reading, Completed, On Hold, Dropped) and user ratings (1-10 scale). No chapter progress tracking, personal notes, custom tags, or social sharing features.

**Rationale**:
- Focused feature set
- Reduced data model complexity
- Faster development
- Easier data persistence with localStorage
- Sufficient for core use case

**Implementation Details**:
- Status options: Reading, Completed, On Hold, Dropped
- Rating scale: 1-10 (optional)
- Metadata: dateAdded, dateUpdated
- Stored in localStorage via local2json
- Simple CRUD operations

**Related Files**:
- Library store (Zustand)
- Library component
- localStorage schema

---

## User Behavior

### Assumption 3: Search & Filter Capabilities
**Status**: ✅ Resolved  
**Impact**: High  
**Decision**: Full Jikan API v4 Filter Support

**Description**:
The Explore page leverages all available filters provided by the Jikan API v4, including genre, status, type, year, author, demographic, score range, and more. Users can combine multiple filters simultaneously.

**Rationale**:
- Maximum user flexibility
- Leverage existing API capabilities
- Rich discovery experience
- No reinvention of filtering logic

**Implementation Details**:
- Query builder maps user selections to Jikan API parameters
- Support for multiple simultaneous filters
- Debounced API requests on filter change
- Pagination support
- Clear filter reset option

**Related Files**:
- Explore page component
- Filter UI components
- API query builder utility
- TanStack Query configuration

---

## Technical

### Assumption 4: Offline & Persistence Strategy
**Status**: ✅ Resolved  
**Impact**: Medium  
**Decision**: Online-Only with TanStack Query Caching

**Description**:
The application works primarily online. TanStack Query handles API response caching, allowing users to view previously loaded manga details offline. Personal library and settings are persisted to localStorage. No aggressive offline-first strategy or pre-downloading features.

**Rationale**:
- Simpler architecture
- Reduced storage requirements
- TanStack Query out-of-the-box features
- Acceptable user experience for typical usage patterns
- Easier maintenance

**Implementation Details**:
- TanStack Query caches all API responses
- Cache time: 5 minutes default (configurable)
- Stale-while-revalidate strategy
- Personal library always stored in localStorage
- Settings stored in localStorage
- No service workers or advanced offline features

**Related Files**:
- TanStack Query configuration
- localStorage hooks
- API integration layer

**Constraints**:
- New manga details require online access first
- Blog content requires online access first
- Filtering/searching requires online connection

---

### Assumption 5: Settings Scope
**Status**: ✅ Resolved  
**Impact**: Medium  
**Decision**: Basic Settings (Theme, Language, Notifications)

**Description**:
Settings page provides core user preferences: theme selection (light/dark mode), language preference, and notification toggles. No advanced settings like privacy controls, data export, or account management.

**Rationale**:
- Focused, maintainable feature set
- Streamlined UX
- Covers primary user needs
- Easier implementation
- Suitable for MVP stage

**Implementation Details**:
- Theme: light/dark mode toggle
- Language: dropdown selection (e.g., English, Spanish, Japanese)
- Notifications: boolean toggles for different notification types
- Stored in localStorage
- Default values provided
- Settings apply immediately (no save button)

**Related Files**:
- Settings page component
- Settings store (Zustand)
- Theme provider/context
- Notification service

---

## Performance

### Assumption 6: Load Time Targets
**Status**: ✅ Implied  
**Impact**: Medium

**Description**:
Target page load times:
- Home page: < 2 seconds
- Explore page: < 3 seconds with filters
- Details page: < 1 second (cached)
- My Library: < 1 second (local data)

**Rationale**:
- Standard web performance expectations
- Mobile-friendly experience
- Acceptable for API-dependent features
- Local features optimized for speed

---

## Data Assumptions

### Assumption 7: User Data Privacy
**Status**: ✅ Implied  
**Impact**: High

**Description**:
No user authentication or accounts. All data is:
- Stored locally in browser localStorage
- Not sent to any backend server
- Specific to each user's device/browser
- Lost if browser data is cleared

**Rationale**:
- Simplest implementation
- No backend infrastructure needed
- GDPR/privacy compliant by default
- Focus on frontend features

---

## Accessibility

### Assumption 8: WCAG Compliance Level
**Status**: ✅ Implied  
**Impact**: Medium  
**Decision**: WCAG 2.1 Level AA

**Description**:
Application targets WCAG 2.1 Level AA accessibility compliance including:
- Keyboard navigation
- Screen reader optimization
- Color contrast ratios
- Semantic HTML
- ARIA labels where needed

---

## Security

### Assumption 9: Authentication & Authorization
**Status**: ✅ Implied  
**Impact**: High

**Description**:
No authentication or authorization system. Application is:
- Publicly accessible
- No login required
- No user accounts
- No sensitive data handling

**Rationale**:
- Reduces complexity
- Focuses on core features
- Open access for discovery

---

## Summary of Critical Decisions

| Category | Assumption | Decision |
|----------|-----------|----------|
| Business Rules | Blog Content | Static, pre-created content |
| Business Rules | Library Features | Rating & status tracking only |
| User Behavior | Search & Filters | Full Jikan API v4 support |
| Technical | Offline Strategy | Online-only with TanStack Query caching |
| Technical | Settings Features | Theme, language, notifications |

---

## Future Reconsiderations

These assumptions may be revisited based on user feedback:
- Adding user notes to library entries
- User-generated blog content
- Social features (sharing, following)
- Advanced analytics
- Backend persistence and accounts
- Offline-first architecture

---

## Last Updated
Generated during context specification phase
