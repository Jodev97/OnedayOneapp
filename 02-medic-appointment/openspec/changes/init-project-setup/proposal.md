## Why

The project needs initial scaffolding and configuration of the complete tech stack before implementing any features. A proper foundation ensures all tools are correctly integrated and ready for development. This eliminates configuration friction and establishes consistent patterns for the team.

## What Changes

- Initialize Vite + React 18 + TypeScript strict mode with pnpm
- Configure TanStack Router with file-based routing structure
- Set up TanStack Query with QueryClient and caching
- Initialize Zustand store architecture
- Configure Tailwind CSS with custom theme and utilities
- Set up project structure (directories, config files, base types)
- Configure build, dev, and type-checking scripts with pnpm
- Establish foundational imports and export patterns

## Capabilities

### New Capabilities
- `project-init`: Initialize Vite project with React 18, TypeScript, and dev dependencies
- `router-setup`: Configure TanStack Router with file-based routing in src/routes/
- `query-setup`: Set up TanStack Query with QueryClient and provider pattern
- `state-management`: Initialize Zustand with base store architecture
- `styling-setup`: Configure Tailwind CSS with custom theme and utilities
- `project-structure`: Create directory structure and base configuration files
- `typescript-config`: Configure TypeScript strict mode and path aliases

### Modified Capabilities
<!-- None - this is initial setup only -->

## Impact

- **New Files**: package.json, pnpm-workspace.yaml, vite.config.ts, tailwind.config.ts, tsconfig.json, src/ directory structure
- **Dependencies**: React, TanStack Router, TanStack Query, Zustand, Tailwind CSS, TypeScript, Vite (managed with pnpm)
- **Scripts**: dev, build, type-check, preview (run with `pnpm run`)
- **Package Manager**: pnpm for all dependency management
- **No Breaking Changes**: This is initial setup only
