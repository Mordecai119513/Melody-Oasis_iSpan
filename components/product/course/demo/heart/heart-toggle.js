import React, { useState } from 'react'
import Image from 'next/image'
// 商品列表頁icon
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
import HeartFillIcon from '@/public/product/album/icon/heart-fill-icon.svg'

function HeartToggle() {
  const [isHeartFillVisible, setIsHeartFillVisible] = useState(false)

  const toggleHeart = () => {
    setIsHeartFillVisible(!isHeartFillVisible)
  }

  return (
    <div
      className="position-absolute bottom-0 end-0"
      onClick={toggleHeart}
      onKeyPress={() => {}}
      role="button" // 添加 "button" 角色，表示這是一個按鈕
      tabIndex={0} // 設置 tabindex 以使元素可以獲得焦點
    >
      {isHeartFillVisible ? (
        <>
          <Image className="img" src={HeartFillIcon} alt="heart-fill" />
        </>
      ) : (
        <>
          <Image className="img" src={HeartDefaultIcon} alt="heart-default" />
        </>
      )}
    </div>
  )
}

export default HeartToggle