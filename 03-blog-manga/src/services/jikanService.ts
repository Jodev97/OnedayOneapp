import type { Manga } from '@/types/manga'
import type { JikanManga, JikanMangaResponse } from '@/types/jikan'

const JIKAN_API_BASE = 'https://api.jikan.moe/v4'
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const MAX_RETRIES = 3
const INITIAL_RETRY_DELAY = 1000 // 1 second
const REQUEST_TIMEOUT = 10000 // 10 seconds

interface CacheEntry {
  data: Manga[]
  timestamp: number
}

interface ApiCache {
  [key: string]: CacheEntry
}

class JikanService {
  private cache: ApiCache = {}

  private async fetchWithTimeout(
    url: string,
    timeout: number = REQUEST_TIMEOUT
  ): Promise<Response> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, { signal: controller.signal })
      return response
    } finally {
      clearTimeout(timeoutId)
    }
  }

  private async retryFetch(
    url: string,
    retries: number = MAX_RETRIES
  ): Promise<Response> {
    let lastError: Error | undefined

    for (let i = 0; i < retries; i++) {
      try {
        const response = await this.fetchWithTimeout(url)
        if (!response.ok) {
          if (response.status >= 500 && i < retries - 1) {
            // Server error, retry
            const delay = INITIAL_RETRY_DELAY * Math.pow(2, i)
            await new Promise((resolve) => setTimeout(resolve, delay))
            continue
          }
          throw new Error(`HTTP ${response.status}`)
        }
        return response
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error))
        if (i < retries - 1) {
          const delay = INITIAL_RETRY_DELAY * Math.pow(2, i)
          await new Promise((resolve) => setTimeout(resolve, delay))
        }
      }
    }

    throw lastError || new Error('Failed to fetch after retries')
  }

  private mapJikanToManga(jikanManga: JikanManga): Manga {
    const status = this.normalizeStatus(jikanManga.status)

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
      rank: jikanManga.rank,
      popularity: jikanManga.popularity,
      type: jikanManga.type,
      genres: jikanManga.genres.map((g) => g.name),
      authors: jikanManga.authors?.map((a) => a.name) || [],
      serialization: jikanManga.serializations?.map((s) => s.name).join(', ') || '',
    }
  }

  private normalizeStatus(
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

  private isCacheValid(entry: CacheEntry): boolean {
    return Date.now() - entry.timestamp < CACHE_DURATION
  }

  private getCacheKey(genre: string, page: number = 1): string {
    return `${genre}_page_${page}`
  }

  async getMangaByGenre(genre: string, page: number = 1): Promise<Manga[]> {
    const cacheKey = this.getCacheKey(genre, page)
    const cached = this.cache[cacheKey]

    if (cached && this.isCacheValid(cached)) {
      return cached.data
    }

    const genreMap: { [key: string]: number } = {
      action: 1,
      adventure: 2,
      comedy: 4,
      drama: 8,
      fantasy: 10,
      horror: 14,
      mystery: 7,
      romance: 22,
      'sci-fi': 24,
      'slice of life': 36,
    }

    const genreId = genreMap[genre.toLowerCase()] || 1
    const url = `${JIKAN_API_BASE}/manga?genres=${genreId}&page=${page}&limit=25&order_by=score&sort=desc`

    try {
      const response = await this.retryFetch(url)
      const data: JikanMangaResponse = await response.json()

      const mangas = data.data.map((jikanManga) =>
        this.mapJikanToManga(jikanManga)
      )

      // Cache the result
      this.cache[cacheKey] = {
        data: mangas,
        timestamp: Date.now(),
      }

      return mangas
    } catch (error) {
      console.error(`Error fetching manga for genre ${genre}:`, error)
      throw new Error(
        `Failed to fetch manga for genre "${genre}". Please check your connection and try again.`
      )
    }
  }

  async getTopManga(limit: number = 10): Promise<Manga[]> {
    const cacheKey = 'top_manga'
    const cached = this.cache[cacheKey]

    if (cached && this.isCacheValid(cached)) {
      return cached.data.slice(0, limit)
    }

    const url = `${JIKAN_API_BASE}/top/manga?limit=${Math.min(limit, 25)}&type=manga`

    try {
      const response = await this.retryFetch(url)
      const data: JikanMangaResponse = await response.json()

      const mangas = data.data.map((jikanManga) =>
        this.mapJikanToManga(jikanManga)
      )

      // Cache the result
      this.cache[cacheKey] = {
        data: mangas,
        timestamp: Date.now(),
      }

      return mangas.slice(0, limit)
    } catch (error) {
      console.error('Error fetching top manga:', error)
      throw new Error(
        'Unable to load manga data. The manga service is temporarily unavailable. Please try again later.'
      )
    }
  }

  clearCache(): void {
    this.cache = {}
  }

  clearCacheForGenre(genre: string): void {
    Object.keys(this.cache).forEach((key) => {
      if (key.startsWith(genre)) {
        delete this.cache[key]
      }
    })
  }
}

export const jikanService = new JikanService()
