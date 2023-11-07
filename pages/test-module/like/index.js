import React, { useState, useEffect } from 'react'
// http://localhost:3000/test-module/like
// 卡片圖
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import { useRouter } from 'next/router'
export default function Like() {
  const router = useRouter()
  const { authJWT } = useAuthJWT()
  const [like, setLike] = useState(false)
  // const [userLike, setUserLike] = useState([])
  const [pData, setPData] = useState({ id: 1 })
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
  const addLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/' + `album/${pData.id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }
  const removeLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/delete/' + `album/${pData.id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    // console.log(res)
  }

  useEffect(() => {
    async function fetchData() {
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
        console.log(pData.id)

        const includesValue = userLike.includes(pData.id)
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

    fetchData()
  }, [])

  return (
    <>
      <button type="button" onClick={likeClick}>
        like
        {like ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </>
  )
}
