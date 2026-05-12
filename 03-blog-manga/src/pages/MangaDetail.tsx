import { useParams } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import type { Manga } from '@/types/manga'
import type { JikanManga } from '@/types/jikan'
import { jikanService } from '@/services/jikanService'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import MangaDetailContent from '@/components/manga/MangaDetailContent'

export default function MangaDetail() {
  const { id } = useParams({ from: '/manga/$id' })
  const [manga, setManga] = useState<Manga | null>(null)
  const [relatedManga, setRelatedManga] = useState<Manga[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMangaDetails = async () => {
      setLoading(true)
      setError(null)

      try {
        // Fetch main manga details
        const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`)
        if (!response.ok) throw new Error('Failed to fetch manga details')
        const data = await response.json()

        const jikanManga: JikanManga = data.data
        const mappedManga = mapJikanToManga(jikanManga)
        setManga(mappedManga)

        // Fetch related manga
        try {
          const relatedResponse = await fetch(`https://api.jikan.moe/v4/manga/${id}/relations`)
          if (relatedResponse.ok) {
            const relatedData = await relatedResponse.json()
            const relations = relatedData.data || []

            // Extract unique manga from relations
            const relatedMangaSet = new Map<number, JikanManga>()
            relations.forEach((relation: any) => {
              if (relation.entry && relation.entry.mal_id && relation.entry.type === 'manga') {
                relatedMangaSet.set(relation.entry.mal_id, relation.entry)
              }
            })

            const related = Array.from(relatedMangaSet.values())
              .slice(0, 6)
              .map(mapJikanToManga)

            setRelatedManga(related)
          }
        } catch (err) {
          console.warn('Failed to fetch related manga:', err)
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load manga details'
        setError(errorMessage)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMangaDetails()
    }
  }, [id])

  function mapJikanToManga(jikanManga: JikanManga): Manga {
    const status = normalizeStatus(jikanManga.status)

    return {
      id: jikanManga.mal_id,
      title: jikanManga.title,
      malId: jikanManga.mal_id,
      image: jikanManga.images.jpg.large_image_url,
      coverUrl: jikanManga.images.jpg.large_image_url,
      synopsis: jikanManga.synopsis || '',
      description: jikanManga.background || '',
      status,
      startDate: jikanManga.published?.string || '',
      chapters: jikanManga.chapters,
      chapterCount: jikanManga.chapters,
      volumes: jikanManga.volumes,
      rating: jikanManga.score || 0,
      score: jikanManga.score,
      genres: jikanManga.genres.map((g) => g.name),
      authors: jikanManga.authors?.map((a) => a.name) || [],
    }
  }

  function normalizeStatus(
    status: string
  ): 'ongoing' | 'completed' | 'hiatus' | 'publishing' | 'finished' | 'on_hiatus' | 'discontinued' {
    const normalized = status.toLowerCase()

    if (normalized.includes('ongoing') || normalized.includes('publishing')) {
      return 'ongoing'
    }
    if (normalized.includes('finished') || normalized.includes('complete')) {
      return 'completed'
    }
    if (normalized.includes('hiatus') || normalized.includes('on_hiatus')) {
      return 'hiatus'
    }

    return 'ongoing'
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="py-8">
        {loading && (
          <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-slate-400">Loading manga details...</p>
          </div>
        )}

        {error && (
          <div className="container mx-auto px-4 py-16">
            <div className="bg-red-900/30 border border-red-700 text-red-200 px-6 py-4 rounded-lg">
              <p className="font-semibold">Error: {error}</p>
              <p className="text-sm mt-2">Please try again or return to home.</p>
            </div>
          </div>
        )}

        {manga && !loading && (
          <MangaDetailContent manga={manga} relatedManga={relatedManga} />
        )}
      </main>

      <Footer />
    </div>
  )
}
