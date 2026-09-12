import React from 'react'
import componentImg from '../../../assets/illustrations/contact/contactcomponent.png'
import styles from './ContactBanner.module.css'

export default function ContactVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.visualStage}>
        <img
          src={componentImg}
          alt="Friendly VELOOP Customer Support Representative"
          className={styles.visualImage}
        />
      </div>
    </div>
  )
}
