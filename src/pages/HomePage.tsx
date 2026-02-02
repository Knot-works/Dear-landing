import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>遠距離恋愛をしている、ふたりのために</p>
          <h1 className={styles.heroTitle}>
            会えない時間に、<br />
            <span className={styles.highlight}>気持ちを預ける</span>
          </h1>
          <p className={styles.heroDescription}>
            すぐに返さなくていい。<br />
            読めるときに、読めばいい。<br />
            Dearは、離れていても想いを届けるレターアプリです。
          </p>
          <a href="#" className={styles.ctaButton}>
            <span>App Storeでダウンロード</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className={styles.heroVisual}>
          <div className={`${styles.floatingLetter} ${styles.letter1}`}>
            <div className={styles.letterContent}>
              <p className={styles.letterDate}>12月24日</p>
              <p className={styles.letterText}>今日は会えないけど、<br />君のことを想ってる</p>
            </div>
          </div>
          <div className={`${styles.floatingLetter} ${styles.letter2}`}>
            <div className={styles.letterContent}>
              <p className={styles.letterDate}>1月15日</p>
              <p className={styles.letterText}>次に会えるまで、<br />大切にとっておくね</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={`${styles.feature} ${styles.featureLeft}`}>
          <div className={styles.featureIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <h3>時間差を、前提に</h3>
            <p>既読機能はありません。すぐに返信する必要もありません。あなたのペースで、言葉を届けてください。</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureRight}`}>
          <div className={styles.featureIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <h3>ふたりだけの場所</h3>
            <p>誰かと比べられることはありません。ランキングもスコアもない、あなたたちだけの静かな空間。</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureLeft}`}>
          <div className={styles.featureIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <h3>応援だけがある</h3>
            <p>公開したレターには、同じ距離を過ごす人たちからの「応援」だけが届きます。コメントはありません。</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Dearの使い方</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <h4>ふたりで始める</h4>
            <p>招待コードを共有して、パートナーと繋がります。</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <h4>レターを書く</h4>
            <p>お題を使っても、自由に書いても。あなたの言葉で気持ちを綴ります。</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>03</span>
            <h4>想いを届ける</h4>
            <p>パートナーに送る。または、同じ距離を過ごす人と共有する。</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <h2 className={styles.sectionTitle}>料金プラン</h2>
        <p className={styles.pricingNote}>カップルのどちらか一方が登録すれば、<br />おふたりとも全機能をご利用いただけます。</p>
        <div className={styles.pricingCards}>
          <div className={styles.pricingCard}>
            <h4>無料プラン</h4>
            <p className={styles.price}>¥0</p>
            <p className={styles.priceDetail}>週1通まで送信可能</p>
          </div>
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <span className={styles.badge}>おすすめ</span>
            <h4>プレミアム</h4>
            <p className={styles.price}>¥300<span>/月</span></p>
            <p className={styles.priceDetail}>年額プラン ¥3,000/年</p>
            <ul className={styles.planFeatures}>
              <li>週7通まで送信可能</li>
              <li>画像添付</li>
              <li>すべての機能</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <p className={styles.ctaLabel}>会えない夜に、読んでほしい言葉を</p>
        <h2>距離があっても、<br />想いは届く</h2>
        <a href="#" className={`${styles.ctaButton} ${styles.ctaLight}`}>
          <span>無料ではじめる</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>
    </>
  )
}
