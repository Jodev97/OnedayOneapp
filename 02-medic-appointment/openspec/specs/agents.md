# Agents Behavior Guide

## General Behavior

### Core Principles
- **User-Centric Design**: Prioritize clarity and simplicity in all interactions
- **Proactive Error Handling**: Anticipate and prevent errors before they occur
- **Performance First**: Optimize for fast load times and smooth interactions
- **Consistency**: Maintain uniform behavior across all features and workflows
- **Accessibility**: Ensure all features are accessible and intuitive

### Development Philosophy
- Write code that is **readable, maintainable, and testable**
- Follow the principle of **Single Responsibility** in components and functions
- Avoid premature optimization; focus on clean architecture first
- Document complex logic with clear comments
- Use TypeScript to catch errors at compile time

### Decision Making
- **When faced with multiple approaches**: Choose the simplest solution that fulfills requirements
- **Feature prioritization**: Core functionality > Nice-to-have features
- **Third-party libraries**: Use only when they solve a specific problem better than native solutions
- **State management**: Use Zustand for global state; React state for local component state

---

## Code Style

### TypeScript Standards
```typescript
// ✅ DO: Explicit types for clarity
type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'postponed';

interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  appointmentDate: Date;
  status: AppointmentStatus;
  notes?: string;
}

// ❌ DON'T: Use `any` type
const processAppointment = (appointment: any) => { }

// ✅ DO: Arrow functions for consistency
const handleAppointmentCancel = (id: string): void => { }

// ❌ DON'T: Mix function declaration styles
function handleAppointmentCancel(id: string) { }
```

### Component Organization
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   └── Card.tsx
│   ├── features/        # Feature-specific components
│   │   ├── AppointmentList/
│   │   │   ├── AppointmentList.tsx
│   │   │   ├── AppointmentCard.tsx
│   │   │   └── useAppointmentList.ts
│   │   └── DoctorSelector/
│   │       └── DoctorSelector.tsx
│   └── layouts/         # Layout components
├── pages/               # Route pages (TanStack Router)
├── stores/              # Zustand stores
│   ├── appointmentStore.ts
│   └── userStore.ts
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
├── services/            # API communication
│   └── api.ts
├── constants/           # App constants
└── App.tsx
```

### Naming Conventions
- **Components**: PascalCase (`AppointmentList.tsx`)
- **Functions/Variables**: camelCase (`handleSubmit`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: PascalCase (`Appointment`, `Doctor`)
- **Files**: kebab-case or PascalCase matching their content

### Code Quality Rules
1. **Max line length**: 100 characters (except URLs and long strings)
2. **No console logs in production**: Use proper logging or error boundaries
3. **No magic numbers**: Extract to named constants
4. **DRY principle**: Extract repeated logic to utility functions or hooks
5. **Error handling**: Always handle errors explicitly, don't let them silently fail

### Example Component Pattern
```typescript
import { FC, useState } from 'react';
import { useAppointmentStore } from '@/stores/appointmentStore';

interface AppointmentListProps {
  doctorId?: string;
}

export const AppointmentList: FC<AppointmentListProps> = ({ doctorId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const appointments = useAppointmentStore((state) => state.appointments);
  const fetchAppointments = useAppointmentStore((state) => state.fetchAppointments);

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await fetchAppointments(doctorId);
    } catch (error) {
      console.error('Failed to fetch appointments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="appointment-list">
      {/* Component JSX */}
    </div>
  );
};
```

---

## UI Guideline

### Design System
- **Color Palette**:
  - Primary: `#3B82F6` (Blue)
  - Success: `#10B981` (Green)
  - Warning: `#F59E0B` (Amber)
  - Danger: `#EF4444` (Red)
  - Neutral: Gray scale (`#1F2937` to `#F9FAFB`)

- **Spacing**: Use Tailwind's default scale (4px base unit)
- **Typography**: 
  - Headings: `font-bold` with size hierarchy (text-2xl, text-xl, text-lg)
  - Body: `font-normal` at `text-base` or `text-sm`
  - Emphasis: `font-semibold` for important information

### Component Patterns
```tsx
// Button pattern
<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
  Action
</button>

// Card pattern
<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
  {/* Content */}
</div>

// Form input pattern
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter value"
/>
```

### Layout Guidelines
- **Mobile First**: Design for mobile (320px) then scale up
- **Responsive Breakpoints**: Use Tailwind defaults (sm, md, lg, xl, 2xl)
- **Padding**: Use consistent padding (p-4, p-6, p-8)
- **Gap**: Use Tailwind gap utilities for spacing between elements
- **Max Width**: Constrain main content to max-w-4xl for readability

### User Feedback
- **Loading States**: Show spinners or skeleton loaders
- **Success Messages**: Toast notifications with checkmark icon
- **Error Messages**: Clear, actionable error messages with retry options
- **Confirmation Dialogs**: Modal for destructive actions (cancel, delete)

### Accessibility
- All buttons and links must have proper ARIA labels
- Form inputs must have associated labels
- Color should not be the only indicator (use icons + text)
- Maintain focus styles for keyboard navigation
- Ensure contrast ratio meets WCAG AA standards

---

## Data Handling

### State Management Strategy
```typescript
// Zustand store pattern for appointment management
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppointmentStore {
  // State
  appointments: Appointment[];
  loading: boolean;
  error: string | null;

  // Actions
  fetchAppointments: (doctorId?: string) => Promise<void>;
  cancelAppointment: (id: string) => Promise<void>;
  postponeAppointment: (id: string, newDate: Date) => Promise<void>;

  // Helpers
  reset: () => void;
}

export const useAppointmentStore = create<AppointmentStore>()(
  devtools(
    persist(
      (set) => ({
        appointments: [],
        loading: false,
        error: null,

        fetchAppointments: async (doctorId?: string) => {
          set({ loading: true, error: null });
          try {
            const data = await api.fetchAppointments(doctorId);
            set({ appointments: data });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ loading: false });
          }
        },

        cancelAppointment: async (id: string) => {
          try {
            await api.cancelAppointment(id);
            set((state) => ({
              appointments: state.appointments.filter((apt) => apt.id !== id),
            }));
          } catch (error) {
            set({ error: error.message });
          }
        },

        postponeAppointment: async (id: string, newDate: Date) => {
          try {
            const updated = await api.postponeAppointment(id, newDate);
            set((state) => ({
              appointments: state.appointments.map((apt) =>
                apt.id === id ? updated : apt
              ),
            }));
          } catch (error) {
            set({ error: error.message });
          }
        },

        reset: () => set({ appointments: [], error: null }),
      }),
      { name: 'appointment-store' }
    )
  )
);
```

### API Communication
```typescript
// services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const api = {
  fetchAppointments: async (doctorId?: string): Promise<Appointment[]> => {
    const params = doctorId ? `?doctorId=${doctorId}` : '';
    const response = await fetch(`${API_BASE_URL}/appointments${params}`);
    return handleResponse<Appointment[]>(response);
  },

  cancelAppointment: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'DELETE',
    });
    return handleResponse<void>(response);
  },

  // ... other API methods
};
```

### Data Validation
```typescript
// Use a validation library like Zod or simple runtime checks
import { z } from 'zod';

const AppointmentSchema = z.object({
  id: z.string().uuid(),
  doctorId: z.string().uuid(),
  appointmentDate: z.coerce.date(),
  status: z.enum(['scheduled', 'completed', 'cancelled', 'postponed']),
});

const validateAppointment = (data: unknown): Appointment => {
  return AppointmentSchema.parse(data);
};
```

---

## Testing

### Testing Strategy
- **Unit Tests**: For utility functions and hooks
- **Component Tests**: For UI components (rendering, user interactions)
- **Integration Tests**: For complete workflows (booking, canceling)
- **E2E Tests**: For critical user paths with Playwright

### Test Structure
```typescript
// Example: useAppointmentList.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppointmentStore } from '@/stores/appointmentStore';

describe('useAppointmentStore', () => {
  beforeEach(() => {
    useAppointmentStore.setState({ appointments: [] });
  });

  it('should fetch appointments', async () => {
    const { result } = renderHook(() => useAppointmentStore());

    await act(async () => {
      await result.current.fetchAppointments();
    });

    expect(result.current.appointments.length).toBeGreaterThan(0);
  });

  it('should cancel an appointment', async () => {
    const { result } = renderHook(() => useAppointmentStore());
    
    // Setup initial state
    const appointmentId = 'apt-123';
    
    await act(async () => {
      await result.current.cancelAppointment(appointmentId);
    });

    expect(result.current.appointments).not.toContainEqual(
      expect.objectContaining({ id: appointmentId })
    );
  });
});
```

### Playwright E2E Test Pattern
```typescript
// tests/e2e/appointments.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Appointment Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should list appointments', async ({ page }) => {
    await expect(page.locator('[data-testid="appointment-list"]')).toBeVisible();
    const appointments = await page.locator('[data-testid="appointment-card"]').count();
    expect(appointments).toBeGreaterThan(0);
  });

  test('should cancel appointment with confirmation', async ({ page }) => {
    const cancelButton = page.locator('[data-testid="cancel-btn"]').first();
    await cancelButton.click();

    const confirmButton = page.locator('[data-testid="confirm-cancel"]');
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();

    await expect(page.locator('text=Appointment cancelled')).toBeVisible();
  });
});
```

### Coverage Goals
- **Minimum Coverage**: 70% for critical paths
- **Target Coverage**: 80%+ for utilities, stores, and hooks
- **E2E Coverage**: All critical user workflows

---

## Scope Control

### In Scope ✅
- **Core Features**:
  - List appointments with filtering
  - Doctor selector from available doctors
  - View available time slots
  - Cancel appointments with confirmation
  - Postpone/reschedule appointments
  - Simple appointment details view

- **Technical Requirements**:
  - Local state management with Zustand
  - Client-side only (no backend)
  - Public API for doctors and availability data
  - Mobile-responsive design
  - Basic error handling and loading states

- **Testing**:
  - Unit tests for utility functions
  - Component tests for critical UI
  - E2E tests for main workflows

### Out of Scope ❌
- **Not Included**:
  - Real-time notifications
  - Email/SMS confirmations
  - Payment integration
  - Authentication/authorization
  - Recurring appointments
  - Appointment notes/medical records
  - Admin dashboard
  - Analytics or reporting
  - Backend API development
  - Database integration (uses public API only)

### Future Considerations 🔮
- Push notifications
- Appointment reminders
- Integration with calendar apps
- Multi-language support
- Dark mode
- Advanced filtering and search

### Constraints
- **No Backend**: All data comes from public APIs
- **No Persistence**: Data stored only in Zustand + localStorage
- **No Authentication**: Assumes public access (no user login)
- **Simple UI**: Use Tailwind only (no UI framework libraries)
- **Browser Only**: Desktop and mobile web only

---

## Summary

This agent should:
1. Write clean, type-safe TypeScript code
2. Create accessible, responsive UI with Tailwind
3. Manage state efficiently with Zustand
4. Follow component organization best practices
5. Test critical functionality with Playwright
6. Keep scope focused on core appointment management features
7. Provide clear error handling and user feedback
8. Maintain consistency across the application