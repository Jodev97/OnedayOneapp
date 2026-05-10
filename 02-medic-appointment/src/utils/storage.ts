export interface Appointment {
  id: string
  date: string
  time: string
  doctor: string
  notes: string
  phone: string
  email: string
  createdAt: string
  updatedAt?: string
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

export const updateAppointment = (
  appointmentId: string,
  updates: Partial<Omit<Appointment, 'id' | 'createdAt'>>
): Appointment | null => {
  try {
    const stored = localStorage.getItem(APPOINTMENTS_KEY)
    const appointments: Appointment[] = stored ? JSON.parse(stored) : []

    const index = appointments.findIndex((apt) => apt.id === appointmentId)
    if (index === -1) {
      return null
    }

    const updated: Appointment = {
      ...appointments[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }

    appointments[index] = updated
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments))

    return updated
  } catch (error) {
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      throw new Error('Storage quota exceeded. Please clear some data.')
    }
    throw error
  }
}

export const deleteAppointment = (appointmentId: string): boolean => {
  try {
    const stored = localStorage.getItem(APPOINTMENTS_KEY)
    const appointments: Appointment[] = stored ? JSON.parse(stored) : []

    const filtered = appointments.filter((apt) => apt.id !== appointmentId)

    if (filtered.length === appointments.length) {
      return false
    }

    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(filtered))
    return true
  } catch (error) {
    console.error('Failed to delete appointment:', error)
    return false
  }
}

export const clearAppointments = (): void => {
  localStorage.removeItem(APPOINTMENTS_KEY)
}
