# Tracked Assumptions

## Critical Assumptions (High Impact)

### 1. Data Persistence ✓ **RESOLVED**
**Category**: Data Assumptions  
**Impact**: High - affects entire data lifecycle

**Decision**: **LocalStorage** — Save booked appointments to browser storage

**Rationale**: Users can return to the app and see their bookings. TanStack Query can integrate with localStorage for persistence. Balances realism with implementation simplicity.

**Implementation Notes**:
- Use TanStack Query with localStorage adapter for persistence
- Save booked appointments when created/modified/cancelled
- Load appointments from localStorage on app startup
- Use TanStack Query's cache for in-memory state

---

### 2. User Identity & Bookings ✓ **RESOLVED**
**Category**: User Behavior  
**Impact**: High - affects data scoping

**Decision**: **Single User** — All bookings belong to one implicit user

**Rationale**: Simplest approach, all bookings are visible and managed by one user. No need for profile switching or identity management. Aligns with MVP scope.

**Implementation Notes**:
- All booked appointments stored in localStorage under single user context
- No login or user switching needed
- UI shows "Your Appointments" for the single implicit user

---

### 3. Sample Data Scale ✓ **RESOLVED**
**Category**: Data Assumptions  
**Impact**: Medium - affects data realism

**Decision**: **Minimal** — 3 doctors, 15 appointments

**Rationale**: Quick demo setup, fast to verify all features work. Easy to understand data relationships. MVP focused.

**Implementation Notes**:
- 3 sample doctors with different specialties
- ~15 available appointment slots across all doctors
- Load sample data on app startup via TanStack Query defaults
- Focus on feature verification rather than scale testing

---

### 4. Appointment Confirmation Flow ✓ **RESOLVED**
**Category**: Business Rules  
**Impact**: Medium - affects UX completeness

**Decision**: **Instant Confirmation** — Book immediately, show confirmation message

**Rationale**: Fastest UX with minimal friction. Clear feedback that booking succeeded. Aligns with modern SPA expectations.

**Implementation Notes**:
- Use TanStack Query mutation to handle booking
- Show success toast/notification immediately on booking
- Redirect or update UI to show new appointment in user's list
- Loading state during mutation, disabled button to prevent double-click

---

## Medium Priority Assumptions

### 5. Appointment Duration Handling
**Category**: Business Rules  
**Status**: Tentative

**Assumption**: Fixed duration per doctor type (e.g., 30min consultations)

**Options Being Considered**:
- Fixed per specialty
- Variable per doctor
- User-selectable at booking
- Predefined slot lengths

---

### 6. Time Zone Handling
**Category**: Technical  
**Status**: Tentative

**Assumption**: Single time zone, no conversion needed

---

### 7. Cancellation Rules
**Category**: Business Rules  
**Status**: Tentative

**Assumption**: Cancel up to booking time, no notice period required

---

## Resolved Assumptions ✓

(Assumptions marked as resolved after user decision)

---

## Decision Log

**2026-05-10**: 
- Initial OpenSpec context generated with 4 critical assumptions pending refinement
- Assumption 1: LocalStorage for data persistence ✓
- Assumption 2: Single implicit user ✓
- Assumption 3: Minimal sample data (3 doctors, 15 appointments) ✓
- Assumption 4: Instant confirmation on booking ✓
