import React, { useState, useEffect } from 'react'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper'

SwiperCore.use([EffectCoverflow, Pagination, Navigation])

const CustomSwiper = ({
  cards = [],
  slidesPerViewDesktop = '2',
  spaceBetween = '30',
  onCardClick = () => {}, // 新增這行
}) => {
  const [shuffledCards, setShuffledCards] = useState(cards) // 初始化時只使用 cards
  const [slidesToShow, setSlidesToShow] = useState(slidesPerViewDesktop) // 對於 SSR 默認為 '2'

  useEffect(() => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5))

    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth <= 390 ? '1' : slidesPerViewDesktop)
    }

    // 立即執行邏輯
    updateSlidesToShow()

    // 在窗口調整大小時更新要顯示的幻燈片
    window.addEventListener('resize', updateSlidesToShow)

    // 清理
    return () => {
      window.removeEventListener('resize', updateSlidesToShow)
    }
  }, [cards, slidesPerViewDesktop])

  return (
    <div>
      <style jsx global>{`
        .mySwiper {
          --swiper-navigation-color: white;
          --swiper-theme-color: white;
        }

        .swiper-button-next,
        .swiper-button-prev {
          filter: brightness(0) invert(1);
        }
      `}</style>

      <Swiper
        navigation
        spaceBetween={spaceBetween}
        effect={'slide'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesToShow}
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
        {shuffledCards.map((Card, index) => (
          <SwiperSlide key={index} onClick={() => onCardClick(Card)}>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomSwiper
