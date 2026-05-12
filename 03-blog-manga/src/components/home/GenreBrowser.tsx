import { useState } from 'react'
import { GENRES } from '@/types/manga'
import { useMangaData } from '@/hooks/useMangaData'
import MangaCard from '@/components/manga/MangaCard'
import MangaSkeleton from '@/components/shared/MangaSkeleton'

interface GenreBrowserProps {
  onGenreSelect?: (genre: string | null) => void
}

export default function GenreBrowser({ onGenreSelect }: GenreBrowserProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const { manga: genreManga, loading, error } = useMangaData({
    genre: selectedGenre || undefined,
  })

  const handleGenreClick = (genre: string | null) => {
    setSelectedGenre(genre)
    onGenreSelect?.(genre)
  }

  return (
    <section id="genres" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            Browse by Genre
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Discover manga by your favorite genres
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* All button */}
          <button
            onClick={() => handleGenreClick(null)}
            className={`px-5 py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 text-sm ${
              selectedGenre === null
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
          >
            All
          </button>

          {/* Genre buttons */}
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => handleGenreClick(genre)}
              className={`px-5 py-3 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 text-sm ${
                selectedGenre === genre
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {selectedGenre && (
          <div className="mt-10">
            <div className="mb-8 p-6 bg-slate-900 border border-cyan-500/30 rounded-xl">
              <p className="text-slate-200 font-medium text-lg">
                Showing manga in the <span className="font-black text-cyan-400">{selectedGenre}</span> genre
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
                : genreManga.map((manga) => (
                    <MangaCard
                      key={manga.id}
                      manga={manga}
                      onClick={() => console.log(`Navigate to manga: ${manga.title}`)}
                    />
                  ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
