import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'

import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'

export default function SingerAlbumRow(props) {
  const [albumsOfSinger, setAlbumsOfSinger] = useState([])
  // const imageSrc = `/product/album/${album.cover_image}`

  useEffect(() => {
    if (props.id) {
      axios
        .get(`http://localhost:3005/api/singer/${props.id}/albums`)
        .then((response) => {
          setAlbumsOfSinger(response.data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [props.id])
  return (
    <>
      {albumsOfSinger.map((album, index) => (
        <div className="d-flex justify-content-start mt-3 mb-3" key={index}>
          <div className={`${styles.sq200} `}>
            <Link href={`/product/album/${album.id}`}>
              <Image
                className={`img ${styles.coverSq}`}
                src={`http://localhost:3000/product/album/${album.cover_image}`}
                alt="album-artist-album-title"
                width={500} // 设置图片宽度
                height={500} // 设置图片高度
              />
            </Link>
          </div>
          <div className="ms-5 align-self-center">
            <h3 className="text-white lh-lg text-start">{album.title}</h3>
            <h6 className="text-white-50 lh-lg text-start">{album.artist}</h6>
          </div>
        </div>
      ))}
    </>
  )
}
