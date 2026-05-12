import { RootRoute, Route, Router } from '@tanstack/react-router'
import Layout from '@/app/Layout'
import Home from '@/pages/Home'
import MangaDetail from '@/pages/MangaDetail'

const rootRoute = new RootRoute({
  component: Layout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const mangaDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/manga/$id',
  component: MangaDetail,
})

const routeTree = rootRoute.addChildren([indexRoute, mangaDetailRoute])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
