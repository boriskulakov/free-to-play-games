import { Filters, Game, GamePages } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'
import { initialState as initialFilters } from '../filters'

const initialState: GamePages = {
  games: [],
  page: 1,
  queryParams: initialFilters,
}

export const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGameList: (state, { payload }: { payload: Game[] }) => {
      const gamePages = []
      payload = [...payload]
      while (payload.length) {
        gamePages.push(payload.splice(0, 21))
      }
      state.games = gamePages.slice()
    },
    setPageNumber: (state, { payload }: { payload: number }) => {
      state.page = payload
    },
    setQueryParams: (state, { payload }: { payload: Filters }) => {
      state.queryParams = payload
    },
  },
})

export const gameReducer = gameSlice.reducer
export const gameActions = gameSlice.actions
