import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

const languages = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'ko', label: '한국어' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <select
      className={styles.select}
      value={i18n.language?.substring(0, 2) || 'ja'}
      onChange={handleChange}
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  )
}
