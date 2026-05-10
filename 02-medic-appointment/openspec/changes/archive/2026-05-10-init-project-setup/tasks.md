## 1. Vite + React 18 + TypeScript Setup

- [x] 1.1 Initialize Vite project with `pnpm create vite@latest . -- --template react-ts`
- [x] 1.2 Install dependencies with `pnpm install`
- [x] 1.3 Configure TypeScript strict mode in tsconfig.json
- [x] 1.4 Set up TypeScript path aliases (@/* → src/*)
- [x] 1.5 Verify `pnpm run dev` starts dev server on localhost:5173
- [x] 1.6 Verify `pnpm run build` creates production build without errors
- [x] 1.7 Verify `pnpm run preview` runs production build locally

## 2. React Project Structure

- [x] 2.1 Create src/ directory structure (routes, components, stores, types, utils, hooks, queries, mutations)
- [x] 2.2 Create public/ directory for static assets
- [x] 2.3 Create .gitignore excluding node_modules, dist/, .env, etc.
- [x] 2.4 Create README.md with project description and setup instructions

## 3. Tailwind CSS Configuration

- [x] 3.1 Install Tailwind CSS dependencies: `pnpm add -D tailwindcss postcss autoprefixer`
- [x] 3.2 Initialize Tailwind: `pnpm dlx tailwindcss init -p`
- [x] 3.3 Configure tailwind.config.ts with content paths (src/)
- [x] 3.4 Create src/index.css with Tailwind directives (@tailwind, @layer, @apply)
- [x] 3.5 Configure custom theme colors in tailwind.config.ts (primary, success, warning, danger)
- [x] 3.6 Import src/index.css in src/main.tsx or root component
- [x] 3.7 Verify Tailwind utilities work in a test component

## 4. TanStack Router Setup

- [x] 4.1 Install TanStack Router: `pnpm add @tanstack/react-router`
- [x] 4.2 Install router dev tools: `pnpm add -D @tanstack/router-devtools`
- [x] 4.3 Create src/routes/ directory for file-based routing
- [x] 4.4 Create src/routes/__root.tsx (root layout with Outlet)
- [x] 4.5 Create src/routes/index.tsx (home page)
- [x] 4.6 Set up router configuration in src/router.ts (or main.tsx)
- [x] 4.7 Wrap app with RouterProvider in src/main.tsx
- [x] 4.8 Verify navigation works between routes

## 5. TanStack Query Setup

- [x] 5.1 Install TanStack Query: `pnpm add @tanstack/react-query`
- [x] 5.2 Create src/queryClient.ts with QueryClient configuration
- [x] 5.3 Create QueryClient with sensible defaults (staleTime, gcTime, etc.)
- [x] 5.4 Wrap application with QueryClientProvider in src/main.tsx (inside RouterProvider)
- [x] 5.5 Create src/queries/ directory for query definitions
- [x] 5.6 Create src/mutations/ directory for mutation definitions
- [x] 5.7 Verify QueryClient is accessible from components via useQueryClient()

## 6. Zustand State Management Setup

- [x] 6.1 Install Zustand: `pnpm add zustand`
- [x] 6.2 Create src/stores/ directory
- [x] 6.3 Create src/stores/appStore.ts (or useAppStore.ts) with base app state
- [x] 6.4 Export useAppStore hook with initial state
- [x] 6.5 Add example state (e.g., theme, sidebarOpen) and actions
- [x] 6.6 Verify store can be imported and used in components
- [x] 6.7 Verify store subscriptions and selectors work correctly

## 7. TypeScript Configuration & Utilities

- [x] 7.1 Create src/types/ directory for shared TypeScript types
- [x] 7.2 Create src/types/index.ts as barrel export for types
- [x] 7.3 Create src/utils/ directory for utility functions
- [x] 7.4 Create src/utils/index.ts as barrel export for utilities
- [x] 7.5 Create src/hooks/ directory for custom React hooks
- [x] 7.6 Create src/hooks/index.ts as barrel export for hooks

## 8. Root Component & Entry Point

- [x] 8.1 Create src/App.tsx as root component (or remove if using RouterProvider)
- [x] 8.2 Update src/main.tsx to bootstrap the app with providers
- [x] 8.3 Order providers correctly: QueryClientProvider → RouterProvider → others
- [x] 8.4 Clean up unused files from Vite template
- [x] 8.5 Verify app starts without console errors

## 9. Build & Development Scripts

- [x] 9.1 Add type-check script: `pnpm run type-check` (tsc --noEmit)
- [x] 9.2 Verify dev server runs without warnings
- [x] 9.3 Verify production build succeeds with no errors
- [x] 9.4 Verify type-check script catches TypeScript errors

## 10. Documentation & Final Verification

- [x] 10.1 Update README.md with stack overview and project structure
- [x] 10.2 Document how to run dev server, build, and type-check
- [x] 10.3 Create initial .env.example file (if needed)
- [x] 10.4 Initialize git repository (if not already done)
- [x] 10.5 Create initial commit with project setup
- [x] 10.6 Verify all scripts run successfully
