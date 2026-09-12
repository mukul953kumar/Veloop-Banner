import React, { useState } from 'react'
import { 
  MessageCircle, 
  ArrowRight, 
  User, 
  Mail, 
  Copy, 
  Check, 
  BookOpen, 
  Ticket, 
  ChevronRight 
} from 'lucide-react'
import ContactVisual from './ContactVisual'
import { contactData } from '../../../data/contactData'
import styles from './ContactBanner.module.css'

export default function ContactBanner() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contactData.supportCard.emailValue)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{contactData.badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <ContactVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <span>{contactData.badgeCategory}</span>
            <div className={styles.categoryLine}></div>
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleText}>
              <span className={styles.titleMain}>{contactData.titleMain} </span>
              <span className={styles.titleAccent}>{contactData.titleAccent}</span>
            </h2>
          </div>

          <div className={styles.descriptionGroup}>
            <p className={styles.descriptionText}>{contactData.descriptionLine1}</p>
            <p className={styles.descriptionText}>
              Get in touch with the <span className={styles.brandHighlight}>VELOP Rewards</span> team.
            </p>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span>{contactData.ctaText}</span>
              <span className={styles.ctaChatBubble}>
                <MessageCircle size={15} fill="currentColor" />
              </span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </div>
        </div>

        <div className={styles.actionCardCol}>
          <div className={styles.supportBox}>
            <div className={styles.supportHeaderPill}>
              <div className={styles.headerIconCircle}>
                <User size={15} className={styles.headerUserIcon} />
              </div>
              <span className={styles.headerTitle}>{contactData.supportCard.header}</span>
            </div>

            <div className={styles.emailSection}>
              <div className={styles.emailIconBox}>
                <Mail size={18} className={styles.emailMailIcon} />
              </div>
              <div className={styles.emailDetails}>
                <span className={styles.emailLabel}>{contactData.supportCard.emailLabel}</span>
                <span className={styles.emailAddress}>{contactData.supportCard.emailValue}</span>
              </div>
            </div>

            <button 
              className={styles.copyButton} 
              type="button"
              onClick={handleCopyEmail}
            >
              <div className={styles.copyLeft}>
                <Copy size={16} className={styles.copyIcon} />
                <span>{copied ? 'Copied to Clipboard!' : contactData.supportCard.copyButtonText}</span>
              </div>
              <div className={styles.copyRight}>
                {copied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={15} />}
                <ChevronRight size={16} className={styles.copyChevron} />
              </div>
            </button>

            <div className={styles.quickLinks}>
              <button className={styles.quickLinkItem} type="button">
                <div className={styles.quickLinkLeft}>
                  <div className={styles.quickLinkIconCyan}>
                    <BookOpen size={16} />
                  </div>
                  <span>{contactData.supportCard.links[0].label}</span>
                </div>
                <ChevronRight size={16} className={styles.linkChevron} />
              </button>

              <button className={styles.quickLinkItem} type="button">
                <div className={styles.quickLinkLeft}>
                  <div className={styles.quickLinkIconPurple}>
                    <Ticket size={16} />
                  </div>
                  <span>{contactData.supportCard.links[1].label}</span>
                </div>
                <ChevronRight size={16} className={styles.linkChevron} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
