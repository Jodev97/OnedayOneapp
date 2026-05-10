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

## 🏛️ Spec-Driven Development Workflow

This project uses **Spec-Driven Development** to manage feature implementation systematically. Each feature goes through a structured workflow.

### Getting Started: Creating Project Context

**First Step**: Generate the initial project context structure using OpenSpec.

```bash
# Generate initial context with project specifications
/opsx:context
```

This creates three foundational specification files:
- **agents.md** — Coding standards, agent behavior, and UI guidelines for the project
- **project.md** — Main project specification with overview, features, and architecture
- **assumptions.md** — Tracked assumptions by category and impact level

**Purpose**: These context files ensure all feature proposals are aligned with project standards and constraints. They answer:
- How should agents code this project?
- What's the technical architecture?
- What assumptions guide development decisions?

**When to use**: 
- At project start to establish baseline standards
- When onboarding new developers
- When significant architectural decisions need to be documented
- When project scope or constraints change

### Workflow Phases

1. **Proposal Phase** (`proposal.md`)
   - Define the problem being solved
   - List what changes and their impact
   - Identify new and modified capabilities
   - Keep focused on "why" not "how"

2. **Design Phase** (`design.md`)
   - Explain technical approach and decisions
   - Document trade-offs and risks
   - Define goals and non-goals
   - Provide migration/deployment plan

3. **Specifications Phase** (`specs/**/*.md`)
   - Define detailed requirements for each capability
   - Write testable scenarios in WHEN/THEN format
   - Create one spec file per capability
   - Use ADDED/MODIFIED/REMOVED requirement headers

4. **Implementation Phase** (`tasks.md`)
   - Break down specs into concrete, trackable tasks
   - Group tasks by logical components
   - Order by dependencies
   - Each task should be completable in one session

### Using OpenSpec Skills

#### 1️⃣ Create Project Context (First Step)
```bash
/opsx:context
```
Generates initial specification files:
- `agents.md` — Coding standards and UI guidelines
- `project.md` — Project overview and architecture
- `assumptions.md` — Critical assumptions and constraints

This ensures all features align with project standards.

#### 2️⃣ Propose a New Feature
```bash
/opsx:propose feature-name
# or
/opsx:propose how user can do <something>
```
Creates all artifacts in one step:
- `proposal.md` — Why the feature is needed
- `design.md` — Technical approach and decisions
- `specs/**/*.md` — Detailed requirements
- `tasks.md` — Implementation checklist (31 tasks typical)

#### 3️⃣ Implement the Feature
```bash
/opsx:apply feature-name
```
Works through tasks sequentially:
- Reads context files for requirements
- Shows task-by-task progress
- Update task checkboxes as you complete them
- Suggests pausing if blockers are encountered

#### 4️⃣ Archive Completed Work
```bash
/opsx:archive feature-name
```
Creates learning documentation:
- Extracts code changes and specs
- Generates wiki-style documentation
- Stores in `openspec/archive/` for future reference

#### 5️⃣ Explore Ideas (Optional)
```bash
/opsx:explore your idea here
```
Thinking partner for clarifying requirements before proposing.

### Complete Workflow Example: Appointment Cancellation

This project demonstrates the full workflow with the `cancel-appointment` change:

**Step 1: Generate Context** (project baseline)
```bash
/opsx:context
# Creates: .openspec/specs/{agents.md, project.md, assumptions.md}
```

**Step 2: Propose Feature** (what and why)
```bash
/opsx:propose how user can cancel an appointment
# Creates: openspec/changes/cancel-appointment/{proposal.md, design.md, specs/**, tasks.md}
```

**Step 3: Implement** (build it)
```bash
/opsx:apply cancel-appointment
# Implements all 31 tasks, marking each complete as you code
```

**Step 4: Archive** (document learnings)
```bash
/opsx:archive cancel-appointment
# Stores in: openspec/archive/cancel-appointment/
```

**Result Structure**:
```
openspec/
├── specs/                                # Project baseline
│   ├── agents.md                        # Coding standards
│   ├── project.md                       # Architecture
│   └── assumptions.md                   # Constraints
├── changes/
│   ├── reschedule-appointment/          # Feature 1 (completed)
│   └── cancel-appointment/              # Feature 2 (completed)
│       ├── proposal.md                  # Why users need to cancel
│       ├── design.md                    # Technical approach & decisions
│       ├── specs/
│       │   ├── cancel-appointment-action/
│       │   └── cancel-confirmation-dialog/
│       └── tasks.md                     # 31 implementation tasks
└── archive/
    └── cancel-appointment/              # Learning documentation
```

### Key Benefits

- **Clarity**: Context + Proposal + Design establish alignment before coding
- **Testability**: Specs define WHEN/THEN scenarios that become test cases
- **Traceability**: Each task links back to specific requirements
- **Documentation**: Auto-generated learning docs from completed changes
- **Flexibility**: Update artifacts mid-implementation if design issues emerge
- **Consistency**: Project context ensures all features follow same standards
- **Onboarding**: New developers understand project vision, assumptions, and constraints

### Files Structure

```
openspec/
├── changes/                              # Feature changes
│   ├── reschedule-appointment/          # Completed feature
│   └── cancel-appointment/              # Completed feature
├── specs/                               # Baseline capability specs (for modified requirements)
└── archive/                             # Learning docs from completed changes
```

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

## 📚 Completed Features

### ✅ Appointment Rescheduling (`reschedule-appointment`)
- Users can click "Reschedule" button on any appointment
- Modal dialog with date/time pickers
- Form validation with error messages
- Success notification after rescheduling
- Appointment list updates immediately

**Implementation Details:**
- Component: `src/components/RescheduleModal.tsx`
- Storage: `updateAppointment()` in `src/utils/storage.ts`
- Integration: `src/pages/AppointmentsPage.tsx`

### ✅ Appointment Cancellation (`cancel-appointment`)
- Users can click "Cancel" button on any appointment
- Confirmation dialog showing appointment details
- Prevents accidental deletion with "Keep Appointment" option
- Success notification after cancellation
- Appointment immediately removed from list and localStorage

**Implementation Details:**
- Component: `src/components/CancelConfirmationDialog.tsx`
- Storage: `deleteAppointment()` in `src/utils/storage.ts`
- Integration: `src/pages/AppointmentsPage.tsx`

## 📚 Next Steps

1. ~~Create feature-specific pages~~ ✅ Done (AppointmentsPage, BookingPage)
2. ~~Implement appointment booking flow~~ ✅ Done (BookingPage with form validation)
3. ~~Add cancel/reschedule functionality~~ ✅ Done (both features implemented)
4. Create sample data generation
5. ~~Implement localStorage persistence~~ ✅ Done (storage.ts utilities)
6. ~~Add error handling and user feedback~~ ✅ Done (modals, notifications, validation)
7. Set up ESLint and Prettier (optional)
8. Add unit and integration tests (optional)
9. Add appointment filtering/search
10. Implement appointment status tracking (confirmed, completed, cancelled)

## 🤝 Contributing

This project follows strict TypeScript and React conventions. Ensure:
- TypeScript compilation passes (`pnpm run type-check`)
- Code builds without warnings (`pnpm run build`)
- Dev server runs without errors (`pnpm run dev`)

## 📄 License

See LICENSE file in the project root.
