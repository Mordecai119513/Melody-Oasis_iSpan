import React from 'react'
import Breadcrumb from '@/components/share/breadcrumb'
// import { Image } from 'antd'
import Image from 'next/image'
export default function ProductDetailsPage({
  imageSrc,
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
  recommendSwiperArea = <></>,
}) {
  return (
    <div className="container">
      <div className="breadCrumbs">
        <Breadcrumb />
      </div>
      <div className="row">
        {/* mainContentImg */}
        <div
          // className={`col-12 col-sm-6 bg-success d-flex justify-content-center align-items-start`}
          className="col-12 col-sm-6 bg-success d-flex justify-content-center align-items-center position-relative"
        >
          {/* 桌機圖片 */}
          <Image
            className="d-sm-block d-none"
            src={imageSrc}
            alt={imageAlt}
            // width={636} // 设置图片宽度
            // height={475} // 设置图片高度
            fill={true}
            // layout="fixed"
            // layout="intrinsic"
            // layout="responsive"
          />
          {/* 手機圖片 */}
          <Image
            className="d-sm-none d-block"
            src={imageSrc}
            alt={imageAlt}
            width={636} // 设置图片宽度
            height={475} // 设置图片高度
            // fill={true}
            // layout="fixed"
            layout="intrinsic"
            // layout="responsive"
          />
        </div>
        {/* mainContent */}
        <div className={`col-12 col-sm-6 bg-secondary`}>{mainContentArea}</div>
        {/* introduce */}
        <div
          className="col-12 my-4 pb-5"
          style={{ backgroundColor: '#212A2E' }}
        >
          {/* 基本介紹標題 */}
          <div className="d-flex justify-content-center p-5">
            <h2 className=" text-info d-inline   text-center m-0">
              {basicIntroduceTitle}
            </h2>
          </div>
          {/* 基本介紹內容 */}
          <div className="px-2">
            <p className="text-primary text-break">{basicIntroduceText}</p>
          </div>
          {/* 其他介紹標題 */}
          <div className="d-flex justify-content-center p-5">
            <h2 className=" text-info d-inline   text-center m-0">
              {otherIntroductionTitle}
            </h2>
          </div>
          {/* 其他介紹內容 */}
          <div className="px-2">{otherIntroductionArea}</div>
        </div>
        {/* 評價區 */}
        {evaluationArea == undefined ? null : (
          <div
            className="col-12 my-4 pb-2"
            style={{ backgroundColor: '#212A2E' }}
          >
            <div className="d-flex justify-content-center p-5">
              <h2 className=" text-info d-inline   text-center m-0">
                {evaluationText}
              </h2>
            </div>
            {evaluationArea}
          </div>
        )}

        {/* 推薦區 */}
        <div
          className="col-12 my-4 pb-2"
          style={{ backgroundColor: '#212A2E' }}
        >
          {/* 過往紀錄 */}
          <div className="d-flex justify-content-center p-5">
            <h2 className=" text-info d-inline   text-center m-0">
              {trackRecordText}
            </h2>
          </div>
          {/* <div className="d-inline-block px-3 py-2 m-3 bg-warning">
            <h3 className=" text-black m-0">{trackRecordText}</h3>
          </div> */}
          <div>{trackRecordSwiperArea}</div>
          {/* 推薦商品 */}
          <div className="d-flex justify-content-center p-5">
            <h2 className=" text-info d-inline   text-center m-0">
              {recommendText}
            </h2>
          </div>
          {/* <div className="d-inline-block px-3 py-2 m-3 bg-warning">
            <h3 className=" text-black m-0">{recommendText}</h3>
          </div> */}
          <div>{recommendSwiperArea}</div>
        </div>
      </div>
    </div>
  )
}
