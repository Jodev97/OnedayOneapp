import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from './ThemeProvider'
import { router } from '@/config/router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    },
  },
})

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
