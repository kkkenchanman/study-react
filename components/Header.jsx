import styles from '../styles/Header.module.css'
import Link from "next/link"

export function Header() {
  return (
      <header className={styles.Header}>
        <Link href="/">
          <a className={styles.anchor}>Index</a>
        </Link>
        <Link href="/about">
          <a className={styles.anchor}>About</a>
        </Link>
      </header>
  )
}