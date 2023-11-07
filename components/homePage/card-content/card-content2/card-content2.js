import React from 'react'

//在next中引用圖片
import Image from 'next/image'
//購物車圖片，放在public
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
//商品列表頁，放在public
import TheSecondAlbumCover from '@/public/product/album/R-250771-1672170001-7863.jpg'
//CSS設定，放在同一層
import styles from './style.module.scss'
//收藏商品的toggle效果的js，放在子層
import HeartToggle from '../heart/heart-toggle'

export default function HomeAlbumProductCard2() {
  return (
    <>
      <div className="p-3 bg-light mt-2 rounded">
        <div className="position-relative">
          <Image
            className={`img card-img-top ${styles.w160} rounded`}
            src={TheSecondAlbumCover}
            alt="album-artist-album-title"
          />
        </div>
        <div className="card-body text-white mt-2">
          <p className="card-text"> </p>
          <h3 className="card-title">The Eminem Show</h3>
          <p className="card-text"> </p>
        </div>
      </div>
    </>
  )
}
