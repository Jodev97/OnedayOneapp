import type { Manga } from '@/types/manga'

interface MangaInfoSectionProps {
  manga: Manga
}

export default function MangaInfoSection({ manga }: MangaInfoSectionProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-slate-700/60 rounded-2xl p-8 backdrop-blur-sm">
      <h2 className="text-xl font-black text-white uppercase tracking-wider mb-8">Information</h2>

      <div className="space-y-8">
        {/* Authors */}
        {manga.authors && manga.authors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
                Authors
              </p>
              <div className="space-y-2">
                {manga.authors.map((author) => (
                  <p key={author} className="text-lg text-white font-semibold">
                    {author}
                  </p>
                ))}
              </div>
            </div>

            {/* Serialization */}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
                Serialization
              </p>
              <p className="text-lg text-white font-semibold">
                {manga.serialization || 'N/A'}
              </p>
            </div>
          </div>
        )}

        {/* Type & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
              Type
            </p>
            <p className="text-lg text-white font-semibold">{manga.type || 'Manga'}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">
              Status
            </p>
            <p className="text-lg text-white font-semibold capitalize">{manga.status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
