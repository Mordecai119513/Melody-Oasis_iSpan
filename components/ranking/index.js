import React, { useEffect, useState } from 'react'
import BreadCrumb from '../share/breadcrumb'
import { Space, Table, Avatar, ConfigProvider, Statistic, Skeleton } from 'antd'
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import style from './ranking.module.scss'
import Audition from './audition'
import { HeartFilled } from '@ant-design/icons'
import Link from 'next/link'

export default function Ranking() {
  // API 抓回來的資料 <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
  const [trackinfo, setTrackinfo] = useState([])
  const [url, setUrl] = useState('http://localhost:3005/api/ranking/')
  const getTrackinfo = async () => {
    try {
      const res = await fetch(url)
      // const res = await fetch('http://localhost:3005/api/ranking/pop')
      // console.log(res)
      const data = await res.json()
      // console.log(data)
      setTrackinfo(data)
    } catch (e) {
      alert('伺服器連線失敗')
      console.error(e)
    }
  }
  // console.log(trackinfo)

  useEffect(() => {
    getTrackinfo()
  }, [url])

  //原本的樣子 image: `/product/album/R-18911899-1622164711-5894.jpg`,
  // 對trackinfo的image加上前綴
  const albumPhotoPrefix = '/product/album/'
  const updatedTrackInfo = trackinfo.map((track) => ({
    ...track,
    images: `${albumPhotoPrefix}${track.images}`,
  }))

  const columns = [
    {
      title: <div className="text-center h4">名次</div>,
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => (
        <>
          <div className="text-center">{index + 1}</div>
        </>
      ),
      width: '5rem',
    },
    {
      title: <div className="text-center h4">專輯</div>,
      dataIndex: 'album',
      key: 'album',
      width: '10rem',
      render: (_, record) => (
        <>
          <div className="d-flex">
            <div>
              <Space className="mb-3">
                <Avatar
                  size={{
                    sm: 10,
                    xxl: 100,
                  }}
                  className="bg-white"
                  // 專輯圖片位置
                  src={record.images}
                  alt={'XXX專輯圖片'}
                  shape="square"
                />
              </Space>
            </div>
            <div className="ps-3 d-flex flex-column justify-content-evenly">
              <Link href={`product/album/${record.id}`} className="h3">
                {record.title}
              </Link>
              <h5>{record.artist}</h5>
            </div>
          </div>
        </>
      ),
    },
    {
      title: <div className="text-center h4">收藏數</div>,
      dataIndex: 'audition',
      key: 'audition',
      width: '5rem',
      className: 'd-none d-sm-block align-middle', // 添加到table中收藏數，使其手機板不會顯示
      render: (_, record) => (
        <>
          {/* 收藏數 */}
          <div className="text-center my-4 py-3">
            <Statistic
              value={record.collectAccount}
              prefix={
                <HeartFilled
                  className="px-2"
                  style={{
                    color: 'hotpink',
                  }}
                />
              }
            />
          </div>
        </>
      ),
    },
    {
      title: <div className="text-center h4">試聽</div>,
      dataIndex: 'audition',
      key: 'audition',
      width: '5rem',

      render: (_, record) => (
        <>
          {' '}
          {/* 播放按鍵 */}
          <div className="text-center ">
            <div>
              <Audition audioUrl={record.audioSource} />
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      {/* 主畫面 */}
      <div className={`bg-success container`}>
        {/* 麵包屑 */}
        <div className="breadCrumbs ">
          <BreadCrumb />
        </div>
        {/* 標題 */}
        <div className="text-info m-5">
          <h1 className="text-center">站內排行榜</h1>
        </div>
        {/* 排行分類 */}
        <div>
          <Swiper
            className={`px-5 mb-5 ${style.swiperOutside}`}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 320px
              768: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">總排行</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/pop')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">流行音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/rock')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">搖滾音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/hiphop')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">嘻哈音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/soul')
                getTrackinfo()
              }}
            >
              <h3 className="m-0 ">靈魂音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('http://localhost:3005/api/ranking/country')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">鄉村音樂</h3>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* 表 */}
        <div className={style.outerBox}>
          <div className={style.table}>
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainer: '#22333B',
                  colorText: '#fff',
                  fontSize: '2rem',
                  borderColor: 'red',
                },
              }}
            >
              {trackinfo.length == 0 ? (
                <Skeleton />
              ) : (
                <Table
                  scroll={{ x: true }}
                  pagination={false}
                  columns={columns}
                  dataSource={updatedTrackInfo}
                  shape="square"
                />
              )}
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  )
}
