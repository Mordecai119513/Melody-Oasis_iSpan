import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Product() {
  const router = useRouter()

  // 在组件挂载后执行初始页面导航
  useEffect(() => {
    router.push('/product/album') // 通过路由跳转到'/other-page'
  }, [])
  return <></>
}
