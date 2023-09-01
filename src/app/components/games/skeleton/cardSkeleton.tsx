import styles from './css/cardSkeleton.module.css'

function CardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h3 className={styles.title}></h3>
        <span className={styles.publisher}></span>
        <span className={styles.name}></span>
        <span className={styles.genre}></span>
        <span className={styles.date}></span>
      </div>
    </div>
  )
}

export default CardSkeleton
