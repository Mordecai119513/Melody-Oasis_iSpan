import React from 'react'
//在next中引用圖片
import Image from 'next/image'
//CSS設定，放在同一層
import styles from './style.module.css'
import Link from 'next/link'
//qwert
//AlbumCardDemo1
import AlbumCard7 from '@/public/product/album/R-8775250-1469015486-3361.jpg'

export default function NewCard() {
  return (
    <>
      <div
        className={` justify-content-center align-items-center card  bg-transparent border-0  mt-2 mb-2 `}
      >
        <div
          className={`card ${styles.w230} ${styles.noBorder} img card-img-top rounded bg-black  p-2 `}
        >
          <div className={`${styles.imgWrap} rounded p-2`}>
            {/*  */}
            {/*  */}
            {/*  */}
            <Link href={`/product/album/124`}>
              {/*  */}
              {/*  */}
              {/*  */}
              <Image
                className={`img card-img-top ${styles.w160} rounded`}
                //
                //
                //
                src={AlbumCard7}
                //
                //
                //
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
                  className={`card-title text-break  text-start ${styles.ellipsis} `}
                >
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  日常
                  {/*  */}
                  {/*  */}
                  {/*  */}
                </h5>
                <p
                  className={`card-text text-break text-start ${styles.ellipsis} `}
                >
                  {/*  */}
                  {/*  */}
                  {/*  */}
                  田馥甄
                  {/*  */}
                  {/*  */}
                  {/*  */}
                </p>
              </div>
              <div className=""></div>
            </div>
            <p className="card-text text-break mb-2 text-start">
              {/*  */}
              {/*  */}
              $509
              {/*  */}
              {/*  */}
              {/*  */}
            </p>
            <div className="d-flex justify-content-end position-absolute bottom-0 start-0">
              <p className="card-text text-white-50 text-break">
                {/*  */}
                {/*  */}
                {/*  */}
                2016-07-13
                {/*  */}
                {/*  */}
                {/*  */}
              </p>
            </div>
            <div className="d-flex justify-content-end position-absolute bottom-0 end-0"></div>
          </div>
        </div>
      </div>
    </>
  )
}
