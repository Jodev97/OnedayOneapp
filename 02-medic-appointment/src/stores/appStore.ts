import { create } from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  isLoading: boolean
  toggleTheme: () => void
  toggleSidebar: () => void
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  sidebarOpen: true,
  isLoading: false,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
  setIsLoading: (loading) => set({ isLoading: loading }),
}))
