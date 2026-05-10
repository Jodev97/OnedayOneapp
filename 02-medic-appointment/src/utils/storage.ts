export interface Appointment {
  id: string
  date: string
  time: string
  doctor: string
  notes: string
  phone: string
  email: string
  createdAt: string
}

const APPOINTMENTS_KEY = 'appointments'

export const generateAppointmentId = (): string => {
  return `APT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const saveAppointment = (appointment: Omit<Appointment, 'id' | 'createdAt'>): Appointment => {
  try {
    const newAppointment: Appointment = {
      ...appointment,
      id: generateAppointmentId(),
      createdAt: new Date().toISOString(),
    }

    const stored = localStorage.getItem(APPOINTMENTS_KEY)
    const appointments = stored ? JSON.parse(stored) : []

    appointments.push(newAppointment)
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments))

    return newAppointment
  } catch (error) {
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      throw new Error('Storage quota exceeded. Please clear some data.')
    }
    throw error
  }
}

export const getAppointments = (): Appointment[] => {
  try {
    const stored = localStorage.getItem(APPOINTMENTS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const clearAppointments = (): void => {
  localStorage.removeItem(APPOINTMENTS_KEY)
}
