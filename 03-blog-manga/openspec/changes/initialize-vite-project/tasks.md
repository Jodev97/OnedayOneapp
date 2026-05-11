## 1. Project Initialization & Dependencies

- [ ] 1.1 Create package.json with project metadata (name, version, description, scripts)
- [ ] 1.2 Install core dependencies: react@19, react-dom@19, typescript, vite
- [ ] 1.3 Install dev dependencies: @vitejs/plugin-react, typescript, ts-node
- [ ] 1.4 Install styling dependencies: tailwindcss@4, postcss, autoprefixer
- [ ] 1.5 Install routing: @tanstack/react-router, @tanstack/router-devtools
- [ ] 1.6 Install state management: zustand
- [ ] 1.7 Install data fetching: @tanstack/react-query, @tanstack/query-devtools
- [ ] 1.8 Install UI utilities: clsx, tailwind-merge for className management
- [ ] 1.9 Install Lucide icons for UI components
- [ ] 1.10 Run `npm install` or `pnpm install` to lock dependencies

## 2. Vite Configuration

- [ ] 2.1 Create vite.config.ts with React plugin and HMR settings
- [ ] 2.2 Configure path aliases (@/* → src/*)
- [ ] 2.3 Enable TypeScript support in Vite config
- [ ] 2.4 Configure environment variables with VITE_ prefix support
- [ ] 2.5 Set up build optimization (code splitting, minification)
- [ ] 2.6 Create .env.example with required environment variables (VITE_API_URL=https://api.jikan.moe/v4)

## 3. TypeScript Configuration

- [ ] 3.1 Create tsconfig.json with strict mode enabled
- [ ] 3.2 Configure module resolution (es2020, esnext for jsx/tsx)
- [ ] 3.3 Set up path aliases in tsconfig (compilerOptions.paths)
- [ ] 3.4 Configure lib includes (DOM, ES2020, React, ReactDOM)
- [ ] 3.5 Create tsconfig.node.json for tooling configuration
- [ ] 3.6 Verify types for Node.js and Vite via @types dependencies

## 4. Tailwind CSS Setup

- [ ] 4.1 Create tailwind.config.ts with design system colors
- [ ] 4.2 Define light mode color palette (OKLch values from template)
- [ ] 4.3 Define dark mode color palette (OKLch values from template)
- [ ] 4.4 Configure CSS variables for colors (--background, --foreground, --primary, etc.)
- [ ] 4.5 Configure typography theme (Geist sans, Geist Mono for code)
- [ ] 4.6 Configure spacing scale (4px base unit)
- [ ] 4.7 Configure border radius scale
- [ ] 4.8 Set dark mode to class-based (darkMode: ['class'])
- [ ] 4.9 Enable Tailwind animations plugin

## 5. PostCSS Configuration

- [ ] 5.1 Create postcss.config.mjs with tailwindcss and autoprefixer plugins
- [ ] 5.2 Verify PostCSS is configured for CSS variable processing

## 6. Directory Structure Creation

- [ ] 6.1 Create src/ root directory
- [ ] 6.2 Create src/app/ for App.tsx and Layout
- [ ] 6.3 Create src/pages/ for page components
- [ ] 6.4 Create src/components/ root directory
- [ ] 6.5 Create src/components/ui/ for Shadcn UI components
- [ ] 6.6 Create src/stores/ for Zustand stores
- [ ] 6.7 Create src/hooks/ for custom React hooks
- [ ] 6.8 Create src/types/ for TypeScript interfaces
- [ ] 6.9 Create src/utils/ for utility functions
- [ ] 6.10 Create src/styles/ for global stylesheets
- [ ] 6.11 Create src/config/ for configuration files
- [ ] 6.12 Create src/lib/ for library functions and constants
- [ ] 6.13 Create public/ for static assets

## 7. Global Styles & CSS Variables

- [ ] 7.1 Create src/styles/globals.css
- [ ] 7.2 Import Tailwind CSS (@import 'tailwindcss')
- [ ] 7.3 Define :root CSS variables for light mode colors (all 20+ variables)
- [ ] 7.4 Define .dark CSS variables for dark mode colors
- [ ] 7.5 Create @theme inline block mapping to CSS variables
- [ ] 7.6 Configure @layer base with default element styles
- [ ] 7.7 Import Geist fonts via @font-face or Google Fonts

## 8. HTML Entry Point

- [ ] 8.1 Create public/index.html (or index.html at root)
- [ ] 8.2 Add proper meta tags (charset UTF-8, viewport, color-scheme)
- [ ] 8.3 Add root div with id="root" for React mounting
- [ ] 8.4 Add script reference to main.tsx: `<script type="module" src="/src/main.tsx"></script>`
- [ ] 8.5 Add title and favicon reference

## 9. React Entry Point

- [ ] 9.1 Create src/main.tsx as application entry point
- [ ] 9.2 Import React and ReactDOM
- [ ] 9.3 Import App component and global styles
- [ ] 9.4 Create React root using ReactDOM.createRoot()
- [ ] 9.5 Wrap App with StrictMode
- [ ] 9.6 Mount to document.getElementById('root')

## 10. App Root Component & Providers

- [ ] 10.1 Create src/app/App.tsx as root component
- [ ] 10.2 Create src/app/Layout.tsx with header, main, footer structure
- [ ] 10.3 Import and integrate ThemeProvider
- [ ] 10.4 Import and integrate TanStack Router provider
- [ ] 10.5 Import and integrate TanStack Query provider (QueryClientProvider)
- [ ] 10.6 Configure QueryClient with default options
- [ ] 10.7 Export App.tsx with proper typing (React.FC or function component)

## 11. Theme Provider Implementation

- [ ] 11.1 Create src/app/ThemeProvider.tsx
- [ ] 11.2 Implement dark mode detection (prefers-color-scheme)
- [ ] 11.3 Implement dark mode toggle function
- [ ] 11.4 Add localStorage persistence for theme preference
- [ ] 11.5 Apply .dark class to html element when dark mode active
- [ ] 11.6 Initialize theme on first render

## 12. Router Configuration (Minimal)

- [ ] 12.1 Create src/config/router.ts or src/config/routes.ts
- [ ] 12.2 Configure TanStack Router with root route
- [ ] 12.3 Create root route that renders Layout
- [ ] 12.4 Create placeholder route for future pages (e.g., root index)
- [ ] 12.5 Export router instance for use in App.tsx

## 13. Type Definitions Foundation

- [ ] 13.1 Create src/types/index.ts as main types export
- [ ] 13.2 Create src/types/manga.ts with Manga interface (from project spec)
- [ ] 13.3 Create src/types/library.ts with LibraryEntry interface
- [ ] 13.4 Create src/types/settings.ts with Settings interface
- [ ] 13.5 Create src/types/api.ts with API response types (if needed)

## 14. npm Scripts & Build Configuration

- [ ] 14.1 Add "dev" script: `vite`
- [ ] 14.2 Add "build" script: `vite build`
- [ ] 14.3 Add "preview" script: `vite preview`
- [ ] 14.4 Add "type-check" script: `tsc --noEmit`
- [ ] 14.5 Add "lint" script (if using eslint - optional for now)
- [ ] 14.6 Update .gitignore with dist/, node_modules/, .env.local

## 15. Development & Verification

- [ ] 15.1 Run `npm run type-check` and verify no TypeScript errors
- [ ] 15.2 Run `npm run build` and verify dist/ is created without errors
- [ ] 15.3 Run `npm run dev` and verify dev server starts on http://localhost:5173
- [ ] 15.4 Open browser to http://localhost:5173 and verify app loads
- [ ] 15.5 Verify console has no JavaScript errors
- [ ] 15.6 Test hot reload: modify a file and verify browser updates
- [ ] 15.7 Verify theme provider loads (check if dark mode class is applied correctly)
- [ ] 15.8 Run `npm run preview` and verify production build serves correctly

## 16. Documentation & Final Checks

- [ ] 16.1 Create README.md with setup instructions
- [ ] 16.2 Document npm scripts and what each does
- [ ] 16.3 Document directory structure and purpose of each folder
- [ ] 16.4 Verify .gitignore includes build artifacts and env files
- [ ] 16.5 Create .env.local from .env.example
- [ ] 16.6 Final verification: dev server runs, builds, and compiles without errors
- [ ] 16.7 Commit initial project structure to git
