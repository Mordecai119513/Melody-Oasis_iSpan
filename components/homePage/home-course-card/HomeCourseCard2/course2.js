import React from 'react'
import style from './course.module.scss'

export default function HomeCourseCard2() {
  return (
    <>
      <div className={style['product-card']}>
        <div className={style['product-image-container']}>
          <img
            className={style['product-image']}
            src="/product/course/course/gutier2.jpg"
            alt="Product Image"
          />
        </div>
        <div className={style['product-details']}>
          <h3 className={style['product-title']}>馬叔叔電吉他課程</h3>
          <p className={style['product-description']}>
            母胎沒節奏感？沒音感？你可以不再與音樂絕緣！流行音樂教學霸主馬叔叔，打造任何人都能學會的電吉他課！你從來沒想過的音樂潛能，跟著馬叔叔的十二堂課程，從搞懂電吉他與它的快樂夥伴們，到最後一堂竟能自己彈出充滿節奏感的放克，捧著吉他在台上帥氣演奏真的不是夢!母胎沒節奏感？沒音感？你可以不再與音樂絕緣！流行音樂教學霸主馬叔叔，打造任何人都能學會的電吉他課！你從來沒想過的音樂潛能，跟著馬叔叔的十二堂課程，從搞懂電吉他與它的快樂夥伴們，到最後一堂竟能自己彈出充滿節奏感的放克，捧著吉他在台上帥氣演奏真的不是夢!
          </p>
          <p className={style['product-price']}>$990</p>
        </div>
      </div>
    </>
  )
}
