import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const languages = [
  { code: 'ja', label: 'JP' },
  { code: 'en', label: 'EN' },
  { code: 'ko', label: 'KO' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language?.substring(0, 2) || 'ja'

  return (
    <div className={styles.switcher}>
      {languages.map((lang, index) => (
        <span key={lang.code}>
          <button
            className={`${styles.lang} ${currentLang === lang.code ? styles.active : ''}`}
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <span className={styles.divider}>/</span>}
        </span>
      ))}
    </div>
  )
}
