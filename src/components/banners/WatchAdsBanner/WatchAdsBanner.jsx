import { Play, Shield, Zap, ArrowRight } from 'lucide-react'
import WatchAdsVisual from './WatchAdsVisual'
import { adsData } from '../../../data/adsData'
import styles from './WatchAdsBanner.module.css'

const FEATURE_ICONS = {
  shield: Shield,
  zap: Zap
}

export default function WatchAdsBanner() {
  const { badgeNumber, badgeText, titleLight, titleAccent, description, features, ctaText } = adsData

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.visualCol}>
          <WatchAdsVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeRow}>
            <div className={styles.cornerBadge}>
              <span>{badgeNumber}</span>
            </div>
            <div className={styles.stageBadge}>
              <Play size={13} className={styles.playBadgeIcon} fill="#38bdf8" />
              <span>{badgeText}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{titleLight}</h2>
            <h2 className={styles.titleLineTwo}>{titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>{description}</p>

          <div className={styles.featuresRow}>
            {features.map((feature) => {
              const Icon = FEATURE_ICONS[feature.icon] || Shield
              return (
                <div key={feature.id} className={styles.featurePill}>
                  <Icon size={16} className={styles.featureIcon} />
                  <span>{feature.text}</span>
                </div>
              )
            })}
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span className={styles.playCircle}>
                <Play size={14} className={styles.btnPlayIcon} fill="#2563eb" />
              </span>
              <span>{ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
