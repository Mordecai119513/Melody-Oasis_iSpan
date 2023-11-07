import React, { useEffect, useState } from 'react'
import List from './list'

// 頭像
import { Avatar, Space } from 'antd'


export default function MbList({ userData }) {
  let Imageurl = ''
  const [isLoading, setIsLoading] = useState(true)

  // 判斷物件是否為空
  const isEmpty = (obj) => {
    return Object.getOwnPropertyNames(obj).length === 0
  }
  useEffect(() => {
    // 抓到userData才能取消Loading
    if (userData) {
      if (!isEmpty(userData)) setIsLoading(false)
    }
    // console.log(userData)
  }, [userData])

  if (!isLoading) {
    if (userData.photo == '') {
      Imageurl = `/member/image/default.png`
    } else {
      Imageurl = `/member/image/${userData.photo}`
    }
  }
  return (
    <>
      {isLoading ? null : (
        <>
          {/* 頭像+名稱 */}
          <div
            className="z-3 userImgAndName p-2 d-flex flex-column justify-content-center align-items-center position-fixed top-10 start-0 border border-1 rounded bg-secondary text-info d-md-none"
            style={{ width: 60 }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <Space className="">
              <Avatar
                className="bg-white"
                src={Imageurl}
                size={30}
                alt={userData.name}
                shape="circle"
              />
            </Space>
            <h4 className="m-0 text-break">{userData.name}</h4>
          </div>
          {/* list彈窗 */}
          <div
            className="offcanvas offcanvas-start bg-secondary text-info"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <List userData={userData} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
