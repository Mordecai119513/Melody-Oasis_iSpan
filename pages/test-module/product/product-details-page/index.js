import React from 'react'
import ProductDetailsPage from '@/components/share/product/product-details-page'
// 自己頁面要用的資料---------------------------------
import Image from 'next/image'

import Count from '@/components/product/album/count/count'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

export default function ProductDetailsPageText() {
  // http://localhost:3000/test-module/product/product-details-page
  const imageSrc = '/product/album/R-4444384-1540104232-3310.jpg'

  const mainContent = (
    <>
      <div className="d-flex flex-column">
        <div className=" flex-grow-1 text-primary ">
          <h2 className=" lh-lg">title</h2>
          <h3 className=" lh-lg">artist</h3>
          <h4 className=" lh-lg">發行媒體: format</h4>
          <h4 className=" lh-lg">分類: country</h4>
          <h4 className=" lh-lg">風格: 123</h4>
          <h4 className=" lh-lg">發行日期: released_date</h4>
          <h4 className="lh-lg">發行公司: albumData.label</h4>
          <h3 className="fw-bold lh-lg">NT$price</h3>
        </div>
        <div className=" flex-column ">
          <div className="d-flex mt-3 justify-content-center">
            <div className="flex-shirnk-0 d-flex align-items-center me-1">
              <h4>購買數量:</h4>
            </div>
            <div className="flex-grow-1 ">
              <Count></Count>
            </div>
          </div>
          {/* </div> */}
          {/* 1440 */}
          <div className="d-none d-sm-block">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 ">
              <button className="btn btn-primary flex-fill  btn-lg me-2 ">
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom className="btn btn-primary flex-fill  btn-lg ">
                加入我的最愛&nbsp;
                <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" />
              </buttom>
            </div>
          </div>
          {/* 390 */}
          <div className="d-block d-sm-none">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 row">
              <button className="btn btn-primary flex-fill  btn-lg me-2 col-12 ">
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom className="btn btn-primary flex-fill  btn-lg col-12 mt-2 ">
                加入我的最愛&nbsp;
                <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" />
              </buttom>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  const otherIntroduction = (
    <>
      <table className="text-info">
        <thead>
          <tr>
            <th>曲目</th>
            <th>曲名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>だからその手を離して</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ハートも濡れるナンバー 〜Stay Tonight〜</td>
          </tr>
        </tbody>
      </table>
    </>
  )

  return (
    <>
      <ProductDetailsPage
        imageSrc={imageSrc}
        imageAlt={`Album Cover for Album 12`}
        mainContentArea={mainContent}
        basicIntroduceTitle="專輯介紹"
        basicIntroduceText="Coldplay： Music Of The Spheres World Tour - delivered by DHL 酷玩樂團2023高雄演唱會11/12緊急加場還記得2017年那一夜在大雨中的感動與激情嗎?睽違六年!他們回來了!史上最暢銷的樂團之一 英倫搖滾神團Coldplay首度降臨高雄全球最受矚目 前所未見 以永續和減碳為訴求的話題巡演讓你的每一個跳動與尖叫都成為音樂宇宙中的能量2023年11月11日、12日 高雄國家體育場 與Coldplay相約星際漫遊"
        otherIntroductionTitle="曲目介紹"
        otherIntroductionArea={otherIntroduction}
        evaluationText="商品評價"
        evaluationArea={<>123</>}
        trackRecordText="曾經瀏覽過的商品"
        trackRecordSwiperArea={<>123456</>}
        recommendText="為您推薦"
        recommendSwiperArea={<>123</>}
      />
      {/* imageSrc,
  imageAlt,
  mainContentArea,
  basicIntroduceTitle,
  basicIntroduceText,
  otherIntroductionTitle,
  otherIntroductionArea,
  evaluationText,
  evaluationArea,
  trackRecordText,
  trackRecordSwiperArea = <></>,
  recommendText,
  recommendSwiperArea = <></>, */}
    </>
  )
}
