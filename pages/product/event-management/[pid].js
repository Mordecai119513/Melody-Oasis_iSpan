import React, { useEffect, useState } from 'react'
import styles from './[pid].module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import ProductDetailsPage from '@/components/share/product/product-details-page'
import CustomSwiper from '@/components/share/product/DetailPage/swiper/swiper'
import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
import CardComponent5 from '@/components/product/event-management/activity-CardComponent/eventCard-5/cards'
import CardComponent6 from '@/components/product/event-management/activity-CardComponent/eventCard-6/cards'
import Image from 'next/image'
import Count from '@/components/product/album/count/count'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
import GoogleMyMap from '@/components/product/event-management/googleMyMap/googleMyMap'
import { useTicketCart } from '@/hooks/use-cart-ticket'

// 最愛按鈕
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'

function PageEvent() {
  const [eventData, seteventData] = useState({})
  // const router = useRouter()
  // const id = router.query.pid // 獲取動態路由參數

  const router = useRouter()
  const { asPath } = router
  const pathname = asPath.split('?')[0]
  const paths = pathname.split('/')
  const id = paths[paths.length - 1]
  console.log(id)
  //加入購物車
  const { addTicket } = useTicketCart()
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
          `http://localhost:3005/api/product/event-management/${id}`
        )
        console.log(response.data)
        seteventData(response.data)
      } catch (error) {
        console.error('資料獲取失敗:', error)
      }
    }

    if (id) {
      // 確保id存在再進行fetch
      fetchData()
    }
  }, [id]) // 注意這裡，我將id加入到依賴列表中
  // console.log(eventData)

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
        'http://127.0.0.1:3005/api/favorite/my-favorite/event',
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
    if (id != undefined) {
      fetchData(parseInt(id))
    }
  }, [id])
  const addLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/' + `event/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }
  const removeLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/delete/' + `event/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }

  const {
    images,
    names,
    launch_date,
    price,
    descriptions,
    dates,
    location_name,
    address,
  } = eventData

  const imageSrc = `/product/event-management/eventBanner/${images}`
  const cards = [
    CardComponent2,
    CardComponent3,
    CardComponent4,
    CardComponent5,
    CardComponent6,
  ]
  const mainContent = (
    <>
      <div className="d-flex flex-column">
        <div className=" flex-grow-1 text-primary ">
          <h2 className=" lh-lg">{names}</h2>
          <h3 className=" lh-lg">{dates}</h3>
          <h3 className=" lh-lg">{location_name}</h3>
          <h3 className=" lh-lg">{address}</h3>
          <h3 className="fw-bold lh-lg">NT${price}</h3>
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
              <button className="btn btn-primary flex-fill  btn-lg me-2 " onClick={() => {
              addTicket({
                id: id,
                price: price,
                picture:`/product/event-management/eventBanner/${images}`,
                quantity: 1,
                name: names,
              })
            }}>
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
                {/* <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" />
                 */}
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
        {!eventData ? (
          <div>123</div>
        ) : (
          <ProductDetailsPage
            imageSrc={imageSrc}
            imageAlt={`event image can not find`}
            mainContentArea={mainContent}
            basicIntroduceTitle="活動介紹"
            basicIntroduceText={descriptions}
            otherIntroductionTitle="活動地點"
            otherIntroductionArea={
              <>
                <>
                  <div className="d-flex justify-content-center">
                    <div className={styles.GoogleMyMap}>
                      <GoogleMyMap
                        embedURL={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${parseFloat(
                          eventData.latitude
                        )},${parseFloat(eventData.longitude)}&zoom=14`}
                      />
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
                  slidesPerView={'1'} // 在小於390px的屏幕上只顯示一張卡片
                  className="d-block d-sm-none"
                  onCardClick={(ClickedCard) => {
                    window.location.href = `/product/event-management/${id}`
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
                    window.location.href = `/product/event-management/${id}`
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
