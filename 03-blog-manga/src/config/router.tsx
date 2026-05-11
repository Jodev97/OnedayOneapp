import { RootRoute, Route, Router } from '@tanstack/react-router'
import Layout from '@/app/Layout'

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => {
    return <div className="p-4">Welcome to Manga Blog</div>
  },
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
