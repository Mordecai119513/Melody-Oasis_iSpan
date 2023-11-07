// section2.js
import React from 'react'
import styles from './section2.module.scss'
import AlbumSwiper from '../albumSwiper/albumSwiper'
import { Button } from 'rsuite'
import Link from 'next/link'

export default function Section2() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.section2Container}>
        <div className={styles.section2Content}>
          <h1 className={styles.section2Text}>總排行榜</h1>
        </div>
        <div className={styles.cardWrapperContainer}>
          <AlbumSwiper />
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>
            {' '}
            <Link
              href="/ranking"
              className="more"
              style={{ textDecoration: 'none' }}
            >
              更多
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
