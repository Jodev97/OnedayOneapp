import { Link } from '@tanstack/react-router'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Medical Appointments</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Schedule, manage, and reschedule your medical appointments with ease. Our system provides a seamless experience for booking doctor consultations.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Link to="/booking" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
            Easy Booking
          </Link>
          <Link to="/appointments" className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors">
            View Appointments
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Easy Booking"
          description="Schedule new appointments with our simple booking form."
          icon="📅"
        />
        <FeatureCard
          title="View Appointments"
          description="Check all your scheduled appointments in one place."
          icon="📋"
        />
        <FeatureCard
          title="Manage Appointments"
          description="Cancel or reschedule your appointments with complete control."
          icon="⚙️"
        />
      </div>

      <div className="mt-12 p-6 bg-primary-50 border border-primary-200 rounded-lg">
        <h3 className="text-lg font-semibold text-primary-900 mb-2">Getting Started</h3>
        <p className="text-primary-800">
          Navigate to the appointments section to start booking your next doctor's appointment.
        </p>
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
