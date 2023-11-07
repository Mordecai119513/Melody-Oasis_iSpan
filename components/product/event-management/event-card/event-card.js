import React from 'react'
import styles from './event-card.module.scss'
import EventCardButton from '@/components/share/product/DetailPage/detailPage-button/detailPage-button'

const EventCardComponent = () => {
  return (
    <div className={styles.cardSize}>
      <main className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} mt-2`}>
            <div
              className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
            >
              <div className={styles.positionRelative}></div>
              <div className={styles.cardBody}>
                <h2 className={`${styles.currency} bold `}>
                  Coldplay： Music Of The Spheres World Tour - delivered by DHL
                  酷玩樂團2023高雄演唱會
                </h2>
                <p className={styles.cardTextOne}>時間: 2023-11-11</p>
                <p className={styles.cardTextTwo}>
                  活動地點: 高雄國家體育場 (世運主場館)
                </p>
                <h2 className={`${styles.priceText} bold `}>$1,990</h2>
                <div className={styles.footer}>
                  <EventCardButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EventCardComponent
