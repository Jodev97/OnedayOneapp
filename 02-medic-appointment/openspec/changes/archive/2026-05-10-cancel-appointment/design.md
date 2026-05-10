## Context

The appointment system currently allows users to book and reschedule appointments, but provides no way to cancel them. This design covers adding a cancel capability with a confirmation dialog and immediate removal from the appointment list.

The application uses React/Vite frontend with localStorage for data persistence. There is no backend API layer currently.

## Goals / Non-Goals

**Goals:**
- Provide a simple, one-click cancel action with confirmation
- Prevent accidental cancellations through a confirmation dialog showing appointment details
- Immediately remove cancelled appointments from the list
- Display success feedback after cancellation
- Maintain data consistency (cancelled appointments are removed from localStorage)

**Non-Goals:**
- Archiving or keeping history of cancelled appointments (simple deletion only)
- Notifications or alerts to healthcare providers about cancellations
- Preventing cancellation within X hours of appointment
- Refunds or credits for cancelled appointments

## Decisions

1. **Confirmation Dialog Approach**
   - Decision: Show modal dialog with appointment details before deletion
   - Rationale: Prevents accidental data loss; users see what they're cancelling
   - Alternatives: Inline delete button (risky), undo/trash system (added complexity)

2. **Data Deletion Strategy**
   - Decision: Permanently delete from localStorage (no archival)
   - Rationale: Simpler implementation; meets basic requirement
   - Alternatives: Archive to separate storage (adds complexity), soft delete with status flag (unnecessary for MVP)

3. **Cancel Button Placement**
   - Decision: Place cancel button next to reschedule button in appointment card
   - Rationale: Consistent with reschedule button; keeps related actions together
   - Alternatives: Separate delete icon, dropdown menu (adds UX friction)

4. **Success Feedback**
   - Decision: Show toast notification after successful cancellation
   - Rationale: Consistent with reschedule UX; clear feedback to user
   - Alternatives: Modal confirmation (overkill), silent removal (poor UX)

## Risks / Trade-offs

- **Data Loss**: Cancelled appointments are permanently deleted → Mitigation: Clear confirmation dialog with appointment details before deletion
- **No Audit Trail**: No record of cancelled appointments → Acceptable for MVP; can be added later if needed
- **No Undo**: Users cannot recover accidentally confirmed cancellations → Mitigation: Confirmation dialog acts as safety net
- **Storage Consistency**: LocalStorage may not sync across tabs immediately → Acceptable; users typically manage from one tab

## Migration Plan

1. Deploy cancel button component (feature visible on all existing appointments)
2. Deploy confirmation dialog and cancellation logic
3. Test end-to-end with sample appointments
4. Monitor for issues and validate deletion is working correctly

## Open Questions

- Should there be a time-based restriction (e.g., can't cancel within 24 hours)?
- Should cancellations be logged or archived for record-keeping?
- Should there be a confirmation email or notification sent (future enhancement)?
