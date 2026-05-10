export interface ValidationError {
  field: string
  message: string
}

export const validators = {
  required: (value: string): string | null => {
    if (!value || value.trim().length === 0) {
      return 'This field is required'
    }
    return null
  },

  email: (value: string): string | null => {
    if (!value) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address'
    }
    return null
  },

  phone: (value: string): string | null => {
    if (!value) return null
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      return 'Please enter a valid phone number'
    }
    return null
  },

  date: (value: string): string | null => {
    if (!value) return null
    const selectedDate = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      return 'Please select a future date'
    }
    return null
  },

  time: (value: string): string | null => {
    if (!value) return null
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (!timeRegex.test(value)) {
      return 'Please enter a valid time (HH:MM)'
    }
    return null
  },
}

export const validateField = (
  fieldName: string,
  value: string,
  isRequired: boolean = true
): string | null => {
  if (isRequired && !value) {
    return validators.required(value)
  }

  switch (fieldName) {
    case 'email':
      return validators.email(value)
    case 'phone':
      return validators.phone(value)
    case 'date':
      return validators.date(value)
    case 'time':
      return validators.time(value)
    default:
      return null
  }
}

export const validateForm = (formData: Record<string, string>): Record<string, string> => {
  const errors: Record<string, string> = {}

  const requiredFields = ['date', 'time', 'doctor', 'phone', 'email']
  const fieldValidators: Record<string, (val: string) => string | null> = {
    date: validators.date,
    time: validators.time,
    email: validators.email,
    phone: validators.phone,
  }

  Object.entries(formData).forEach(([key, value]) => {
    if (requiredFields.includes(key)) {
      const requiredError = validators.required(value)
      if (requiredError) {
        errors[key] = requiredError
        return
      }
    }

    if (fieldValidators[key]) {
      const error = fieldValidators[key](value)
      if (error) {
        errors[key] = error
      }
    }
  })

  return errors
}
