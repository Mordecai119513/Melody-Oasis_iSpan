// import React from 'react'

// ttt
import React, { useEffect, useState } from 'react'

import Framework from '@/components/share/framework/framework-left-right'
import AlbumProductCard from '@/components/product/album/card/album-product-card'

// CSS
import styles from './style.module.css'
//
import OffcanvasRightButton from '@/components/share/aside/offcanvas-right-button'
//
import AsideContent from '@/components/share/aside/aside-content'
//
import AlbumCatagory from '@/components/share/aside/album/album-catagory'
//
import Collect from '@/components/share/aside/album-and-course/collect'
// vvv p-1
import Pagination from '@/components/product/album/pagination/pagination'
//
import CardContent from '@/components/product/album/card/card-content/card-content'

//jjj part-1 iii
import axios from 'axios'

//qwert
import Image from 'next/image'
import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
import TheFlatAlbumCover from '@/public/product/album/R-459346-1409631172-6122.jpg'
import TheLongAlbumCover from '@/public/product/album/R-319865-1157067037.jpg'
import FourthAlbumCover from '@/public/product/album/R-1279478-1527737794-4656.jpg'
// R-319865-1157067037.jpg //扁
// R-459346-1409631172-6122.jpg //長
//R-1279478-1527737794-4656.jpg
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

import NewCard from '@/components/product/album/new-card/new-card.js'

//
import EventAsideContentMoMo from '@/components/share/product/event-management/EventAsideContentMo/EventAsideContentMo'
import NewAsideContent from '@/components/share/new-aside/new-aside-content'

//分頁測試 part1
import Custompagination from '@/components/evaluate/custompagination'

import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'

export default function Category() {
  //分頁測試 part2
  const [page, setPage] = useState(1) //給分頁用的prop
  let pageVar = 12 // 每頁顯示幾筆資料

  // jjj part-2 search axios post
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault() // 防止表单默认提交行为
    try {
      // 创建一个包含表单数据的对象
      const formData = {
        min: min,
        max: max,
        start: start,
        end: end,
      }
      // 發送 POST 請求到後端
      const response = await axios.post(
        'http://localhost:3005/api/album/search',
        formData
      )
      setAlbumData(response.data)
      console.log('后端响应：', response.data)
    } catch (error) {
      // 处理错误
      console.error('发送请求时出错：', error)
    }
  }

  //iii search axios get
  // const [min, setMin] = useState('')
  // const [max, setMax] = useState('')
  // const [start, setStart] = useState('')
  // const [end, setEnd] = useState('')

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   // 构建查询参数对象
  //   const params = {
  //     min: min || 0,
  //     max: max || 999999,
  //     start: start,
  //     end: end,
  //   }
  //   try {
  //     // 使用 GET 请求发送查询参数
  //     const response = await axios.get(
  //       'http://localhost:3005/api/album/search',
  //       {
  //         params: params,
  //       }
  //     )

  //     setAlbumData(response.data)
  //     console.log('后端响应：', response.data)
  //   } catch (error) {
  //     console.error('发送请求时出错：', error)
  //   }
  // }

  //sss p-0
  // ttt hhh ppp rrr
  const [albumData, setAlbumData] = useState([])
  // ttt
  useEffect(() => {
    // 使用 Fetch API 從 API 中獲取 JSON 資料
    fetch('http://localhost:3005/api/album/')
      .then((response) => response.json())
      .then((data) => {
        // data 是包含多個 album 資訊的陣列
        setAlbumData(data)
      })
      .catch((error) => {
        console.error('發生錯誤：', error)
      })
  }, [])

  //hhh
  // useEffect(() => {
  //   // 解析網址的查詢參數
  //   const urlParams = new URLSearchParams(window.location.search)
  //   const page = urlParams.get('page') || 1 // 如果未指定 page，默認為 1

  //   // 建立 API 端點
  //   const apiUrl = `http://localhost:3005/api/album/page/${page}`

  //   // 使用 Fetch API 從 API 中獲取 JSON 資料
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // data 是包含多個 album 資訊的陣列
  //       setAlbumData(data)
  //     })
  //     .catch((error) => {
  //       console.error('發生錯誤：', error)
  //     })
  // }, [])

  //ppp
  // useEffect(() => {
  //   // 解析網址的查詢參數
  //   const urlParams = new URLSearchParams(window.location.search)
  //   const page = urlParams.get('page') || 1 // 如果未指定 page，默認為 1

  //   // 檢查是否有 'cate' 查詢參數
  //   const cate = urlParams.get('cate')
  //   let apiUrl

  //   if (cate) {
  //     // 如果有 'cate' 查詢參數，根據 'cate' 生成 API 端點
  //     apiUrl = `http://localhost:3005/api/album/cate/${cate}`
  //   } else {
  //     // 否則，生成原始的按頁面分頁的 API 端點
  //     apiUrl = `http://localhost:3005/api/album/page/${page}`
  //   }

  //   // 使用 Fetch API 從 API 中獲取 JSON 資料
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // data 是包含多個 album 資訊的陣列
  //       setAlbumData(data)
  //     })
  //     .catch((error) => {
  //       console.error('發生錯誤：', error)
  //     })
  // }, [])

  //rrr
  // useEffect(() => {
  //   // 解析網址的查詢參數
  //   const urlParams = new URLSearchParams(window.location.search)
  //   const page = urlParams.get('page') || 1 // 如果未指定 page，默認為 1
  //   const cate = urlParams.get('cate')
  //   let apiUrl

  //   if (cate && page) {
  //     // 如果有 'cate' 和 'page' 查詢參數，生成相應的 API 端點
  //     apiUrl = `http://localhost:3005/api/album/cate/${cate}/page/${page}`
  //   } else if (cate) {
  //     // 如果只有 'cate' 查詢參數，使用默認的頁面 1
  //     apiUrl = `http://localhost:3005/api/album/cate/${cate}/page/1`
  //   } else if (page) {
  //     // 如果只有 'page' 查詢參數，生成按頁面分頁的 API 端點
  //     apiUrl = `http://localhost:3005/api/album/page/${page}`
  //   }

  //   // 使用 Fetch API 從 API 中獲取 JSON 資料
  //   if (apiUrl) {
  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // data 是包含多個 album 資訊的陣列
  //         setAlbumData(data)
  //       })
  //       .catch((error) => {
  //         console.error('發生錯誤：', error)
  //       })
  //   }
  // }, [])

  //sss p-1
  const [sortConfig, setSortConfig] = useState({
    key: 'id', // 默认按照 id 排序
    direction: 'ascending', // 默认升序
  })

  //sss part-2 start
  // 处理排序按钮点击事件
  const handleSortClick = (key) => {
    let direction = 'ascending' // 默认升序

    // 如果已经按照该属性排序，切换排序顺序
    if (sortConfig.key === key) {
      direction =
        sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
    }
    // 更新排序配置
    setSortConfig({ key, direction })
  }
  // 根据排序配置对数据进行排序
  const sortedData = [...albumData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })
  //sss part-2 end

  //xxx part-1
  const [selectedValues, setSelectedValues] = useState([]) // 用于存储所选的值
  // 处理核取框的更改
  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      // 如果值已经在选定的值中，则从选定的值中移除它
      setSelectedValues(selectedValues.filter((v) => v !== value))
    } else {
      // 否则，将值添加到选定的值中
      setSelectedValues([...selectedValues, value])
    }
  }

  //分頁測試 part3

  //分頁測試 part4
  //   const cards = (
  //     <>

  //     </>
  //   )

  return (
    <>
      <Framework
        leftContent=<>
          {/* <AsideContent
            type={'商品'}
            subtitle={'語系'}
            choice={['西洋', '華語', '日語']}
            genreDivPosition={
              <AlbumCatagory
                subtitle="曲風"
                genre={['搖滾音樂', '流行音樂', '鄉村音樂', '嘻哈音樂']}
              />
            }
            collectDivPosition={<Collect />}
          ></AsideContent> */}
          <NewAsideContent
            type={'商品'}
            subtitle={'語系'}
            choice={['西洋', '華語', '日語']}
          />
          <hr />
          <hr />
          <hr />
          {/* <EventAsideContentMoMo
            type={'商品'}
            subtitle={'語系'}
            choice={['西洋', '華語', '日語']}
          /> */}
        </>
        rightContent=<>
          <div className="row">
            {sortedData.map((album, index) => (
              <div
                className={` justify-content-center align-items-center card col-6 col-sm-3 bg-transparent border-0  mt-2 mb-2 ${
                  selectedValues.length === 0 ||
                  selectedValues.includes(String(album.language_id))
                    ? ''
                    : 'd-none'
                }`}
                key={album.id}
              >
                <NewCard
                  key={index}
                  id={album.id}
                  title={album.title}
                  artist={album.artist}
                  price={album.price}
                  coverImage={album.cover_image}
                  releasedDate={album.released_date}
                />
              </div>
            ))}
            <Custompagination
              product={sortedData}
              perPage={pageVar}
              page={page}
              setPage={setPage}
            />
          </div>
        </>
      ></Framework>
    </>
  )
}
