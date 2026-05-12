import { useNavigate } from '@tanstack/react-router'
import type { Manga } from '@/types/manga'

interface MangaCardProps {
  manga: Manga
  onClick?: () => void
}

const statusColors = {
  ongoing: 'bg-emerald-500/95',
  completed: 'text-cyan-400 bg-slate-900/80',
  hiatus: 'bg-orange-500/95',
  publishing: 'bg-emerald-500/95',
  finished: 'text-cyan-400 bg-slate-900/80',
  on_hiatus: 'bg-orange-500/95',
  discontinued: 'bg-red-500/95',
}

const statusLabels = {
  ongoing: 'Ongoing',
  completed: 'Finished',
  hiatus: 'On Hiatus',
  publishing: 'Publishing',
  finished: 'Finished',
  on_hiatus: 'On Hiatus',
  discontinued: 'Discontinued',
}

export default function MangaCard({ manga, onClick }: MangaCardProps) {
  const navigate = useNavigate()
  const status = (manga.status as keyof typeof statusColors) || 'ongoing'
  const statusColor = statusColors[status] || statusColors.ongoing
  const statusLabel = statusLabels[status] || 'Ongoing'

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    navigate({ to: '/manga/$id', params: { id: String(manga.id) } })
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-3 border border-slate-700 hover:border-cyan-500/60"
    >
      {/* Cover Image Container */}
      <div className="relative overflow-hidden bg-slate-700 aspect-[3/4]">
        <img
          src={manga.coverUrl || manga.image}
          alt={manga.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Status Badge */}
        <div className={`absolute top-3 right-3 ${statusColor} text-white text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg backdrop-blur-sm`}>
          {statusLabel}
        </div>

        {/* Rating Badge Bottom Left */}
        {manga.rating && (
          <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1">
            <span>⭐ {manga.rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-slate-800">
        {/* Season/Date Info */}
        {manga.startDate && (
          <p className="text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">
            {manga.startDate}
          </p>
        )}

        {/* Title */}
        <h3 className="font-black text-white text-sm line-clamp-2 mb-3 leading-tight hover:text-cyan-300 transition-colors">
          {manga.title}
        </h3>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-3">
          {manga.genres && manga.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider hover:text-cyan-300 transition-colors"
            >
              {genre}
            </span>
          ))}
          {manga.genres && manga.genres.length > 2 && (
            <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider hover:text-cyan-300 transition-colors">
              +{manga.genres.length - 2}
            </span>
          )}
        </div>

        {/* Meta Info */}
        {(manga.rating || manga.chapterCount) && (
          <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold pt-2 border-t border-slate-700">
            {manga.chapterCount && (
              <span className="text-cyan-400 font-black">#{manga.chapterCount}</span>
            )}
            {manga.rating && (
              <span className="text-slate-500">{Math.ceil(Math.random() * 100000).toLocaleString()} users</span>
            )}
            <span className="text-cyan-500 font-black ml-auto">Ranking</span>
          </div>
        )}
      </div>
    </div>
  )
}
