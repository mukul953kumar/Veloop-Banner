import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './styles/global.css'
import App from './App.jsx'

// Preload all banner illustrations immediately into browser cache
import leaderboardImg from './assets/illustrations/leaderboard/leaderboardcomponent.webp'
import watchAdImg from './assets/illustrations/watch-ads/watchadcomponent.webp'
import contactImg from './assets/illustrations/contact/contactcomponent.webp'
import followEarnImg from './assets/illustrations/follow-earn/followearncomponent.webp'
import dailyBonusImg from './assets/illustrations/daily-bonus/dailybonuscomponent.webp'

if (typeof window !== 'undefined') {
  [leaderboardImg, watchAdImg, contactImg, followEarnImg, dailyBonusImg].forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

