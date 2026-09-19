import React from 'react'
import { ArrowRight, Gift, Zap } from 'lucide-react'
import FollowEarnVisual from './FollowEarnVisual'
import { socialChannelsData } from '../../../data/socialChannelsData'
import styles from './FollowEarnBanner.module.css'

export default function FollowEarnBanner() {
  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{socialChannelsData.badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <FollowEarnVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <span>{socialChannelsData.badgeCategory}</span>
            <div className={styles.categoryLine}></div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleText}>
              <span className={styles.titleMain}>{socialChannelsData.titleMain} </span>
              <span className={styles.titleAccent}>{socialChannelsData.titleAccent}</span>
            </h2>
          </div>

          <p className={styles.descriptionText}>
            Follow <span className={styles.brandHighlight}>VELOOP</span> Rewards on our official channels and participate in eligible social campaigns to unlock rewards.
          </p>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span>{socialChannelsData.ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>

        <div className={styles.actionCardCol}>
          <div className={styles.rewardBox}>
            <div className={styles.rewardTopRow}>
              <div className={styles.giftIconBox}>
                <Gift size={24} className={styles.giftIcon} />
              </div>
              <p className={styles.rewardMessage}>
                Participate in eligible social campaigns and unlock <span className={styles.rewardsWord}>rewards.</span>
              </p>
            </div>

            <div className={styles.rewardDivider}></div>

            <div className={styles.rewardBottomRow}>
              <div className={styles.boltIconBox}>
                <Zap size={28} className={styles.boltIcon} />
              </div>
              <div className={styles.rewardAmountGroup}>
                <span className={styles.rewardAmount}>{socialChannelsData.rewardCard.amount}</span>
                <span className={styles.campaignSubtitle}>{socialChannelsData.rewardCard.campaignType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
