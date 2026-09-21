import { Sparkles, Users, CheckCircle } from 'lucide-react'
import componentImg from '../../../assets/illustrations/follow-earn/followearncomponent.webp'
import styles from './FollowEarnBanner.module.css'

export default function FollowEarnVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Official VELOOP Rewards Social Profile and Floating Reactions"
          className={styles.visualImage}
          loading="eager"
          decoding="sync"
        />

        <div className={styles.visualPurpleAura} />

        <div className={styles.floatingSocialTagTop}>
          <CheckCircle size={14} className={styles.verifiedIcon} />
          <span>Official Verified Profile</span>
        </div>

        <div className={styles.floatingSocialTagBottom}>
          <Users size={14} className={styles.membersIcon} />
          <span>24.5K Community</span>
        </div>
      </div>
    </div>
  )
}
