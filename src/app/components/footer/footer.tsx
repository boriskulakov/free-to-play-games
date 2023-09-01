import styles from './css/footer.module.css'

import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link
          href="https://github.com/boriskulakov/free-to-play-games"
          target="blank"
        >
          <span className={styles.github}>Github</span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
