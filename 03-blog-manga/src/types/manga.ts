export interface Manga {
  id: string | number
  title: string
  coverUrl?: string
  image?: string
  synopsis?: string
  description?: string
  status: 'ongoing' | 'completed' | 'hiatus' | 'publishing' | 'finished' | 'on_hiatus' | 'discontinued'
  startDate?: string
  endDate?: string
  chapters?: number
  chapterCount?: number
  volumes?: number
  rating?: number
  score?: number
  genres: string[]
  authors?: string[]
  malId?: number
}

export type MangaStatus = 'ongoing' | 'completed' | 'hiatus'

export const GENRES = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
] as const
