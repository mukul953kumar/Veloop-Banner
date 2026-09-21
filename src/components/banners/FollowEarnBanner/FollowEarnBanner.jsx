import { useState } from 'react'
import { ArrowRight, Gift, Zap, Check, ExternalLink, Share2, Bell } from 'lucide-react'
import { FaXTwitter, FaYoutube, FaInstagram, FaTelegram } from 'react-icons/fa6'
import FollowEarnVisual from './FollowEarnVisual'
import { socialChannelsData } from '../../../data/socialChannelsData'
import styles from './FollowEarnBanner.module.css'

const CHANNEL_ICONS = {
  x: FaXTwitter,
  youtube: FaYoutube,
  instagram: FaInstagram,
  telegram: FaTelegram
}

export default function FollowEarnBanner() {
  const { badgeNumber, badgeCategory, titleMain, titleAccent, ctaText, campaignTier, channels, rewardCard } = socialChannelsData

  const [followedChannels, setFollowedChannels] = useState({
    x: true,
    youtube: true,
    instagram: false,
    telegram: false
  })

  const toggleFollow = (channelId) => {
    setFollowedChannels((prev) => ({
      ...prev,
      [channelId]: !prev[channelId]
    }))
  }

  const followedCount = Object.values(followedChannels).filter(Boolean).length

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <FollowEarnVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <div className={styles.categoryPill}>
              <Share2 size={13} className={styles.categoryIcon} />
              <span>{badgeCategory}</span>
            </div>
            <div className={styles.tierPill}>
              <span>{campaignTier}</span>
            </div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleText}>
              <span className={styles.titleMain}>{titleMain} </span>
              <span className={styles.titleAccent}>{titleAccent}</span>
            </h2>
          </div>

          <p className={styles.descriptionText}>
            Follow <span className={styles.brandHighlight}>VELOOP</span> Rewards on our official channels and participate in eligible social campaigns to unlock rewards.
          </p>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span className={styles.btnBellCircle}>
                <Bell size={14} className={styles.btnBellIcon} />
              </span>
              <span>{ctaText}</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>

        <div className={styles.actionCardCol}>
          <div className={styles.rewardBox}>
            <div className={styles.rewardHeader}>
              <div className={styles.giftIconBox}>
                <Gift size={18} className={styles.giftIcon} />
              </div>
              <div className={styles.rewardHeaderTitleGroup}>
                <span className={styles.rewardHeaderTitle}>SOCIAL CHANNELS</span>
                <span className={styles.rewardFollowedStatus}>
                  <strong>{followedCount}</strong> / {channels.length} Channels Connected
                </span>
              </div>
            </div>

            <div className={styles.rewardDivider} />

            <div className={styles.channelsList}>
              {channels.map((channel) => {
                const IconComponent = CHANNEL_ICONS[channel.icon] || Share2
                const isFollowed = !!followedChannels[channel.id]

                return (
                  <button
                    key={channel.id}
                    type="button"
                    className={`${styles.channelItem} ${isFollowed ? styles.channelItemFollowed : ''}`}
                    onClick={() => toggleFollow(channel.id)}
                  >
                    <div className={styles.channelLeft}>
                      <div className={styles.channelIconBox}>
                        <IconComponent size={13} />
                      </div>
                      <div className={styles.channelDetails}>
                        <span className={styles.channelName}>{channel.name}</span>
                        <span className={styles.channelHandle}>{channel.handle}</span>
                      </div>
                    </div>

                    <div className={styles.channelRight}>
                      <span className={styles.channelRewardTag}>{channel.reward}</span>
                      <div className={`${styles.followStatusBtn} ${isFollowed ? styles.statusBtnFollowing : ''}`}>
                        {isFollowed ? <Check size={13} /> : <ExternalLink size={12} />}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className={styles.rewardBottomRow}>
              <div className={styles.boltIconBox}>
                <Zap size={22} className={styles.boltIcon} />
              </div>
              <div className={styles.rewardAmountGroup}>
                <span className={styles.rewardAmount}>{rewardCard.amount}</span>
                <span className={styles.campaignSubtitle}>{rewardCard.campaignType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
