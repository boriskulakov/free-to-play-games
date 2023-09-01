import styles from './css/games.module.css'

import { Image, Pagination } from 'antd'
import { Filters, Game, GameState } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { useGetGamesQuery } from '@/redux/services/FTPGameApi'
import { gameActions } from '@/redux/features/games'
import { useEffect, useState } from 'react'
import {
  selectGamesByPage,
  selectPageNumber,
  selectQueryParams,
} from '@/redux/features/games/selector'

import Link from 'next/link'
import CardSkeleton from './skeleton/cardSkeleton'
import ImageSpinner, { imageFallback } from './imagePlaceholders/ImageSpinner'

const toStringWithZeros = (date: number) => date.toString().padStart(2, '0')

export const getRussiaDate = (date: string) => {
  let fullDate = new Date(date)
  return `${toStringWithZeros(fullDate.getDate())}.${toStringWithZeros(
    fullDate.getMonth()
  )}.${fullDate.getFullYear()}`
}

function Games() {
  const [gamesAmount, setGamesAmount] = useState(0)

  const currentPage: number = useSelector((state: GameState) =>
    selectPageNumber(state)
  )

  const loadedGames: Game[] = useSelector((state: GameState) =>
    selectGamesByPage(state, currentPage)
  )

  const currentQueryParams: Filters = useSelector((state: GameState) =>
    selectQueryParams(state)
  )

  const dispatch = useDispatch()

  let { data, error } = useGetGamesQuery(currentQueryParams)

  const pageChangeHandler = (page: number) => {
    dispatch(gameActions.setPageNumber(page))
  }

  useEffect(() => {
    if (!data) return
    setGamesAmount(data.length)
    dispatch(gameActions.setGameList(data))
    dispatch(gameActions.setPageNumber(1))
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Pagination
          total={gamesAmount}
          pageSize={21}
          responsive={true}
          showSizeChanger={false}
          hideOnSinglePage={true}
          current={currentPage}
          onChange={pageChangeHandler}
        />
      </div>
      {error && (
        <div className={styles.errorMsg}>Не удалось загрузить данные</div>
      )}
      {loadedGames ? (
        loadedGames.map((game) => (
          <div className={styles.card} key={game.id}>
            <Image
              src={game.thumbnail}
              alt="Обложка игры"
              width={'100%'}
              height={200}
              placeholder={<ImageSpinner />}
              fallback={imageFallback}
            />
            <Link href={`/game/${game.id}`}>
              <div className={styles.info}>
                <h3 className={styles.title}>{game.title}</h3>
                <span className={styles.publisher}>{game.publisher}</span>
                <span className={styles.genre}>{game.genre}</span>
                <span className={styles.date}>
                  {game.release_date && getRussiaDate(game.release_date)}
                </span>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
      <div className={styles.pagination}>
        <Pagination
          total={gamesAmount}
          pageSize={20}
          responsive={true}
          showSizeChanger={false}
          hideOnSinglePage={true}
          current={currentPage}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  )
}

export default Games
