import React, { useState, useEffect } from 'react'

import { BsFillCartPlusFill } from 'react-icons/bs'
// import { Avatar, Space } from 'antd'
import Image from 'next/image'

import Like from './like'
// 購物車
import { useCart } from '@/hooks/use-cart'
import { useCourseCart } from '@/hooks/use-cart-course'
import { useTicketCart } from '@/hooks/use-cart-ticket'
export default function Card({ img, title, price, product, id }) {
  const { addItem } = useCart()
  const { addCourse } = useCourseCart()
  const { addTicket } = useTicketCart()

  let url = ``
  switch (product) {
    case 'album':
      url = `/product/album/${img}`
      break
    case 'event':
      url = `/product/event-management/eventBanner/${img}`
      break
    case 'course':
      url = `/product/course/course/${img}`
      break

    default:
      break
  }

  const carClick = (product) => {
    switch (product) {
      case 'album':
        addItem({
          id: id,
          price: price,
          picture: `/product/album/${img}`,
          quantity: 1,
          title: title,
        })
        break
      case 'event':
        addTicket({
          id: id,
          price: price,
          picture: `/product/event-management/eventBanner/${img}`,
          quantity: 1,
          name: title,
        })
        break
      case 'course':
        addCourse({
          id: id,
          price: price,
          picture: `/product/course/course/${img}`,
          quantity: 1,
          name: title,
        })
        break

      default:
        break
    }
  }

  return (
    <>
      {/* 單張卡片 */}
      <div className="p-4">
        <div className="row bg-light rounded ">
          {/* 圖 */}
          <div className="col-4 d-flex justify-content-center align-items-start p-2 position-relative">
            <Image
              // className="object-fit-contain w-100 h-100 object-fit-contain"
              className="p-2"
              src={url}
              alt={title}
              // width={150}
              // height={150}
              // layout="fixed"
              fill={true}
              // objectFit="contain"
            />
          </div>
          {/* <Space className="col-4 d-flex justify-content-center align-items-center p-2">
            <Avatar
              className="bg-white w-100 h-100"
              src={url}
              alt={title}
              shape="square"
            />
          </Space> */}
          {/* 內容 */}
          <div className="col-8 text-info px-3 py-5 d-flex justify-content-evenly  flex-column align-items-center ">
            <div className="w-100 d-flex justify-content-between">
              <h3>{title}</h3>
              <h3>NT$ {price}</h3>
            </div>
            <div className="w-100 d-flex justify-content-between">
              <h1>
                <Like product={product} id={id} is_favorite={true} />
              </h1>
              <h1>
                <BsFillCartPlusFill
                  type="button"
                  onClick={() => {
                    carClick(product)
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
