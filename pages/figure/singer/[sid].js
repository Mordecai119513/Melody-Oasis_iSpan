import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CustomSwiper from '@/components/product/album/swiper/swiper'
import SingerAlbumRow from '@/components/figure/singer-album/singer-album-row'
import SubDiv from '@/components/figure/sub-div'
import FtPageTop from '@/components/figure/ft-page-top/ft-page-top'

//demo
import AlbumCard1 from '@/components/product/album/demo/album-demo/album-card-demo'
import AlbumCard2 from '@/components/product/album/demo/album-demo/album-card-demo-2'
import AlbumCard3 from '@/components/product/album/demo/album-demo/album-card-demo-3'
import AlbumCard4 from '@/components/product/album/demo/album-demo/album-card-demo-4'
import AlbumCard5 from '@/components/product/album/demo/album-demo/album-card-demo-5'
import AlbumCard6 from '@/components/product/album/demo/album-demo/album-card-demo-6'
import AlbumCard7 from '@/components/product/album/demo/album-demo/album-card-demo-7'

import SingerCard1 from '@/components/product/album/demo/singer-demo/singer-card-demo'
import SingerCard2 from '@/components/product/album/demo/singer-demo/singer-card-demo-2'
import SingerCard3 from '@/components/product/album/demo/singer-demo/singer-card-demo-3'
import SingerCard4 from '@/components/product/album/demo/singer-demo/singer-card-demo-4'
import SingerCard5 from '@/components/product/album/demo/singer-demo/singer-card-demo-5'

export default function Singer() {
  //ccc
  const router = useRouter()
  const { sid } = router.query
  const [singerData, setSingerData] = useState({})
  const imageSrc = `/figure/singer/${singerData.img}`
  //ccc
  useEffect(() => {
    if (sid) {
      axios
        .get(`http://localhost:3005/api/singer/${sid}`)
        .then((response) => {
          setSingerData(response.data[0])
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [sid])

  const cards = [
    AlbumCard4,
    AlbumCard3,
    AlbumCard6,
    AlbumCard7,
    AlbumCard2,
    AlbumCard5,
    AlbumCard1,
  ]
  const singers = [
    SingerCard1,
    SingerCard2,
    SingerCard3,
    SingerCard4,
    SingerCard5,
  ]
  return (
    <>
      <FtPageTop
        imageSrc={imageSrc}
        name={singerData.singer}
        type={'歌手'}
        intro={singerData.intro}
      />
      <div className="container">
        <SubDiv
          title={'歌手專輯'}
          swiperDivPosition={<SingerAlbumRow id={singerData.id} />}
        />
      </div>
      {/* 390 */}
      <div className="container d-sm-none">
        <SubDiv
          title={'為你推薦'}
          swiperDivPosition={<CustomSwiper cards={cards} slidesPerView={'2'} />}
        />
      </div>
      {/* 1440 */}
      <div className="container d-none d-sm-block">
        <SubDiv
          title={'為你推薦'}
          swiperDivPosition={<CustomSwiper cards={cards} slidesPerView={'4'} />}
        />
      </div>
      {/* 390 */}
      <div className="container d-sm-none">
        <SubDiv
          title={'曾經瀏覽過的歌手'}
          swiperDivPosition={
            <CustomSwiper cards={singers} slidesPerView={'2'} />
          }
        />
      </div>
      {/* 1440 */}
      <div className="container d-none d-sm-block">
        <SubDiv
          title={'曾經瀏覽過的歌手'}
          swiperDivPosition={
            <CustomSwiper cards={singers} slidesPerView={'4'} />
          }
        />
      </div>
    </>
  )
}
