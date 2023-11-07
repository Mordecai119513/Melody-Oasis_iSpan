import React from 'react'

//在next中引用圖片
import Image from 'next/image'

//singer圖片，放在public
// import TheSecondSinger from '@/public/figure/singer/ab6772690000dd228d46af6797b692139f0f6e09.jpg'

import SingerCard1 from '@/public/figure/singer/ab6761610000f178232bf5570b8772b76850f202.jpg'
//CSS設定，放在同一層
import styles from './style.module.css'

import Link from 'next/link'

export default function AlbumProductCard() {
  return (
    <>
      <div
        className={`p-3 bg-transparent mt-2 rounded ${styles.wrapper}   text-center`}
      >
        <div className={`${styles.imgwrap}`}>
          <Link href={`http://localhost:3000/figure/singer/78`}>
            <Image
              className={`img card-img-top ${styles.w160} rounded-circle`}
              src={SingerCard1}
              alt="singer"
            />
          </Link>
        </div>
        <div className="card-body text-white mt-3">
          <h5 className="card-title ">田馥甄</h5>
          {/* <h6 className="card-text mt-2">XXX位粉絲收藏</h6> */}
        </div>
      </div>
    </>
  )
}
