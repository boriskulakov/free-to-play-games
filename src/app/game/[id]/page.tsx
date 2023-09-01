'use client'

import styles from './css/page.module.css'

import { Carousel, Image } from 'antd'
import ImageSpinner, {
  imageFallback,
} from '@/app/components/games/imagePlaceholders/ImageSpinner'
import { useGetGameQuery } from '@/redux/services/FTPGameApi'
import { getRussiaDate } from '@/app/components/games/games'

import Link from 'next/link'

interface PageProps {
  params: {
    id: string
  }
}

function Page({ params }: PageProps) {
  let { data } = useGetGameQuery(params.id)

  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={'/'}>На главную</Link>
        </div>
        {data ? (
          <div className={styles.card}>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.image}>
              <Image
                src={data.thumbnail}
                alt="Обложка игры"
                width={'100%'}
                placeholder={<ImageSpinner />}
                fallback={imageFallback}
              />
            </div>
            {data.screenshots.length && (
              <div className={styles.carusel}>
                <Carousel>
                  {data.screenshots.map(
                    (img: { id: number; image: string }) => (
                      <Image
                        key={img.id}
                        src={img.image}
                        alt="Скриншот"
                        width={'100%'}
                        placeholder={<ImageSpinner />}
                        fallback={imageFallback}
                      />
                    )
                  )}
                </Carousel>
              </div>
            )}

            <div className={styles.info}>
              {data.publisher && (
                <div className={styles.publisher}>{data.publisher}</div>
              )}

              {data.developer && (
                <div className={styles.developer}>{data.developer}</div>
              )}

              {data.genre && <div className={styles.genre}>{data.genre}</div>}

              {data.release_date && (
                <div className={styles.date}>
                  {getRussiaDate(data.release_date)}
                </div>
              )}

              {Object.values(data.minimum_system_requirements).filter(
                (item) => item
              ).length > 0 && (
                <div className={styles.system}>
                  <div className={styles.system_title}>
                    Минимальные системные требования
                  </div>

                  {data.minimum_system_requirements.os && (
                    <div className={styles.os}>
                      Операционная система:{' '}
                      {data.minimum_system_requirements.os}
                    </div>
                  )}

                  {data.minimum_system_requirements.processor && (
                    <div className={styles.processor}>
                      Процессор: {data.minimum_system_requirements.processor}
                    </div>
                  )}

                  {data.minimum_system_requirements.memory && (
                    <div className={styles.memory}>
                      Оперативная память:{' '}
                      {data.minimum_system_requirements.memory}
                    </div>
                  )}

                  {data.minimum_system_requirements.graphics && (
                    <div className={styles.graphics}>
                      Видеокарта: {data.minimum_system_requirements.graphics}
                    </div>
                  )}

                  {data.minimum_system_requirements.storage && (
                    <div className={styles.storage}>
                      Место на диске: {data.minimum_system_requirements.storage}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.loading}>Загрузка данных об игре</div>
        )}
      </div>
    </div>
  )
}

export default Page
