# Medical Appointment Management SPA

A modern React Single Page Application for managing medical appointments with a focus on user experience and clean architecture.

## 📋 Project Overview

This application provides a seamless platform for:
- Browsing available doctors and appointments
- Viewing real-time doctor availability
- Booking appointments with selected time slots
- Managing appointments (cancellation and rescheduling)
- Persistent appointment data stored locally

All data is managed client-side with no backend API required for the MVP.

## 🛠 Tech Stack

- **Frontend Framework**: React 18+ with TypeScript (strict mode)
- **Routing**: TanStack Router (file-based routing)
- **State Management**: 
  - TanStack Query (server/data state)
  - Zustand (app/UI state)
- **Styling**: Tailwind CSS with custom medical-context theme
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── routes/              # TanStack Router file-based routes
│   ├── __root.tsx      # Root layout component
│   └── index.tsx       # Home page
├── components/          # Reusable React components
├── stores/              # Zustand store definitions
│   └── appStore.ts     # App state (theme, loading, etc.)
├── queries/             # TanStack Query definitions
├── mutations/           # TanStack Query mutations
├── types/               # TypeScript types and interfaces
│   └── index.ts        # Shared type definitions
├── utils/               # Utility functions
│   └── index.ts        # Helper functions (cn, formatting, etc.)
├── hooks/               # Custom React hooks
│   └── index.ts        # Hook exports
├── index.css           # Tailwind CSS and global styles
├── main.tsx            # Application entry point
├── router.ts           # Router configuration
└── queryClient.ts      # TanStack Query configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm run dev
```

The application will open at `http://localhost:5173`

### Available Scripts

- **`pnpm run dev`** — Start development server with hot reload
- **`pnpm run build`** — Create optimized production build
- **`pnpm run preview`** — Preview production build locally
- **`pnpm run type-check`** — Run TypeScript type checking

## 🏗 Architecture

### State Management

**TanStack Query** handles server/data state:
- Appointment data (doctors, available slots, bookings)
- Query caching and automatic refetching
- Mutation handling for booking/cancellation/rescheduling

**Zustand** handles app/UI state:
- Theme preference (light/dark mode)
- Sidebar state
- Loading indicators
- Modal states

### Routing

File-based routing with TanStack Router:
- `/` — Home page with appointment overview
- Nested routes to be added for appointments, bookings, etc.

### Data Persistence

Booked appointments are stored in browser `localStorage`:
- Persists across page refreshes
- Can be cleared via browser dev tools or app settings
- Integrate with TanStack Query for seamless updates

## 📦 Dependencies

### Core Dependencies
- `react@^18.2.0` — UI framework
- `react-dom@^18.2.0` — DOM rendering
- `@tanstack/react-router@^1.28.0` — File-based routing
- `@tanstack/react-query@^5.28.0` — Data fetching and caching
- `zustand@^4.4.6` — State management

### Dev Dependencies
- `typescript@^5.3.3` — Type safety
- `vite@^5.0.8` — Build tool
- `tailwindcss@^3.4.1` — CSS styling
- `@vitejs/plugin-react@^4.2.1` — React plugin for Vite
- `@tanstack/router-devtools@^1.28.0` — Router debugging

## 🎨 Styling

Tailwind CSS with custom color palette:

- **Primary** (Blues) — Main actions and branding
- **Success** (Greens) — Confirmations and positive states
- **Warning** (Ambers) — Alerts and cautions
- **Danger** (Reds) — Errors and destructive actions

Custom component classes are defined in `src/index.css`:
- `.btn-primary` — Primary action button
- `.btn-secondary` — Secondary action button
- `.btn-danger` — Destructive action button

## 🔧 Configuration

### TypeScript

Configured with strict mode enabled for type safety:
- All variables must have explicit types
- `noImplicitAny` enforced
- Path aliases configured: `@/*` resolves to `src/*`

### Environment Variables

Create `.env.local` based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000
VITE_ENABLE_DEV_TOOLS=true
```

## 📝 Code Standards

- **Language**: TypeScript with strict mode
- **Components**: Functional components with hooks
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Comments**: Only for non-obvious logic
- **Imports**: Use path aliases (`@/`) for cleaner imports

## 🚢 Building for Production

```bash
pnpm run build
```

This will:
1. Run TypeScript type checking
2. Create optimized Vite build
3. Output files to `dist/` directory

Preview the production build:
```bash
pnpm run preview
```

## 📚 Next Steps

1. Create feature-specific pages (appointments, doctors, bookings)
2. Implement appointment booking flow
3. Add cancel/reschedule functionality
4. Create sample data generation
5. Implement localStorage persistence
6. Add error handling and user feedback
7. Set up ESLint and Prettier (optional)
8. Add unit and integration tests (optional)

## 🤝 Contributing

This project follows strict TypeScript and React conventions. Ensure:
- TypeScript compilation passes (`pnpm run type-check`)
- Code builds without warnings (`pnpm run build`)
- Dev server runs without errors (`pnpm run dev`)

## 📄 License

See LICENSE file in the project root.
