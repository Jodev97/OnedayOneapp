## ADDED Requirements

### Requirement: Form renders with all required fields
The system SHALL display a form on the booking page with fields for appointment details (date, time, doctor/department, patient notes, contact phone, contact email).

#### Scenario: Form loads on booking page
- **WHEN** user navigates to the booking page (`/booking`)
- **THEN** form is displayed with all input fields visible and ready for input

#### Scenario: Form fields have placeholder text
- **WHEN** form is rendered
- **THEN** each field displays placeholder or label text describing what to enter

### Requirement: Form validation on blur
The system SHALL validate form fields when user moves focus away (blur event) and display error messages for invalid input.

#### Scenario: Invalid date shows error
- **WHEN** user enters a past date or invalid date format and moves to next field
- **THEN** date field displays error message "Please select a future date"

#### Scenario: Empty required field shows error
- **WHEN** user leaves a required field blank and moves to next field
- **THEN** field displays error message "This field is required"

#### Scenario: Invalid email format shows error
- **WHEN** user enters invalid email and moves to next field
- **THEN** email field displays error message "Please enter a valid email address"

#### Scenario: Valid input clears error
- **WHEN** user corrects invalid input and moves to next field
- **THEN** error message disappears

### Requirement: Form validation on submit
The system SHALL validate all form fields when user submits the form before sending to backend.

#### Scenario: Submit with invalid fields shows all errors
- **WHEN** user clicks submit button with invalid fields
- **THEN** all invalid fields show error messages and form is not submitted

#### Scenario: Submit with valid fields proceeds
- **WHEN** user clicks submit button with all fields valid
- **THEN** form data is sent to backend API

### Requirement: Clear user-friendly error messages
The system SHALL display validation error messages that are specific and helpful for each field.

#### Scenario: Required field error
- **WHEN** validation fails for required field
- **THEN** error message states field name and "This field is required"

#### Scenario: Format-specific error
- **WHEN** validation fails for date/email/phone format
- **THEN** error message specifies the expected format or constraint

### Requirement: Form state preservation during interaction
The system SHALL maintain user input in form fields during validation and error display.

#### Scenario: Input persists after validation error
- **WHEN** user enters data, triggers validation error, then corrects the error
- **THEN** previously entered data in other fields remains intact
