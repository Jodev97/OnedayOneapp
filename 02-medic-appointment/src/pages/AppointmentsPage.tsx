import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { getAppointments, updateAppointment, deleteAppointment, Appointment } from '../utils/storage'
import RescheduleModal from '../components/RescheduleModal'
import CancelConfirmationDialog from '../components/CancelConfirmationDialog'

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const loadAppointments = () => {
      setAppointments(getAppointments())
    }

    loadAppointments()
    // Set up a listener for storage changes (if user makes changes in another tab)
    const handleStorageChange = () => {
      loadAppointments()
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const handleRescheduleClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowRescheduleModal(true)
  }

  const handleCloseModal = () => {
    setShowRescheduleModal(false)
    setSelectedAppointment(null)
  }

  const handleSaveReschedule = async (newDate: string, newTime: string) => {
    if (!selectedAppointment) return

    try {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 500))

      const updated = updateAppointment(selectedAppointment.id, { date: newDate, time: newTime })
      if (updated) {
        setAppointments(getAppointments())
        setSuccessMessage('Appointment rescheduled successfully!')
        setShowRescheduleModal(false)
        setSelectedAppointment(null)

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000)
      }
    } catch (error) {
      console.error('Failed to reschedule appointment:', error)
    }
  }

  const handleCancelClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    setShowCancelDialog(true)
  }

  const handleCloseCancelDialog = () => {
    setShowCancelDialog(false)
    setSelectedAppointment(null)
  }

  const handleConfirmCancel = async () => {
    if (!selectedAppointment) return

    setIsDeleting(true)
    try {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 500))

      const success = deleteAppointment(selectedAppointment.id)
      if (success) {
        setAppointments(getAppointments())
        setSuccessMessage('Appointment cancelled successfully!')
        setShowCancelDialog(false)
        setSelectedAppointment(null)

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000)
      } else {
        setErrorMessage('Failed to cancel appointment. Please try again.')
        setTimeout(() => setErrorMessage(''), 3000)
      }
    } catch (error) {
      setErrorMessage('An error occurred while cancelling the appointment.')
      console.error('Failed to cancel appointment:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Appointments</h1>
          <p className="text-gray-600">Manage and view all your scheduled appointments</p>
        </div>
        <Link to="/booking" className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
          New Appointment
        </Link>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-green-700 text-sm font-semibold">{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-700 text-sm font-semibold">{errorMessage}</p>
        </div>
      )}

      {appointments.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <svg className="mx-auto w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No appointments</h3>
          <p className="text-gray-600 mb-6">All your appointments have been cancelled or you haven't booked any yet</p>
          <Link to="/booking" className="inline-block px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
            Book an Appointment
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">ID: {appointment.id}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Date</p>
                      <p className="text-sm text-gray-900">{new Date(appointment.date).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Time</p>
                      <p className="text-sm text-gray-900">{appointment.time}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Email</p>
                      <p className="text-sm text-gray-900">{appointment.email}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-600 uppercase">Phone</p>
                      <p className="text-sm text-gray-900">{appointment.phone}</p>
                    </div>
                  </div>
                  {appointment.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Notes</p>
                      <p className="text-sm text-gray-600">{appointment.notes}</p>
                    </div>
                  )}
                </div>
                <div className="ml-4 flex gap-2">
                  <button
                    onClick={() => handleRescheduleClick(appointment)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Reschedule
                  </button>
                  <button
                    onClick={() => handleCancelClick(appointment)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showRescheduleModal && selectedAppointment && (
        <RescheduleModal
          appointment={selectedAppointment}
          onClose={handleCloseModal}
          onSave={handleSaveReschedule}
        />
      )}

      {showCancelDialog && selectedAppointment && (
        <CancelConfirmationDialog
          appointment={selectedAppointment}
          onConfirm={handleConfirmCancel}
          onCancel={handleCloseCancelDialog}
          isLoading={isDeleting}
        />
      )}
    </div>
  )
}
