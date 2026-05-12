// Jikan API Response Types

export interface JikanMangaResponse {
  data: JikanManga[]
  pagination?: {
    last_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
}

export interface JikanManga {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  approved: boolean
  titles: Array<{
    type: string
    title: string
  }>
  title: string
  title_english?: string
  title_japanese?: string
  type?: string
  chapters?: number
  volumes?: number
  status: string
  publishing?: boolean
  published?: {
    from: string
    to: string | null
    prop: {
      from: {
        day: number | null
        month: number | null
        year: number | null
      }
      to: {
        day: number | null
        month: number | null
        year: number | null
      }
    }
    string: string
  }
  genres: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  explicit_genres: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  themes: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  demographics: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  score?: number
  scored_by?: number
  rank?: number
  popularity?: number
  members?: number
  synopsis?: string
  background?: string
  authors?: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  serializations?: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
}
