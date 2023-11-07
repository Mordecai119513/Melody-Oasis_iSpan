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
            href={`/product/course/16`}
            className="w-100 d-block overflow-hidden"
          >
            <img
              className={style['product-image']}
              src="/product/course/course/hiphop.jpg"
              alt="Product Image"
            />
          </Link>
        </div>

        <div className={style['product-details']}>
          <h3 className={`${style['product-title']} text-wrap`}>
            Hip-Hop Trap Beat | 完整制作
          </h3>
          <p className={style['product-description']}>
            我们来探索Hip-Hop的律动，了解黑人音乐的根基，文化，Trap音乐风格的演变，Drums鼓组的制作，如何制作快速的Hi-Hats、808
            Sub
            Bass的滑音方法，以及在Trap音乐中很常见的调式，还有如何对低频KICK&BASS的混音方法等等。
          </p>
          <p className={style['product-teacher']}>陳佳楠Chillen</p>
          <p className={style['product-price']}>$ 2690</p>
        </div>
      </div>
    </>
  )
}
