import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.logo}>Dear.</span>
          <p>{t('common.tagline')}</p>
        </div>
        <div className={styles.links}>
          <Link to="/support">{t('footer.support')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
          <Link to="/privacy">{t('footer.privacy')}</Link>
        </div>
        <p className={styles.copyright}>{t('common.copyright')}</p>
      </div>
    </footer>
  )
}
