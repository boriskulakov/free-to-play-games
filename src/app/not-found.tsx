import styles from './css/not-found.module.css'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <div className={styles.message}>
        <p className={styles.title}>К сожалению, такую игру еще не придумали</p>
        <p className={styles.subtitle}>
          Попробуйте выбрать что-то из коллекции
        </p>
        <Link href="/" className={styles.link}>
          Найти игры
        </Link>
      </div>
    </div>
  )
}
