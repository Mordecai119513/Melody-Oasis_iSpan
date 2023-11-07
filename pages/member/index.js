import { useEffect } from 'react'
import { useRouter } from 'next/router'
// 導入鉤子
import { useAuthJWT } from '@/hooks/use-auth-jwt'
export default function Member() {
  const router = useRouter()
  // 取得全站authJWT資料
  const { authJWT } = useAuthJWT()
  // 在组件挂载后执行初始页面导航
  useEffect(() => {
    // 使用 router.push 进行初始路由导航
    if (authJWT.isAuth) {
      router.push('/dashboard/profile') // 通过路由跳转到'/other-page'
    } else {
      router.push('/member/login')
    }
  }, [])
  return <></>
}
