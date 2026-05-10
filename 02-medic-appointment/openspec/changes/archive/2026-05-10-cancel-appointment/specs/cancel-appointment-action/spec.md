## ADDED Requirements

### Requirement: Cancel Button Visibility
The system SHALL display a "Cancel" button on each appointment in the appointment list.

#### Scenario: User sees cancel button on appointment
- **WHEN** user views the appointments list
- **THEN** each appointment displays a "Cancel" button alongside other action buttons

### Requirement: Confirmation Dialog Trigger
The system SHALL display a confirmation dialog when the user clicks the cancel button.

#### Scenario: Confirmation dialog appears on cancel click
- **WHEN** user clicks the "Cancel" button on an appointment
- **THEN** a modal dialog appears showing the appointment details and asking for confirmation

### Requirement: Appointment Details in Confirmation
The system SHALL show the appointment details (date, time, doctor) in the confirmation dialog.

#### Scenario: Dialog displays appointment information
- **WHEN** the confirmation dialog is open
- **THEN** the dialog shows the date, time, and doctor/department for the appointment being cancelled

### Requirement: Cancel Confirmation
The system SHALL provide a "Confirm Cancel" button in the confirmation dialog to proceed with cancellation.

#### Scenario: User confirms cancellation
- **WHEN** user clicks the "Confirm Cancel" button in the dialog
- **THEN** the appointment is removed from the system

### Requirement: Cancel Rejection
The system SHALL provide a "Keep Appointment" button to dismiss the confirmation dialog without canceling.

#### Scenario: User dismisses confirmation dialog
- **WHEN** user clicks the "Keep Appointment" button or closes the dialog
- **THEN** the dialog closes and the appointment remains unchanged

### Requirement: Appointment Removal from System
The system SHALL permanently remove the cancelled appointment from the appointment list and storage.

#### Scenario: Appointment is deleted from system
- **WHEN** user confirms cancellation
- **THEN** the appointment is removed from localStorage and no longer appears in the appointment list

### Requirement: Success Notification
The system SHALL display a success message after the appointment is successfully cancelled.

#### Scenario: Success message appears after cancellation
- **WHEN** the cancellation is confirmed and completed
- **THEN** a success notification displays (e.g., "Appointment cancelled successfully")

### Requirement: List Update After Cancellation
The system SHALL immediately update the appointment list to reflect the cancelled appointment's removal.

#### Scenario: Cancelled appointment disappears from list
- **WHEN** an appointment is cancelled
- **THEN** the appointment is immediately removed from the visible list
- **AND** if no appointments remain, the empty state is displayed
