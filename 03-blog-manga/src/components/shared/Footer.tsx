export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-black">M</span>
              </div>
              <h3 className="font-black text-white text-lg">MangaVerse</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Your ultimate destination for manga news, reviews, and recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-white mb-5 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#latest" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Latest
                </a>
              </li>
              <li>
                <a href="#popular" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Popular
                </a>
              </li>
              <li>
                <a href="#genres" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Genres
                </a>
              </li>
            </ul>
          </div>

          {/* Top Genres */}
          <div>
            <h4 className="font-black text-white mb-5 uppercase tracking-wider text-sm">Top Genres</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Action
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Fantasy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Romance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Supernatural
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-black text-white mb-5 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-medium">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} MangaVerse. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-medium">
            Made with 💜 for manga enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}
