## ADDED Requirements

### Requirement: Reschedule Button Visibility
The system SHALL display a "Reschedule" button on each appointment in the appointment list or detail view.

#### Scenario: User sees reschedule button on appointment
- **WHEN** user views an appointment
- **THEN** a "Reschedule" button is visible and clickable

### Requirement: Modal Dialog Trigger
The system SHALL open a modal dialog when the user clicks the "Reschedule" button.

#### Scenario: Modal opens on button click
- **WHEN** user clicks the "Reschedule" button
- **THEN** a modal dialog appears with date and time input fields

### Requirement: Modal Content - Date Selection
The system SHALL display a date picker field in the reschedule modal that allows the user to select a new appointment date.

#### Scenario: User selects new date
- **WHEN** user clicks the date input field in the reschedule modal
- **THEN** a date picker opens showing a calendar
- **AND** user can select a new date

### Requirement: Modal Content - Time Selection
The system SHALL display a time picker field in the reschedule modal that allows the user to select a new appointment time.

#### Scenario: User selects new time
- **WHEN** user clicks the time input field in the reschedule modal
- **THEN** a time picker opens or displays time options
- **AND** user can select a new time

### Requirement: Modal Fields Only
The system SHALL display only the date and time input fields in the reschedule modal, excluding other appointment details.

#### Scenario: Modal shows minimal fields
- **WHEN** the reschedule modal is open
- **THEN** only the date picker and time picker are displayed
- **AND** other appointment details (provider, notes, etc.) are not shown

### Requirement: Save Button
The system SHALL provide a "Save" button in the reschedule modal to confirm the new appointment date and time.

#### Scenario: User clicks save
- **WHEN** user clicks the "Save" button in the modal
- **THEN** the modal initiates the reschedule request to the backend

### Requirement: Modal Dismissal
The system SHALL allow the user to close the modal without saving changes.

#### Scenario: User closes modal without saving
- **WHEN** user clicks the close button or outside the modal
- **THEN** the modal closes without submitting changes
- **AND** the appointment remains unchanged
