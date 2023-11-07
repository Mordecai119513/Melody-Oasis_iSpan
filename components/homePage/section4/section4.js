// section4.js
import React from 'react'
import styles from './section4.module.scss'
import HomeCourseCard from '../home-course-card/HomeCourseCard/course'
import HomeCourseCard2 from '../home-course-card/HomeCourseCard2/course2'
import HomeCourseCard3 from '../home-course-card/HomeCourseCard3/course3'
import HomeCourseCard4 from '../home-course-card/HomeCourseCard4/course4'
import { Button } from 'rsuite'
import Link from 'next/link'

export default function Section4() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.section4Container}>
        <div className={styles.section4Content}>
          <p className={styles.section4Text}>音樂課程</p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardRow}>
            <Link
              href="http://localhost:3000/product/course/1"
              style={{ textDecoration: 'none' }}
            >
              <HomeCourseCard />
            </Link>
          </div>
          <div className={styles.cardRow}>
            <Link
              href="http://localhost:3000/product/course/2"
              style={{ textDecoration: 'none' }}
            >
              <HomeCourseCard2 />
            </Link>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardRow}>
            <Link
              href="http://localhost:3000/product/course/5"
              style={{ textDecoration: 'none' }}
            >
              <HomeCourseCard3 />
            </Link>
          </div>
          <div className={styles.cardRow}>
            <Link
              href="http://localhost:3000/product/course/9"
              style={{ textDecoration: 'none' }}
            >
              <HomeCourseCard4 />
            </Link>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>
            {' '}
            <Link
              href="/product/course"
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
