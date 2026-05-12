## ADDED Requirements

### Requirement: React Entry Point
The system SHALL provide a main.tsx file that initializes React and mounts the application to the DOM.

#### Scenario: Application mounts successfully
- **WHEN** main.tsx is executed
- **THEN** React renders the App component to the root DOM element without errors

#### Scenario: Strict mode is enabled
- **WHEN** application runs in development
- **THEN** React.StrictMode wrapper highlights potential issues (double-rendering, unsafe lifecycles)

#### Scenario: Application initializes providers
- **WHEN** main.tsx runs
- **THEN** all necessary providers (Router, Theme, Query, etc.) are initialized before rendering App

### Requirement: App Root Component
The system SHALL provide src/app/App.tsx as the root React component with router integration.

#### Scenario: App component renders
- **WHEN** application loads
- **THEN** App.tsx renders without errors

#### Scenario: Router is configured
- **WHEN** App.tsx initializes
- **THEN** TanStack Router provider is set up for client-side routing

#### Scenario: App component is TypeScript
- **WHEN** developer opens App.tsx
- **THEN** file uses .tsx extension with React.FC or functional component typing

### Requirement: Theme Provider
The system SHALL provide a ThemeProvider component that manages light/dark mode and applies design system colors.

#### Scenario: Theme provider wraps application
- **WHEN** main.tsx loads
- **THEN** ThemeProvider wraps all child components

#### Scenario: Dark mode is detectable
- **WHEN** user's system preference changes
- **THEN** application detects change and applies appropriate theme

#### Scenario: Theme preference persists
- **WHEN** user changes theme manually
- **THEN** preference is saved and restored on next visit

### Requirement: Layout Structure
The system SHALL provide a basic Layout component with common sections (header, main content area, footer).

#### Scenario: Layout wraps pages
- **WHEN** pages render
- **THEN** Layout component provides consistent header, footer, and main content structure

#### Scenario: Header is visible
- **WHEN** application loads
- **THEN** header displays navigation, logo, and theme toggle

#### Scenario: Footer is visible
- **WHEN** user scrolls to bottom
- **THEN** footer displays links and information

### Requirement: Index.html Entry Point
The system SHALL provide a public/index.html file that loads the React application and references required scripts/styles.

#### Scenario: index.html is valid
- **WHEN** browser loads index.html
- **THEN** file is valid HTML5 with proper meta tags (charset, viewport, etc.)

#### Scenario: Root element exists
- **WHEN** index.html loads
- **THEN** div with id="root" exists for React to mount into

#### Scenario: Main script is referenced
- **WHEN** index.html loads
- **THEN** main.tsx is referenced via `<script type="module" src="/src/main.tsx"></script>`

### Requirement: CSS Variable Initialization
The system SHALL initialize CSS variables from the design system on application startup.

#### Scenario: Colors are available
- **WHEN** application loads
- **WHEN** component uses CSS variable classes (bg-primary, text-foreground, etc.)
- **THEN** correct colors from design system are applied

#### Scenario: Theme colors switch
- **WHEN** dark mode is toggled
- **THEN** CSS variables update and all components reflect new colors

### Requirement: No Compile Errors
The system SHALL compile without TypeScript or build errors.

#### Scenario: TypeScript compilation succeeds
- **WHEN** developer runs type check (tsc --noEmit)
- **THEN** no TypeScript errors are reported

#### Scenario: Build process completes
- **WHEN** developer runs `npm run build`
- **THEN** build completes successfully with dist/ output and no errors

#### Scenario: Dev server starts
- **WHEN** developer runs `npm run dev`
- **THEN** Vite dev server starts on http://localhost:5173 with no errors

### Requirement: Hot Module Replacement
The system SHALL support hot module replacement so developers can see changes instantly.

#### Scenario: Component changes reload instantly
- **WHEN** developer saves a component file
- **THEN** browser reflects the change within 1-2 seconds without full page reload

#### Scenario: State is preserved on save
- **WHEN** component updates through HMR
- **THEN** React state in other components is preserved (if possible)

### Requirement: Empty Page Verification
The system SHALL provide a minimal App.tsx that renders successfully to prove the stack works.

#### Scenario: App renders something
- **WHEN** application loads in browser
- **THEN** user sees rendered content (not blank page)

#### Scenario: Console has no errors
- **WHEN** application runs
- **THEN** browser console shows no error messages or warnings

### Requirement: React DOM Rendering
The system SHALL use React 19 with proper ReactDOM.createRoot for modern React patterns.

#### Scenario: React 19 is installed
- **WHEN** package.json is checked
- **THEN** React dependency is version 19.x or higher

#### Scenario: ReactDOM.createRoot is used
- **WHEN** main.tsx is examined
- **THEN** ReactDOM.createRoot is used instead of deprecated ReactDOM.render()

### Requirement: Environment Variables Available
The system SHALL load environment variables and make them available to the application at build time.

#### Scenario: VITE_ prefixed variables load
- **WHEN** .env file defines VITE_API_URL=https://api.jikan.moe/v4
- **THEN** application can access it via import.meta.env.VITE_API_URL

#### Scenario: Variables are validated
- **WHEN** missing required variables
- **THEN** build or startup provides helpful error message about missing config
