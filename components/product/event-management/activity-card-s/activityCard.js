import React from 'react'
import styles from './activityCard.module.scss'
import Image from 'next/image'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ActivityCard = () => {
  return (
    <main className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} mt-2`}>
          <div
            className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
          >
            <div className={styles.positionRelative}>
              <Image
                src="/homePage/fireball.png"
                alt="Description of the image"
                width={538}
                height={300}
              />
              <div className={styles.likeIcon}>
                <img src="/icon/like.png" alt="Like" />
              </div>
            </div>
            <div className={styles.cardBody}>
              <p className={`${styles.cardText} ${styles.noteText}`}>
                HYBS Live in Taipei
              </p>
              <p className={styles.cardText}>
                HYBS帶你穿越時光，踏上一場浪漫又復古的音樂之旅！
              </p>
              <div className={styles.footer}>
                <h2 className={`${styles.hCurrency} bold `}>$1,990</h2>
                <AiOutlineShoppingCart className={styles.shoppingCartIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ActivityCard
