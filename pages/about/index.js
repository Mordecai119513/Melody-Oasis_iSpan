import BreadCrumb from '@/components/share/breadcrumb'
import Image from 'next/image'
import React from 'react'
import styles from './about.module.scss'

export default function Aboutus() {
  return (
    <>
      <div className="container bg-success my-0">
        {/* 麵包屑 */}
        <div className="breadCrumbs mt-2">
          <BreadCrumb />
        </div>
        <div className=" text-info py-5">
          <div className="d-sm-flex my-5 px-2">
            <div className={`col-sm-6 mx-3 `}>
              <div className={`text-center my-3 ${styles.logo}`}>
                <div className={`w-100 d-sm-none `}>
                  <Image
                    src="/information/blackLogo.svg"
                    width={240}
                    height={300}
                    className=" "
                  />
                </div>
                <div className={`w-100 d-none d-sm-block ${styles.logo} pt-5  ps-3`}>
                  <Image
                    src="/information/blackLogo.svg"
                    width={500}
                    height={480}
                    className=" "
                  />
                </div>
              </div>
            </div>
            <div className={`col-sm-6 ${styles.intro}`}>
              <div className="mb-4">
                <h2 className=" bg-warning text-info text-center p-3">
                  關於律洲
                </h2>
                <h3 className="p-3">
                  “每個人都有一首屬於自己的歌。”這是律洲音樂的核心理念。無論你是音樂創作者還是樂迷，這裡都有你想要的。
                  我們相信，音樂是聯繫人們心靈的最佳方式。律洲音樂是一個多元、包容和創新的音樂社區，旨在激發人們對音樂的熱愛和創造力。透過專輯、音樂祭及線上音樂課程，我們致力於為音樂創作者和樂迷提供最佳的音樂體驗。
                </h3>
              </div>
              <div className="my-3">
                <h2 className=" bg-warning text-info text-center p-3">
                  關於我們
                </h2>
                <div className="p-3">
                  <p>
                    律洲音樂於2023年由一群年輕的音樂愛好者兼前端工程師創立。我們希望透過這個網站，來更多與人分享音樂的美好。以下是我們的團隊成員
                    :
                  </p>
                  <p>
                    陳思愷
                    :組長，除負責領導團隊外，負責音樂活動的相關資訊與訂票系統
                  </p>
                  <p>余宗銘 :團隊技術長，負責會員註冊與登入，以及總技術支援</p>
                  <p>陳炫志 :負責排行榜，與資料庫連動，並負責會員的評價系統</p>
                  <p>洪翊翔 :負責商品的資訊與撰寫頁面</p>
                  <p>周秉曄 :負責購物車的結帳流程</p>
                  <p>鄒碩桓 :負責講師的資訊與頁面</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
