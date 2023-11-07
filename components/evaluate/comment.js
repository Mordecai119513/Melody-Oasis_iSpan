import React, { useEffect, useState } from 'react'
import evaluateStyle from './evaluate.module.scss'
import Star from './star'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'
import { Skeleton } from 'antd'

export default function Comment({
  newProducts,
  perPage,
  setNewProducts,
  product,
  page,
}) {
  useEffect(() => {
    const newArray = product.slice((page - 1) * perPage, page * perPage)
    setNewProducts(newArray)
  }, [page, product])

  if (!newProducts || newProducts.length === 0) {
    return <div className={evaluateStyle.commentArea}>尚無留言</div>
  } else {
    const arrayForComment = newProducts
    return (
      <>
        {arrayForComment.map((v, i) => {
          return (
            <div key={i} className={`d-flex ${evaluateStyle.commentArea}`}>
              <div className={`row mx-1 my-2 pe-4 col`}>

                <div className="d-flex">
                  <div className='me-2'>
                    {v.photo ? (
                      <Image
                        className={evaluateStyle.profilePhoto}
                        // TODO要詢問後端圖片路徑
                        src={`/member/image/${v.photo}`}
                        alt="avatar"
                        width={38}
                        height={38}
                      />
                    ) : (
                      <Image
                        src="/member/image/default.png"
                        width={60}
                        height={60}
                        alt="Oasis"
                        className={evaluateStyle.profilePhoto}
                      />
                    )}
                    {/* <FaUserCircle className={evaluateStyle.profilePhoto} /> */}
                  </div>
                  <div>
                    <div>{v.name}</div>
                    <div className="mb-2">
                      <Star
                        value={v.stars}
                        disabled={true}
                        style={{
                          fontSize: '12px',
                          color: '#C6AC8F',
                          margin: '0',
                        }}
                      />
                      <span className="h5 d-none d-sm-inline">
                        {v.comment_time}
                      </span>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="pe-0">
                  <span className={`${evaluateStyle.memberComment} h4`}>
                    {v.comment}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }
}
