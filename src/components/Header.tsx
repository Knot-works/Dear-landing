import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={`${styles.header} ${isOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo} onClick={() => setIsOpen(false)}>Dear.</Link>

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
        </nav>
      </header>

      {/* Mobile Navigation - Outside header for proper overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="メニューを閉じる"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className={styles.mobileMenuContent}>
          <Link to="/" onClick={() => setIsOpen(false)}>ホーム</Link>
          <Link to="/support" onClick={() => setIsOpen(false)}>サポート</Link>
          <Link to="/terms" onClick={() => setIsOpen(false)}>利用規約</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)}>プライバシー</Link>
        </div>
      </div>
    </>
  )
}
