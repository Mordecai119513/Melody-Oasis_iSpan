import React from 'react'

export default function SubDiv({
  title,
  swiperWrapClass,
  swiperDivPosition = <></>,
}) {
  return (
    <>
      <div className="row">
        <div className=" bg-success my-3 text-center">
          <h2 className="text-white lh-lg">{title}</h2>
          <div className={swiperWrapClass}>
            {swiperDivPosition}
            {/* <CustomSwiper cards={cards} slidesPerView={'4'} /> */}
          </div>
        </div>
      </div>
    </>
  )
}
