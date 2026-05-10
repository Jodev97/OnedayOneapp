import { Outlet } from '@tanstack/react-router'

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-primary-600">Medical Appointments</h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>&copy; 2024 Medical Appointment System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
