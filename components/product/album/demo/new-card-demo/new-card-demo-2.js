import React from 'react'
// import React, { useEffect, useState } from 'react'
//在next中引用圖片
import Image from 'next/image'
//購物車圖片，放在public
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
//CSS設定，放在同一層
import styles from './style.module.css'
import Link from 'next/link'
//qwert
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

import DemoCard2 from '@/public/product/album/R-3227320-1609179445-6309.jpg'

export default function NewCard() {
  return (
    <>
      <div
        className={`card ${styles.w230} ${styles.noBorder} img card-img-top rounded bg-black  p-2 `}
      >
        <div className={`${styles.imgWrap} rounded p-2`}>
          <Link href={`http://localhost:3000/product/album/99`}>
            <Image
              className={`img card-img-top ${styles.w160} rounded`}
              src={DemoCard2}
              alt="album-artist-album-title"
              width={120}
              height={80}
            />
          </Link>
        </div>
        <div
          className={`card-body text-white  bg-black  ${styles.noSpaceX} ${styles.minHeight} position-relative m-2`}
        >
          <div className="d-flex justify-content-between ">
            <div className="pe-1">
              <h5 className="card-title text-break">11月的蕭邦</h5>
              <p className="card-text text-break">周杰倫</p>
            </div>
            <div className="">
              <Image
                className="img "
                src={HeartDefaultIcon}
                alt="heart-default"
              />
            </div>
          </div>
          <p className="card-text text-break mb-2">$428</p>
          <div className="d-flex justify-content-end position-absolute bottom-0 start-0">
            <p className="card-text text-white-50 text-break">2005-11-01</p>
          </div>
          <div className="d-flex justify-content-end position-absolute bottom-0 end-0">
            <Image
              className={`img  ${styles.darken} `}
              src={CartIcon}
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  )
}
