import React from 'react'
import { Play, Shield, Zap, ArrowRight } from 'lucide-react'
import WatchAdsVisual from './WatchAdsVisual'
import { adsData } from '../../../data/adsData'
import styles from './WatchAdsBanner.module.css'

export default function WatchAdsBanner() {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.visualCol}>
          <WatchAdsVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeRow}>
            <div className={styles.cornerBadge}>
              <span>{adsData.badgeNumber}</span>
            </div>
            <div className={styles.stageBadge}>
              <Play size={13} className={styles.playBadgeIcon} fill="#38bdf8" />
              <span>{adsData.badgeText}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{adsData.titleLight}</h2>
            <h2 className={styles.titleLineTwo}>{adsData.titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>
            {adsData.description}
          </p>

          <div className={styles.featuresRow}>
            <div className={styles.featurePill}>
              <Shield size={16} className={styles.featureIcon} />
              <span>{adsData.features[0].text}</span>
            </div>
            <div className={styles.featurePill}>
              <Zap size={16} className={styles.featureIcon} />
              <span>{adsData.features[1].text}</span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span className={styles.playCircle}>
                <Play size={14} className={styles.btnPlayIcon} fill="#2563eb" />
              </span>
              <span>{adsData.ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
