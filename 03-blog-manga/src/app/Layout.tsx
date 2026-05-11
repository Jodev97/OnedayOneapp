import { Outlet } from '@tanstack/react-router'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-4">
        <h1 className="text-2xl font-bold">Manga Blog</h1>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="border-t border-border px-4 py-4 text-center text-sm text-muted">
        <p>&copy; 2026 Manga Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}
