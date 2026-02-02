import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <header className={`${styles.header} ${isOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo} onClick={() => setIsOpen(false)}>Dear.</Link>

          {/* Desktop Navigation */}
          <div className={styles.links}>
            <Link to="/support">{t('nav.support')}</Link>
            <Link to="/terms">{t('nav.terms')}</Link>
            <Link to="/privacy">{t('nav.privacy')}</Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Controls */}
          <div className={styles.mobileControls}>
            <LanguageSwitcher />
            <button
              className={styles.menuButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t('nav.home')}
            >
              <span className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Outside header for proper overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div className={styles.mobileMenuContent}>
          <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
          <Link to="/support" onClick={() => setIsOpen(false)}>{t('nav.support')}</Link>
          <Link to="/terms" onClick={() => setIsOpen(false)}>{t('nav.terms')}</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)}>{t('nav.privacy')}</Link>
        </div>
      </div>
    </>
  )
}
