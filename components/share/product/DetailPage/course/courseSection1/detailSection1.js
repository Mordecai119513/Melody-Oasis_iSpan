import React from 'react'
import styles from './detailSection1.module.scss'
import Breadcrumb from '@/components/share/breadcrumb'
import DetailCard from '../courseDetailPage-card/detailPage-card'

const DetailSection1 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.imageBlock}>
          <img
            src="/homePage/fireball.png"
            alt="TopImg"
            className={styles.imageContainer}
          />
        </div>
        <div className={styles.cardContainer}>
          <DetailCard
            currency="馬叔叔的吉他課"
            cardTextOne="課程時長:5時30分鐘"
            cardTextTwo="單元數:20單元"
            cardTextThree="不限觀看次數"
            priceText="$600"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailSection1
