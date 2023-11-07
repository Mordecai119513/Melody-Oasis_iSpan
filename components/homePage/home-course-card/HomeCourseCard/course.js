import React from 'react'
import style from './course.module.scss'

export default function HomeCourseCard() {
  return (
    <>
      <div className={style['product-card']}>
        <div className={style['product-image-container']}>
          <img
            className={style['product-image']}
            src="/product/course/gutier1.jpg"
            alt="Product Image"
          />
        </div>
        <div className={style['product-details']}>
          <h3 className={style['product-title']}>馬叔叔搖滾吉他課程</h3>
          <p className={style['product-description']}>
            在跟馬叔叔一起搖滾學吉他課程裡馬叔叔很貼心的安排了１８個單元，共３３０分鐘的完整的吉他數位DVD教學系統，內容超過１００個練習與範例示範說明,
            循序漸進的課程，不分年齡，想學就學，讓學音樂不再只是夢想，現在就趕快跟馬叔叔一起搖滾學吉他吧!
          </p>
          <p className={style['product-price']}>$1980</p>
        </div>
      </div>
    </>
  )
}
