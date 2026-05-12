import type { Manga } from '@/types/manga'

interface StatisticsPanelProps {
  manga: Manga
}

export default function StatisticsPanel({ manga }: StatisticsPanelProps) {
  const stats = [
    {
      label: 'Score',
      value: manga.score ? `${manga.score.toFixed(1)}/10` : 'N/A',
      icon: '⭐',
      color: 'text-amber-400',
    },
    {
      label: 'Rank',
      value: manga.rank ? `#${manga.rank}` : 'N/A',
      icon: '📊',
      color: 'text-cyan-400',
    },
    {
      label: 'Popularity',
      value: manga.popularity ? `#${manga.popularity}` : 'N/A',
      icon: '🔥',
      color: 'text-orange-400',
    },
    {
      label: 'Chapters',
      value: manga.chapters ? `${manga.chapters}` : 'N/A',
      icon: '📖',
      color: 'text-emerald-400',
    },
    {
      label: 'Volumes',
      value: manga.volumes ? `${manga.volumes}` : 'N/A',
      icon: '📚',
      color: 'text-purple-400',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-700/60 rounded-2xl p-8 backdrop-blur-sm">
      <h2 className="text-xl font-black text-white uppercase tracking-wider mb-6">Statistics</h2>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-cyan-500/40 transition-colors"
          >
            <span className="text-2xl mb-2">{stat.icon}</span>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
              {stat.label}
            </p>
            <p className={`text-lg font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
