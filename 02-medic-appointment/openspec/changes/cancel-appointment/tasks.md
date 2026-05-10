## 1. Confirmation Dialog Component

- [ ] 1.1 Create CancelConfirmationDialog component with appointment details display
- [ ] 1.2 Add "Confirm Cancel" and "Keep Appointment" buttons to dialog
- [ ] 1.3 Implement dialog close on backdrop click and escape key
- [ ] 1.4 Style dialog to match existing modals (reschedule, success dialogs)
- [ ] 1.5 Display appointment ID, date, time, and doctor in confirmation dialog

## 2. Cancel Button & Modal Integration

- [ ] 2.1 Add "Cancel" button to each appointment in the appointments list
- [ ] 2.2 Wire cancel button to open confirmation dialog
- [ ] 2.3 Pass selected appointment to confirmation dialog
- [ ] 2.4 Implement dialog state management (open/close)

## 3. Appointment Cancellation Logic

- [ ] 3.1 Create deleteAppointment function in storage utility
- [ ] 3.2 Implement appointment removal from localStorage
- [ ] 3.3 Update appointments list state after deletion
- [ ] 3.4 Refresh appointment list view after cancellation

## 4. User Feedback & UX

- [ ] 4.1 Display success notification after appointment cancellation
- [ ] 4.2 Display error message if cancellation fails
- [ ] 4.3 Show empty state message if all appointments are cancelled
- [ ] 4.4 Auto-dismiss success notification after 3 seconds

## 5. Integration & State Management

- [ ] 5.1 Handle confirmation button click to trigger cancellation
- [ ] 5.2 Handle keep appointment button click to dismiss dialog
- [ ] 5.3 Update AppointmentsPage state after deletion
- [ ] 5.4 Ensure list refreshes immediately after cancellation

## 6. Testing & Verification

- [ ] 6.1 Test cancel button appears on all appointments
- [ ] 6.2 Test confirmation dialog opens on cancel click
- [ ] 6.3 Test confirmation dialog displays correct appointment details
- [ ] 6.4 Test "Keep Appointment" button closes dialog without cancelling
- [ ] 6.5 Test "Confirm Cancel" button removes appointment from list
- [ ] 6.6 Test appointment is removed from localStorage after cancellation
- [ ] 6.7 Test success notification displays after cancellation
- [ ] 6.8 Test empty state displays when all appointments are cancelled
- [ ] 6.9 Test dialog can be closed via escape key
- [ ] 6.10 Test dialog can be closed via backdrop click
