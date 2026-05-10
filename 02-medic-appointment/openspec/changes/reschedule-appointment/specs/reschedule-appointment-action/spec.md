## ADDED Requirements

### Requirement: Backend Reschedule Endpoint
The system SHALL provide an API endpoint that accepts a reschedule request with the appointment ID, new date, and new time.

#### Scenario: Valid reschedule request
- **WHEN** frontend sends a PUT/POST request to the reschedule endpoint with valid appointment ID, date, and time
- **THEN** the endpoint receives and processes the request

### Requirement: Appointment Update
The system SHALL update the appointment record in the database with the new date and time.

#### Scenario: Appointment data is updated
- **WHEN** the reschedule endpoint processes a valid request
- **THEN** the appointment's date and time fields are updated in the database
- **AND** the update timestamp is recorded

### Requirement: Success Response
The system SHALL return a success response to the frontend after the appointment is rescheduled.

#### Scenario: Frontend receives success confirmation
- **WHEN** the backend successfully updates the appointment
- **THEN** the endpoint returns a success status (e.g., 200 OK) with the updated appointment data

### Requirement: Input Validation
The system SHALL validate that the new date and time are provided and in the correct format.

#### Scenario: Validation passes for valid input
- **WHEN** the reschedule request contains valid date and time
- **THEN** the endpoint proceeds with the update

#### Scenario: Validation fails for missing date
- **WHEN** the reschedule request is missing the date field
- **THEN** the endpoint returns a validation error response

#### Scenario: Validation fails for missing time
- **WHEN** the reschedule request is missing the time field
- **THEN** the endpoint returns a validation error response

### Requirement: Appointment ID Verification
The system SHALL verify that the appointment exists and belongs to the requesting user before allowing the reschedule.

#### Scenario: User can reschedule own appointment
- **WHEN** user requests to reschedule their own appointment
- **THEN** the endpoint allows the update

#### Scenario: User cannot reschedule others' appointments
- **WHEN** user attempts to reschedule an appointment that does not belong to them
- **THEN** the endpoint returns an authorization error

### Requirement: Success Message
The system SHALL display a success message to the user after rescheduling is confirmed.

#### Scenario: Success notification appears
- **WHEN** the backend returns a success response after rescheduling
- **THEN** the frontend displays a success message (e.g., "Appointment rescheduled successfully")
- **AND** the modal closes

### Requirement: Appointment List Update
The system SHALL refresh the appointment list to reflect the updated appointment date and time.

#### Scenario: Updated appointment appears in list
- **WHEN** the reschedule operation completes successfully
- **THEN** the appointment in the list shows the new date and time
