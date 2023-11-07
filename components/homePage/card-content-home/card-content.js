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

export default function HomeAlbumProductCard1() {
  return (
    <>
      <div className="p-3 bg-light mt-2 rounded">
        <div className="position-relative">
          <Image
            src="/homePage/albumCover/a0205933163_16.jpeg"
            alt="Description of the image"
            width={300}
            height={300}
          />
        </div>
        <div className="card-body text-white">
          <p className="card-text"> </p>
          <h5 className="card-title mt-3">album-title</h5>
          <p className="card-text"> </p>
        </div>
      </div>
    </>
  )
}
