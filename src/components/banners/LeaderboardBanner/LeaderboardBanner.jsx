import React from 'react'
import { Crown, Trophy, ArrowRight } from 'lucide-react'
import LeaderboardVisual from './LeaderboardVisual'
import { leaderboardData } from '../../../data/leaderboardData'
import styles from './LeaderboardBanner.module.css'

export default function LeaderboardBanner() {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.visualCol}>
          <LeaderboardVisual users={leaderboardData.topUsers} />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeRow}>
            <div className={styles.cornerBadge}>
              <Crown size={15} className={styles.crownIcon} />
              <span>{leaderboardData.stageNumber}</span>
            </div>
            <div className={styles.stageBadge}>
              <Trophy size={14} className={styles.trophyIcon} />
              <span>{leaderboardData.stage}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{leaderboardData.titleLight}</h2>
            <h2 className={styles.titleLineTwo}>{leaderboardData.titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>
            {leaderboardData.description}
          </p>

          <div className={styles.poolPill}>
            <Trophy size={16} className={styles.poolIcon} />
            <span className={styles.poolLabel}>Current pool:</span>
            <strong className={styles.poolHighlight}>{leaderboardData.poolAmount}</strong>
            <span className={styles.poolLabel}>in prizes</span>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span>{leaderboardData.ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
