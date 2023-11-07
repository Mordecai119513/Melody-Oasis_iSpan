import { useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css';
import '@/styles/globals.scss'
import DefaultLayout from '@/components/layout/default-layout'
import 'swiper/css'
import 'swiper/css/navigation'
import { AuthProviderJWT } from '@/hooks/use-auth-jwt'
import { CartProvider } from '@/hooks/use-cart'
import {CartCourseProvider} from '@/hooks/use-cart-course'
import { CartTicketProvider } from '@/hooks/use-cart-ticket';
import {OrderProvider} from '@/hooks/use-order'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 要document物件出現後才能導入 bootstrap的js函式庫
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案
  // 對應`components/layout/default-layout/index.js`
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <AuthProviderJWT>
      
      <CartTicketProvider>
      <CartCourseProvider>
      <CartProvider>
      <OrderProvider>
        {getLayout(<Component {...pageProps} />)}
      </OrderProvider>
      </CartProvider>
      </CartCourseProvider>
      </CartTicketProvider>
    </AuthProviderJWT>
  )
}
