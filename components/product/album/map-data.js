import React, { useEffect, useState } from 'react'
import NewCard from './new-card/new-card'

//購物車 part1
import { useCart } from '@/hooks/use-cart' //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

export default function MapData({
  newProducts,
  perPage,
  setNewProducts,
  product,
  page,
}) {
  //購物車 part2
  const { addItem } = useCart() //課程const addCourse、活動const addTicket
  useEffect(() => {
    const newArray = product.slice((page - 1) * perPage, page * perPage)
    setNewProducts(newArray)
  }, [page])

  //   if (!newProducts || newProducts.length === 0) {
  //     return <div>Loading...</div>
  //   } else {
  //     const arrayForComment = newProducts
  //     // console.log(arrayForComment)
  //   }
  return (
    <>
      {newProducts.map((album, index) => (
        <div
          className={`justify-content-center align-items-center card col-6 col-sm-3 bg-transparent border-0  mt-2 mb-2`}
          key={album.id}
        >
          <NewCard
            key={index}
            id={album.id}
            title={album.title}
            artist={album.artist}
            price={album.price}
            coverImage={album.cover_image}
            releasedDate={album.released_date}
          />
          {/*  //購物車 part3 */}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              const item = { ...album, quantity: 1 } //ablum要更改
              addItem(item) //課程 addCourse、活動 addTicket
            }}
          >
            加入購物車
          </button>
        </div>
      ))}
    </>
  )
}
