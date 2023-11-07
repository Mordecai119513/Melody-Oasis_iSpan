import React from 'react'
import style from './course.module.scss'

export default function HomeCourseCard4() {
  return (
    <>
      <div className={style['product-card']}>
        <div className={style['product-image-container']}>
          <img
            className={style['product-image']}
            src="/product/course/course/dj.jpg"
            alt="Product Image"
          />
        </div>
        <div className={style['product-details']}>
          <h3 className={style['product-title']}>從零開始學習DJ</h3>
          <p className={style['product-description']}>
            我們跳脫以往的教學型態，特別使用分割畫面，讓學員感覺老師就在面前般的教學，即便是透過線上教學的模式，...
          </p>
          <p className={style['product-price']}>$1980</p>
        </div>
      </div>
    </>
  )
}
