## Context

The appointment booking system currently allows users to create appointments but has no mechanism to modify them after creation. This design covers adding a reschedule capability with a focused UI (modal with only date/time fields) and backend support for appointment updates.

The application is built with React/Vite on the frontend and has an existing appointment management system with form validation and success dialogs.

## Goals / Non-Goals

**Goals:**
- Provide a streamlined UI for rescheduling (modal with date/time fields only)
- Update appointment data persistently in the backend
- Display success feedback after rescheduling
- Maintain consistency with existing appointment booking UX patterns
- Enable users to quickly change appointment dates without re-entering other details

**Non-Goals:**
- Rescheduling with provider/practitioner changes (only date/time)
- Bulk rescheduling operations
- Calendar conflict detection or availability checking
- Email/SMS notifications for rescheduled appointments

## Decisions

1. **Modal Dialog for Rescheduling**
   - Decision: Use a modal overlay with only date and time input fields
   - Rationale: Focused UI reduces cognitive load; users only modify what needs changing
   - Alternatives: Full form reload (more complex), inline editing (harder to validate)

2. **Modal Content**
   - Decision: Display only calendar date picker and time selector; hide other appointment fields
   - Rationale: Aligns with happy path requirement; reuses existing form validation components
   - Alternatives: Show full appointment details for reference (added complexity)

3. **API Endpoint**
   - Decision: Create/use PUT endpoint to update appointment by ID
   - Rationale: RESTful convention for partial updates; idempotent if retried
   - Alternatives: PATCH (more complex), POST with action flag (non-standard)

4. **State Management**
   - Decision: Update local state after successful API call, then refresh appointment list
   - Rationale: Maintains UI consistency without additional roundtrips
   - Alternatives: Optimistic updates (risk of stale data), full page reload (poor UX)

5. **Success Feedback**
   - Decision: Show dismissible success message/toast notification after save
   - Rationale: Confirms user action completed; aligns with existing appointment booking UX

## Risks / Trade-offs

- **Data Consistency**: If API call succeeds but response fails, client and server may diverge → Use confirmation dialog before modal closes
- **Time Zone Handling**: Date/time picker must match user's timezone → Clarify timezone handling in specs
- **Concurrent Edits**: User A reschedules while User B is viewing appointment → Document eventual consistency; consider adding version checking if needed
- **Performance**: Refreshing full appointment list after single reschedule could be slow → Consider targeted update instead of full refresh

## Migration Plan

1. Deploy reschedule modal component (feature flagged if needed)
2. Deploy backend update endpoint
3. Integrate reschedule button into appointment list/detail views
4. Test end-to-end with sample appointments
5. Monitor for API errors and rollback if needed

## Open Questions

- Should rescheduling change the appointment status (e.g., from "Confirmed" to "Rescheduled")?
- Do we need to track reschedule history or just the current appointment date?
- Should appointment reminders reset after rescheduling?
- Is there a maximum number of times an appointment can be rescheduled?
