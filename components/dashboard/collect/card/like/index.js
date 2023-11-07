import React, { useState, useEffect } from 'react'
// 卡片圖
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import { useRouter } from 'next/router'

export default function Like({ product, id, is_favorite }) {
  const router = useRouter()
  const { authJWT } = useAuthJWT()
  const [like, setLike] = useState(false)
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
  useEffect(() => {
    setLike(is_favorite)
  }, [])

  const addLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/' + `${product}/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    console.log(res)
  }
  const removeLike = async () => {
    const res = await axios.put(
      'http://127.0.0.1:3005/api/favorite/delete/' + `${product}/${id}`,
      { accessToken: Cookies.get('accessToken') }
    )
    console.log(res)
  }
  return (
    <span onClick={likeClick}>
      {like ? <AiFillHeart type="button" /> : <AiOutlineHeart type="button" />}
    </span>
  )
}
