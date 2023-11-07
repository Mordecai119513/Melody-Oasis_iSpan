// section3.js
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import styles from './section3.module.scss'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
import CardComponent5 from '@/components/product/event-management/activity-CardComponent/eventCard-5/cards'
import CardComponent6 from '@/components/product/event-management/activity-CardComponent/eventCard-6/cards'
import { Button } from 'rsuite'
import Link from 'next/link'

export default function Section3() {
  return (
    <>
      <div className={styles.section3Container}>
        <div className={styles.section3Content}>
          <p className={styles.section3Text}>音樂活動</p>
        </div>
      </div>
      <div className={styles.section3Body}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'3'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ backgroundColor: '#22333B', height: '500px' }}
          initialSlide={2} // 設定從第幾張卡片開始顯示
        >
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/2"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent4 hideFeatures={true} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/14"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent5 hideFeatures={true} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/13"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent6 hideFeatures={true} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/50"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent2 hideFeatures={true} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/1"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent3 hideFeatures={true} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href="http://localhost:3000/product/event-management/14"
              style={{ textDecoration: 'none' }}
            >
              <CardComponent6 hideFeatures={true} />
            </Link>
          </SwiperSlide>
        </Swiper>

        <div className={styles.buttonContainer}>
          <Button className={styles.button}>
            {' '}
            <Link
              href="/product/event-management"
              className="more"
              style={{ textDecoration: 'none' }}
            >
              更多
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
