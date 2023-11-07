// import React from 'react'

// ttt
import React, { useEffect, useState } from 'react'

import Framework from '@/components/share/framework/framework-left-right'
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

//testtest part1
// import { useCart } from '@/hooks/use-cart' //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

// 分頁測試 part1
import CustomPagination from '@/components/evaluate/custompagination'
import MapData from '@/components/product/album/map-data'

// 表單測試 part1
import AsideContentCopy from '@/components/share/new-aside/aside-content-copy'
import AlbumCatagoryCopy from '@/components/share/new-aside/album-catagory-copy'

export default function Category() {
  // 分頁測試 part2
  const [page, setPage] = useState(1)
  const perPage = 12
  // 分頁測試 part3
  const [product, setProduct] = useState([])
  const [newProducts, setNewProducts] = useState([])

  //testtest part2
  // const { addItem } = useCart() //課程const addCourse、活動const addTicket

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
        categoryId: '',
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

  //大類按鈕 part1
  const [cate, setCate] = useState('')
  const handleSubmit2 = async (e, customValue) => {
    e.preventDefault() // 防止表单默认提交行为
    try {
      // 创建一个包含表单数据的对象
      const formData = {
        cate: customValue,
      }
      // 發送 POST 請求到後端
      const response = await axios.post(
        'http://localhost:3005/api/album/catego',
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
  // // ttt
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
  //   // const page = urlParams.get('page') || 1 // 如果未指定 page，默認為 1

  //   // 檢查是否有 'cate' 查詢參數
  //   const cate = urlParams.get('cate')
  //   let apiUrl

  //   if (cate) {
  //     // 如果有 'cate' 查詢參數，根據 'cate' 生成 API 端點
  //     apiUrl = `http://localhost:3005/api/album/cate/${cate}`
  //   } else {
  //     // 否則，生成原始的按頁面分頁的 API 端點
  //     apiUrl = `http://localhost:3005/api/album/`
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

  return (
    <>
      {/* 大類按鈕 part2 */}
      <br />
      <form onSubmit={(e) => handleSubmit2(e, 7)}>
        <div className="d-flex justify-content-center">
          <button type="submit">提交cate=7</button>
        </div>
      </form>
      <br />
      <form onSubmit={(e) => handleSubmit2(e, 6)}>
        <div className="d-flex justify-content-center">
          <button type="submit">提交cate=6</button>
        </div>
      </form>
      <br />
      <form onSubmit={(e) => handleSubmit2(e, 2)}>
        <div className="d-flex justify-content-center">
          <button type="submit">提交cate=2</button>
        </div>
      </form>
      <br />
      <form onSubmit={(e) => handleSubmit2(e, 4)}>
        <div className="d-flex justify-content-center">
          <button type="submit">提交cate=4</button>
        </div>
      </form>

      {/* jjj part-3 iii */}
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-start">
          <div>
            <input
              type="number"
              value={min}
              placeholder="1"
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              value={max}
              placeholder="999999"
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>

        <div className="d-flex flex-start">
          <div>
            <input
              type="text"
              value={start}
              placeholder="2005-12-31"
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={end}
              placeholder="2023-10-01"
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">提交</button>
      </form>
      <br />
      {/* -------------------------------------------------------------------------------------- */}
      <Framework
        leftContent=<>
          <AsideContentCopy
            type={'商品'}
            subtitle={'曲風'}
            choice={['搖滾音樂', '流行音樂', '鄉村音樂', '嘻哈音樂']}
          />
        </>
        rightContent=<>
          <div className="mt-2 ">
            <h1 className="text-center text-white">商品列表</h1>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-5">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                排序
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {/* sss part-3 start */}
                <li>
                  <button
                    class="dropdown-item"
                    onClick={() => handleSortClick('id')}
                  >
                    {sortConfig.key === 'id'
                      ? sortConfig.direction === 'ascending'
                        ? '按 ID 降序排序'
                        : '按 ID 升序排序'
                      : '按 ID 排序'}
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    onClick={() => handleSortClick('year')}
                  >
                    {sortConfig.key === 'year'
                      ? sortConfig.direction === 'ascending'
                        ? '按年份降序排序'
                        : '按年份升序排序'
                      : '按年份排序'}
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    onClick={() => handleSortClick('price')}
                  >
                    {sortConfig.key === 'price'
                      ? sortConfig.direction === 'ascending'
                        ? '按價格降序排序'
                        : '按價格升序排序'
                      : '按價格排序'}
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    onClick={() => handleSortClick('released_date')}
                  >
                    {sortConfig.key === 'released_date'
                      ? sortConfig.direction === 'ascending'
                        ? '按發行日期降序排序'
                        : '按發行日期升序排序'
                      : '按發行日期排序'}
                  </button>
                </li>
                {/* sss part-3 end */}
              </ul>
            </div>
            {/* offcanvas test */}
            <OffcanvasRightButton>
              <AsideContent
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
              ></AsideContent>
            </OffcanvasRightButton>
          </div>
          <div className="row">
            {/*   // 分頁測試 part4 */}
            <MapData
              newProducts={newProducts}
              perPage={perPage}
              setNewProducts={setNewProducts}
              product={sortedData}
              page={page}
            />
          </div>
          <div className="mt-3 d-flex justify-content-center mb-3">
            {/* vvv p-2 */}
            {/*   // 分頁測試 part5 */}
            <CustomPagination
              product={sortedData}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </div>
        </>
      ></Framework>
    </>
  )
}
