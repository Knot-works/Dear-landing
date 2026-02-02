import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.logo}>Dear.</span>
          <p>会えない時間に、気持ちを預ける</p>
        </div>
        <div className={styles.links}>
          <Link to="/support">サポート・お問い合わせ</Link>
          <Link to="/terms">利用規約</Link>
          <Link to="/privacy">プライバシーポリシー</Link>
        </div>
        <p className={styles.copyright}>&copy; 2026 Knot. All rights reserved.</p>
      </div>
    </footer>
  )
}
