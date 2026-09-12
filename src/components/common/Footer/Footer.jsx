import React from 'react'
import { Info } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.noticeCol}>
          <Info size={16} className={styles.infoIcon} />
          <p className={styles.noticeText}>
            <strong>Demo / Placeholder Notice:</strong> Ranking, reward, and streak values are development placeholders for presentation purposes only and may change in the final product.
          </p>
        </div>

        <div className={styles.brandCol}>
          <span className={styles.brandText}>VELOOP REWARDS</span>
        </div>
      </div>
    </footer>
  )
}
