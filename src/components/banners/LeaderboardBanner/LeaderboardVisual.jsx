import React from 'react'
import componentImg from '../../../assets/illustrations/leaderboard/leaderboardcomponent.webp'
import styles from './LeaderboardBanner.module.css'

export default function LeaderboardVisual({ users = [] }) {
  const user1 = users.find(u => u.rank === '01') || { rank: '01', name: 'User A', score: '12,450 VEs' }
  const user2 = users.find(u => u.rank === '02') || { rank: '02', name: 'User B', score: '11,820 VEs' }
  const user3 = users.find(u => u.rank === '03') || { rank: '03', name: 'User C', score: '10,970 VEs' }

  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Leaderboard Podium"
          className={styles.visualImage}
          fetchPriority="high"
          decoding="async"
        />

        <div className={styles.slotCenterCircle}>
          <span className={styles.rankCenterText}>{user1.rank}</span>
        </div>
        <div className={styles.slotCenterBox}>
          <div className={styles.userName}>{user1.name}</div>
          <div className={styles.userScoreGold}>{user1.score}</div>
        </div>

        <div className={styles.slotLeftCircle}>
          <span className={styles.rankLeftText}>{user2.rank}</span>
        </div>
        <div className={styles.slotLeftBox}>
          <div className={styles.userName}>{user2.name}</div>
          <div className={styles.userScoreBlue}>{user2.score}</div>
        </div>

        <div className={styles.slotRightCircle}>
          <span className={styles.rankRightText}>{user3.rank}</span>
        </div>
        <div className={styles.slotRightBox}>
          <div className={styles.userName}>{user3.name}</div>
          <div className={styles.userScorePurple}>{user3.score}</div>
        </div>
      </div>
    </div>
  )
}
