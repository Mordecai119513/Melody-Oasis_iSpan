import React from 'react'
import styles from './card.module.scss'
import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { CartTicketProvider } from '@/hooks/use-cart-ticket'
import Like from '@/components/dashboard/collect/card/like'

const CardComponent = ({ eventData }) => {
  // 從 eventData 中解構出需要的值
  const { names, descriptions, price, images } = eventData
  const truncateText = (text, length = 50) => {
    if (text.length <= length) {
      return text
    }
    return text.substring(0, length) + '...'
  }

  return (
    <main className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.col} mt-2`}>
          <div
            className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
          >
            <div className={styles.positionRelative}>
              <Image
                src={
                  `/product/event-management/eventBanner/${images}` ||
                  '/homePage/fireball.png'
                }
                alt={descriptions || 'Description of the image'}
                width={480}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={`${styles.cardTitle} single-line-title`}>
                {/* {names || 'Adventure Sports'} */}
                {truncateText(names, 35) ||
                  truncateText('Adventure Sports', 30)}
              </h3>
              <h3 className={styles.cardText}>
                {truncateText(descriptions, 23) ||
                  truncateText(
                    'Fear Of Driving And Automatic Negative Thoughts',
                    30
                  )}
              </h3>

              <h3 className={styles.cardPrice}>${price || '1990'}</h3>
              {/* <div className={styles.footer}>
                <div className={styles.iconContainer}>
                  <AiOutlineHeart className={styles.likeIcon} />
                  <span>
                    加入收藏
                    <Like product={'event'} id={'1'} is_favorite={true} />
                  </span>
                </div>
                <div className={styles.iconContainer}>
                  <AiOutlineShoppingCart className={styles.shoppingCartIcon} />
                  <span>加入購物車</span>
                  <CartTicketProvider />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardComponent
