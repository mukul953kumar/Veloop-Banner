import React from 'react'
import componentImg from '../../../assets/illustrations/contact/contactcomponent.webp'
import styles from './ContactBanner.module.css'

export default function ContactVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Friendly VELOOP Customer Support Representative"
          className={styles.visualImage}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
