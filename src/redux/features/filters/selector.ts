import { FilterState } from '@/types/types'

export const selectFilterModule = (state: FilterState) => state.filters

export const selectSort = (state: FilterState) => selectFilterModule(state).sort

export const selectPlatform = (state: FilterState) =>
  selectFilterModule(state).platform

export const selectCategories = (state: FilterState) =>
  selectFilterModule(state).categories
