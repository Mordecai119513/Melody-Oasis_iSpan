// section5.js
import React from 'react'
import styles from './section5.module.scss'
import VerticalTabs from '@/components/homePage/Tabs/tabs'

export default function Section5() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.section5Container}>
        <div className={styles.section5Content}>
          <p className={styles.section5Text}>推薦專輯</p>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.cardContainer}></div>
          <VerticalTabs />
        </div>
      </div>
    </div>
  )
}
