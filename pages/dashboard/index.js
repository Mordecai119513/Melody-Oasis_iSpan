import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Dashboard() {
  const router = useRouter()

  // 在组件挂载后执行初始页面导航
  useEffect(() => {
    router.push('/dashboard/profile') // 通过路由跳转到'/other-page'
  }, [])
  return <></>
}
