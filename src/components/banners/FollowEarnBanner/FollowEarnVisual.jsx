import React from 'react'
import componentImg from '../../../assets/illustrations/follow-earn/followearncomponent.png'
import styles from './FollowEarnBanner.module.css'

export default function FollowEarnVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Official VELOOP Rewards Social Profile and Floating Reactions"
          className={styles.visualImage}
        />
      </div>
    </div>
  )
}
