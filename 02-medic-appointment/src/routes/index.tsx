export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Medical Appointments</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Schedule, manage, and reschedule your medical appointments with ease. Our system provides a seamless experience for booking doctor consultations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Easy Booking"
          description="Browse available doctors and book appointments in just a few clicks."
          icon="📅"
        />
        <FeatureCard
          title="View Availability"
          description="Check real-time availability of doctors and find the perfect time slot."
          icon="🔍"
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
