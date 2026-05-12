export interface Settings {
  theme: 'light' | 'dark' | 'system'
  language: string
  itemsPerPage: number
  defaultSortBy: 'title' | 'score' | 'dateAdded' | 'lastUpdated'
  showNSFWContent: boolean
  autoSave: boolean
}
