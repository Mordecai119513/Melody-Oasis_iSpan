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
            href={`/product/course/31`}
            className="w-100 d-block overflow-hidden"
          >
            <img
              className={style['product-image']}
              src="/product/course/course/piano7.jpg"
              alt="Product Image"
            />
          </Link>
        </div>

        <div className={style['product-details']}>
          <h3 className={`${style['product-title']} text-wrap`}>
            流行鋼琴演奏零基礎入門課程（五線譜教學）
          </h3>
          <p className={style['product-description']}>
            零基礎鋼琴自學教程
            基於西方通用五線譜教學藍本開發，循序漸進，30課時掌握基礎演奏；
            練習選曲貼合當代聽眾愛好，《卡農》、《夢中的婚禮》、《夜的鋼琴曲》、《雨的印記》、《菊次郎的夏天》……彈妳所愛，告別枯燥學習。
            妳將會學習 1、五線譜記認，初步做到有譜就能彈；
            2、踏板、跳音、琶音、八度雙音等常用鋼琴演奏技巧；
            3、流行歌曲雙手和弦伴奏方法；
            4、音階、音程、和弦構成、和弦轉位等基礎樂理知識；
          </p>
          <p className={style['product-teacher']}>MartinCohen</p>
          <p className={style['product-price']}>$ 990</p>
        </div>
      </div>
    </>
  )
}
