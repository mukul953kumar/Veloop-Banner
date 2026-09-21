export const dailyBonusData = {
  badgeNumber: "5",
  badgeCategory: "DAILY BONUS",
  titleMain: "Your Daily Bonus",
  titleAccent: "Is Waiting",
  descriptionText: "Check in regularly and claim your available daily bonus before the opportunity resets.",
  ctaText: "Claim Bonus",
  todayBonus: {
    label: "TODAY'S BONUS",
    amount: "+25",
    unit: "GEMS",
    xpBonus: "+150 XP",
    statusText: "Available Now"
  },
  streakCard: {
    title: "7-DAY STREAK",
    completedDays: 6,
    totalDays: 7,
    multiplier: "2.5x Streak Boost Active",
    statusSubtitle: "Claim today's reward to finish the streak!",
    days: [
      { day: 1, reward: "+10", completed: true, isJackpot: false },
      { day: 2, reward: "+15", completed: true, isJackpot: false },
      { day: 3, reward: "+20", completed: true, isJackpot: false },
      { day: 4, reward: "+25", completed: true, isJackpot: false },
      { day: 5, reward: "+30", completed: true, isJackpot: false },
      { day: 6, reward: "+40", completed: true, isJackpot: false },
      { day: 7, reward: "+100", completed: false, isJackpot: true }
    ]
  }
}
