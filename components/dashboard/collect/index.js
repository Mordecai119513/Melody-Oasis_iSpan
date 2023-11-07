import React, { useState, useEffect } from 'react'
import List from '../list'
import MbList from '../mb-list'
import Framework from '@/components/share/framework/framework-left-right'
import Card from './card'
// 取得會員資料並傳給list用
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
// 清單
import { ConfigProvider, Tabs, Empty } from 'antd'

export default function Collect() {
  const { authJWT, setAuthJWT } = useAuthJWT()
  // 讀取中狀態
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({
    account: '',
    address: '',
    birthday: '',
    created_at: '',
    password: '',
    email: '',
    gender: '',
    id: 0,
    name: '',
    phone: '',
    photo: '',
    status: '',
    iat: 0,
    exp: 0,
  })
  // 取的user資料
  const getUserData = async (id) => {
    const res = await axios.get('http://127.0.0.1:3005/api/users/' + `${id}`)

    if (res.data.message === 'success') {
      // console.log(res.data.user)
      setUserData(res.data.user)
    }
  }
  useEffect(() => {
    const id = authJWT.userData.id
    // console.log(id)
    getUserData(id).then(() => {
      setIsLoading(false)
      getAlbumCollect(id)
      getCollectEvent(id)
      getCollectCourse(id)
    })
  }, [authJWT.userData])
  const [albumData, setAlbumData] = useState([])
  const [eventData, setEventData] = useState([])
  const [courseData, setCourseData] = useState([])
  // 取得收藏專輯資料
  const getAlbumCollect = async (id) => {
    const res = await axios.get(
      'http://127.0.0.1:3005/api/users/collect/album/' + `${id}`
    )
    // console.log(res.data)
    setAlbumData(res.data)
  }
  // 取得收藏專活動資料
  const getCollectEvent = async (id) => {
    const res = await axios.get(
      'http://127.0.0.1:3005/api/users/collect/event-management/' + `${id}`
    )
    // console.log(res.data)
    setEventData(res.data)
  }
  // 取得收藏專課程資料
  const getCollectCourse = async (id) => {
    const res = await axios.get(
      'http://127.0.0.1:3005/api/users/collect/course/' + `${id}`
    )
    // console.log(res.data)
    setCourseData(res.data)
  }

  // 頁籤內容
  const items = [
    {
      key: 'album',
      label: '專輯',
      children: (
        <>
          <div className="cards bg-white">
            {albumData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {albumData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.album_id}
                    img={v.cover_image}
                    title={v.title}
                    price={v.price}
                    product="album"
                  />
                ))}
              </>
            )}
            {/* {albumData.map((v) => (
              <Card
                key={v.id}
                id={v.album_id}
                img={v.cover_image}
                title={v.title}
                price={v.price}
                product="album"
              />
            ))} */}
          </div>
        </>
      ),
    },
    {
      key: 'event-management',
      label: '音樂活動',
      children: (
        <>
          <div className="cards bg-white">
            {eventData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {eventData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.event_management_id}
                    img={v.images}
                    title={v.names}
                    price={v.price}
                    product="event"
                  />
                ))}
              </>
            )}
          </div>

          {/* <div className="cards bg-white">
            {eventData.map((v) => (
              <Card
                key={v.id}
                id={v.event_management_id}
                img={v.images}
                title={v.names}
                price={v.price}
                product="event"
              />
            ))}
          </div> */}
        </>
      ),
    },
    {
      key: 'course',
      label: '課程',
      children: (
        <>
          <div className="cards bg-white">
            {courseData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {courseData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.course_id}
                    img={v.img}
                    title={v.name}
                    price={v.price}
                    product="course"
                  />
                ))}
              </>
            )}
            {/* {courseData.map((v) => (
              <Card
                key={v.id}
                id={v.course_id}
                img={v.img}
                title={v.name}
                price={v.price}
                product="course"
              />
            ))} */}
          </div>
        </>
      ),
    },
  ]
  // 手機板List
  const mbList = (
    <>
      <MbList userData={userData} />
    </>
  )
  // 主內容
  const Content = (
    <>
      <div className="container bg-primary mb-3">
        <div className=" row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center  pt-4">
            <h1>我的收藏</h1>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  cardBg: 'rgba(0, 0, 0, 0.08)',
                  itemColor: 'rgba(255, 255, 255, 1)',
                  itemHoverColor: '#000',
                  itemSelectedColor: '#000',
                  titleFontSize: 16,
                  margin: '0',

                  fontFamily:
                    'Noto Sans TC Regular,Helvetica,Arial,PingFang TC,苹方-繁,Heiti TC,黑體-繁,Microsoft JhengHei,微軟正黑體,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                },
              },
            }}
          >
            <Tabs
              type="card"
              defaultActiveKey="album"
              items={items}
              className="mb-4"
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  )
  const main = (
    <>
      {mbList}
      {Content}
    </>
  )
  return (
    <>
      <Framework
        leftContent=<>{isLoading ? null : <List userData={userData} />}</>
        rightContent={<>{isLoading ? null : main}</>}
      ></Framework>
    </>
  )
}
