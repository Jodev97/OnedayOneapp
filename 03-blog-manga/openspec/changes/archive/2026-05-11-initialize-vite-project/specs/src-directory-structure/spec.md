## ADDED Requirements

### Requirement: src/ Root Directory
The system SHALL contain all application source code in a src/ directory at the project root.

#### Scenario: Source code is organized
- **WHEN** developer opens the project
- **THEN** src/ directory contains all TypeScript/React code (no source code at project root)

#### Scenario: Build tools know to use src/
- **WHEN** build process runs
- **THEN** all imports and builds reference src/ as the source directory

### Requirement: Components Directory
The system SHALL provide src/components/ directory with subdirectories for UI components and reusable components.

#### Scenario: UI components folder exists
- **WHEN** developer needs a button or card component
- **THEN** src/components/ui/ directory exists for Shadcn UI components

#### Scenario: Reusable components organized
- **WHEN** developer creates a manga card or filter component
- **THEN** src/components/ contains well-organized component files (not in ui/ subdirectory)

#### Scenario: Components can be imported cleanly
- **WHEN** developer imports a component
- **THEN** import path is `@/components/ComponentName` or `@/components/ui/UiComponent`

### Requirement: Pages Directory
The system SHALL provide src/pages/ directory for page components that correspond to routes.

#### Scenario: Route pages are organized
- **WHEN** developer needs to create Home or Explore page
- **THEN** src/pages/ directory exists with clear naming (e.g., HomePage.tsx, ExplorePage.tsx)

#### Scenario: Pages can be imported by router
- **WHEN** TanStack Router configuration imports pages
- **THEN** pages are accessible from src/pages/ directory

### Requirement: Stores Directory
The system SHALL provide src/stores/ directory for Zustand store definitions.

#### Scenario: Store files organized
- **WHEN** developer creates a manga library store
- **THEN** src/stores/ directory contains store definitions (e.g., mangaLibraryStore.ts, settingsStore.ts)

#### Scenario: Stores can be imported in components
- **WHEN** component needs state
- **THEN** store is imported from `@/stores/storeName`

### Requirement: Hooks Directory
The system SHALL provide src/hooks/ directory for custom React hooks.

#### Scenario: Custom hooks organized
- **WHEN** developer creates custom hooks (useMediaQuery, useManga, etc.)
- **THEN** src/hooks/ directory exists with hook files (e.g., useMobileView.ts, useMangaData.ts)

#### Scenario: Hooks follow naming convention
- **WHEN** file is a hook
- **THEN** filename starts with `use` (e.g., useTheme.ts, usePagination.ts)

### Requirement: Types Directory
The system SHALL provide src/types/ directory for TypeScript type definitions and interfaces.

#### Scenario: Type definitions organized
- **WHEN** application needs shared types
- **THEN** src/types/ directory contains interface definitions (e.g., manga.ts, library.ts, api.ts)

#### Scenario: Types are imported globally
- **WHEN** developer needs a type
- **THEN** import statement is `@/types/typeName` for clean imports

### Requirement: Utils Directory
The system SHALL provide src/utils/ directory for utility functions and helpers.

#### Scenario: Utility functions organized
- **WHEN** application needs helper functions (formatDate, calculateScore, etc.)
- **THEN** src/utils/ directory contains utility files (e.g., formatting.ts, validation.ts, api-helpers.ts)

#### Scenario: Utils are easily importable
- **WHEN** component needs a utility
- **THEN** import is `@/utils/utilityName`

### Requirement: Styles Directory
The system SHALL provide src/styles/ directory for global stylesheets and CSS utilities.

#### Scenario: Global styles exist
- **WHEN** application initializes
- **THEN** src/styles/ directory contains globals.css with Tailwind imports and base styles

#### Scenario: CSS variables are defined
- **WHEN** application loads
- **THEN** globals.css defines all CSS custom properties for colors, spacing, and design system

### Requirement: Config Directory
The system SHALL provide src/config/ directory for configuration files (router, API endpoints, constants).

#### Scenario: Router configuration exists
- **WHEN** TanStack Router is initialized
- **THEN** src/config/router.ts or src/config/routes.ts exists with route definitions

#### Scenario: Constants organized
- **WHEN** application needs constants
- **THEN** src/config/ contains constants.ts or similar with API endpoints, pagination sizes, etc.

### Requirement: Lib Directory
The system SHALL provide src/lib/ directory for utility libraries and functions (e.g., API client setup, database helpers).

#### Scenario: Library functions organized
- **WHEN** application needs reusable library code
- **THEN** src/lib/ contains helper functions (e.g., queryClient setup, Jikan API client, localStorage utils)

#### Scenario: Library code is separate from utils
- **WHEN** choosing between src/lib/ and src/utils/
- **THEN** src/lib/ contains classes/functions that are more substantial; src/utils/ contains simple helpers

### Requirement: App Directory
The system SHALL provide src/app/ directory containing the main App.tsx component and layout.

#### Scenario: App.tsx exists
- **WHEN** application initializes
- **THEN** src/app/App.tsx is the root component that sets up routing, providers, and layouts

#### Scenario: Layout component exists
- **WHEN** pages need a consistent layout
- **THEN** src/app/Layout.tsx or similar provides header, footer, sidebar structure

### Requirement: Public Directory
The system SHALL provide a public/ directory for static assets (images, fonts, icons, manifests).

#### Scenario: Static assets are served
- **WHEN** developer needs to reference a static image
- **THEN** public/ directory exists and assets are served at root path (/logo.png)

#### Scenario: Favicon is available
- **WHEN** application loads in browser
- **THEN** public/favicon.ico (or .png) is displayed in browser tab

### Requirement: Build Output Directory
The system SHALL ignore dist/ directory from version control and configure it as Vite build output.

#### Scenario: Build output is not committed
- **WHEN** `.gitignore` is checked
- **THEN** dist/ directory is listed to prevent build artifacts from being committed

#### Scenario: Build produces dist/
- **WHEN** `npm run build` completes
- **THEN** dist/ directory contains optimized production assets
