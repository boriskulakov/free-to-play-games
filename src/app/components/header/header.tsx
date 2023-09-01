import styles from './css/header.module.css'

import Link from 'next/link'

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link href="/" className={styles.title}>
          <span>Free-To-Play Games</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
