import { useTranslation } from 'react-i18next'
import styles from './HomePage.module.css'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>{t('hero.label')}</p>
          <h1 className={styles.heroTitle}>
            {t('hero.title1')}<br />
            <span className={styles.highlight}>{t('hero.title2')}</span>
          </h1>
          <p className={styles.heroDescription}>
            {t('hero.description1')}<br />
            {t('hero.description2')}<br />
            {t('hero.description3')}
          </p>
          <a href="#" className={styles.ctaButton}>
            <span>{t('hero.cta')}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div className={styles.heroVisual}>
          <div className={`${styles.floatingLetter} ${styles.letter1}`}>
            <div className={styles.letterContent}>
              <p className={styles.letterDate}>{t('hero.letter1Date')}</p>
              <p className={styles.letterText}>{t('hero.letter1Text').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}</p>
            </div>
          </div>
          <div className={`${styles.floatingLetter} ${styles.letter2}`}>
            <div className={styles.letterContent}>
              <p className={styles.letterDate}>{t('hero.letter2Date')}</p>
              <p className={styles.letterText}>{t('hero.letter2Text').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}</p>
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
            <h3>{t('features.time.title')}</h3>
            <p>{t('features.time.description')}</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureRight}`}>
          <div className={styles.featureIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <h3>{t('features.private.title')}</h3>
            <p>{t('features.private.description')}</p>
          </div>
        </div>

        <div className={`${styles.feature} ${styles.featureLeft}`}>
          <div className={styles.featureIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
            </svg>
          </div>
          <div className={styles.featureContent}>
            <h3>{t('features.support.title')}</h3>
            <p>{t('features.support.description')}</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>{t('howItWorks.title')}</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <h4>{t('howItWorks.step1.title')}</h4>
            <p>{t('howItWorks.step1.description')}</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <h4>{t('howItWorks.step2.title')}</h4>
            <p>{t('howItWorks.step2.description')}</p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>03</span>
            <h4>{t('howItWorks.step3.title')}</h4>
            <p>{t('howItWorks.step3.description')}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <h2 className={styles.sectionTitle}>{t('pricing.title')}</h2>
        <p className={styles.pricingNote}>{t('pricing.note')}</p>
        <div className={styles.pricingCards}>
          <div className={styles.pricingCard}>
            <h4>{t('pricing.free.name')}</h4>
            <p className={styles.price}>{t('pricing.free.price')}</p>
            <ul className={styles.planFeatures}>
              {(t('pricing.free.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <span className={styles.badge}>{t('pricing.premium.badge')}</span>
            <h4>{t('pricing.premium.name')}</h4>
            <p className={styles.price}>{t('pricing.premium.price')}<span>{t('pricing.premium.period')}</span></p>
            <ul className={styles.planFeatures}>
              {(t('pricing.premium.features', { returnObjects: true }) as string[]).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <p className={styles.ctaLabel}>{t('cta.label')}</p>
        <h2>{t('cta.title')}</h2>
        <a href="#" className={`${styles.ctaButton} ${styles.ctaLight}`}>
          <span>{t('cta.button')}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>
    </>
  )
}
