import type { Manga } from '@/types/manga'
import MangaCard from '@/components/manga/MangaCard'

interface PopularSectionProps {
  manga: Manga[]
}

export default function PopularSection({ manga }: PopularSectionProps) {
  return (
    <section id="popular" className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight">
            Popular This Season
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            The most trending and highly-rated manga series right now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {manga.map((item) => (
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
