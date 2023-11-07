import React from 'react'
// 導入鉤子
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
import Cookies from 'js-cookie'
export default function Logout() {
  // 取得全站authJWT資料
  const { setAuthJWT } = useAuthJWT()
  async function logoutbtn() {
    const res = await axios.post(
      'http://127.0.0.1:3005/api/member/logout',
      { accessToken: Cookies.get('accessToken') },
      {
        withCredentials: true, // save cookie in browser
      }
    )

    // console.log(res.data)
    // console.log(res.data.user)
    if (res.data.message === 'success') {
      Cookies.set('user', res.data.user)
      Cookies.remove('accessToken')
      setAuthJWT({
        isAuth: false,
        userData: {
          account: '',
          address: '',
          birthday: '',
          created_at: '',
          email: '',
          gender: '',
          id: 0,
          name: '',
          phone: '',
          photo: '',
          status: '',
          iat: 0,
          exp: 0,
        },
      })
    }
  }
  return (
    <>
      <button className="btn btn-secondary" onClick={logoutbtn}>
        logout
      </button>
    </>
  )
}
