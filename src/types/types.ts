export interface Game {
  id: number
  title: string
  thumbnail?: string
  genre?: string
  platform?: Platform
  publisher?: string
  developer?: string
  release_date?: string
  minimum_system_requirements?: SystemRequirements
  screenshots?: {
    id: number
    image: string
  }[]
}

export interface SystemRequirements {
  os?: string
  processor?: string
  memory?: string
  graphics?: string
  storage?: string
}

export interface Filters {
  sort: Sort
  platform: Platform
  categories: Categories[]
}

export interface FilterState {
  filters: Filters
}

export interface GamePages {
  games: Array<Array<Game>>
  page: number
  queryParams: Filters
}

export interface GameState {
  games: GamePages
}

export interface Categories {
  value: string
  label: string
}

export type Sort = 'release-date' | 'popularity' | 'alphabetical' | 'relevance'
export type Platform = 'pc' | 'browser' | 'all'
export type Genre =
  | 'Шутер'
  | 'Экшн'
  | 'Стратегия'
  | 'Гонки'
  | 'Спортивные'
  | 'Многопользовательская'
  | 'Песочница'
  | 'MOBA'
  | 'MMORPG'
  | 'Королевская битва'
  | 'Открытый мир'
  | 'Выживание'
  | 'Космические'
  | 'Супергерои'
  | 'Хоррор'
  | 'Зомби'
  | 'С перманентной смертью'
  | 'Карточные'
  | 'Аниме'
  | 'Фэнтези'
  | 'Sci-Fi'
  | 'Action RPG'
  | 'Танки'
  | 'Военные'
  | 'Файтинг'
  | 'Боевые искусства'
  | 'Симулятор полета'
  | 'Парусный спорт'
  | 'Башенная защита'
  | 'Пошаговая'
  | 'От первого лица'
  | 'От третьего лица'
  | 'Вид сверху'
  | 'Side-scroller'
  | 'Нетребовательные'
  | '3D'
  | '2D'
  | 'Пиксельная графика'
  | 'Кубическая графика'
  | 'PvP'
  | 'PvE'
  | 'MMO'
  | 'MMOFPS'
  | 'MMOTPS'
  | 'MMORTS'
  | 'MMOARPG'
