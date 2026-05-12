import type { Manga } from './manga'

export interface LibraryEntry {
  id: string
  manga: Manga
  status: 'reading' | 'completed' | 'on_hold' | 'dropped' | 'plan_to_read'
  score?: number
  chaptersRead?: number
  volumesRead?: number
  dateAdded: string
  lastUpdated: string
}
