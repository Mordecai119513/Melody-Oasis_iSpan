import React from 'react'
// 網址導向用
import { useRouter } from 'next/router'
// 導入鉤子
import { useAuthJWT } from '@/hooks/use-auth-jwt'
export default function LoginState() {
  // 網址導向用
  const router = useRouter()
  // 取得全站authJWT資料
  const { authJWT } = useAuthJWT()

  //   判斷登入狀態
  if (authJWT.isAuth) {
    // 有登入後導向首頁
    router.push('/')
  }
  return (
    <>
      <h1>我沒有登入</h1>
    </>
  )
}
