// Shared TypeScript types and interfaces
// Add type definitions here as the application grows

export interface Doctor {
  id: string
  name: string
  specialty: string
  experience: number
  rating: number
  bio?: string
  availableSlots: string[]
}

export interface Appointment {
  id: string
  doctorId: string
  date: string
  time: string
  duration: number
  status: 'available' | 'booked' | 'completed' | 'cancelled'
  clinicLocation: string
  notes?: string
}

export interface BookedAppointment {
  id: string
  appointmentId: string
  doctorId: string
  bookingDate: string
  reminderSet: boolean
}
