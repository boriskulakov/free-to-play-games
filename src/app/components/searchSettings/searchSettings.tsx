'use client'

import styles from './css/searchSettings.module.css'

import { Button, Select } from 'antd'
import { CATEGORIES } from './categories'
import { Platform, Sort, FilterState, Categories } from '@/types/types'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '@/redux/features/filters'
import { gameActions } from '@/redux/features/games'
import {
  selectCategories,
  selectPlatform,
  selectSort,
} from '@/redux/features/filters/selector'

const NoMoreFilters = () => (
  <div className={styles.nomore}>Выбраны все фильтры</div>
)

function SearchSettings() {
  const selectedCategories: Categories[] = useSelector((state: FilterState) =>
    selectCategories(state)
  )
  const selectedSort: Sort = useSelector((state: FilterState) =>
    selectSort(state)
  )
  const selectedPlatform: Platform = useSelector((state: FilterState) =>
    selectPlatform(state)
  )

  const dispatch = useDispatch()

  const categoriesHandler = (value: Categories[]) => {
    dispatch(filterActions.setCategories(value))
  }
  const sortHandler = (sort: Sort) => {
    dispatch(filterActions.setSort(sort))
  }
  const platformHandler = (platform: Platform) => {
    dispatch(filterActions.setPlatform(platform))
  }

  const submitHandler = () => {
    dispatch(
      gameActions.setQueryParams({
        sort: selectedSort,
        platform: selectedPlatform,
        categories: selectedCategories,
      })
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <span className={styles.filters_title}>Жанр</span>
        <Select
          mode="multiple"
          size="large"
          allowClear
          maxTagCount="responsive"
          placeholder="Выберите жанр"
          value={selectedCategories}
          onChange={categoriesHandler}
          listHeight={200}
          notFoundContent={<NoMoreFilters />}
          style={{ width: '100%' }}
          options={CATEGORIES}
        />
      </div>
      <div className={styles.sort}>
        <span className={styles.sort_title}>Отсортировать</span>
        <Select
          size="large"
          defaultValue={selectedSort}
          onChange={sortHandler}
          style={{ width: '100%' }}
          options={[
            { value: 'release-date', label: 'По дате релиза' },
            { value: 'popularity', label: 'По популярности' },
            { value: 'alphabetical', label: 'По алфавиту' },
            { value: 'relevance', label: 'По релевантности' },
          ]}
        />
      </div>
      <div className={styles.platform}>
        <Select
          size="large"
          defaultValue={selectedPlatform}
          onChange={platformHandler}
          style={{ width: '100%' }}
          options={[
            { value: 'pc', label: 'Игры на ПК' },
            { value: 'browser', label: 'Браузерные игры' },
            { value: 'all', label: 'Любая платформа' },
          ]}
        />
      </div>

      <div className={styles.submit}>
        <Button
          type="primary"
          size={'large'}
          style={{ width: '100%' }}
          onClick={submitHandler}
        >
          Применить
        </Button>
      </div>
    </div>
  )
}

export default SearchSettings
