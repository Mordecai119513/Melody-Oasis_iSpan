//ccc
// import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState, useEffect } from 'react'

//在next中引用圖片
import Image from 'next/image'

//商品列表頁 測試圖
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
// import HeartFillIcon from '../../../public/product/album/icon/heart-fill-icon.svg'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
// import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
// CSS
import styles from './style.module.css'

//組件
// import AlbumProductCard from '../../../components/product/album/card/album-product-card'
import Tracklist from '@/components/product/album/tracklist/tracklist'
import Count from '@/components/product/album/count/count'

//bbb part1
import Evaluate from '@/components/evaluate'
// ddd
import CardContent from '@/components/product/album/demo/card-content/card-content'
//ggg
import SingerCardContent from '@/components/product/album/singer/card-content'
//ddd ggg
import CustomSwiper from '@/components/product/album/swiper/swiper'

//hhh
import Genre from '@/components/product/album/genre/genre'

//demo
import AlbumCard1 from '@/components/product/album/demo/album-demo/album-card-demo'
import AlbumCard2 from '@/components/product/album/demo/album-demo/album-card-demo-2'
import AlbumCard3 from '@/components/product/album/demo/album-demo/album-card-demo-3'
import AlbumCard4 from '@/components/product/album/demo/album-demo/album-card-demo-4'
import AlbumCard5 from '@/components/product/album/demo/album-demo/album-card-demo-5'
import AlbumCard6 from '@/components/product/album/demo/album-demo/album-card-demo-6'
import AlbumCard7 from '@/components/product/album/demo/album-demo/album-card-demo-7'

//mmm part1-start part2嵌在ccc裡面
const languageMapping = {
  Taiwan: '華語',
  China: '華語',
  UK: '西洋',
  US: '西洋',
  Europe: '西洋',
  Japan: '日語',
}
const formatMapping = {
  Vinyl: '黑膠',
  CD: 'CD',
  Cassette: '錄音帶',
}
//mmm part1-end

//
import Wrap from '@/components/share/product/product-details-page/index.js'
import MainContentArea from '@/components/product/album/main-content-area/main-content-area'
export default function First() {
  //ccc
  const router = useRouter()
  const { pid } = router.query
  const [albumData, setAlbumData] = useState({})
  //ccc
  useEffect(() => {
    if (pid) {
      axios
        .get(`http://localhost:3005/api/album/${pid}`)
        .then((response) => {
          //mmm part2-start
          const mappedData = response.data[0]
          mappedData.country = languageMapping[mappedData.country] || '未知語言'
          mappedData.format = formatMapping[mappedData.format] || '未知格式'
          //mmm part2-end
          setAlbumData(response.data[0])
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [pid])
  //ccc
  const imageSrc = `/product/album/${albumData.cover_image}`

  //ddd
  const cards = [
    AlbumCard1,
    AlbumCard2,
    AlbumCard3,
    AlbumCard4,
    AlbumCard5,
    AlbumCard6,
    AlbumCard7,
  ]

  const cardsTwo = [
    AlbumCard5,
    AlbumCard2,
    AlbumCard7,
    AlbumCard1,
    AlbumCard6,
    AlbumCard3,
    AlbumCard4,
  ]
  return (
    <>
      <Wrap
        imageSrc={imageSrc}
        imageAlt={`Album Cover for Album ${pid}`}
        mainContentArea={
          <MainContentArea
            images={albumData.cover_image}
            title={albumData.title}
            artist={albumData.artist}
            artistId={albumData.artist_id}
            format={albumData.format}
            country={albumData.country}
            id={albumData.id}
            released_date={albumData.released_date}
            label={albumData.label}
            price={albumData.price}
          />
        }
        basicIntroduceTitle={'專輯介紹'}
        basicIntroduceText={albumData.description}
        otherIntroductionTitle={'曲目清單'}
        otherIntroductionArea={
          <Tracklist id={albumData.id} discogsId={albumData.discogs_id} />
        }
        evaluationText={'商品評價'}
        evaluationArea={<Evaluate />}
        trackRecordText={'曾經瀏覽過的商品'}
        trackRecordSwiperArea={
          <>
            <div className="d-none d-sm-block">
              <CustomSwiper cards={cards} slidesPerView={'4'} />
            </div>
            <div className="d-sm-none">
              <CustomSwiper cards={cards} slidesPerView={'2'} />
            </div>
          </>
        }
        recommendText={'為您推薦'}
        recommendSwiperArea={
          <>
            <div className="d-none d-sm-block">
              <CustomSwiper cards={cardsTwo} slidesPerView={'4'} />
            </div>
            <div className="d-sm-none">
              <CustomSwiper cards={cardsTwo} slidesPerView={'2'} />
            </div>
          </>
        }
      />
    </>
  )
}
