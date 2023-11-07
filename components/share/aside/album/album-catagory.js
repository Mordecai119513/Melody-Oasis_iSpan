import React from 'react'

//在next中引用圖片
import Image from 'next/image'
// 商品列表頁icon
import MusicIcon from '@/public/product/album/icon/music-icon.svg'

//
import Link from 'next/link'

export default function AlbumCatagory({ subtitle, genre }) {
  return (
    <>
      <h2>{subtitle}</h2>
      {/* {genre.map((v) => (
        <div key={v} className="d-flex justify-content-center">
          <Image className="img" src={MusicIcon} alt="music" />
          <div className="ms-1">{v}</div>
        </div>
      ))} */}
      {genre.map((v, index) => (
        <div key={v} className="d-flex justify-content-center">
          <Image className="img" src={MusicIcon} alt="music" />
          <Link
            href={`http://localhost:3000/product/album?cate=${getCategoryId(
              v
            )}`}
          >
            <div className="ms-1">{v}</div>
          </Link>
        </div>
      ))}
      <br />

      {/* <h2>曲風</h2>
      <div className="d-flex justify-content-center">
        <div className="ms-1">
          <a href="https://www.google.com/">google</a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="ms-1">搖滾音樂</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="ms-1">嘻哈音樂</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="ms-1">鄉村音樂</div>
      </div> */}
    </>
  )
}
function getCategoryId(genre) {
  switch (genre) {
    case '搖滾音樂':
      return 7
    case '流行音樂':
      return 6
    case '鄉村音樂':
      return 2
    case '嘻哈音樂':
      return 4
    default:
      return 0 // 没有匹配的分类ID
  }
}
