import { Crown, Trophy, ArrowRight } from 'lucide-react'
import LeaderboardVisual from './LeaderboardVisual'
import { leaderboardData } from '../../../data/leaderboardData'
import styles from './LeaderboardBanner.module.css'

export default function LeaderboardBanner() {
  const { stageNumber, stage, titleLight, titleAccent, description, poolAmount, ctaText, topUsers } = leaderboardData

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.visualCol}>
          <LeaderboardVisual users={topUsers} />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeRow}>
            <div className={styles.cornerBadge}>
              <Crown size={15} className={styles.crownIcon} />
              <span>{stageNumber}</span>
            </div>
            <div className={styles.stageBadge}>
              <Trophy size={14} className={styles.trophyIcon} />
              <span>{stage}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{titleLight}</h2>
            <h2 className={styles.titleLineTwo}>{titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>{description}</p>

          <div className={styles.poolPill}>
            <Trophy size={16} className={styles.poolIcon} />
            <span className={styles.poolLabel}>Current pool:</span>
            <strong className={styles.poolHighlight}>{poolAmount}</strong>
            <span className={styles.poolLabel}>in prizes</span>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span>{ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

