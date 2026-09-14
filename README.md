# VELOOP Rewards – Feature & Engagement Banners Redesign

A premium, interactive, and responsive frontend implementation of the five core engagement banners for the **VELOOP Rewards** platform. Built with modern web standards, gamified reward systems, and a high-end fintech aesthetic.

> **Live Demo:** [https://veloop-banner-one.vercel.app/](https://veloop-banner-one.vercel.app/)  
> **GitHub Repository:** [https://github.com/mukul953kumar/Veloop-Banner](https://github.com/mukul953kumar/Veloop-Banner)

## 🌟 Project Overview

This project delivers a complete redesign and redevelopment of five utility/engagement feature banners for **VELOOP Rewards (Task 06)**. Each banner functions as a focused mini-product experience that immediately communicates its value proposition, user benefits, reward mechanisms, and clear calls to action (CTA).

### Design Aesthetic & Theme
- **Theme:** Modern Fintech + Rewards Platform + Gamification + Premium SaaS.
- **App Body Background:** Strict adherence to `#161827`.
- **Card Tones:** Deep navy, obsidian, and obsidian-gold tones (`#06070d`, `#050814`, `#040d28`, `#050626`, `#06070a`).
- **Typography:** `Outfit` (Headings, Display, Numbers) and `Plus Jakarta Sans` (Body, UI labels, Metadata).
- **Color Accents:** Radiant Amber/Gold, Electric Cyan/Blue, Neon Magenta/Purple, Emerald Green.

---

## 🚀 Assigned Banners & Feature Specifications

### 1. Banner 01 – Leaderboard Banner
- **Purpose:** Highlights the competitive gamification experience and inspires users to climb ranks.
- **Headline:** `Climb the Leaderboard`
- **Visual Composition:** 3D Podium stage with Top 3 ranking slots (`#01 User A`, `#02 User B`, `#03 User C`), dynamic XP scores, and glowing ambient stage illumination.
- **Badge & Details:** Crown stage badge (`Stage 01`), prize pool indicator (`$10,000 in prizes`).
- **CTA:** `View Leaderboard →` with smooth hover slide interaction.

### 2. Banner 02 – Watch Ads & Earn Banner
- **Purpose:** Promotes video ad engagement and VE earnings.
- **Headline:** `Watch Ads. Earn VEs.`
- **Visual Composition:** 3D Video player interface with play triggers, floating VE reward coins, and glowing cyan bursts.
- **Badges & Highlights:** Category pill (`WATCH & EARN`), Multi-platform streaming pill, Instant VE reward indicators.
- **CTA:** `Watch & Earn →` with glowing pill transition.

### 3. Banner 03 – Contact Us Banner
- **Purpose:** Builds user trust and provides seamless, multi-channel customer support.
- **Headline:** `Need Help? We're Here.`
- **Visual Composition:** Friendly 3D customer support specialist with laptop, chat bubbles, and communication streams.
- **Interactive Action Card:**
  - Verified support header pill.
  - Interactive **One-Click Email Copy** button (`veloprewardsofficial@gmail.com`) with instant visual clipboard feedback.
  - Direct links to **Live Chat Support** and **Help Center FAQ**.
- **CTA:** `Contact Support →`.

### 4. Banner 04 – Follow & Earn Banner
- **Purpose:** Encourages social media community engagement and campaign rewards.
- **Headline:** `Follow & Earn`
- **Visual Composition:** Floating 3D smartphone displaying official VELOOP social channel badges (Instagram, YouTube, Telegram, X, Facebook, LinkedIn).
- **Reward Card:** Gift bonus counter with active campaign reward badges (`+500 SVEs`).
- **CTA:** `Follow & Earn →`.

### 5. Banner 05 – Daily Bonus Banner
- **Purpose:** Drives daily retention with recurring login bonus streaks.
- **Headline:** `Your Daily Bonus Is Waiting`
- **Visual Composition:** 3D glowing mystery gift box overflowing with golden VF coins and celebration confetti.
- **Floating Badge:** `TODAY'S BONUS: +25 GEMS` with live pulsing availability indicator.
- **Interactive 7-Day Streak Card:**
  - Flame streak header with 7 daily checkmark checkpoints (Days 1–6 checked, Day 7 milestone).
  - Interactive **Claim Bonus** trigger updating streak count, status, and celebratory visual state.
- **CTA:** `Claim Bonus →`.

---

## 🛠️ Technology Stack

- **Core Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling Architecture:** Pure CSS Modules (`.module.css`) with scoped classes and design tokens in `variables.css`.
- **CSS Framework:** Bootstrap 5 (grid and layout utilities).
- **Iconography:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/).
- **Fonts:** Google Fonts (`Outfit`, `Plus Jakarta Sans`).

---

## 📁 Project Directory Structure

```text
veloop-rewards/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── illustrations/
│   │       ├── leaderboard/
│   │       │   ├── leaderboardref.png
│   │       │   └── leaderboardcomponent.png
│   │       ├── watch-ads/
│   │       │   ├── watchadsref.png
│   │       │   └── watchadscomponent.png
│   │       ├── contact/
│   │       │   ├── contactref.png
│   │       │   └── contactcomponent.png
│   │       ├── follow-earn/
│   │       │   ├── followearnref.png
│   │       │   └── followearncomponent.png
│   │       └── daily-bonus/
│   │           ├── dailybonusref.png
│   │           └── dailybonuscomponent.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── Button/
│   │   │   └── Modal/
│   │   └── banners/
│   │       ├── LeaderboardBanner/
│   │       │   ├── LeaderboardBanner.jsx
│   │       │   ├── LeaderboardBanner.module.css
│   │       │   └── LeaderboardVisual.jsx
│   │       ├── WatchAdsBanner/
│   │       │   ├── WatchAdsBanner.jsx
│   │       │   ├── WatchAdsBanner.module.css
│   │       │   └── WatchAdsVisual.jsx
│   │       ├── ContactBanner/
│   │       │   ├── ContactBanner.jsx
│   │       │   ├── ContactBanner.module.css
│   │       │   └── ContactVisual.jsx
│   │       ├── FollowEarnBanner/
│   │       │   ├── FollowEarnBanner.jsx
│   │       │   ├── FollowEarnBanner.module.css
│   │       │   └── FollowEarnVisual.jsx
│   │       └── DailyBonusBanner/
│   │           ├── DailyBonusBanner.jsx
│   │           ├── DailyBonusBanner.module.css
│   │           └── DailyBonusVisual.jsx
│   ├── data/
│   │   ├── leaderboardData.js
│   │   ├── adsData.js
│   │   ├── contactData.js
│   │   ├── socialChannelsData.js
│   │   └── dailyBonusData.js
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx
│   ├── App.module.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📐 Responsive Standards & Height Ranges

Every banner strictly complies with the global specification guidelines:

| Screen Size | Breakpoint Range | Width | Height Constraint | Mobile Behavior |
| :--- | :--- | :--- | :--- | :--- |
| **Laptop / Desktop** | `≥ 1024px` | `100%` | `410px – 450px` (Fixed: 440px) | Full multi-column layout with right-aligned visual stage. |
| **Tablet** | `641px – 1023px` | `100%` | `380px – 540px` (Auto-expanding) | Two-column / stacked layout with full width visual at top. |
| **Mobile** | `≤ 640px` | `100%` | `330px – 520px` (Responsive dynamic) | Visual at the top (full edge-to-edge width), smooth bottom gradient fade, followed by content and action card. |

---

## ⚡ Interactive & Animation Matrix

| Component | Interaction Type | Behavior |
| :--- | :--- | :--- |
| **All Banner Cards** | `Hover Elevation` | Smooth border glow transition (`rgba`) and box shadow intensification. |
| **CTA Buttons** | `Hover & Active` | `-2px` translateY, radial drop shadow glow expansion, arrow translation. |
| **Contact Banner** | `Clipboard Copy` | One-click email copy with dynamic "Copied to Clipboard!" green checkmark state. |
| **Daily Bonus Banner** | `Reward Claim` | Interactive "Claim Bonus" button updates streak progression and activates claimed state. |
| **Support Links** | `Hover Slide` | Quick link cards shift `+2px` right with background highlight. |

---

## 💻 Installation & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/mukul953kumar/Veloop-Banner.git
cd Veloop-Banner
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
The application will be accessible locally at `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 🚀 Deployment

The project is fully optimized for static deployment on **Vercel**:
**Vercel Live link**: [https://veloop-banner-one.vercel.app/](https://veloop-banner-one.vercel.app/)
1. **Platform:** Vercel 
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Node Version:** `18.x` or `20.x`


---

## 👤 Author & Task Details

- **Assignment:** VELOOP Rewards – Task 06 (Rewards, Engagement Utility Banner/Card Redesign)
- **Framework:** React 19 + Vite
- **Repository:** [https://github.com/mukul953kumar/Veloop-Banner](https://github.com/mukul953kumar/Veloop-Banner)
- **Live Deployment:** [https://veloop-banner-one.vercel.app/](https://veloop-banner-one.vercel.app/)
