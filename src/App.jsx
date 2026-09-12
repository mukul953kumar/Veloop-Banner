import LeaderboardBanner from './components/banners/LeaderboardBanner/LeaderboardBanner'
import WatchAdsBanner from './components/banners/WatchAdsBanner/WatchAdsBanner'
import ContactBanner from './components/banners/ContactBanner/ContactBanner'
import FollowEarnBanner from './components/banners/FollowEarnBanner/FollowEarnBanner'
import DailyBonusBanner from './components/banners/DailyBonusBanner/DailyBonusBanner'
import Footer from './components/common/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.appContainer}>
      <main className={styles.mainContent}>
        <LeaderboardBanner />
        <WatchAdsBanner />
        <ContactBanner />
        <FollowEarnBanner />
        <DailyBonusBanner />
        <Footer />
      </main>
    </div>
  )
}

export default App
