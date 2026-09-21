import { useState } from 'react'
import { Crown, Gift, ArrowRight, Flame, Check, Sparkles, CheckCircle2, Clock } from 'lucide-react'
import DailyBonusVisual from './DailyBonusVisual'
import { dailyBonusData } from '../../../data/dailyBonusData'
import styles from './DailyBonusBanner.module.css'

export default function DailyBonusBanner() {
  const [isClaimed, setIsClaimed] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const { badgeNumber, badgeCategory, titleMain, titleAccent, descriptionText, ctaText, streakCard } = dailyBonusData

  const streakDays = isClaimed
    ? streakCard.days.map((day) => ({ ...day, completed: true }))
    : streakCard.days

  const completedCount = isClaimed ? 7 : streakCard.completedDays

  const handleClaim = () => {
    if (isClaimed) return
    setIsClaimed(true)
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 3000)
  }

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <DailyBonusVisual isClaimed={isClaimed} />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <div className={styles.categoryPill}>
              <Crown size={15} className={styles.crownIcon} />
              <span>{badgeCategory}</span>
            </div>
            <div className={styles.multiplierPill}>
              <Flame size={13} className={styles.multiplierFlame} />
              <span>2.5x Boost</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{titleMain}</h2>
            <h2 className={styles.titleLineTwo}>{titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>{descriptionText}</p>

          <div className={styles.actionRow}>
            <button
              className={`${styles.ctaButton} ${isClaimed ? styles.ctaButtonClaimed : ''}`}
              type="button"
              onClick={handleClaim}
            >
              {isClaimed ? (
                <>
                  <CheckCircle2 size={20} className={styles.btnGiftIcon} />
                  <span>Bonus Claimed!</span>
                  <span className={styles.btnArrowCircleClaimed}>
                    <Sparkles size={16} className={styles.ctaSparkle} />
                  </span>
                </>
              ) : (
                <>
                  <Gift size={20} className={styles.btnGiftIcon} />
                  <span>{ctaText}</span>
                  <span className={styles.btnArrowCircle}>
                    <ArrowRight size={16} className={styles.ctaArrow} />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className={styles.actionCardCol}>
          <div className={`${styles.streakBox} ${showCelebration ? styles.streakBoxCelebrate : ''}`}>
            <div className={styles.streakHeader}>
              <div className={styles.flameIconBox}>
                <Flame size={18} className={styles.flameIcon} />
              </div>
              <div className={styles.streakTitleGroup}>
                <span className={styles.streakTitle}>{streakCard.title}</span>
                <span className={styles.streakMultiplierText}>{streakCard.multiplier}</span>
              </div>
            </div>

            <div className={styles.streakDivider} />

            <div className={styles.streakDaysRow}>
              {streakDays.map((item) => (
                <div 
                  key={item.day} 
                  className={`${styles.streakDayItem} ${item.isJackpot && !item.completed ? styles.jackpotPendingItem : ''}`}
                >
                  <span className={styles.dayLabel}>D{item.day}</span>
                  {item.completed ? (
                    <div className={`${styles.dayCheckedCircle} ${item.isJackpot ? styles.dayJackpotChecked : ''}`}>
                      <Check size={13} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className={`${styles.dayPendingCircle} ${item.isJackpot ? styles.dayJackpotPending : ''}`}>
                      {item.isJackpot ? <Gift size={13} className={styles.jackpotGiftIcon} /> : <span>{item.day}</span>}
                    </div>
                  )}
                  <span className={`${styles.dayRewardAmount} ${item.isJackpot ? styles.jackpotRewardText : ''}`}>
                    {item.reward}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.streakSummary}>
              <div className={styles.completedText}>
                <span className={styles.completedNumber}>{completedCount}</span> / 7 Days Completed
              </div>
              <div className={styles.statusRow}>
                {isClaimed ? (
                  <div className={styles.resetTimerBox}>
                    <Clock size={13} className={styles.clockIcon} />
                    <span>Next bonus available in 18h 42m</span>
                  </div>
                ) : (
                  <span className={styles.statusSubtitle}>{streakCard.statusSubtitle}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
