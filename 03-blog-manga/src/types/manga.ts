export interface Manga {
  id: number
  title: string
  malId?: number
  image?: string
  synopsis?: string
  status?: 'publishing' | 'finished' | 'on_hiatus' | 'discontinued'
  startDate?: string
  endDate?: string
  chapters?: number
  volumes?: number
  score?: number
  genres?: string[]
  authors?: string[]
}
