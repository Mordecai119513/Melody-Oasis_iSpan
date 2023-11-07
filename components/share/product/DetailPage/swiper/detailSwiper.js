import React from 'react'
import CustomSwiper from './swiper'
import Card from '@/components/product/event-management/activity-CardComponent/cards'

const DetailSwiper = () => {
  const cards = [Card, Card, Card, Card]

  return <CustomSwiper cards={cards} slidesPerView={'2'} spaceBetween={'0'} />
}

export default DetailSwiper
