// section1.js
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import HomeAlbumProductCard from '../card-content/card-content/card-content'
import HomeAlbumProductCard2 from '../card-content/card-content2/card-content2'
import HomeAlbumProductCard3 from '../card-content/card-content3/card-content3'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import styles from './albumSwiper.module.scss'
import Link from 'next/link'

export default function AlbumSwiper() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`${styles.mySwiper} ${styles.customSwiper}`}
        style={{ backgroundColor: '#22333B' }}
      >
        <SwiperSlide>
          <Link
            href="http://localhost:3000/product/album/84"
            style={{ textDecoration: 'none' }}
          >
            <HomeAlbumProductCard />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="http://localhost:3000/product/album/70"
            style={{ textDecoration: 'none' }}
          >
            <HomeAlbumProductCard2 />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href="http://localhost:3000/product/album/51"
            style={{ textDecoration: 'none' }}
          >
            <HomeAlbumProductCard3 />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
