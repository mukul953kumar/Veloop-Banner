import { Gem } from 'lucide-react'
import componentImg from '../../../assets/illustrations/daily-bonus/dailybonuscomponent.webp'
import { dailyBonusData } from '../../../data/dailyBonusData'
import styles from './DailyBonusBanner.module.css'

export default function DailyBonusVisual({ isClaimed }) {
  const { todayBonus } = dailyBonusData

  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="3D Glowing Mystery Gift Box with Gold Coins"
          className={styles.visualImage}
          loading="eager"
          decoding="sync"
        />

        <div className={styles.todayBonusCard}>
          <div className={styles.todayHeader}>
            <Gem size={15} className={styles.gemIcon} />
            <span>{todayBonus.label}</span>
          </div>

          <div className={styles.todayAmountRow}>
            <span className={styles.todayAmountNumber}>+25</span>
            <span className={styles.todayAmountUnit}>GEMS</span>
          </div>

          <div className={styles.todayStatusRow}>
            <span className={styles.todayStatusText}>
              {isClaimed ? 'Claimed Today' : todayBonus.statusText}
            </span>
            <span className={isClaimed ? styles.statusDotClaimed : styles.statusDot} />
          </div>
        </div>
      </div>
    </div>
  )
}

