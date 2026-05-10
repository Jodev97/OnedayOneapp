# Project Specification: Medical Appointment Management SPA

## Overview
A React single-page application for managing medical appointments. Users can view available appointments, select doctors, check availability, and manage their bookings through cancel and reschedule operations. All data is managed client-side with Zustand state management.

## Core Features

### 1. Appointment Listing
- Display all available appointments in a clean, organized list
- Show relevant details: date, time, doctor name, specialty, clinic/location
- Support filtering and searching through appointments
- Visual indicators for availability status

### 2. Doctor Selection & Details
- Browse available doctors with profiles
- View doctor specialties, experience, and ratings
- See doctor availability slots
- Select a doctor to view their available appointment times

### 3. Availability Checking
- Real-time view of doctor availability
- Time slot selection with visual calendar/timeline
- Support for next available appointment quick-select
- Display duration and confirmation of selected slot

### 4. Appointment Management
- **Cancel Appointments**: Remove booked appointments with confirmation
- **Reschedule Appointments**: Change appointment date/time/doctor
- View appointment history
- Confirmation workflows for all operations

## Technical Stack
- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (app state) + TanStack Query (server state)
- **Routing**: TanStack Router (file-based routing)
- **Build Tool**: Vite
- **Backend**: None (client-side only)

## Data Model

### Appointment
```typescript
interface Appointment {
  id: string;
  doctorId: string;
  date: string;           // ISO date
  time: string;           // HH:mm format
  duration: number;       // minutes
  status: 'available' | 'booked' | 'completed' | 'cancelled';
  clinicLocation: string;
  notes?: string;
}
```

### Doctor
```typescript
interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;     // years
  rating: number;         // 0-5
  bio?: string;
  availableSlots: string[]; // appointment IDs
}
```

### User Appointment (Booked)
```typescript
interface BookedAppointment {
  id: string;
  appointmentId: string;
  doctorId: string;
  bookingDate: string;
  reminderSet: boolean;
}
```

## User Flows

### Primary Flow: Book an Appointment
1. User opens app → sees appointment list
2. User browses doctors or appointments
3. User selects a doctor/time slot
4. User confirms booking
5. Appointment added to user's bookings
6. Confirmation displayed

### Secondary Flow: Manage Appointments
1. User views booked appointments
2. User selects cancel or reschedule
3. System shows available alternatives
4. User confirms changes
5. Appointment updated in state

## Constraints & Assumptions
- No backend API calls (all data client-side)
- No user authentication/login
- No data persistence (resets on page refresh)
- Sample data provided at app startup
- Desktop-first but responsive design
- No real-time synchronization

## Success Criteria
- [ ] All core features implemented
- [ ] TypeScript strict mode enabled
- [ ] Zustand state management working correctly
- [ ] Tailwind styling complete and responsive
- [ ] Smooth user interactions (no lag)
- [ ] Accessible (WCAG 2.1 AA minimum)
- [ ] Mobile responsive (tested at 375px, 768px, 1024px+)
