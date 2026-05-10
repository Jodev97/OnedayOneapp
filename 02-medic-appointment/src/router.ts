import { createRootRoute, createRouter, createRoute } from '@tanstack/react-router'
import RootLayout from './components/RootLayout'
import HomePage from './routes/index'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({
  routeTree,
})
