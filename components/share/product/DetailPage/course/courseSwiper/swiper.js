import React from 'react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import CourseCard from '@/components/product/course/course-card/course'

SwiperCore.use([EffectCoverflow, Pagination])

// 使用方法：
// <CustomSwiper cards={cards} slidesPerView={'2'} />;

const CourseCustomSwiper = ({ cards = [], slidesPerView = '2' }) => {
  return (
    <div>
      <Swiper
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
        style={{ backgroundColor: '#212A2E' }}
        initialSlide={1}
      >
        {cards.map((Card, index) => (
          <SwiperSlide key={index}>
            <CourseCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CourseCustomSwiper
