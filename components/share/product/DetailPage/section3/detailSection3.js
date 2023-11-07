import React from 'react'
import styles from './detailSection3.module.scss'
import CustomSwiper from '../swiper/swiper'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
import CardComponent5 from '@/components/product/event-management/activity-CardComponent/eventCard-5/cards'
import CardComponent6 from '@/components/product/event-management/activity-CardComponent/eventCard-6/cards'

// 使用方法：
// <DetailSection3 title1="標題1" title2="標題2" />

const DetailSection3 = ({ title1 = '', title2 = '' }) => {
  const cards = [
    CardComponent,
    CardComponent2,
    CardComponent3,
    CardComponent4,
    CardComponent5,
    CardComponent6,
  ]

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

export default DetailSection3
