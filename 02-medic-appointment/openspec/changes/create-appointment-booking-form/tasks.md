## 1. Setup & Routes

- [ ] 1.1 Create new booking page component at `/src/pages/BookingPage.tsx`
- [ ] 1.2 Add `/booking` route to application router
- [ ] 1.3 Add "Easy Booking" button to appointment list page that navigates to `/booking`

## 2. Form Component Structure

- [ ] 2.1 Create form component with fields: date, time, doctor/department, notes, phone, email
- [ ] 2.2 Create form state management using useState hooks for each field
- [ ] 2.3 Create submit and cancel handler functions
- [ ] 2.4 Implement form reset functionality

## 3. Form Validation Logic

- [ ] 3.1 Create validation utility functions for each field type (date, email, phone, required fields)
- [ ] 3.2 Implement date validation (future date only, not past)
- [ ] 3.3 Implement email validation (format check)
- [ ] 3.4 Implement phone validation (format check)
- [ ] 3.5 Implement required field validation
- [ ] 3.6 Create error message mapping for user-friendly messages

## 4. Form Interaction & Error Display

- [ ] 4.1 Add blur event handlers to validate fields on blur
- [ ] 4.2 Display error messages below/next to invalid fields
- [ ] 4.3 Clear error messages when field becomes valid
- [ ] 4.4 Highlight invalid fields visually (red border or icon)
- [ ] 4.5 Prevent form submission when validation fails on submit

## 5. Form Submission & localStorage Integration

- [ ] 5.1 Create utility function to generate unique appointment ID (UUID or timestamp-based)
- [ ] 5.2 Create function to save appointment data to localStorage under `appointments` key
- [ ] 5.3 Implement loading state during form submission (500ms minimum)
- [ ] 5.4 Disable submit button while form is being saved
- [ ] 5.5 Handle successful save to localStorage and trigger success dialog
- [ ] 5.6 Add error handling for localStorage quota exceeded or other storage errors

## 6. Success Dialog & Navigation

- [ ] 6.1 Create success confirmation modal/dialog component
- [ ] 6.2 Display success message with appointment confirmation details
- [ ] 6.3 Add "Back to Appointments" button in success dialog
- [ ] 6.4 Implement navigation from dialog to appointment list page
- [ ] 6.5 Ensure list page is refreshed/updated with new appointment on return

## 7. Styling & UX Polish

- [ ] 7.1 Apply consistent styling to form inputs, labels, and buttons
- [ ] 7.2 Style validation error messages (color, font, positioning)
- [ ] 7.3 Style success dialog (modal backdrop, shadow, layout)
- [ ] 7.4 Implement responsive design for mobile/tablet views
- [ ] 7.5 Add accessibility attributes (labels, ARIA roles, semantic HTML)

## 8. Testing & Validation

- [ ] 8.1 Test happy path: fill form → submit → success dialog → return to list
- [ ] 8.2 Test sad path: invalid fields → show errors → correct → submit
- [ ] 8.3 Test form persistence: enter data → trigger error → verify data still there
- [ ] 8.4 Test localStorage save: submit form → verify data in browser localStorage
- [ ] 8.5 Test duplicate submission prevention: verify button disabled during save
- [ ] 8.6 Test appointment ID generation: verify unique IDs created for each submission
- [ ] 8.7 Manual browser testing on multiple screen sizes

## 9. List Page Integration

- [ ] 9.1 Update appointment list page to fetch appointments from localStorage
- [ ] 9.2 Display appointments saved from booking form in the list
- [ ] 9.3 Test list refresh: submit booking → return to list → verify new appointment appears
- [ ] 9.4 Add empty state message if no appointments in localStorage
