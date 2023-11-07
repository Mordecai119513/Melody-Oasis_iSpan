import React from 'react'
import styles from './detailPage-button.module.scss'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { Button } from 'rsuite'

const EventCardButton = () => {
  return (
    <div className={styles.detailPageButton}>
      <div className={styles.buttonContainer}>
        <Button className={styles.button}>
          加入購物車
          {/* <AiOutlineShoppingCart className={styles.shoppingCartIcon} /> */}
        </Button>
        <Button className={styles.button}>
          加入我的最愛
          {/* <AiOutlineHeart className={styles.AiOutlineHeart} /> */}
        </Button>
      </div>
    </div>
  )
}

export default EventCardButton
