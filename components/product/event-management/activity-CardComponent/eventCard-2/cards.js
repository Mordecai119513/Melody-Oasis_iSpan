import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'

const CardComponent2 = ({ hideFeatures = false }) => {
  return (
    <main className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} mt-2`}>
          <div
            className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
          >
            <div className={styles.positionRelative}>
              <Image
                src="/product/event-management/eventBanner/anpu.png"
                alt="Description of the image"
                width={538}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>
                Taipei "An Pu. Time to Sleep" Tour
              </p>
              <p className={styles.cardText}>
                Time is the love of my life, and many years have passed...
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

export default CardComponent2
