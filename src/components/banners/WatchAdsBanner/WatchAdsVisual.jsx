import componentImg from '../../../assets/illustrations/watch-ads/watchadcomponent.webp'
import styles from './WatchAdsBanner.module.css'

export default function WatchAdsVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Watch Ads and Earn VEs Illustration"
          className={styles.visualImage}
          loading="eager"
          decoding="sync"
        />
      </div>
    </div>
  )
}
