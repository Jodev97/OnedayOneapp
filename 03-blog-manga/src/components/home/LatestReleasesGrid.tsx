import type { Manga } from '@/types/manga'
import MangaCard from '@/components/manga/MangaCard'
import MangaSkeleton from '@/components/shared/MangaSkeleton'

interface LatestReleasesGridProps {
  manga: Manga[]
  loading?: boolean
  error?: string | null
}

export default function LatestReleasesGrid({ manga, loading = false, error = null }: LatestReleasesGridProps) {
  return (
    <section id="latest" className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            Latest Releases
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Discover the newest manga series added to our collection
          </p>
        </div>

        {error && (
          <div className="bg-red-950/50 border border-red-500/50 rounded-lg p-4 mb-8 text-red-200">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => <MangaSkeleton key={i} />)
            : manga.map((item) => (
                <MangaCard
                  key={item.id}
                  manga={item}
                  onClick={() => console.log(`Navigate to manga: ${item.title}`)}
                />
              ))}
        </div>
      </div>
    </section>
  )
}
