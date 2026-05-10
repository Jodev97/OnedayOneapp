## ADDED Requirements

### Requirement: Modal Dialog Layout
The system SHALL display a centered modal dialog with a clear title and appointment details.

#### Scenario: Confirmation dialog has proper layout
- **WHEN** the cancellation confirmation dialog opens
- **THEN** the dialog displays with a title, appointment information, and action buttons

### Requirement: Dialog Title and Message
The system SHALL display a clear message asking the user to confirm the cancellation.

#### Scenario: User sees confirmation message
- **WHEN** the confirmation dialog is open
- **THEN** the title states something like "Cancel Appointment?" and body text explains the action

### Requirement: Appointment Information Display
The system SHALL show all relevant appointment information in the confirmation dialog.

#### Scenario: Dialog shows full appointment details
- **WHEN** the confirmation dialog is open
- **THEN** the dialog displays: appointment ID/confirmation number, date, time, and doctor/department

### Requirement: Confirm Cancel Button
The system SHALL provide a prominent "Confirm Cancel" or "Cancel Appointment" button.

#### Scenario: Confirm button is visible and clickable
- **WHEN** the confirmation dialog is open
- **THEN** a red or warning-colored button is available to confirm the cancellation
- **AND** clicking it triggers the cancellation action

### Requirement: Keep Appointment Button
The system SHALL provide a "Keep Appointment" or "No, Don't Cancel" button to dismiss the dialog.

#### Scenario: Keep button is visible and clickable
- **WHEN** the confirmation dialog is open
- **THEN** a secondary button is available to dismiss the dialog
- **AND** clicking it closes the dialog without making changes

### Requirement: Close Dialog on Escape
The system SHALL allow users to close the confirmation dialog by pressing Escape or clicking outside the modal.

#### Scenario: Dialog closes on escape or backdrop click
- **WHEN** the confirmation dialog is open
- **THEN** pressing Escape or clicking the backdrop closes the dialog
- **AND** the appointment is not cancelled

### Requirement: Dialog Styling
The system SHALL style the confirmation dialog consistently with the appointment booking and reschedule modals.

#### Scenario: Dialog matches application design
- **WHEN** the confirmation dialog is open
- **THEN** the dialog uses the same color scheme, fonts, and rounded corners as other modals in the application
