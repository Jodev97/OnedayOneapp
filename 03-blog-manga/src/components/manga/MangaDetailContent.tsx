import { useNavigate } from '@tanstack/react-router'
import type { Manga } from '@/types/manga'
import StatisticsPanel from './StatisticsPanel'
import CommunityScore from './CommunityScore'
import RelatedMangaGrid from './RelatedMangaGrid'
import MangaInfoSection from './MangaInfoSection'

interface MangaDetailContentProps {
  manga: Manga
  relatedManga: Manga[]
}

export default function MangaDetailContent({ manga, relatedManga }: MangaDetailContentProps) {
  const navigate = useNavigate()

  const handleAddToList = () => {
    // Toast notification for Add to List
    alert('Added to your list!')
  }

  const handleShare = () => {
    // Copy URL to clipboard
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!')
    })
  }

  const statusColors: { [key: string]: string } = {
    ongoing: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    completed: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
    hiatus: 'bg-orange-500/20 text-orange-300 border border-orange-500/40',
    publishing: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    finished: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40',
    on_hiatus: 'bg-orange-500/20 text-orange-300 border border-orange-500/40',
    discontinued: 'bg-red-500/20 text-red-300 border border-red-500/40',
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

  const statusColor = statusColors[manga.status] || statusColors.ongoing
  const statusLabel = statusLabels[manga.status] || 'Unknown'

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Back Navigation */}
      <button
        onClick={() => navigate({ to: '/' })}
        className="group inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 font-semibold"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Cover & Actions */}
        <div className="lg:col-span-1">
          {/* Cover Image Container */}
          <div className="sticky top-8 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl bg-slate-800 aspect-[3/4] border border-slate-700 shadow-2xl">
              <img
                src={manga.coverUrl || manga.image}
                alt={manga.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToList}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Add to List
              </button>

              <button
                onClick={handleShare}
                className="w-full bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/40 hover:border-cyan-500/60 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C9.577 14.591 10.92 15.55 12.448 15.999m0 0c1.528.45 2.871 1.409 3.764 2.658m-6.764-2.658V19.5M3.75 6.75h16.5M4.46 9.122a7.451 7.451 0 0110.08 0M12 16.5v3.75m0-3.75a7.5 7.5 0 110-15"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Title & Badges */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                {manga.title}
              </h1>
              {/* Add Japanese title if available - for now shown as subtitle */}
              <p className="text-lg text-slate-400 font-semibold">Japanese Title</p>
            </div>

            {/* Status & Type Badges */}
            <div className="flex flex-wrap gap-3">
              <span className={`px-4 py-2 rounded-lg text-sm font-bold ${statusColor}`}>
                {statusLabel}
              </span>
              {manga.type && (
                <span className="px-4 py-2 rounded-lg text-sm font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {manga.type}
                </span>
              )}
              {manga.rating && (
                <span className="px-4 py-2 rounded-lg text-sm font-bold bg-slate-800 text-amber-300 border border-amber-500/40">
                  Rating: {manga.rating}
                </span>
              )}
            </div>
          </div>

          {/* Synopsis Section */}
          {manga.synopsis && (
            <div className="space-y-3 border-l-4 border-cyan-500/60 pl-6 py-2">
              <h2 className="text-xl font-black text-white uppercase tracking-wider">Synopsis</h2>
              <p className="text-slate-300 leading-relaxed text-lg">{manga.synopsis}</p>
            </div>
          )}

          {/* Statistics Panel */}
          <StatisticsPanel manga={manga} />

          {/* Community Score */}
          <CommunityScore score={manga.score || manga.rating} />

          {/* Manga Info Section */}
          <MangaInfoSection manga={manga} />
        </div>
      </div>

      {/* Related Manga Section */}
      {relatedManga.length > 0 && (
        <div className="mt-20 pt-12 border-t border-slate-700">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-wider">
                Related Manga
              </h2>
              <p className="text-slate-400 mt-2">You might also enjoy these titles</p>
            </div>
            <RelatedMangaGrid relatedManga={relatedManga} />
          </div>
        </div>
      )}
    </div>
  )
}
