## 1. Project Initialization & Dependencies

- [x] 1.1 Create package.json with project metadata (name, version, description, scripts)
- [x] 1.2 Install core dependencies: react@19, react-dom@19, typescript, vite
- [x] 1.3 Install dev dependencies: @vitejs/plugin-react, typescript, ts-node
- [x] 1.4 Install styling dependencies: tailwindcss@4, postcss, autoprefixer
- [x] 1.5 Install routing: @tanstack/react-router, @tanstack/router-devtools
- [x] 1.6 Install state management: zustand
- [x] 1.7 Install data fetching: @tanstack/react-query, @tanstack/query-devtools
- [x] 1.8 Install UI utilities: clsx, tailwind-merge forClassName management
- [x] 1.9 Install Lucide icons for UI components
- [x] 1.10 Run `npm install` or `pnpm install` to lock dependencies

## 2. Vite Configuration

- [x] 2.1 Create vite.config.ts with React plugin and HMR settings
- [x] 2.2 Configure path aliases (@/* → src/*)
- [x] 2.3 Enable TypeScript support in Vite config
- [x] 2.4 Configure environment variables with VITE_ prefix support
- [x] 2.5 Set up build optimization (code splitting, minification)
- [x] 2.6 Create .env.example with required environment variables (VITE_API_URL=https://api.jikan.moe/v4)

## 3. TypeScript Configuration

- [x] 3.1 Create tsconfig.json with strict mode enabled
- [x] 3.2 Configure module resolution (es2020, esnext for jsx/tsx)
- [x] 3.3 Set up path aliases in tsconfig (compilerOptions.paths)
- [x] 3.4 Configure lib includes (DOM, ES2020, React, ReactDOM)
- [x] 3.5 Create tsconfig.node.json for tooling configuration
- [x] 3.6 Verify types for Node.js and Vite via @types dependencies

## 4. Tailwind CSS Setup

- [x] 4.1 Create tailwind.config.ts with design system colors
- [x] 4.2 Define light mode color palette (OKLch values from template)
- [x] 4.3 Define dark mode color palette (OKLch values from template)
- [x] 4.4 Configure CSS variables for colors (--background, --foreground, --primary, etc.)
- [x] 4.5 Configure typography theme (Geist sans, Geist Mono for code)
- [x] 4.6 Configure spacing scale (4px base unit)
- [x] 4.7 Configure border radius scale
- [x] 4.8 Set dark mode to class-based (darkMode: ['class'])
- [x] 4.9 Enable Tailwind animations plugin

## 5. PostCSS Configuration

- [x] 5.1 Create postcss.config.mjs with tailwindcss and autoprefixer plugins
- [x] 5.2 Verify PostCSS is configured for CSS variable processing

## 6. Directory Structure Creation

- [x] 6.1 Create src/ root directory
- [x] 6.2 Create src/app/ for App.tsx and Layout
- [x] 6.3 Create src/pages/ for page components
- [x] 6.4 Create src/components/ root directory
- [x] 6.5 Create src/components/ui/ for Shadcn UI components
- [x] 6.6 Create src/stores/ for Zustand stores
- [x] 6.7 Create src/hooks/ for custom React hooks
- [x] 6.8 Create src/types/ for TypeScript interfaces
- [x] 6.9 Create src/utils/ for utility functions
- [x] 6.10 Create src/styles/ for global stylesheets
- [x] 6.11 Create src/config/ for configuration files
- [x] 6.12 Create src/lib/ for library functions and constants
- [x] 6.13 Create public/ for static assets

## 7. Global Styles & CSS Variables

- [x] 7.1 Create src/styles/globals.css
- [x] 7.2 Import Tailwind CSS (@import 'tailwindcss')
- [x] 7.3 Define :root CSS variables for light mode colors (all 20+ variables)
- [x] 7.4 Define .dark CSS variables for dark mode colors
- [x] 7.5 Create @theme inline block mapping to CSS variables
- [x] 7.6 Configure @layer base with default element styles
- [x] 7.7 Import Geist fonts via @font-face or Google Fonts

## 8. HTML Entry Point

- [x] 8.1 Create public/index.html (or index.html at root)
- [x] 8.2 Add proper meta tags (charset UTF-8, viewport, color-scheme)
- [x] 8.3 Add root div with id="root" for React mounting
- [x] 8.4 Add script reference to main.tsx: `<script type="module" src="/src/main.tsx"></script>`
- [x] 8.5 Add title and favicon reference

## 9. React Entry Point

- [x] 9.1 Create src/main.tsx as application entry point
- [x] 9.2 Import React and ReactDOM
- [x] 9.3 Import App component and global styles
- [x] 9.4 Create React root using ReactDOM.createRoot()
- [x] 9.5 Wrap App with StrictMode
- [x] 9.6 Mount to document.getElementById('root')

## 10. App Root Component & Providers

- [x] 10.1 Create src/app/App.tsx as root component
- [x] 10.2 Create src/app/Layout.tsx with header, main, footer structure
- [x] 10.3 Import and integrate ThemeProvider
- [x] 10.4 Import and integrate TanStack Router provider
- [x] 10.5 Import and integrate TanStack Query provider (QueryClientProvider)
- [x] 10.6 Configure QueryClient with default options
- [x] 10.7 Export App.tsx with proper typing (React.FC or function component)

## 11. Theme Provider Implementation

- [x] 11.1 Create src/app/ThemeProvider.tsx
- [x] 11.2 Implement dark mode detection (prefers-color-scheme)
- [x] 11.3 Implement dark mode toggle function
- [x] 11.4 Add localStorage persistence for theme preference
- [x] 11.5 Apply .dark class to html element when dark mode active
- [x] 11.6 Initialize theme on first render

## 12. Router Configuration (Minimal)

- [x] 12.1 Create src/config/router.ts or src/config/routes.ts
- [x] 12.2 Configure TanStack Router with root route
- [x] 12.3 Create root route that renders Layout
- [x] 12.4 Create placeholder route for future pages (e.g., root index)
- [x] 12.5 Export router instance for use in App.tsx

## 13. Type Definitions Foundation

- [x] 13.1 Create src/types/index.ts as main types export
- [x] 13.2 Create src/types/manga.ts with Manga interface (from project spec)
- [x] 13.3 Create src/types/library.ts with LibraryEntry interface
- [x] 13.4 Create src/types/settings.ts with Settings interface
- [x] 13.5 Create src/types/api.ts with API response types (if needed)

## 14. npm Scripts & Build Configuration

- [x] 14.1 Add "dev" script: `vite`
- [x] 14.2 Add "build" script: `vite build`
- [x] 14.3 Add "preview" script: `vite preview`
- [x] 14.4 Add "type-check" script: `tsc --noEmit`
- [x] 14.5 Add "lint" script (if using eslint - optional for now)
- [x] 14.6 Update .gitignore with dist/, node_modules/, .env.local

## 15. Development & Verification

- [x] 15.1 Run `npm run type-check` and verify no TypeScript errors
- [x] 15.2 Run `npm run build` and verify dist/ is created without errors
- [x] 15.3 Run `npm run dev` and verify dev server starts on http://localhost:5173
- [ ] 15.4 Open browser to http://localhost:5173 and verify app loads
- [ ] 15.5 Verify console has no JavaScript errors
- [ ] 15.6 Test hot reload: modify a file and verify browser updates
- [ ] 15.7 Verify theme provider loads (check if dark mode class is applied correctly)
- [ ] 15.8 Run `npm run preview` and verify production build serves correctly

## 16. Documentation & Final Checks

- [x] 16.1 Create README.md with setup instructions
- [x] 16.2 Document npm scripts and what each does
- [x] 16.3 Document directory structure and purpose of each folder
- [x] 16.4 Verify .gitignore includes build artifacts and env files
- [x] 16.5 Create .env.local from .env.example
- [x] 16.6 Final verification: dev server runs, builds, and compiles without errors
- [ ] 16.7 Commit initial project structure to git
