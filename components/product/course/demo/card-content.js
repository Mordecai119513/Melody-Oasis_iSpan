import React from 'react'

//在next中引用圖片
import Image from 'next/image'
//購物車圖片，放在public
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
//商品列表頁，放在public
import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
//CSS設定，放在同一層
import styles from './style.module.scss'
//收藏商品的toggle效果的js，放在子層
import HeartToggle from './heart/heart-toggle'

export default function AlbumProductCard() {
  return (
    <>
      <div className="p-3 bg-light mt-2 rounded">
        <div className="position-relative">
          <Image
            className={`img card-img-top ${styles.w160} rounded`}
            src={TheFirstAlbumCover}
            alt="album-artist-album-title"
          />
          <HeartToggle></HeartToggle>
        </div>
        <div className="card-body text-white">
          <h5 className="card-title">album-title</h5>
          <p className="card-text">album-artist</p>
          <p className="card-text">album-price</p>
          <div className="d-flex justify-content-end">
            <Image className="img" src={CartIcon} alt="cart" />
          </div>
        </div>
      </div>
    </>
  )
}