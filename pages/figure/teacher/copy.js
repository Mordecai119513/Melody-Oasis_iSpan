//ccc
import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import React from 'react'
// import styles from './style.module.css'
//
// import Image from 'next/image'

//
//ggg
import SingerCardContent from '@/components/product/album/singer/card-content'
//ddd ggg
import CustomSwiper from '@/components/product/album/swiper/swiper'

//jgjgjg
import SubDiv from '@/components/figure/sub-div'

//bvbvbv
import FtPageTop from '@/components/figure/ft-page-top/ft-page-top'

//demo
import NewCardDemo1 from '@/components/product/album/demo/new-card-demo/new-card-demo'
import NewCardDemo2 from '@/components/product/album/demo/new-card-demo/new-card-demo-2'
import NewCardDemo3 from '@/components/product/album/demo/new-card-demo/new-card-demo-3'
import NewCardDemo4 from '@/components/product/album/demo/new-card-demo/new-card-demo-4'
import NewCardDemo5 from '@/components/product/album/demo/new-card-demo/new-card-demo-5'
import NewCardDemo6 from '@/components/product/album/demo/new-card-demo/new-card-demo-6'
import CardComponent2 from '@/components/product/course/activity-CardComponent/eventCard-2/card'
import CardComponent3 from '@/components/product/course/activity-CardComponent/eventCard-3/card'
import CardComponent4 from '@/components/product/course/activity-CardComponent/eventCard-4/card'
import CardComponent5 from '@/components/product/course/activity-CardComponent/eventCard-5/card'
import CardComponent6 from '@/components/product/course/activity-CardComponent/eventCard-6/card'

import SingerCard1 from '@/components/product/album/demo/singer-demo/singer-card-demo'

export default function Singer() {
  //ccc
  const router = useRouter()
  const { tid } = router.query
  const [teacherData, setTeacherData] = useState({})
  const imageSrc = `/figure/teacher/${teacherData.photo}`
  //ccc
  useEffect(() => {
    if (tid) {
      axios
        .get(`http://localhost:3005/api/teacher/${tid}`)
        .then((response) => {
          setTeacherData(response.data[0])
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [tid])

  //ddd
  const cards = [
    CardComponent2,
    CardComponent3,
    CardComponent4,
    CardComponent5,
    CardComponent6,
  ]
  //ggg
  const singers = [
    SingerCard1,
    SingerCardContent,
    SingerCardContent,
    SingerCardContent,
    SingerCardContent,
  ]
  return (
    <>
      <FtPageTop
        imageSrc={imageSrc}
        name={teacherData.name}
        type={'老師'}
        intro={teacherData.introduce}
      />
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
      ---------------------------------------------------------------------------------------------
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
