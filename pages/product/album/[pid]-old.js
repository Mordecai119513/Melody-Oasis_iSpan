//ccc
// import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState, useEffect } from 'react'

//在next中引用圖片
import Image from 'next/image'

//商品列表頁 測試圖
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
// import HeartFillIcon from '../../../public/product/album/icon/heart-fill-icon.svg'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
// import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
// CSS
import styles from './style.module.css'

//組件
// import AlbumProductCard from '../../../components/product/album/card/album-product-card'
import Tracklist from '@/components/product/album/tracklist/tracklist'
import Count from '@/components/product/album/count/count'

//bbb part1
import Evaluate from '@/components/evaluate'
// ddd
import CardContent from '@/components/product/album/demo/card-content/card-content'
//ggg
import SingerCardContent from '@/components/product/album/singer/card-content'
//ddd ggg
import CustomSwiper from '@/components/product/album/swiper/swiper'

//hhh
import Genre from '@/components/product/album/genre/genre'

//mmm part1-start part2嵌在ccc裡面
const languageMapping = {
  Taiwan: '華語',
  China: '華語',
  UK: '西洋',
  US: '西洋',
  Europe: '西洋',
  Japan: '日語',
}
const formatMapping = {
  Vinyl: '黑膠',
  CD: 'CD',
  Cassette: '錄音帶',
}
//mmm part1-end

export default function First() {
  //ccc
  const router = useRouter()
  const { pid } = router.query
  const [albumData, setAlbumData] = useState({})
  //ccc
  useEffect(() => {
    if (pid) {
      axios
        .get(`http://localhost:3005/api/album/${pid}`)
        .then((response) => {
          //mmm part2-start
          const mappedData = response.data[0]
          mappedData.country = languageMapping[mappedData.country] || '未知語言'
          mappedData.format = formatMapping[mappedData.format] || '未知格式'
          //mmm part2-end
          setAlbumData(response.data[0])
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [pid])
  //ccc
  const imageSrc = `/product/album/${albumData.cover_image}`

  //ddd
  const cards = [
    CardContent,
    CardContent,
    CardContent,
    CardContent,
    CardContent,
  ]
  // ggg
  const singers = [
    SingerCardContent,
    SingerCardContent,
    SingerCardContent,
    SingerCardContent,
    SingerCardContent,
  ]

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-1 d-none d-sm-block bg-success "></div>
          <div className=" col-12 col-sm-10 bg-success text-white">
            {/* <div className="d-flex mt-4 mb-4 justify-content-start">
              <div className="text-warning fw-bold">路徑</div>
              <div className="text-warning fw-bold">/</div>
              <div className="text-white fw-bold">目前位置</div>
            </div> */}
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-sm-6 bg-success">
                {/* <Image
                  className={`img  ${styles.mw651} `}
                  src={TheFirstAlbumCover}
                  alt="album-artist-album-title"
                /> */}
                <Image
                  src={imageSrc}
                  alt={`Album Cover for Album ${pid}`}
                  className={`img  ${styles.mw651} `}
                  width={300} // 设置图片宽度
                  height={300} // 设置图片高度
                  layout="intrinsic"
                />
              </div>
              {/* <div className=""> */}
              <div className=" col-12 col-sm-6 bg-secondary mh651r d-flex flex-column justify-content-between   text-primary ">
                {/*爆版，上面那行拿掉 pt-2 ps-2 pe-2 */}
                <div className=" flex-grow-1 text-primary ">
                  <h2 className=" lh-lg">{albumData.title}</h2>
                  <h3 className=" lh-lg">{albumData.artist}</h3>
                  <h4 className=" lh-lg">發行媒體: {albumData.format}</h4>
                  <h4 className=" lh-lg">分類: {albumData.country}</h4>
                  <h4 className=" lh-lg">
                    風格: <Genre id={albumData.id} />
                  </h4>
                  <h4 className=" lh-lg">
                    發行日期: {albumData.released_date}
                  </h4>
                  <h4 className="lh-lg">發行公司: {albumData.label}</h4>
                  <h3 className="fw-bold lh-lg">NT${albumData.price}</h3>
                </div>
                <div className="">
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
                        <Image
                          className={`${styles.invert}`}
                          src={CartIcon}
                          alt="cart-icon-dark"
                        />
                      </button>
                      <buttom className="btn btn-primary flex-fill  btn-lg ">
                        加入我的最愛&nbsp;
                        <Image
                          className={`${styles.invert}`}
                          src={HeartDefaultIcon}
                          alt="heart-default-icon-dark"
                        />
                      </buttom>
                    </div>
                  </div>
                  {/* 390 */}
                  <div className="d-block d-sm-none">
                    <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 row">
                      <button className="btn btn-primary flex-fill  btn-lg me-2 col-12 ">
                        加入購物車&nbsp;
                        <Image
                          className={`${styles.invert}`}
                          src={CartIcon}
                          alt="cart-icon-dark"
                        />
                      </button>
                      <buttom className="btn btn-primary flex-fill  btn-lg col-12 mt-2 ">
                        加入我的最愛&nbsp;
                        <Image
                          className={`${styles.invert}`}
                          src={HeartDefaultIcon}
                          alt="heart-default-icon-dark"
                        />
                      </buttom>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 bg-success">&nbsp;</div>
              {/* 區塊1 */}
              <div className="ps-5 pe-5 mt-4">
                <div>
                  <div className="d-flex justify-content-sm-start justify-content-center">
                    <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2  text-center">
                      專輯介紹
                    </h3>
                  </div>
                  <div className="mt-3 lh-lg">{albumData.description}</div>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-sm-start justify-content-center">
                    <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2 ">
                      曲目清單
                    </h3>
                  </div>
                  <div>
                    {/* 表格(原來) */}
                    {/* <table>
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
                    </table> */}
                    <br />
                    {/* 表格(從discogs抓)(aaa part3) */}
                    {/* <table>
                      <thead>
                        <tr>
                          <th>曲目</th>
                          <th>曲名</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tracklist.map((track, index) => (
                          <tr key={index}>
                            <td>{track.position}</td>
                            <td>{track.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table> */}
                    <Tracklist discogsId={albumData.discogs_id} />
                    {/* <Tracklist /> */}
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="d-flex justify-content-sm-start justify-content-center">
                    <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2">
                      商品評價
                    </h3>
                  </div>
                  {/* bbb part2 */}
                  <Evaluate />
                </div>
              </div>
              <div className="col-12 bg-success">&nbsp;</div>
              {/* 區塊2 */}
              <div className="ps-5 mt-4 pe-5">
                <div className="mt-3 d-none d-sm-block">
                  <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2">
                    曾經瀏覽過的商品
                  </h3>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-row-reverse">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">pre</button> */}
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="row mt-3 mb-4">
                        {/* <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard> */}
                        {/* ddd 1440*/}
                        <CustomSwiper cards={cards} slidesPerView={'4'} />
                      </div>
                    </div>
                    <div className="col-1 d-flex">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">next</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-sm-none">
                  <div className="d-flex justify-content-sm-start justify-content-center">
                    <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2">
                      曾經瀏覽過的商品
                    </h3>
                  </div>
                  <div className="row mt-3">
                    <div className="col-2 d-flex flex-row-reverse">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">pre</button> */}
                      </div>
                    </div>
                    <div className="col-8 bg-success">
                      <div>
                        <div className="mt-3 mb-4">
                          {/* <CardContent></CardContent> */}
                          {/* ddd  390*/}
                          <CustomSwiper cards={cards} slidesPerView={'1'} />
                        </div>
                      </div>
                    </div>
                    <div className="col-2 d-flex">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">next</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-none d-sm-block">
                  <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2">
                    為您推薦
                  </h3>
                  <div className="row mt-3">
                    <div className="col-1 d-flex flex-row-reverse">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">pre</button> */}
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="row mt-3 mb-4">
                        {/* <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard>
                        <AlbumProductCard></AlbumProductCard> */}
                        {/* ddd 1440*/}
                        <CustomSwiper cards={cards} slidesPerView={'4'} />
                      </div>
                      {/* <br /> */}
                      {/* ggg */}
                      <CustomSwiper cards={singers} slidesPerView={'4'} />
                    </div>
                    <div className="col-1 d-flex">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">next</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 d-sm-none">
                  <div className="d-flex justify-content-sm-start justify-content-center">
                    <h3 className="bg-warning text-black d-inline ps-3 pe-3 pt-2 pb-2">
                      為您推薦
                    </h3>
                  </div>
                  <div className="row mt-3">
                    <div className="col-2 d-flex flex-row-reverse">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">pre</button> */}
                      </div>
                    </div>
                    <div className="col-8 bg-success">
                      <div>
                        <div className="mt-3 mb-4">
                          {/* <CardContent></CardContent> */}
                        </div>
                        {/* ddd  390*/}
                        <CustomSwiper cards={cards} slidesPerView={'1'} />
                      </div>
                    </div>
                    <div className="col-2 d-flex">
                      <div className="align-self-center">
                        {/* <button className="btn btn-dark">next</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-none d-sm-block bg-success"></div>
          <div className="col-12 bg-success">&nbsp;</div>
        </div>
      </div>
    </>
  )
}
