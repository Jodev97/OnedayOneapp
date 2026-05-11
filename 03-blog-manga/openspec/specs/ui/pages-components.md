# Pages & Components Design Specification

## Page Architecture

### Layout Structure

All pages inherit the base layout from `src/app/Layout.tsx` which includes:
- Header with navigation and theme toggle (built with Tailwind CSS)
- Sidebar navigation (optional, built with Tailwind CSS)
- Main content area
- Footer (built with Tailwind CSS)

---

## 1. Home Page (`/`)

### Purpose
Landing page with featured recommendations and quick access to main features.

### Sections

#### Hero Section
```
Layout: Full-width banner with gradient overlay
Height: 300-400px (mobile-first responsive)
Content:
  - Large headline (text-3xl/2xl)
  - Subheadline (text-lg)
  - CTA button (rounded-lg, shadow-lg)
  - Background image: Featured manga artwork
```

**Components Used:**
- HeroSection
- Button (primary)
- Typography

#### Featured Manga Grid
```
Layout: Horizontal scroll / Grid (md: 3 columns, lg: 4 columns)
Card size: 160x240px (poster aspect ratio)
Components:
  - MangaCard (image, title, rating)
  - Badge (status: Trending, New)
Spacing: gap-4
```

**Components Used:**
- MangaGrid
- MangaCard
- Badge
- Button (View All)

#### CTA Section
```
Layout: Centered content
Heading: "Start Exploring"
Buttons:
  - Explore Now (primary)
  - Browse Blog (secondary)
Spacing: py-12
```

#### Footer
```
Layout: Simple footer with links
Sections: About, Blog, Settings, Social
Spacing: py-8, gap-6
```

**Components Used:**
- Footer
- Link

---

## 2. Explore Page (`/explore`)

### Purpose
Advanced search and filtering for manga discovery.

### Layout

#### Top Bar
```
Sticky position: top-0, z-40
Height: h-20
Content:
  - Search input (full width or 40% width)
  - Filter toggle button (mobile)
  - Sort dropdown
Padding: px-4, py-3
Background: bg-card with border-b
```

#### Sidebar (Desktop Only)
```
Position: Fixed left, width: 280px
Height: Full screen minus header
Scrollable: overflow-y-auto
Padding: p-4
Components:
  - Filter sections (collapsible)
  - Checkbox groups
  - Range sliders
  - Clear filters button
```

#### Main Content Area
```
Grid layout: md: 3 columns, lg: 4 columns
Card size: 160x240px
Spacing: gap-4, p-4
Pagination: Bottom of list
```

#### Filter Sections (Sidebar)

**Available Filters:**
1. Genre (Multi-select)
   - Checkboxes
   - Search within genres
2. Status (Single-select)
   - Ongoing
   - Completed
3. Type (Single-select)
   - Manga
   - Anime
4. Year (Range slider)
   - Min: 1960
   - Max: Current year
5. Score (Range slider)
   - Min: 1
   - Max: 10
6. Demographic (Multi-select)
   - Shounen, Shoujo, Seinen, Josei
7. Author (Text search)

**Components Used:**
- Sidebar
- Collapsible
- Checkbox, Radio
- Slider
- Input
- Button
- Card

---

## 3. Details Page (`/manga/[id]`)

### Purpose
Comprehensive manga information display.

### Layout

#### Header Section
```
Display: flex, md: flex-row
Spacing: gap-6
Padding: p-4, md:p-8

Content:
  - Cover image (left): w-48, h-72
  - Info section (right):
    - Title (text-3xl)
    - Rating badge
    - Status badge
    - Meta info (type, year, author)
    - Synopsis (prose, max-prose-md)
    - Action buttons (Add to Library, Rate)
```

#### Tabs Section
```
Tab options:
  1. Overview
     - Additional details
     - Related manga grid
  2. Reviews
     - Blog posts referencing this manga
  3. Statistics
     - Rating distribution chart
     - Popularity metrics
```

#### Related Manga
```
Grid: 4 columns (lg), 2 columns (md), 1 column (sm)
Cards: MangaCard variant (smaller)
Spacing: gap-4
```

**Components Used:**
- Image
- Badge
- Button
- Tabs
- Card
- Table (for details)
- Chart
- MangaCard
- Dialog (for modals)

---

## 4. My Library Page (`/library`)

### Purpose
Personal manga collection management.

### Layout

#### Library Header
```
Heading: "My Library"
Subtext: "X titles tracked"
Controls:
  - Filter dropdown (All, Reading, Completed, On Hold, Dropped)
  - Sort dropdown (Recently added, Rating, Title)
  - View toggle (Grid, List)
Spacing: p-4, mb-6
```

#### Library Grid/List

**Grid View (Default):**
```
Layout: md: 3 columns, lg: 4 columns
Card size: 160x240px
Overlay on hover:
  - Rating input
  - Status dropdown
  - Remove button
```

**List View:**
```
Table columns:
  - Cover image (small, w-12)
  - Title
  - Status (badge)
  - Rating (stars)
  - Date added
  - Actions (edit, remove)
Row height: h-16
```

#### Empty State
```
Display: When no manga in library
Content:
  - Empty icon
  - Message: "No manga in your library yet"
  - CTA button: "Explore manga"
Components:
  - Empty state component
  - Button
```

**Components Used:**
- Card
- Badge
- Button
- Input
- Select
- Dialog (for edit)
- Toast (for notifications)
- Empty state component
- Skeleton (loading)

---

## 5. Blog Page (`/blog`)

### Purpose
Static blog articles and reviews.

### Layout

#### Blog Header
```
Heading: "Manga Blog"
Subheading: "Articles and reviews"
Search bar: Blog-specific search
Spacing: py-8, px-4
```

#### Article Grid
```
Layout: md: 2 columns, lg: 3 columns
Card size: Full width
Card content:
  - Thumbnail image (h-40)
  - Title (text-xl)
  - Excerpt (text-sm, clamp 2-3 lines)
  - Author & date
  - Category badge
  - Read more button
Spacing: gap-6
```

#### Featured Articles
```
Display: Above grid (optional)
Layout: 1 large article + 2 small articles
Size: 60/40 split or stacked mobile
Styling: More prominent shadows, larger image
```

#### Article Detail Page
```
Layout:
  - Hero image (full width, h-96)
  - Article content:
    - Title (text-4xl)
    - Meta (author, date, reading time)
    - Prose content (max-prose-lg)
    - Related articles
  - Sidebar (optional):
    - Table of contents
    - Share buttons
    - Author info
```

**Components Used:**
- Card
- Image
- Badge
- Button
- Prose (markdown)
- Avatar
- Link
- Separator

---

## 6. Settings Page (`/settings`)

### Purpose
User configuration and preferences.

### Layout

#### Settings Navigation
```
Sidebar tabs or tabs at top:
  - Theme
  - Language
  - Notifications
Spacing: gap-4
```

#### Theme Settings
```
Option 1: Light mode
Option 2: Dark mode
Option 3: System (default)
Display: Radio group
Spacing: gap-4
```

#### Language Settings
```
Dropdown or radio group:
  - English
  - Spanish
  - Japanese
  - Portuguese
Display: Select component
```

#### Notification Toggles
```
Options:
  - New manga notifications
  - Blog updates
  - Library reminders
Display: Switch components
Spacing: gap-4
```

#### Save/Reset Buttons
```
Primary: Save Changes
Secondary: Reset to Defaults
Spacing: mt-6, gap-2
```

**Components Used:**
- Tabs or menu
- RadioGroup
- Switch
- Select
- Button
- Card
- Label
- Toast (confirmation)

---

## 7. 404 Error Page (`/404`)

### Purpose
Handle not-found routes.

### Layout

```
Display: Centered flex column
Height: Full screen (min-h-screen)
Content:
  - Large 404 text
  - Error message
  - Helpful suggestions (see Explore, Home, Library)
  - Home button (primary CTA)
Spacing: gap-4
```

**Components Used:**
- Heading
- Paragraph
- Button
- Link

---

## Reusable Component Patterns

### MangaCard
```tsx
interface MangaCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  status?: "Ongoing" | "Completed";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  showStatus?: boolean;
  showRating?: boolean;
}
```

**Variants:**
- Grid card: `160x240px`, overlay on hover
- List item: `w-full`, horizontal layout
- Detail preview: `w-48`, large

### FilterSection
```tsx
interface FilterSectionProps {
  title: string;
  type: "checkbox" | "radio" | "range" | "search";
  options: FilterOption[];
  selected: string[];
  onChange: (values: string[]) => void;
  expandable?: boolean;
}
```

### LibraryCard
```tsx
interface LibraryCardProps {
  mangaId: number;
  status: "Reading" | "Completed" | "On Hold" | "Dropped";
  rating: number;
  onStatusChange: (status) => void;
  onRatingChange: (rating: number) => void;
  onRemove: () => void;
}
```

### ArticleCard
```tsx
interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
  readingTime?: number;
}
```

---

## Responsive Design Strategy

### Mobile-First Approach

**Mobile (< 640px):**
- Single column layouts
- Stacked cards
- Full-width inputs
- Bottom navigation or hamburger menu
- Touch-friendly sizing (min 44x44px)

**Tablet (640px - 1024px):**
- 2-column grids
- Side-by-side layouts
- Sidebar navigation hidden (drawer)
- Increased spacing

**Desktop (>= 1024px):**
- 3-4 column grids
- Sidebar navigation visible
- Advanced filtering
- Hover states and tooltips

---

## Loading & Empty States

### Skeleton Loaders
- Use for manga grids
- Card shape matching final content
- Animate pulse effect

### Empty States
- When no manga found
- When library is empty
- When no blog posts
- Include icon, message, and CTA

### Error States
- API failures: Retry button
- Network errors: Offline indicator
- 404: Return home link

---

## Interaction Patterns

### Cards
- Hover: `shadow-lg`, scale-up (subtle)
- Click: Navigation to detail page

### Buttons
- Primary: `bg-primary`, `text-primary-foreground`
- Secondary: `bg-secondary`, `border`
- Disabled: `opacity-50`, `cursor-not-allowed`
- Loading: Spinner, disabled state

### Forms
- Real-time validation
- Clear error messages
- Success feedback (toast)
- Auto-focus first input

### Modals & Dialogs
- Center on page
- Backdrop blur/dark overlay
- Close button (X)
- Keyboard: Esc to close
- Focus trap

---

## Performance Considerations

### Image Optimization
- Use HTML img element with loading="lazy" attribute
- Lazy loading for off-screen images
- Responsive srcSet for different screen sizes
- WebP with fallbacks for browser compatibility
- Placeholder while loading (CSS background or skeleton)

### Code Splitting
- Route-based splitting
- Component lazy loading
- Library chunking

### Rendering
- Memoization for expensive renders
- Virtual scrolling for large lists
- Debounced search/filter
