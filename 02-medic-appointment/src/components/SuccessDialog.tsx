import { Appointment } from '../utils/storage'

interface SuccessDialogProps {
  appointment: Appointment
  onClose: () => void
}

export default function SuccessDialog({ appointment, onClose }: SuccessDialogProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Appointment Created!</h3>
          <p className="text-gray-600 mb-6">Your appointment has been successfully scheduled.</p>

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

          <button
            onClick={onClose}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Back to Appointments
          </button>
        </div>
      </div>
    </div>
  )
}
