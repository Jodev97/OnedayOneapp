import { useState } from 'react'
import { Appointment } from '../utils/storage'
import { validateField } from '../utils/validation'

interface RescheduleModalProps {
  appointment: Appointment
  onClose: () => void
  onSave: (date: string, time: string) => Promise<void>
}

interface FormErrors {
  date?: string
  time?: string
  submit?: string
}

export default function RescheduleModal({ appointment, onClose, onSave }: RescheduleModalProps) {
  const [date, setDate] = useState(appointment.date)
  const [time, setTime] = useState(appointment.time)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDateChange = (value: string) => {
    setDate(value)
    if (errors.date) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.date
        return newErrors
      })
    }
  }

  const handleTimeChange = (value: string) => {
    setTime(value)
    if (errors.time) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.time
        return newErrors
      })
    }
  }

  const handleDateBlur = () => {
    const error = validateField('date', date, true)
    if (error) {
      setErrors((prev) => ({ ...prev, date: error }))
    }
  }

  const handleTimeBlur = () => {
    const error = validateField('time', time, true)
    if (error) {
      setErrors((prev) => ({ ...prev, time: error }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    const dateError = validateField('date', date, true)
    const timeError = validateField('time', time, true)

    if (dateError) newErrors.date = dateError
    if (timeError) newErrors.time = timeError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      await onSave(date, time)
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to reschedule appointment',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reschedule Appointment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.submit && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-semibold">{errors.submit}</p>
            </div>
          )}

          {/* Date Field */}
          <div>
            <label htmlFor="reschedule-date" className="block text-sm font-semibold text-gray-900 mb-2">
              New Date <span className="text-red-500">*</span>
            </label>
            <input
              id="reschedule-date"
              type="date"
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
              onBlur={handleDateBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            />
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
          </div>

          {/* Time Field */}
          <div>
            <label htmlFor="reschedule-time" className="block text-sm font-semibold text-gray-900 mb-2">
              New Time <span className="text-red-500">*</span>
            </label>
            <input
              id="reschedule-time"
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              onBlur={handleTimeBlur}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-black ${
                errors.time ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            />
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
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
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
