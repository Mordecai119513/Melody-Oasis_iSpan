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
import Link from 'next/link'
//qwert
import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
import TheFlatAlbumCover from '@/public/product/album/R-459346-1409631172-6122.jpg'
import TheLongAlbumCover from '@/public/product/album/R-319865-1157067037.jpg'
import FourthAlbumCover from '@/public/product/album/R-1279478-1527737794-4656.jpg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

//購物車 part1
import { useCart } from '@/hooks/use-cart' //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

export default function NewCard({
  id,
  title,
  artist,
  price,
  coverImage,
  releasedDate,
}) {
  //ttt
  const imageSrc = `/product/album/${coverImage}`

  //購物車 part2
  const { addItem } = useCart() //課程const addCourse、活動const addTicket

  return (
    <>
      <div
        // className="p-3 bg-light mt-2 rounded"
        className={`card ${styles.w230} ${styles.noBorder} img card-img-top rounded bg-black  p-2 `}
      >
        <div className={`${styles.imgWrap} rounded p-2`}>
          <Link href={`/product/album/${id}`}>
            <Image
              className={`img card-img-top ${styles.w160} rounded`}
              //   className={`img card-img-top ${styles.w160} rounded`}
              src={imageSrc}
              alt="album-artist-album-title"
              width={120}
              height={80}
              //   layout="intrinsic"
              //   objectFit="cover"
              //   objectPosition="50% 50%"
              //   layout="responsive"
            />
          </Link>
        </div>
        <div
          className={`card-body text-white  bg-black  ${styles.noSpaceX} ${styles.minHeight} position-relative m-2`}
          // className="card-body text-white no-space-x bg-black"
        >
          <div
            // className="d-flex justify-content-between "
            className={`d-flex justify-content-between ${styles.ellipsis} `}
          >
            <div
              // className="pe-1"
              className={`pe-1 ${styles.ellipsis} `}
            >
              <h5
                className={`card-title text-break ${styles.ellipsis} `}
                // className="card-title text-break"
              >
                {title}
              </h5>
              <p
                className={`card-text text-break  ${styles.ellipsis} `}
                // className="card-text text-break"
              >
                {artist}
              </p>
            </div>
            <div className=""></div>
          </div>
          <p className="card-text text-break mb-2">${price}</p>
          <div className="d-flex justify-content-end position-absolute bottom-0 start-0">
            <p className="card-text text-white-50 text-break">{releasedDate}</p>
          </div>
          <div className="d-flex justify-content-end position-absolute bottom-0 end-0">
            <Image
              className={`img  ${styles.darken} `}
              src={CartIcon}
              alt="cart"
              onClick={() => {
                addItem({
                  id: id,
                  price: price,
                  picture: `/product/album/${coverImage}`,
                  quantity: 1,
                  title: title,
                })
              }}
            />
            {/* <Image
              className={`img  ${styles.darken} `}
              src={CartIcon}
              alt="cart"
            /> */}
          </div>
          {/* testtest part3 start*/}
          {/* <br />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              const item = { ...album, quantity: 1 } //ablum要更改
              addItem(item) //課程 addCourse、活動 addTicket
            }}
          >
            加入購物車
          </button>
          <br />
          <br />
          <br /> */}
          {/* testtest part3 end*/}
        </div>
      </div>
    </>
  )
}
