import { GameState } from '@/types/types'

export const selectGameModule = (state: GameState) => state.games

export const selectGames = (state: GameState) => selectGameModule(state).games

export const selectGamesByPage = (state: GameState, page: number) =>
  selectGameModule(state).games[page - 1]

export const selectPageNumber = (state: GameState) =>
  selectGameModule(state).page

export const selectQueryParams = (state: GameState) =>
  selectGameModule(state).queryParams
