import { useState, useRef, useEffect } from 'react'
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

const LINK_ICONS = {
  book: { Icon: BookOpen, className: styles.quickLinkIconCyan },
  ticket: { Icon: Ticket, className: styles.quickLinkIconPurple }
}

export default function ContactBanner() {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  const { badgeNumber, badgeCategory, titleMain, titleAccent, descriptionLine1, ctaText, supportCard } = contactData

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(supportCard.emailValue)
        setCopied(true)
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // Clipboard write failed silently
    }
  }

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerCard}>
        <div className={styles.cornerBadge}>
          <span>{badgeNumber}</span>
        </div>

        <div className={styles.visualCol}>
          <ContactVisual />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.badgeCategory}>
            <span>{badgeCategory}</span>
            <div className={styles.categoryLine} />
          </div>

          <div className={styles.headerGroup}>
            <h2 className={styles.titleText}>
              <span className={styles.titleMain}>{titleMain} </span>
              <span className={styles.titleAccent}>{titleAccent}</span>
            </h2>
          </div>

          <div className={styles.descriptionGroup}>
            <p className={styles.descriptionText}>{descriptionLine1}</p>
            <p className={styles.descriptionText}>
              Get in touch with the <span className={styles.brandHighlight}>VELOOP Rewards</span> team.
            </p>
          </div>

          <div className={styles.actionRow}>
            <button className={styles.ctaButton} type="button">
              <span>{ctaText}</span>
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
              <span className={styles.headerTitle}>{supportCard.header}</span>
            </div>

            <div className={styles.emailSection}>
              <div className={styles.emailIconBox}>
                <Mail size={18} className={styles.emailMailIcon} />
              </div>
              <div className={styles.emailDetails}>
                <span className={styles.emailLabel}>{supportCard.emailLabel}</span>
                <span className={styles.emailAddress}>{supportCard.emailValue}</span>
              </div>
            </div>

            <button 
              className={styles.copyButton} 
              type="button"
              onClick={handleCopyEmail}
            >
              <div className={styles.copyLeft}>
                <Copy size={16} className={styles.copyIcon} />
                <span>{copied ? 'Copied to Clipboard!' : supportCard.copyButtonText}</span>
              </div>
              <div className={styles.copyRight}>
                {copied ? <Check size={16} className={styles.checkIcon} /> : <Copy size={15} />}
                <ChevronRight size={16} className={styles.copyChevron} />
              </div>
            </button>

            <div className={styles.quickLinks}>
              {supportCard.links.map((link) => {
                const config = LINK_ICONS[link.type] || { Icon: BookOpen, className: styles.quickLinkIconCyan }
                const { Icon, className } = config
                return (
                  <button key={link.id} className={styles.quickLinkItem} type="button">
                    <div className={styles.quickLinkLeft}>
                      <div className={className}>
                        <Icon size={16} />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight size={16} className={styles.linkChevron} />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

