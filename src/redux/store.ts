import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { FTPGameApi } from './services/FTPGameApi'
import { filterReducer } from './features/filters'
import { gameReducer } from './features/games'

export const store = configureStore({
  reducer: {
    games: gameReducer,
    filters: filterReducer,
    [FTPGameApi.reducerPath]: FTPGameApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([FTPGameApi.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
})
