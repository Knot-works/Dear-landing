import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>Dear.</Link>

        {/* Desktop Navigation */}
        <div className={styles.links}>
          <Link to="/support">サポート</Link>
          <Link to="/terms">利用規約</Link>
          <Link to="/privacy">プライバシー</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <Link to="/support" onClick={() => setIsOpen(false)}>サポート</Link>
          <Link to="/terms" onClick={() => setIsOpen(false)}>利用規約</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)}>プライバシー</Link>
        </div>
      </nav>
    </header>
  )
}
