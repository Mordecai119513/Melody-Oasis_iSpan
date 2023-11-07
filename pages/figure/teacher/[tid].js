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
import style from './style.module.scss'
//demo
// import NewCardDemo1 from '@/components/product/album/demo/new-card-demo/new-card-demo'
// import NewCardDemo2 from '@/components/product/album/demo/new-card-demo/new-card-demo-2'
// import NewCardDemo3 from '@/components/product/album/demo/new-card-demo/new-card-demo-3'
// import NewCardDemo4 from '@/components/product/album/demo/new-card-demo/new-card-demo-4'
// import NewCardDemo5 from '@/components/product/album/demo/new-card-demo/new-card-demo-5'
// import NewCardDemo6 from '@/components/product/album/demo/new-card-demo/new-card-demo-6'
import CardComponent2 from '@/components/product/course/activity-CardComponent/eventCard-2/card'
import CardComponent3 from '@/components/product/course/activity-CardComponent/eventCard-3/card'
import CardComponent4 from '@/components/product/course/activity-CardComponent/eventCard-4/card'
import CardComponent5 from '@/components/product/course/activity-CardComponent/eventCard-5/card'
import CardComponent6 from '@/components/product/course/activity-CardComponent/eventCard-6/card'

import SingerCard1 from '@/components/product/album/demo/teacher-demo/teacher-demo1/singer-card-demo'
import SingerCard2 from '@/components/product/album/demo/teacher-demo/teacher-demo2/singer-card-demo'
import SingerCard3 from '@/components/product/album/demo/teacher-demo/teacher-demo3/singer-card-demo'
import SingerCard4 from '@/components/product/album/demo/teacher-demo/teacher-demo4/singer-card-demo'
import SingerCard5 from '@/components/product/album/demo/teacher-demo/teacher-demo5/singer-card-demo'

import Aaaa from '@/components/product/course/course-card/course'
export default function Singer() {
  //ccc
  const router = useRouter()
  const { tid } = router.query
  const [teacherData, setTeacherData] = useState({})
  const [courseOfTeacher, setCourseOfTeacher] = useState([])
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
      axios
        .get(`http://localhost:3005/api/teacher/${tid}/courses`)
        .then((response) => {
          setCourseOfTeacher(response.data)
          // console.log(response.data)
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
    SingerCard2,
    SingerCard3,
    SingerCard4,
    SingerCard5,
  ]
  return (
    <>
      <FtPageTop
        imageSrc={imageSrc}
        name={teacherData.name}
        type={'老師'}
        intro={teacherData.introduce}
      />
      <div className="container">
        <div className="row">
          <div className=" bg-success my-3 text-center col-12">
            <h2 className="text-white lh-lg">{teacherData.name}的課程</h2>
          </div>
          {/*  */}
          {courseOfTeacher.map((course, index) => (
            <div className="col-6" key={index}>
              <Aaaa
                course_id={course.course_id}
                img={course.img}
                name={course.name}
                directions={course.directions}
                teacher={course.teacher}
                price={course.price}
              />
            </div>
          ))}

          {/*  */}
        </div>
      </div>
      {/* 390 */}
      <div className="container d-sm-none">
        <SubDiv
          title={'為你推薦'}
          swiperDivPosition={
            <CustomSwiper
              cards={cards}
              slidesPerView={'1'}
              onCardClick={(ClickedCard) => {
                window.location.href = `/product/event-management/${tid}`
              }}
            />
          }
          style={{ width: '100%', height: '460px', overflow: 'hidden' }}
        />
      </div>
      {/* 1440 */}
      <div className="container d-none d-sm-block">
        <SubDiv
          title={'為你推薦'}
          swiperDivPosition={
            <CustomSwiper
              cards={cards}
              slidesPerView={'2'}
              onCardClick={(ClickedCard) => {
                window.location.href = `/product/event-management/${tid}`
              }}
            />
          }
        />
      </div>
      {/* 390 */}
      <div className="container d-sm-none">
        <SubDiv
          title={'曾經瀏覽過的老師'}
          swiperDivPosition={
            <CustomSwiper cards={singers} slidesPerView={'2'} />
          }
        />
      </div>
      {/* 1440 */}
      <div className="container d-none d-sm-block">
        <SubDiv
          title={'曾經瀏覽過的老師'}
          swiperDivPosition={
            <CustomSwiper cards={singers} slidesPerView={'4'} />
          }
        />
      </div>
    </>
  )
}
