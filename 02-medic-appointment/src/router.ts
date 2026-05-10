import { createRootRoute, createRouter, createRoute } from '@tanstack/react-router'
import RootLayout from './components/RootLayout'
import HomePage from './routes/index'
import BookingPage from './pages/BookingPage'
import AppointmentsPage from './pages/AppointmentsPage'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: BookingPage,
})

const appointmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/appointments',
  component: AppointmentsPage,
})

const routeTree = rootRoute.addChildren([indexRoute, bookingRoute, appointmentsRoute])

export const router = createRouter({
  routeTree,
})
