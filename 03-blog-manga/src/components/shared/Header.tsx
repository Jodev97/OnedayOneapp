import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-black text-white tracking-tight">MangaVerse</h1>
              <p className="text-xs text-slate-400 font-medium">Manga Universe</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              activeProps={{ className: 'text-cyan-400 border-b-2 border-cyan-400' }}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider pb-1"
            >
              Home
            </Link>
            <a
              href="#latest"
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Latest
            </a>
            <a
              href="#popular"
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Popular
            </a>
            <a
              href="#genres"
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Genres
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
