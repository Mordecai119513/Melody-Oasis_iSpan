import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const CardComponent3 = ({ hideFeatures = false }) => {
  return (
    <main className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} mt-2`}>
          <div
            className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
          >
            <div className={styles.positionRelative}>
              <Image
                src="/product/event-management/eventBanner/coldplay.jpeg"
                alt="Description of the image"
                width={538}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>
                Coldplay： Music Of The Spheres World Tour
              </p>
              <p className={styles.cardText}>
                Coldplay： Music Of The Spheres World Tour - delive...
              </p>
              {/* {!hideFeatures && (
                <div className={styles.footer}>
                  <div className={styles.iconContainer}>
                    <AiOutlineHeart className={styles.likeIcon} />
                    <span>加入收藏</span>
                  </div>
                  <div className={styles.iconContainer}>
                    <AiOutlineShoppingCart
                      className={styles.shoppingCartIcon}
                    />
                    <span>加入購物車</span>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardComponent3
