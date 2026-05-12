export default function HeroSection() {
  const stats = [
    { label: 'Total Manga', value: '50,000+', icon: '📚' },
    { label: 'Total Chapters', value: '1.5M+', icon: '📖' },
    { label: 'Active Users', value: '100K+', icon: '👥' },
  ]

  return (
    <section className="bg-slate-950 py-20 sm:py-32 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Jikan <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Manga API
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium">
              Jikan is an unofficial & open-source API for the "most active online manga community and database" — MyAnimeList.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 uppercase tracking-wider">
              🔌 REST API
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 uppercase tracking-wider">
              ⚙️ Parser API
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm font-bold text-slate-200 uppercase tracking-wider">
              🔗 15+ Integrations
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition-colors uppercase tracking-wider text-sm">
              Learn More
            </button>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-lg transition-colors border border-slate-700 uppercase tracking-wider text-sm">
              Get Started
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-800 hover:border-cyan-500/50 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 origin-left">{stat.icon}</div>
              <p className="text-xs text-slate-500 mb-3 font-black uppercase tracking-widest">{stat.label}</p>
              <p className="text-4xl font-black text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium">per month</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
