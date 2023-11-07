import Head from 'next/head'
import { Inter } from 'next/font/google'
import Section1 from '@/components/homePage/section1/section1'
import Section2 from '@/components/homePage/section2/section2'
import Section3 from '@/components/homePage/section3/section3'
import Section4 from '@/components/homePage/section4/section4'
import Section5 from '@/components/homePage/section5/section5'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <main style={{ backgroundColor: '#22333B' }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
    </>
  )
}

// 新分支推送測試-3
