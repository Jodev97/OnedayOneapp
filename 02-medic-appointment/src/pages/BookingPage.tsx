import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import SuccessDialog from '../components/SuccessDialog'
import { validateForm, validateField } from '../utils/validation'
import { saveAppointment, Appointment } from '../utils/storage'

interface FormData {
  date: string
  time: string
  doctor: string
  notes: string
  phone: string
  email: string
}

interface FormErrors {
  [key: string]: string
}

export default function BookingPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    doctor: '',
    notes: '',
    phone: '',
    email: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successAppointment, setSuccessAppointment] = useState<Appointment | null>(null)

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleFieldBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field], true)
    if (error) {
      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }))
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(formData as unknown as Record<string, string>)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate async operation with minimum 500ms delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const appointment = saveAppointment({
        date: formData.date,
        time: formData.time,
        doctor: formData.doctor,
        notes: formData.notes,
        phone: formData.phone,
        email: formData.email,
      })

      setSuccessAppointment(appointment)
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to save appointment',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDialogClose = () => {
    setSuccessAppointment(null)
    navigate({ to: '/appointments' })
  }

  const handleCancel = () => {
    navigate({ to: '/' })
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
        <p className="text-gray-600 mb-8">Fill in the details below to schedule your appointment</p>

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-semibold">{errors.submit}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Field */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                Appointment Date <span className="text-red-500">*</span>
              </label>
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleFieldChange('date', e.target.value)}
                onBlur={() => handleFieldBlur('date')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                  errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
            </div>

            {/* Time Field */}
            <div>
              <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                Appointment Time <span className="text-red-500">*</span>
              </label>
              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleFieldChange('time', e.target.value)}
                onBlur={() => handleFieldBlur('time')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                  errors.time ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
            </div>
          </div>

          {/* Doctor/Department Field */}
          <div>
            <label htmlFor="doctor" className="block text-sm font-semibold text-gray-900 mb-2">
              Doctor / Department <span className="text-red-500">*</span>
            </label>
            <input
              id="doctor"
              type="text"
              placeholder="e.g., Dr. Smith or Cardiology"
              value={formData.doctor}
              onChange={(e) => handleFieldChange('doctor', e.target.value)}
              onBlur={() => handleFieldBlur('doctor')}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                errors.doctor ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            />
            {errors.doctor && <p className="mt-1 text-sm text-red-600">{errors.doctor}</p>}
          </div>

          {/* Notes Field */}
          <div>
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              placeholder="Any additional information for the doctor"
              value={formData.notes}
              onChange={(e) => handleFieldChange('notes', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g., (123) 456-7890"
                value={formData.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                onBlur={() => handleFieldBlur('phone')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g., name@example.com"
                value={formData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                onBlur={() => handleFieldBlur('email')}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path strokeLinecap="round" d="M12 2a10 10 0 0 1 0 20" />
                </svg>
              )}
              {isSubmitting ? 'Saving...' : 'Book Appointment'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {successAppointment && <SuccessDialog appointment={successAppointment} onClose={handleDialogClose} />}
    </div>
  )
}
