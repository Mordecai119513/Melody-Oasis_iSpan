import React from 'react'
// import React, { useEffect, useState } from 'react'

//在next中引用圖片
import Image from 'next/image'
//購物車圖片，放在public
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
//商品列表頁，放在public
// import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
//CSS設定，放在同一層
import styles from './style.module.css'
//收藏商品的toggle效果的js，放在子層
import HeartToggle from './heart/heart-toggle'

//
import Link from 'next/link'

export default function AlbumProductCard({
  id,
  title,
  artist,
  price,
  coverImage,
}) {
  //ttt
  const imageSrc = `/product/album/${coverImage}`

  return (
    <>
      <div className="p-3 bg-light mt-2 rounded">
        <div className="position-relative">
          <Link href={`/product/album/${id}`}>
            <Image
              className={`img card-img-top ${styles.w160} rounded`}
              src={imageSrc}
              alt="album-artist-album-title"
              width={160}
              height={160}
              // layout="intrinsic"
              layout="responsive"
            />
          </Link>
        </div>
        <div className="card-body text-white">
          <HeartToggle></HeartToggle>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{artist}</p>
          <p className="card-text">{price}</p>
          <div className="d-flex justify-content-end">
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
