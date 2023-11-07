import React, { useEffect, useState } from 'react'
import styles from './[pid].module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import ProductDetailsPage from '@/components/share/product/product-details-page'
import CustomSwiper from '@/components/share/product/DetailPage/swiper/swiper'
import CardComponent2 from '@/components/product/course/activity-CardComponent/eventCard-2/card'
import CardComponent3 from '@/components/product/course/activity-CardComponent/eventCard-3/card'
import CardComponent4 from '@/components/product/course/activity-CardComponent/eventCard-4/card'
import CardComponent5 from '@/components/product/course/activity-CardComponent/eventCard-5/card'
import CardComponent6 from '@/components/product/course/activity-CardComponent/eventCard-6/card'
import Image from 'next/image'
import Count from '@/components/product/album/count/count'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
import { useCourseCart } from '@/hooks/use-cart-course'
import Link from 'next/link' // 從Next.js中匯入Link元件
import Evaluate from '@/components/evaluate'

// 最愛按鈕
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'

function PageEvent() {
  //購物按鈕
  const { addCourse, course, courseCart } = useCourseCart()

  const [eventData, seteventData] = useState({})

  const [courseChapter, setCourseChapter] = useState([])
  // const router = useRouter()
  // const id = router.query.pid // 獲取動態路由參數

  const router = useRouter()
  const { asPath } = router
  const pathname = asPath.split('?')[0]
  const paths = pathname.split('/')
  const { pid } = router.query
  const [isLoading, setIsLoading] = useState(true)

  // console.log(id)
  // 得到目前的網址的路徑
  // const router = useRouter()
  // const { isReady, asPath } = router
  // const pathname = asPath.split('?')[0]

  useEffect(() => {
    if (!router.isReady) return // 確保路由已經準備好

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/course/${pid}`
        )
        if (response.status === 200) {
          console.log(response.data)
          seteventData(response.data)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('資料獲取失敗:', error)
      }
    }

    const courseChapterData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3005/api/course/courseChapter/${pid}`
        )
        if (response.status === 200) {
          console.log(response.data)
          setCourseChapter(response.data)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('資料獲取失敗:', error)
      }
    }

    // if (router.isReady) {
    // 確保pid存在再進行fetch
    courseChapterData()
    fetchData()
    console.log(eventData)
    // }
  }, [pid, router.isReady]) // 注意這裡，我將pid加入到依賴列表中
  // console.log(eventData)
  // const { img, name, directions, price, teacherName } = eventData
  // console.log(eventData)
  // console.log(eventData.img)
  const imageSrc = `/product/course/course/${eventData.img}`
  const cards = [
    CardComponent2,
    CardComponent3,
    CardComponent4,
    CardComponent5,
    CardComponent6,
  ]

  // 最愛按鈕
  const { authJWT } = useAuthJWT()
  const [like, setLike] = useState(false)
  // const [userLike, setUserLike] = useState([])
  const [pData, setPData] = useState({})
  const likeClick = () => {
    if (!authJWT.isAuth) {
      router.push('/member/login')
      return false
    }
    if (like == true) {
      removeLike()
    } else {
      addLike()
    }
    setLike(!like)
  }

  async function fetchData(id) {
    try {
      // 抓取此登入使用者的id
      const response = await axios.post(
        'http://127.0.0.1:3005/api/favorite/my-favorite/course',
        {
          accessToken: Cookies.get('accessToken'),
        }
      )

      const result = response.data
      const userLike = result.favorites

      console.log(userLike)
      console.log(result)

      const includesValue = userLike.includes(id)
      console.log(includesValue)

      if (includesValue) {
        setLike(true)
      } else {
        setLike(false)
      }
    } catch (error) {
      console.log('error:' + error)
    }
  }
  useEffect(() => {
    if (eventData.course_id != undefined) {
      fetchData(parseInt(eventData.course_id))
    }
  }, [eventData.course_id])
  const addLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/' + `course/${eventData.course_id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }
  const removeLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/delete/' +
        `course/${eventData.course_id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }

  const mainContent = (
    <>
      <div className="d-flex flex-column">
        <div className=" flex-grow-1 text-primary ">
          <h2 className=" lh-lg">{eventData.name}</h2>
          <Link href={`/figure/teacher/${eventData.teacher_id}`}>
            <h3 className="lh-lg">{eventData.teachersName}</h3>
          </Link>
          <h4 className=" lh-lg">觀看限制:不線觀看次數</h4>
          {/* <h3 className=" lh-lg">{location_name}</h3>
          <h3 className=" lh-lg">{address}</h3> */}
          <h3 className="fw-bold lh-lg">NT${eventData.price}</h3>
        </div>
        <div className=" flex-column ">
          <div className="d-flex mt-3 justify-content-center">
            <div className="flex-shirnk-0 d-flex align-items-center me-1">
              <h4>購買數量:</h4>
            </div>
            <div className="flex-grow-1 ">
              <Count></Count>
            </div>
          </div>
          {/* </div> */}
          {/* 1440 */}
          <div className="d-none d-sm-block">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 ">
              <button
                className="btn btn-primary flex-fill  btn-lg me-2 "
                onClick={() => {
                  addCourse({
                    id: eventData.course_id,
                    price: eventData.price,
                    picture: imageSrc,
                    quantity: 1,
                    name: eventData.name,
                  })
                }}
              >
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom
                className="btn btn-primary flex-fill  btn-lg "
                onClick={likeClick}
              >
                加入我的最愛&nbsp;
                {/* <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" /> */}
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </buttom>
            </div>
          </div>
          {/* 390 */}
          <div className="d-block d-sm-none">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 row">
              <button className="btn btn-primary flex-fill  btn-lg me-2 col-12 ">
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom
                className="btn btn-primary flex-fill  btn-lg col-12 mt-2 "
                onClick={likeClick}
              >
                加入我的最愛&nbsp;
                {/* <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" /> */}
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </buttom>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="container">
      <>
        {/* 以下程式碼能正常傳遞 */}
        {isLoading ? (
          <div>123</div>
        ) : (
          <ProductDetailsPage
            imageSrc={imageSrc}
            imageAlt={`event image can not find`}
            mainContentArea={mainContent}
            basicIntroduceTitle="課程介紹"
            evaluationText={'商品評價'}
            evaluationArea={<Evaluate />}
            basicIntroduceText={eventData.directions}
            otherIntroductionTitle="您可以學到"
            otherIntroductionArea={
              <>
                <>
                  <div className="d-flex justify-content-start">
                    <div className={styles.GoogleMyMap}>
                      {courseChapter ? (
                        courseChapter.map((v) => {
                          return (
                            <ul
                              key={v.id}
                              className={`p-3 ${styles['lessonStyle']}`}
                            >
                              <li>{v.chapter}</li>
                            </ul>
                          )
                        })
                      ) : (
                        <div>please wait fetchData</div>
                      )}

                      {/* <GoogleMyMap
                        embedURL={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${parseFloat(
                          eventData.latitude
                        )},${parseFloat(eventData.longitude)}&zoom=14`}
                      /> */}
                    </div>
                  </div>
                </>
              </>
            }
            trackRecordText="曾經瀏覽過的商品"
            trackRecordSwiperArea={
              <>
                <CustomSwiper
                  cards={cards}
                  slidesPerView={'2'}
                  onCardClick={(ClickedCard) => {
                    window.location.href = `/product/event-management/${pid}`
                  }}
                />
              </>
            }
            recommendText="為您推薦"
            recommendSwiperArea={
              <>
                <CustomSwiper
                  cards={cards}
                  slidesPerView={'2'}
                  onCardClick={(ClickedCard) => {
                    window.location.href = `/product/event-management/${pid}`
                  }}
                />
              </>
            }
          />
        )}
      </>
    </div>
  )
}

export default PageEvent

/* <>
  <div className={styles.pageContainer}>
    <DetailSection1 data={eventData} />
    <div className={styles.pageContainer}>
    <div className={styles.breadcrumb}>
      <Breadcrumb />
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.imageBlock}>
        <img
          src="/homePage/fireball.png"
          alt="TopImg"
          className={styles.imageContainer}
        />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <main className={styles.container}>
            <div className={styles.row}>
              <div className={`${styles.col} mt-2`}>
                <div
                  className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
                >
                  <div className={styles.positionRelative}></div>
                  <div className={styles.cardBody}>
                    <h2 className={`${styles.currency} bold`}>
                      {eventData.names}
                    </h2>
                    <p className={styles.cardTextOne}>
                      {eventData.dates}
                    </p>
                    <p className={styles.cardTextTwo}>
                      {eventData.location_name}
                    </p>
                    <h2 className={`${styles.priceText} bold`}>
                      {eventData.price}
                    </h2>
                  </div>
                  <div className={styles.footer}>
                    <EventCardButton />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
    <DetailSection2
      titleIntroduce="活動介紹"
      introduceStyle="introduceStyle"
      titleIntroduceTwo="活動地點"
      contentDetail={
        <div className="iframeBlock">
          <iframe
            title="Google Map Location"
            src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${parseFloat(
              eventData.latitude
            )},${parseFloat(eventData.longitude)}&zoom=14`}
            className={styles.googleMapBlock}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      }
    >
      {eventData.descriptions}
    </DetailSection2>
  </div>
  <DetailSection3 title1="曾經瀏覽過的活動" title2="為您推薦" />
</> */
