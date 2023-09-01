import { Categories } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getOptions = (path: string) => ({
  url: path,
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '58596861e2msh2614236f08438bfp1db824jsn55506b9c3c23',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
})

const setQuery = (
  categories: Categories[],
  platform?: string,
  sort?: string
) => {
  let query: string[] = []

  if (categories.length === 1) {
    query.push(`category=${categories[0]}`)
  }
  if (categories.length > 1) {
    query.push(`tag=${categories.join('.')}`)
  }

  if (platform) {
    query.push(`platform=${platform}`)
  }
  if (sort) {
    query.push(`sort-by=${sort}`)
  }

  return query.join('&')
}

export const FTPGameApi = createApi({
  reducerPath: 'FTPGameApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getGames: builder.query({
      query: ({
        categories,
        platform,
        sort,
      }: {
        categories: Categories[]
        platform?: string
        sort?: string
      }) => {
        let base = categories.length > 1 ? `filter?` : 'games?'

        return getOptions(base.concat(setQuery(categories, platform, sort)))
      },
    }),

    getGame: builder.query({ query: (id) => getOptions(`game?id=${id}`) }),
  }),
})

export const { useGetGamesQuery, useGetGameQuery } = FTPGameApi
