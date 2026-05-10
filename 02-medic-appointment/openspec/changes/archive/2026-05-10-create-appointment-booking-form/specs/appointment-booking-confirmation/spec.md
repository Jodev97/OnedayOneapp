## ADDED Requirements

### Requirement: Display success dialog after appointment creation
The system SHALL show a modal dialog confirming successful appointment creation.

#### Scenario: Success dialog appears after successful submission
- **WHEN** appointment is created successfully
- **THEN** a modal dialog displays with success message and confirmation details

#### Scenario: Dialog displays confirmation information
- **WHEN** success dialog is shown
- **THEN** dialog displays: confirmation message, appointment date/time, and confirmation number (if available)

### Requirement: Navigate from success dialog back to appointment list
The system SHALL provide a button in success dialog to return to the appointment list page.

#### Scenario: Click button to return to list
- **WHEN** user clicks "Back to Appointments" or similar button in success dialog
- **THEN** user is navigated to the appointment list page (`/appointments` or similar)

#### Scenario: List is refreshed with new appointment
- **WHEN** user returns to appointment list from success dialog
- **THEN** the newly created appointment appears in the list

### Requirement: Dialog cannot be dismissed without action
The system SHALL require user to click the return button to close the success dialog.

#### Scenario: Dialog is modal and focused
- **WHEN** success dialog is displayed
- **THEN** user cannot click outside dialog or use escape key to dismiss it (or escape key also navigates to list)

#### Scenario: Single clear call-to-action
- **WHEN** success dialog is shown
- **THEN** primary button is "Back to Appointments" or "Return to List" with clear action
