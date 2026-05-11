export interface JikanMangaResponse {
  data: {
    mal_id: number
    title: string
    title_english?: string
    images: {
      jpg: {
        image_url?: string
        small_image_url?: string
        large_image_url?: string
      }
    }
    synopsis?: string
    status?: string
    chapters?: number | null
    volumes?: number | null
    score?: number
    genres?: Array<{
      mal_id: number
      type: string
      name: string
      url: string
    }>
    authors?: Array<{
      mal_id: number
      type: string
      name: string
      url: string
    }>
    published?: {
      from?: string
      to?: string | null
    }
  }
}

export interface JikanSearchResponse {
  data: JikanMangaResponse['data'][]
  pagination?: {
    last_visible_page: number
    has_next_page: boolean
  }
}
