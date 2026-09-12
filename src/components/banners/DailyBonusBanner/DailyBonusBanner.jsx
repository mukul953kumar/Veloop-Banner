import React, { useState } from 'react'
import { Crown, Gift, ArrowRight, Flame, Check, Sparkles, CheckCircle2 } from 'lucide-react'
import DailyBonusVisual from './DailyBonusVisual'
import { dailyBonusData } from '../../../data/dailyBonusData'
import styles from './DailyBonusBanner.module.css'

export default function DailyBonusBanner() {
  const [isClaimed, setIsClaimed] = useState(false)

  const handleClaim = () => {
    setIsClaimed(true)
  }

  const streakDays = isClaimed
    ? dailyBonusData.streakCard.days.map((d) => ({ ...d, completed: true }))
    : dailyBonusData.streakCard.days

  const completedCount = isClaimed ? 7 : dailyBonusData.streakCard.completedDays

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{dailyBonusData.badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <DailyBonusVisual isClaimed={isClaimed} />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <div className={styles.categoryPill}>
              <Crown size={15} className={styles.crownIcon} />
              <span>{dailyBonusData.badgeCategory}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleLineOne}>{dailyBonusData.titleMain}</h2>
            <h2 className={styles.titleLineTwo}>{dailyBonusData.titleAccent}</h2>
          </div>

          <p className={styles.descriptionText}>
            {dailyBonusData.descriptionText}
          </p>

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
                  <span className={styles.btnArrowCircle}>
                    <Sparkles size={16} className={styles.ctaArrow} />
                  </span>
                </>
              ) : (
                <>
                  <Gift size={20} className={styles.btnGiftIcon} />
                  <span>{dailyBonusData.ctaText}</span>
                  <span className={styles.btnArrowCircle}>
                    <ArrowRight size={16} className={styles.ctaArrow} />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className={styles.actionCardCol}>
          <div className={styles.streakBox}>
            <div className={styles.streakHeader}>
              <div className={styles.flameIconBox}>
                <Flame size={18} className={styles.flameIcon} />
              </div>
              <span className={styles.streakTitle}>{dailyBonusData.streakCard.title}</span>
            </div>

            <div className={styles.streakDivider}></div>

            <div className={styles.streakDaysRow}>
              {streakDays.map((item) => (
                <div key={item.day} className={styles.streakDayItem}>
                  <span className={styles.dayLabel}>{item.day}</span>
                  {item.completed ? (
                    <div className={styles.dayCheckedCircle}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className={styles.dayPendingCircle}>
                      <span>{item.day}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.streakSummary}>
              <div className={styles.completedText}>
                <span className={styles.completedNumber}>{completedCount}</span> {isClaimed ? 'Days Completed!' : 'Days Completed'}
              </div>
              <span className={styles.statusSubtitle}>
                {isClaimed ? 'All daily rewards unlocked!' : dailyBonusData.streakCard.statusSubtitle}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
