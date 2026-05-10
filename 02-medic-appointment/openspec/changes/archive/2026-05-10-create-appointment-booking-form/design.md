## Context

Users need to create medical appointments through a dedicated booking interface. The current application structure includes an appointment list page, and we're introducing a new booking page accessible via an "Easy Booking" button. The form must validate input in real-time, provide clear error messages, and confirm successful submissions.

## Goals / Non-Goals

**Goals:**
- Create a user-friendly appointment booking form with intuitive field layout
- Implement real-time validation with clear error messaging for each field
- Handle form submission to backend API with success/error feedback
- Display success confirmation dialog with navigation back to appointment list
- Prepare appointment list page to display newly created appointments

**Non-Goals:**
- Complex filtering or search on the booking page
- Email notifications (can be added later)
- Integration with external calendar systems
- Support for recurring appointments at this stage

## Decisions

### 1. Form State Management
**Decision:** Use React hooks (useState) for local form state with validation

**Rationale:** 
- For a single-page form, local state is sufficient and keeps the component self-contained
- Avoids over-engineering with global state for a simple use case
- Easier to test and reason about

**Alternatives Considered:**
- Redux/Context: Overkill for single form, adds unnecessary complexity
- Form libraries (React Hook Form): Could use, but adds dependency; inline validation works fine for initial version

### 2. Validation Strategy
**Decision:** Validate on blur and on submit; show errors per field

**Rationale:**
- Blur validation provides real-time feedback without being intrusive
- Submit validation catches any last-minute changes
- Field-level errors prevent user confusion

**Alternatives Considered:**
- Validate on change: Too aggressive, annoying user experience
- Validate only on submit: Doesn't provide real-time feedback

### 3. Success Confirmation UX
**Decision:** Show a modal dialog with success message and "Back to List" button

**Rationale:**
- Modal ensures user sees the confirmation and doesn't miss it
- Clear call-to-action (button) to return to list
- Prevents accidental navigation away

**Alternatives Considered:**
- Toast notification: Less prominent, user might miss it
- Redirect automatically: No confirmation that appointment was created

### 4. Form Fields
**Decision:** Collect: date, time, doctor (or department), patient notes, contact info (phone/email)

**Rationale:**
- Minimum viable set of fields needed to create a medical appointment
- Can be extended later without breaking current implementation
- Covers happy path and validation scenarios

### 5. Data Persistence to localStorage
**Decision:** Save form data to browser localStorage under key `appointments` instead of backend API

**Rationale:**
- No backend integration required
- Fast, synchronous save with immediate feedback
- Data persists across browser sessions
- Simple to implement and test

**Alternatives Considered:**
- IndexedDB: Overkill for simple appointment storage
- Session Storage: Loses data when browser closes, not suitable for appointments

## Risks / Trade-offs

**[Risk]** Validation on blur may miss edge cases → **[Mitigation]** Server-side validation on submit catches any missed client-side validation

**[Risk]** Form state complexity grows with more fields → **[Mitigation]** Consider refactoring to React Hook Form if form grows beyond 8-10 fields

**[Risk]** No persistence of incomplete forms → **[Mitigation]** Acceptable for MVP; can add localStorage persistence later

**[Risk]** Success dialog hard to dismiss without going to list → **[Mitigation]** Button is primary interaction; escape key also closes if desired

## Migration Plan

1. Create booking page route at `/booking` (or `/appointments/new`)
2. Add "Easy Booking" button to appointment list page
3. Deploy with feature flag or route-based (if main list is ready)
4. No data migration needed (new feature, not modifying existing data)

## Open Questions

- What appointment duration options should be available? (default slot times)
- Should we auto-populate doctor/department selection or free-text search?
- How should localStorage data be structured (flat object vs array of appointments)?
- Should localStorage data be cleared after successful booking or kept for history?
