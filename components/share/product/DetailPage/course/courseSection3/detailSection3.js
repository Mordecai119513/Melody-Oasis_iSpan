import React from 'react'
import styles from './detailSection3.module.scss'
import CustomSwiper from '../../swiper/swiper'
import Card from '@/components/product/course/course-card/course'

// 使用方法：
// <DetailSection3 title1="標題1" title2="標題2" />

const CourseDetailSection3 = ({ title1 = '', title2 = '' }) => {
  const cards = [Card, Card, Card, Card]

  return (
    <div className={styles.pageContainer2}>
      <div className={styles.section2}>
        <div className={styles.blockMask2}>
          <div className={styles.pidBody}>
            <div className={styles.headerStyle}>
              <p className={styles.titleintroduce}>{title1}</p>
            </div>
            <CustomSwiper cards={cards} slidesPerView={'2'} />
          </div>

          <div className={styles.pidBody}>
            <div className={styles.headerStyle}>
              <p className={styles.titleintroduce}>{title2}</p>
            </div>
            <CustomSwiper cards={cards} slidesPerView={'2'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailSection3
