import { useNavigate } from '@tanstack/react-router'
import type { Manga } from '@/types/manga'

interface RelatedMangaGridProps {
  relatedManga: Manga[]
}

export default function RelatedMangaGrid({ relatedManga }: RelatedMangaGridProps) {
  const navigate = useNavigate()

  const statusColors = {
    ongoing: 'bg-emerald-500/95 text-white',
    completed: 'bg-cyan-400/95 text-slate-900',
    hiatus: 'bg-orange-500/95 text-white',
    publishing: 'bg-emerald-500/95 text-white',
    finished: 'bg-cyan-400/95 text-slate-900',
    on_hiatus: 'bg-orange-500/95 text-white',
    discontinued: 'bg-red-500/95 text-white',
  }

  const statusLabels: { [key: string]: string } = {
    ongoing: 'Ongoing',
    completed: 'Completed',
    hiatus: 'On Hiatus',
    publishing: 'Publishing',
    finished: 'Finished',
    on_hiatus: 'On Hiatus',
    discontinued: 'Discontinued',
  }

  const handleCardClick = (mangaId: string | number) => {
    navigate({ to: '/manga/$id', params: { id: String(mangaId) } })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedManga.map((manga) => {
        const statusColor = statusColors[manga.status as keyof typeof statusColors] || statusColors.ongoing
        const statusLabel = statusLabels[manga.status] || 'Unknown'

        return (
          <div
            key={manga.id}
            onClick={() => handleCardClick(manga.id)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-3 border border-slate-700 hover:border-cyan-500/60"
          >
            {/* Cover Image */}
            <div className="relative overflow-hidden bg-slate-700 aspect-[3/4]">
              <img
                src={manga.coverUrl || manga.image}
                alt={manga.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Status Badge */}
              <div
                className={`absolute top-3 right-3 ${statusColor} text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg backdrop-blur-sm`}
              >
                {statusLabel}
              </div>

              {/* Rating Badge */}
              {manga.score && (
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1">
                  <span>⭐ {manga.score.toFixed(1)}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 bg-slate-800">
              {/* Title */}
              <h3 className="font-black text-white text-sm line-clamp-2 mb-3 leading-tight hover:text-cyan-300 transition-colors">
                {manga.title}
              </h3>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {manga.genres && manga.genres.slice(0, 2).map((genre) => (
                  <span
                    key={genre}
                    className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider hover:text-cyan-300 transition-colors"
                  >
                    {genre}
                  </span>
                ))}
                {manga.genres && manga.genres.length > 2 && (
                  <span className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    +{manga.genres.length - 2}
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
