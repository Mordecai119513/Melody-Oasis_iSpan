import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'

export default function FtPageTop({ imageSrc, name, type, intro }) {
  return (
    <>
      {/* 歌手/老師 共同物件1 atart */}
      <div className="container-fluid">
        <div className={`row ${styles.mainBg} py-2`}>
          <div
            // className="d-flex justify-content-evenly bg-primary"
            className={`d-flex justify-content-evenly align-items-center mt-2 mb-2`}
          >
            <div className="d-flex justify-content-start">
              {/* 圖 */}
              <div className={`${styles.imgwrap}`}>
                <Image
                  className={`img card-img-top ${styles.w160} rounded-circle`}
                  //
                  //
                  //
                  src={imageSrc}
                  //
                  //
                  //
                  alt="singer"
                  width={500} // 设置图片宽度
                  height={500} // 设置图片高度
                />
              </div>
              {/* 名字 */}
              <div className=" text-white mt-sm-3 bg-transparent ms-4 d-flex align-items-center">
                {/* right part */}
                {/* <h1 className="m-2">歌手名/老師名(singer-name/teacher-name)</h1> */}
                {/*  */}
                {/*  */}
                {/*  */}
                <h1 className=" m-2 lh-lg">{name}</h1>
                {/*  */}
                {/*  */}
                {/*  */}
                {/* <div className="bg-secondary m-5">XXX位粉絲收藏</div> */}
              </div>
            </div>
            {/* 按鈕 1440*/}
            <div className="  d-none d-sm-block">
              <div className="d-flex  flex-column align-items-end ">
                <br />
                <br />
                <br />
                <br />
                &nbsp;
                {/* <button className="btn btn-primary">收藏歌手/教師</button> */}
              </div>
            </div>
          </div>
          <div
            // className="d-flex flex-row-reverse d-sm-none"
            className={`d-flex flex-row-reverse d-sm-none mt-sm-2 mb-sm-2 ${styles.btnRowSmBg}`}
          >
            {/* 按鈕 390 */}
            {/* <button className="btn btn-primary">收藏歌手/教師</button> */}
          </div>
        </div>
      </div>
      {/* 歌手/老師 共同物件1 end */}
      {/* 歌手/老師 共同物件2 atart */}
      <div className="container">
        <div className="row">
          <div className="  text-center">
            <div className="  d-inline-flex ">
              {/*  */}
              {/*  */}
              {/*  */}
              <h2 className="text-white m-3 lh-lg">{type}簡介</h2>
              {/*  */}
              {/*  */}
              {/*  */}
            </div>
            {/*  */}
            {/*  */}
            {/*  */}
            <h3 className="text-start text-white lh-lg ">{intro}</h3>
            {/*  */}
            {/*  */}
            {/*  */}
            {/* 1440 */}
            <div className="d-flex flex-row-reverse my-2">
              {/* <button className="btn btn-primary d-none d-sm-block">
                點我看更多
              </button> */}
            </div>
            {/* 390 */}
            <div className="d-flex justify-content-center my-2">
              {/* <button className="btn btn-primary d-block d-sm-none">
                點我看更多
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* 歌手/老師 共同物件2 end */}
    </>
  )
}
