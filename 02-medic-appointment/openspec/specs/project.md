# Project: Medical Appointment Management Application

## Overview

**AppointmentHub** is a lightweight, client-side appointment management application designed to help patients manage their medical appointments efficiently. The application provides a simple, intuitive interface for viewing, booking, rescheduling, and canceling medical appointments with various healthcare providers.

**Target Users**: Patients seeking an easy way to manage their healthcare appointments

**Build Duration**: Estimated 1-2 weeks for MVP

---

## Application Type

- **Type**: Single Page Application (SPA)
- **Platform**: Web (Desktop & Mobile responsive)
- **Architecture**: Client-side only, frontend-first
- **Data Source**: Public API (no backend required)
- **State Management**: Client-side with Zustand
- **Persistence**: Browser localStorage + in-memory state

---

## Purpose & Use Cases

### Primary Purpose
Provide patients with a simple, accessible interface to:
- View their scheduled appointments
- Select available doctors
- Choose appointment time slots
- Manage appointments (reschedule, cancel, view details)
- Receive clear feedback on appointment status

### Use Cases

#### 1. **View My Appointments**
- User logs in/opens app
- System displays list of all upcoming appointments
- User can filter by doctor, date, or status
- User sees appointment details (time, location, doctor info)

#### 2. **Schedule an Appointment**
- User selects "New Appointment"
- User chooses a doctor from available doctors list
- System shows available time slots
- User selects preferred date and time
- Confirmation dialog appears
- Appointment is added to list

#### 3. **Reschedule Appointment**
- User views appointment details
- User clicks "Reschedule"
- System shows alternative available times
- User selects new date/time
- System updates appointment
- Confirmation message displayed

#### 4. **Cancel Appointment**
- User selects appointment to cancel
- Confirmation modal appears
- User confirms cancellation
- Appointment status changes to "cancelled"
- Confirmation message displayed

#### 5. **Filter and Search**
- User can filter appointments by:
  - Doctor name
  - Status (upcoming, completed, cancelled)
  - Date range
- User can search by doctor specialty or name

---

## Core Features

### Feature 1: Appointment List
- **Description**: Display all appointments in a tabular or card-based format
- **Functionality**:
  - Show: ID, Doctor Name, Specialty, Date, Time, Status
  - Sorting options (date, doctor name)
  - Filter by status (scheduled, completed, cancelled, postponed)
  - Pagination or infinite scroll for large lists
  - Empty state when no appointments exist

### Feature 2: Doctor Selector
- **Description**: Component to select a doctor for new appointments
- **Functionality**:
  - Display list of available doctors
  - Show doctor details: Name, Specialty, Rating, Availability
  - Search/filter doctors by name or specialty
  - View doctor profile/details before selecting

### Feature 3: Availability View
- **Description**: Calendar/timeline showing available appointment slots
- **Functionality**:
  - Show available dates (next 30 days)
  - Display time slots for selected date
  - Highlight unavailable slots
  - Time slot selection interface
  - Timezone support

### Feature 4: Cancel Appointment
- **Description**: Safely remove or cancel an appointment
- **Functionality**:
  - Select appointment to cancel
  - Confirmation dialog with reason (optional)
  - Reason options: Conflict, Not needed, Other
  - Immediate status update to "cancelled"
  - Undo option (if feasible)

### Feature 5: Reschedule/Postpone
- **Description**: Change appointment date/time
- **Functionality**:
  - Select appointment to reschedule
  - Choose new date and time from availability
  - Confirmation dialog
  - Update appointment with new details
  - Show change summary

### Feature 6: Appointment Details Modal
- **Description**: Detailed view of a single appointment
- **Functionality**:
  - Full appointment information
  - Doctor contact information
  - Location/meeting link
  - Appointment notes (if any)
  - Action buttons (reschedule, cancel, add to calendar)

### Feature 7: Status Management
- **Description**: Track appointment lifecycle
- **Statuses**:
  - **Scheduled**: Confirmed upcoming appointment
  - **Completed**: Past appointment
  - **Cancelled**: User-initiated cancellation
  - **Postponed**: Rescheduled appointment
  - **No-Show**: Appointment date passed without attendance

---

## Technology Stack

### Frontend Framework
- **React** 18.x - UI library
- **TypeScript** 5.x - Type safety and developer experience
- **Vite** 5.x - Fast build tool and dev server

### Routing
- **TanStack Router** - Client-side routing with type-safe routes

### State Management
- **Zustand** 4.x - Lightweight global state management
  - Appointment store
  - User/UI store
  - Notification store (optional)

### Form Management
- **TanStack Form** - Flexible, type-safe form handling
- **Built-in validation** for form fields

### Styling
- **Tailwind CSS** 3.x - Utility-first CSS framework
- **CSS Modules** (optional) for component-scoped styles
- **Headless UI components** (custom or unstyled)

### Data Fetching
- **Native Fetch API** - No axios or other HTTP libraries
- **React Query alternative**: Zustand + custom hooks

### Testing
- **Vitest** - Unit and component testing
- **React Testing Library** - Component testing utilities
- **Playwright** - End-to-end testing
- **@testing-library/react** - React component testing

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **husky** - Git hooks for pre-commit checks
- **TypeScript** compiler for type checking

### Build & Deployment
- **Vite** - Development server and build
- **Node.js** 18+ - Runtime environment

### API Integration
- **Public API** (e.g., JSONPlaceholder, RapidAPI, or custom mock)
- No backend development required
- Mock API endpoints for development

---

## Testing

### Unit Tests
- **Focus**: Utility functions, store actions, hooks
- **Tool**: Vitest + React Testing Library
- **Coverage Target**: 70%+ for critical paths
- **Example Tests**:
  - `formatDate()` utility
  - `useAppointmentStore()` actions
  - `filterAppointments()` logic

### Component Tests
- **Focus**: UI components, interactions, rendering
- **Tool**: React Testing Library
- **Examples**:
  - AppointmentList renders appointments
  - DoctorSelector allows doctor selection
  - Cancel button shows confirmation modal

### Integration Tests
- **Focus**: Feature workflows (full user journeys)
- **Tool**: Playwright
- **Examples**:
  - User can book an appointment (doctor → availability → confirm)
  - User can cancel and reschedule an appointment
  - Filtering and searching work correctly

### E2E Tests (Critical Paths)
- **Tool**: Playwright
- **Coverage**:
  - List appointments
  - Create new appointment
  - Cancel appointment
  - Reschedule appointment
  - Filter appointments
  - Error handling flows

### Testing Standards
- All public APIs must have tests
- Critical user workflows must have E2E tests
- No console errors or warnings in tests
- All assertions must be meaningful (not just snapshot tests)

---

## UI Standards

### Design Language
- **Style**: Minimal, clean, modern
- **Color Scheme**:
  - Primary: Blue (`#3B82F6`)
  - Success: Green (`#10B981`)
  - Warning: Amber (`#F59E0B`)
  - Danger: Red (`#EF4444`)
  - Neutral: Grays (`#1F2937` - `#F9FAFB`)

- **Typography**: System font stack with Tailwind defaults
- **Spacing**: 4px base unit (Tailwind scale)
- **Radius**: `rounded-lg` default, `rounded-full` for buttons
- **Shadows**: `shadow-md` for cards, `shadow-lg` for modals

### Key Components
1. **Navigation Bar**
   - Logo/App name
   - Current page indicator
   - User menu (if needed)
   - Mobile hamburger menu

2. **Appointment Card**
   - Doctor name & specialty
   - Date & time
   - Status badge
   - Quick actions (view, reschedule, cancel)

3. **Modal/Dialog**
   - Confirmation dialogs for destructive actions
   - Appointment details view
   - Doctor selection interface

4. **Calendar/Timeline**
   - Date picker for availability
   - Time slot grid
   - Visual indication of available slots

5. **Forms**
   - Doctor selector dropdown/search
   - Date/time picker inputs
   - Notes text area (optional)
   - Submit/cancel buttons

### Responsive Behavior
- **Mobile** (320px - 640px):
  - Stack layout vertically
  - Full-width buttons
  - Simplified navigation
  - Swipeable cards

- **Tablet** (641px - 1024px):
  - 2-column layouts where appropriate
  - More visible information
  - Better spacing

- **Desktop** (1025px+):
  - Multi-column layouts
  - Sidebar navigation (optional)
  - Maximum width constraint (max-w-4xl or 5xl)

### Accessibility
- WCAG 2.1 AA compliance
- Semantic HTML (`<button>`, `<nav>`, `<main>`)
- ARIA labels for screen readers
- Focus management in modals
- Keyboard navigation support
- Color contrast minimum 4.5:1 for text
- Don't rely on color alone for meaning

### Loading & Error States
- **Loading**: Spinner or skeleton loaders
- **Error**: Inline error messages with retry buttons
- **Empty State**: Friendly message with call-to-action
- **Success**: Toast notification with confirmation

---

## Architecture

### Directory Structure
```
appointment-hub/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Spinner.tsx
│   │   ├── features/            # Feature-specific components
│   │   │   ├── AppointmentList/
│   │   │   │   ├── AppointmentList.tsx
│   │   │   │   ├── AppointmentCard.tsx
│   │   │   │   ├── AppointmentFilter.tsx
│   │   │   │   └── index.ts
│   │   │   ├── DoctorSelector/
│   │   │   │   ├── DoctorSelector.tsx
│   │   │   │   ├── DoctorCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── AvailabilityView/
│   │   │   │   ├── AvailabilityCalendar.tsx
│   │   │   │   ├── TimeSlotPicker.tsx
│   │   │   │   └── index.ts
│   │   │   ├── AppointmentActions/
│   │   │   │   ├── CancelConfirmation.tsx
│   │   │   │   ├── RescheduleModal.tsx
│   │   │   │   ├── AppointmentDetails.tsx
│   │   │   │   └── index.ts
│   │   │   └── Notifications/
│   │   │       ├── Toast.tsx
│   │   │       ├── Toast container.tsx
│   │   │       └── index.ts
│   │   └── layouts/
│   │       ├── MainLayout.tsx
│   │       └── PageLayout.tsx
│   ├── pages/                   # TanStack Router pages
│   │   ├── index.tsx
│   │   ├── appointments/
│   │   │   └── index.tsx
│   │   ├── appointments/
│   │   │   └── $appointmentId.tsx
│   │   ├── book-appointment/
│   │   │   └── index.tsx
│   │   └── not-found.tsx
│   ├── stores/                  # Zustand state management
│   │   ├── appointmentStore.ts
│   │   ├── doctorStore.ts
│   │   ├── uiStore.ts
│   │   └── index.ts
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAppointments.ts
│   │   ├── useDoctors.ts
│   │   ├── useAvailability.ts
│   │   └── useNotification.ts
│   ├── services/                # API communication
│   │   ├── api.ts
│   │   ├── doctors.ts
│   │   ├── appointments.ts
│   │   └── mock.ts (for development)
│   ├── types/                   # TypeScript definitions
│   │   ├── index.ts
│   │   ├── appointment.ts
│   │   ├── doctor.ts
│   │   └── api.ts
│   ├── utils/                   # Helper functions
│   │   ├── formatDate.ts
│   │   ├── formatTime.ts
│   │   ├── validation.ts
│   │   ├── storage.ts
│   │   └── constants.ts
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Entry point
├── tests/
│   ├── unit/                    # Unit tests
│   │   ├── utils.test.ts
│   │   ├── stores.test.ts
│   │   └── hooks.test.ts
│   ├── components/              # Component tests
│   │   ├── AppointmentList.test.tsx
│   │   ├── DoctorSelector.test.tsx
│   │   └── ...
│   └── e2e/                     # Playwright E2E tests
│       ├── appointments.spec.ts
│       ├── booking.spec.ts
│       └── navigation.spec.ts
├── .env.example
├── .gitignore
├── .prettierrc
├── .eslintrc.cjs
├── playwright.config.ts
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── package.json
├── README.md
├── agents.md
└── project.md
```

### Data Flow
```
User Interaction
    ↓
Component (React)
    ↓
Event Handler / Hook
    ↓
Zustand Store (State Management)
    ↓
API Service (Fetch Data)
    ↓
Public API (External Data Source)
    ↓
Response → Store → Component → UI Update
```

### Component Hierarchy
```
App
├── Router (TanStack Router)
├── MainLayout
│   ├── NavigationBar
│   └── PageLayout
│       ├── AppointmentList Page
│       │   ├── AppointmentFilter
│       │   ├── AppointmentCard[]
│       │   └── Pagination
│       ├── BookAppointment Page
│       │   ├── DoctorSelector
│       │   ├── AvailabilityCalendar
│       │   ├── TimeSlotPicker
│       │   └── ConfirmationDialog
│       ├── AppointmentDetails Page
│       │   ├── AppointmentDetails
│       │   ├── RescheduleModal
│       │   └── CancelConfirmation
│       └── NotFound Page
└── Notifications (Toast Container)
```

---

## Key Characteristics

### Performance
- **Page Load**: < 2 seconds (Vite optimization)
- **Time to Interactive**: < 3 seconds
- **Code Splitting**: Route-based lazy loading
- **Bundle Size**: < 150KB gzipped (Vite + tree-shaking)
- **No external fonts**: System fonts for performance

### Maintainability
- **Type Safety**: 100% TypeScript coverage
- **Code Organization**: Modular component structure
- **Documentation**: Inline comments for complex logic
- **Testing**: 70%+ code coverage for critical paths
- **Naming Conventions**: Clear, consistent naming

### Scalability
- **State Management**: Zustand scales well for moderate complexity
- **Component Structure**: Easy to add new features
- **API Abstraction**: Simple to switch data sources
- **Lazy Loading**: Routes load on demand

### User Experience
- **Responsiveness**: Immediate feedback on actions
- **Mobile-First**: Optimized for small screens
- **Accessibility**: WCAG 2.1 AA compliant
- **Error Recovery**: Clear error messages with retry options
- **Performance**: Fast interactions, smooth transitions

### Developer Experience
- **Hot Module Replacement**: Vite instant feedback
- **Type Checking**: TypeScript catches errors early
- **Testing**: Easy to write and run tests
- **Documentation**: Clear agent and project guides
- **Configuration**: Minimal setup, sensible defaults

### Security (Client-Side)
- **No Sensitive Data**: No hardcoded credentials
- **CORS**: Communicate with public APIs only
- **Input Validation**: All user inputs validated
- **XSS Prevention**: React escapes content by default
- **localStorage**: Secure storage of non-sensitive state

---

## Development Workflow

### Setup
1. Clone repository
2. `npm install`
3. Create `.env` from `.env.example`
4. `npm run dev` - Start dev server
5. `npm run test` - Run tests
6. `npm run build` - Build for production

### Development
- `npm run dev` - Hot reload development server
- `npm run type-check` - TypeScript type checking
- `npm run lint` - ESLint code quality
- `npm run format` - Prettier code formatting

### Testing
- `npm run test` - Unit tests
- `npm run test:coverage` - Coverage report
- `npm run test:e2e` - Playwright E2E tests

### Deployment
- `npm run build` - Production build
- `npm run preview` - Preview production build locally
- Deploy `dist/` folder to static hosting (Vercel, Netlify, etc.)

---

## Success Metrics

### Technical
- [ ] All tests pass (unit + E2E)
- [ ] 70%+ code coverage
- [ ] TypeScript strict mode enabled
- [ ] Zero console errors in production build
- [ ] Lighthouse scores: 90+ (Performance, Accessibility)

### User Experience
- [ ] All critical workflows functional
- [ ] Mobile responsive on all breakpoints
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Clear error handling
- [ ] Smooth animations and transitions

### Maintenance
- [ ] Well-documented code
- [ ] Consistent code style
- [ ] Modular architecture
- [ ] Easy to extend with new features

---

## Glossary

| Term | Definition |
|------|-----------|
| **Appointment** | A scheduled meeting between a patient and a doctor |
| **Doctor** | Healthcare provider in the system |
| **Time Slot** | Available date and time for an appointment |
| **Status** | Current state of an appointment (Scheduled, Completed, etc.) |
| **Reschedule** | Change the date/time of an existing appointment |
| **Postpone** | Delay an appointment to a later date |
| **SPA** | Single Page Application - client-side rendered web app |
| **Public API** | External API available without authentication |
| **Zustand** | Lightweight state management library |
| **TanStack Router** | Type-safe routing library for React |
| **E2E Testing** | End-to-end testing (full user workflow testing) |