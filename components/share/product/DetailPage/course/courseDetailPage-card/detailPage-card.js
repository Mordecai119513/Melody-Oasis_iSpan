import React from 'react'
import PropTypes from 'prop-types'
import styles from './detailPage-card.module.scss'
import EventCardButton from '@/components/share/product/DetailPage/detailPage-button/detailPage-button'

// 使用範例:
// <EventCardComponent
//   currency="Coldplay： Music Of The Spheres World Tour - delivered by DHL 酷玩樂團2023高雄演唱會"
//   cardTextOne="時間: 2023-11-11"
//   cardTextTwo="活動地點: 高雄國家體育場 (世運主場館)"
//   priceText="$1,990"
// />

const DetailCard = ({ currency, cardTextOne, cardTextTwo, priceText }) => {
  return (
    <div className={styles.card}>
      <main className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} mt-2`}>
            <div
              className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
            >
              <div className={styles.positionRelative}></div>
              <div className={styles.cardBody}>
                <h2 className={`${styles.currency} bold`}>{currency}</h2>
                <p className={styles.cardTextOne}>{cardTextOne}</p>
                <p className={styles.cardTextTwo}>{cardTextTwo}</p>
                <h2 className={`${styles.priceText} bold`}>{priceText}</h2>
              </div>
              <div className={styles.footer}>
                <EventCardButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

DetailCard.propTypes = {
  currency: PropTypes.string.isRequired,
  cardTextOne: PropTypes.string.isRequired,
  cardTextTwo: PropTypes.string.isRequired,
  priceText: PropTypes.string.isRequired,
}

export default DetailCard
