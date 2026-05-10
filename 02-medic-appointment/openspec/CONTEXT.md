# OpenSpec Context Summary

**Project**: Medical Appointment Management SPA  
**Status**: ✓ Context generation complete  
**Last Updated**: 2026-05-10

## Tech Stack
- React 18+ with TypeScript
- TanStack Router (file-based routing)
- TanStack Query (server/data state)
- Zustand (app/UI state)
- Tailwind CSS (styling)
- Vite (build tool)

## Key Decisions Made

| Assumption | Decision | Impact |
|-----------|----------|--------|
| Data Persistence | LocalStorage for booked appointments | Users can return and see their bookings |
| User Identity | Single implicit user | Simplest approach, no profile switching |
| Sample Data | Minimal (3 doctors, 15 appointments) | Quick demo, fast feature verification |
| Confirmation Flow | Instant confirmation on booking | Fast UX, immediate feedback |

## Core Features
1. ✓ Appointment listing with doctor profiles
2. ✓ Doctor selection and availability checking
3. ✓ Time slot selection
4. ✓ Appointment booking with instant confirmation
5. ✓ Cancel/reschedule functionality
6. ✓ View booked appointments
7. ✓ Persistent user bookings (localStorage)

## Architecture Highlights
- **Routing**: TanStack Router with file-based structure in `src/routes/`
- **Data State**: TanStack Query for appointment/doctor queries and mutations
- **App State**: Zustand for UI state (modals, filters, loading)
- **Persistence**: localStorage integration for booked appointments
- **No Backend**: All client-side, sample data included

## Generated Specifications
- ✓ [agents.md](./specs/agents.md) — Coding standards and guidelines
- ✓ [project.md](./specs/project.md) — Full project specification
- ✓ [assumptions.md](./specs/assumptions.md) — Tracked assumptions and decisions

## Next Steps

You can now:
1. **Review specifications** — Check agents.md, project.md, assumptions.md
2. **Use `/opsx:propose`** — Create a full change proposal with implementation tasks
3. **Use `/opsx:explore`** — Think through implementation details and architecture
4. **Use `/opsx:apply`** — Start implementing from a generated proposal

## Quick Reference

**Directory Structure** (to be created):
```
src/
├── routes/          # TanStack Router file-based routes
├── components/      # Reusable React components
├── stores/          # Zustand stores
├── queries/         # TanStack Query definitions
├── mutations/       # TanStack Query mutations
├── types/           # TypeScript interfaces
├── utils/           # Utility functions
└── hooks/           # Custom React hooks
```

**Sample Data**:
- 3 doctors (different specialties)
- ~15 appointment slots
- Stored in TanStack Query initial state

**Storage**:
- Booked appointments persisted to localStorage
- Sample doctors/appointments loaded from app defaults
