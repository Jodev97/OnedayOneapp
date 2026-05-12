import { useState, useEffect } from 'react'
import type { Manga } from '@/types/manga'
import { jikanService } from '@/services/jikanService'

interface UseMangaDataOptions {
  genre?: string
  limit?: number
  featured?: boolean
}

interface UseMangaDataResult {
  manga: Manga[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useMangaData(options: UseMangaDataOptions = {}): UseMangaDataResult {
  const [manga, setManga] = useState<Manga[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchManga = async () => {
    setLoading(true)
    setError(null)

    try {
      let data: Manga[]

      if (options.featured) {
        data = await jikanService.getTopManga(options.limit || 10)
      } else if (options.genre) {
        data = await jikanService.getMangaByGenre(options.genre, 1)
      } else {
        data = await jikanService.getTopManga(options.limit || 25)
      }

      setManga(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to load manga data'
      setError(errorMessage)
      setManga([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchManga()
  }, [options.genre, options.featured, options.limit])

  const refetch = () => {
    if (options.genre) {
      jikanService.clearCacheForGenre(options.genre)
    } else {
      jikanService.clearCache()
    }
    fetchManga()
  }

  return { manga, loading, error, refetch }
}
