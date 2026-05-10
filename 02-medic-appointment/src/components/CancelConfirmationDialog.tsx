import { Appointment } from '../utils/storage'

interface CancelConfirmationDialogProps {
  appointment: Appointment
  onConfirm: () => Promise<void>
  onCancel: () => void
  isLoading?: boolean
}

export default function CancelConfirmationDialog({
  appointment,
  onConfirm,
  onCancel,
  isLoading = false,
}: CancelConfirmationDialogProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCancel()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCancel()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0-10a8 8 0 100 16 8 8 0 000-16z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Cancel Appointment?</h3>
          <p className="text-gray-600 mb-6">Are you sure you want to cancel this appointment? This action cannot be undone.</p>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Confirmation ID:</span>
                <span className="font-semibold text-gray-900">{appointment.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(appointment.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold text-gray-900">{appointment.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor/Department:</span>
                <span className="font-semibold text-gray-900">{appointment.doctor}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed"
            >
              Keep Appointment
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && (
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path strokeLinecap="round" d="M12 2a10 10 0 0 1 0 20" />
                </svg>
              )}
              {isLoading ? 'Cancelling...' : 'Confirm Cancel'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
