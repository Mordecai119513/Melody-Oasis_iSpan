import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import CheckLinkBodyStyle from './check-link-body-style'
import Button from 'rsuite/Button'
// 頭像
import { Avatar, Space } from 'antd'
// 清單rsuite
import { Sidenav, Nav } from 'rsuite'
// 清單antd
import { Menu, ConfigProvider } from 'antd'
const items = [
  {
    label: (
      <>
        <CheckLinkBodyStyle
          href="http://localhost:3000/dashboard/profile"
          // style={{ textDecoration: 'none' }}
        >
          個人資料
        </CheckLinkBodyStyle>
      </>
    ),
    key: 'profile',
  },
  {
    label: (
      <>
        <CheckLinkBodyStyle
          href="http://localhost:3000/dashboard/collect"
          // style={{ textDecoration: 'none' }}
        >
          我的收藏
        </CheckLinkBodyStyle>
      </>
    ),
    key: 'collect',
  },
  {
    label: (
      <>
        <CheckLinkBodyStyle
          href="http://localhost:3000/dashboard/order"
          // style={{ textDecoration: 'none' }}
        >
          訂單查詢
        </CheckLinkBodyStyle>
      </>
    ),
    key: 'order',
  },
  {
    label: (
      <>
        <CheckLinkBodyStyle
          href="http://localhost:3000/dashboard/coupon"
          // style={{ textDecoration: 'none' }}
        >
          折價卷
        </CheckLinkBodyStyle>
      </>
    ),
    key: 'coupon',
  },
]

export default function List({ userData }) {
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
  // 得到目前的網址的路徑
  const router = useRouter()
  const { asPath } = router
  const pathname = asPath.split('?')[0]
  const paths = pathname.split('/')

  const antdMenu = (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            /* here is your component tokens */
            activeBarBorderWidth: 0,
            // 預設
            itemColor: '#fff', //字體顏色
            colorBgContainer: '#5E503F', //底色
            itemBorderRadius: 20, //圓角
            fontFamily:
              'Taipei Sans TC Beta,Jiao Std W8,Noto Sans TC Regular,Helvetica,Arial,PingFang TC,苹方-繁,Heiti TC,黑體-繁,Microsoft JhengHei,微軟正黑體,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
            // 正在目標
            itemSelectedColor: '#0A0908', //正在目標的字體顏色
            itemSelectedBg: '#EAE0D5', //正在目標的底色
            // 點擊
            itemActiveBg: '#EAE0D5', //點擊底色
            // 滑過
            colorBgTextHover: 'rgba(234, 224, 213, 1)',
            motionDurationMid: 0,
            motionDurationSlow: 0,
          },
        },
      }}
    >
      <Menu
        className="m-3 h3 text-center"
        defaultSelectedKeys={paths[paths.length - 1]}
        items={items}
      />
    </ConfigProvider>
  )

  const rsuiteMenu = (
    <>
      <CheckLinkBodyStyle
        href="http://localhost:3000/dashboard/profile"
        // style={{ textDecoration: 'none' }}
      >
        個人資料
      </CheckLinkBodyStyle>

      <CheckLinkBodyStyle
        href="http://localhost:3000/dashboard/collect"
        // style={{ textDecoration: 'none' }}
      >
        我的收藏
      </CheckLinkBodyStyle>

      <CheckLinkBodyStyle
        href="http://localhost:3000/dashboard/order"
        // style={{ textDecoration: 'none' }}
      >
        訂單查詢
      </CheckLinkBodyStyle>

      <CheckLinkBodyStyle
        href="http://localhost:3000/dashboard/coupon"
        // style={{ textDecoration: 'none' }}
      >
        折價卷
      </CheckLinkBodyStyle>
    </>
  )

  return (
    <>
      {isLoading ? null : (
        <div className="bg-secondary p-4 w-100 text-info mb-3">
          {/* 頭像+名稱 */}
          <div className="userImgAndName d-flex flex-column justify-content-center align-items-center border-bottom border-5 mb-2">
            <Space className="mb-3">
              <Avatar
                className="bg-white"
                src={
                  <Image
                    src={Imageurl}
                    alt={userData.name}
                    width={120}
                    height={120}
                  />
                }
                size={120}
                alt={userData.name}
                shape="circle"
              />
            </Space>
            <h2>{userData.name}</h2>
          </div>
          {/* 清單 */}
          {antdMenu}
          {/* {rsuiteMenu} */}
        </div>
      )}
    </>
  )
}
