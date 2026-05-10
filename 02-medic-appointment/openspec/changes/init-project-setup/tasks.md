## 1. Vite + React 18 + TypeScript Setup

- [ ] 1.1 Initialize Vite project with `pnpm create vite@latest . -- --template react-ts`
- [ ] 1.2 Install dependencies with `pnpm install`
- [ ] 1.3 Configure TypeScript strict mode in tsconfig.json
- [ ] 1.4 Set up TypeScript path aliases (@/* → src/*)
- [ ] 1.5 Verify `pnpm run dev` starts dev server on localhost:5173
- [ ] 1.6 Verify `pnpm run build` creates production build without errors
- [ ] 1.7 Verify `pnpm run preview` runs production build locally

## 2. React Project Structure

- [ ] 2.1 Create src/ directory structure (routes, components, stores, types, utils, hooks, queries, mutations)
- [ ] 2.2 Create public/ directory for static assets
- [ ] 2.3 Create .gitignore excluding node_modules, dist/, .env, etc.
- [ ] 2.4 Create README.md with project description and setup instructions

## 3. Tailwind CSS Configuration

- [ ] 3.1 Install Tailwind CSS dependencies: `pnpm add -D tailwindcss postcss autoprefixer`
- [ ] 3.2 Initialize Tailwind: `pnpm dlx tailwindcss init -p`
- [ ] 3.3 Configure tailwind.config.ts with content paths (src/)
- [ ] 3.4 Create src/index.css with Tailwind directives (@tailwind, @layer, @apply)
- [ ] 3.5 Configure custom theme colors in tailwind.config.ts (primary, success, warning, danger)
- [ ] 3.6 Import src/index.css in src/main.tsx or root component
- [ ] 3.7 Verify Tailwind utilities work in a test component

## 4. TanStack Router Setup

- [ ] 4.1 Install TanStack Router: `pnpm add @tanstack/react-router`
- [ ] 4.2 Install router dev tools: `pnpm add -D @tanstack/router-devtools`
- [ ] 4.3 Create src/routes/ directory for file-based routing
- [ ] 4.4 Create src/routes/__root.tsx (root layout with Outlet)
- [ ] 4.5 Create src/routes/index.tsx (home page)
- [ ] 4.6 Set up router configuration in src/router.ts (or main.tsx)
- [ ] 4.7 Wrap app with RouterProvider in src/main.tsx
- [ ] 4.8 Verify navigation works between routes

## 5. TanStack Query Setup

- [ ] 5.1 Install TanStack Query: `pnpm add @tanstack/react-query`
- [ ] 5.2 Create src/queryClient.ts with QueryClient configuration
- [ ] 5.3 Create QueryClient with sensible defaults (staleTime, gcTime, etc.)
- [ ] 5.4 Wrap application with QueryClientProvider in src/main.tsx (inside RouterProvider)
- [ ] 5.5 Create src/queries/ directory for query definitions
- [ ] 5.6 Create src/mutations/ directory for mutation definitions
- [ ] 5.7 Verify QueryClient is accessible from components via useQueryClient()

## 6. Zustand State Management Setup

- [ ] 6.1 Install Zustand: `pnpm add zustand`
- [ ] 6.2 Create src/stores/ directory
- [ ] 6.3 Create src/stores/appStore.ts (or useAppStore.ts) with base app state
- [ ] 6.4 Export useAppStore hook with initial state
- [ ] 6.5 Add example state (e.g., theme, sidebarOpen) and actions
- [ ] 6.6 Verify store can be imported and used in components
- [ ] 6.7 Verify store subscriptions and selectors work correctly

## 7. TypeScript Configuration & Utilities

- [ ] 7.1 Create src/types/ directory for shared TypeScript types
- [ ] 7.2 Create src/types/index.ts as barrel export for types
- [ ] 7.3 Create src/utils/ directory for utility functions
- [ ] 7.4 Create src/utils/index.ts as barrel export for utilities
- [ ] 7.5 Create src/hooks/ directory for custom React hooks
- [ ] 7.6 Create src/hooks/index.ts as barrel export for hooks

## 8. Root Component & Entry Point

- [ ] 8.1 Create src/App.tsx as root component (or remove if using RouterProvider)
- [ ] 8.2 Update src/main.tsx to bootstrap the app with providers
- [ ] 8.3 Order providers correctly: QueryClientProvider → RouterProvider → others
- [ ] 8.4 Clean up unused files from Vite template
- [ ] 8.5 Verify app starts without console errors

## 9. Build & Development Scripts

- [ ] 9.1 Add type-check script: `pnpm run type-check` (tsc --noEmit)
- [ ] 9.2 Verify dev server runs without warnings
- [ ] 9.3 Verify production build succeeds with no errors
- [ ] 9.4 Verify type-check script catches TypeScript errors

## 10. Documentation & Final Verification

- [ ] 10.1 Update README.md with stack overview and project structure
- [ ] 10.2 Document how to run dev server, build, and type-check
- [ ] 10.3 Create initial .env.example file (if needed)
- [ ] 10.4 Initialize git repository (if not already done)
- [ ] 10.5 Create initial commit with project setup
- [ ] 10.6 Verify all scripts run successfully
