import React from 'react'
import style from './card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  course_id,
  img,
  name,
  directions,
  teacher,
  price,
}) {
  const imageSrc = `/product/course/course/${img}`
  return (
    <>
      <div className={style['product-card']}>
        <div className={style['product-image-container']}>
          <Link
            href={`/product/course/5`}
            className="w-100 d-block overflow-hidden"
          >
            <img
              className={style['product-image']}
              src="/product/course/course/piano.jpg"
              alt="Product Image"
            />
          </Link>
        </div>

        <div className={style['product-details']}>
          <h3 className={`${style['product-title']} text-wrap`}>
            30天學會流行鋼琴伴奏
          </h3>
          <p className={style['product-description']}>
            鋼琴作為樂器之王，在很多人眼中它是很難學會的。雖然壹直有個鋼琴夢，卻總是望而卻步。然而事情真的是這樣嗎？
            在古典鋼琴領域，有壹套完整的刻意練習體系，但在流行鋼琴中卻很少見。小冰老師在教學中發現，通過創作的方式可以很好的學習流行鋼琴。
            所以《30天學會流行鋼琴》（零基礎入門篇）教程的理念，就是通過創作來學習流行鋼琴，精心設計的課程，沒有枯燥深奧的理論，實操中壹步壹步帶妳發現音樂的樂趣。30天，每天30分鐘，給自己一個機會吧！
          </p>
          <p className={style['product-teacher']}>IYAMUSIC 哎呀音樂</p>
          <p className={style['product-price']}>$ 900</p>
        </div>
      </div>
    </>
  )
}
