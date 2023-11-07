import React from 'react'
import CourseCustomSwiper from './swiper'
import Card from '@/components/product/course/course-card/course'

const DetailSwiper = () => {
  const cards = [Card, Card, Card, Card]

  return <CourseCustomSwiper cards={cards} slidesPerView={'2'} />
}

export default DetailSwiper
