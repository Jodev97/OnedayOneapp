## Why

Users need the ability to cancel appointments they've already booked. Currently, once an appointment is scheduled, there's no way to remove it from the system. This is essential for a complete appointment management system where users may need to cancel due to schedule changes, health issues, or other circumstances.

## What Changes

- Add a "Cancel" button to each appointment in the appointment list
- Display a confirmation dialog before canceling to prevent accidental deletions
- Remove the appointment from the list after confirmation
- Show a success message after cancellation is confirmed
- (Optional) Keep cancellation history or archive cancelled appointments

## Capabilities

### New Capabilities
- `cancel-appointment-action`: Capability to remove an appointment from the system with user confirmation
- `cancel-confirmation-dialog`: Modal dialog confirming the appointment cancellation with details

### Modified Capabilities
- `appointment-management`: Existing appointment display now includes cancel functionality

## Impact

- **Frontend**: New cancel button on each appointment, confirmation dialog component, state management for deleted appointments
- **Data Layer**: Appointment removal or archival logic in localStorage
- **UI/UX**: Addition of confirmation dialog and success notification for cancellations
