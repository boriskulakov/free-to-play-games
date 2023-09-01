import { createSlice } from '@reduxjs/toolkit'
import { Platform, Sort, Filters, Categories } from '@/types/types'

export const initialState: Filters = {
  sort: 'release-date',
  platform: 'all',
  categories: [],
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategories: (state, { payload }: { payload: Categories[] }) => {
      state.categories = payload.slice()
    },
    setSort: (state, { payload }: { payload: Sort }) => {
      state.sort = payload
    },
    setPlatform: (state, { payload }: { payload: Platform }) => {
      state.platform = payload
    },
  },
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions
