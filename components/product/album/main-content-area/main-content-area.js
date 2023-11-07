import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Genre from '@/components/product/album/genre/genre'
import Count from '@/components/product/album/count/count'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
// import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

import styles from './style.module.css'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

// 最愛按鈕
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import { useRouter } from 'next/router'

export default function MainContentArea({
  images,
  title,
  artist,
  artistId,
  format,
  country,
  id,
  released_date,
  label,
  price,
}) {
  //購物按鈕
  const { addItem, cart, items } = useCart()

  // 最愛按鈕
  const { authJWT } = useAuthJWT()
  const router = useRouter()
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
        'http://127.0.0.1:3005/api/favorite/my-favorite/album',
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
      'http://127.0.0.1:3005/api/favorite/' + `album/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }
  const removeLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/delete/' + `album/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }

  return (
    <>
      <div className=" flex-grow-1 text-primary ">
        <h2 className=" lh-lg">{title}</h2>
        <h3 className=" lh-lg">
          <Link
            href={`/figure/singer/${artistId}`}
            className="text-decoration-none link-primary"
          >
            {artist}
          </Link>
        </h3>
        <h4 className=" lh-lg">發行媒體: {format}</h4>
        <h4 className=" lh-lg">分類: {country}</h4>
        <h4 className=" lh-lg">
          風格: <Genre id={id} />
        </h4>
        <h4 className=" lh-lg">發行日期: {released_date}</h4>
        <h4 className="lh-lg">發行公司: {label}</h4>
        <h3 className="fw-bold lh-lg">NT${price}</h3>
      </div>
      <div className="">
        <div className="d-flex mt-3 justify-content-center">
          <div className="flex-shirnk-0 d-flex align-items-center me-1">
            <h4 className="text-primary">購買數量:</h4>
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
                addItem({
                  id: id,
                  price: price,
                  picture: `/product/album/${images}`,
                  quantity: 1,
                  title: title,
                })
              }}
            >
              加入購物車&nbsp;
              <Image
                className={`${styles.invert}`}
                src={CartIcon}
                alt="cart-icon-dark"
              />
            </button>
            <buttom
              className="btn btn-primary flex-fill  btn-lg "
              onClick={likeClick}
            >
              加入我的最愛&nbsp;
              {/* <Image
                className={`${styles.invert}`}
                src={HeartDefaultIcon}
                alt="heart-default-icon-dark"
              /> */}
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </buttom>
          </div>
        </div>
        {/* 390 */}
        <div className="d-block d-sm-none">
          <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 row">
            <button className="btn btn-primary flex-fill  btn-lg me-2 col-12 ">
              加入購物車&nbsp;
              <Image
                className={`${styles.invert}`}
                src={CartIcon}
                alt="cart-icon-dark"
              />
            </button>
            <buttom
              className="btn btn-primary flex-fill  btn-lg col-12 mt-2 "
              onClick={likeClick}
            >
              加入我的最愛&nbsp;
              {/* <Image
                className={`${styles.invert}`}
                src={HeartDefaultIcon}
                alt="heart-default-icon-dark"
              /> */}
              {like ? <AiFillHeart /> : <AiOutlineHeart />}
            </buttom>
          </div>
        </div>
      </div>
    </>
  )
}
