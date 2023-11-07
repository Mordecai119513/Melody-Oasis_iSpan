import React from 'react'
import style from './course.module.scss'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
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
            href={`/product/course/${course_id}`}
            className="w-100 d-block overflow-hidden"
          >
            <img
              className={style['product-image']}
              src={imageSrc}
              alt="Product Image"
            />
          </Link>
        </div>

        <div className={style['product-details']}>
          <h3 className={`${style['product-title']} text-wrap`}>{name}</h3>
          <p className={style['product-description']}>{directions}</p>
          <p className={style['product-teacher']}>{teacher}</p>
          <p className={style['product-price']}>$ {price}</p>
        </div>
      </div>
    </>
  )
}
