import React, { useEffect, useState } from 'react'
import { Pagination, ConfigProvider } from 'antd'

// product 為資料庫資料(JSON)
// perPage 為每頁顯示數量，在下方設定 const perPage = 自訂頁數
// setPage 用戶點擊的分頁數字， page 為當前頁數
// 需再父組件設置 const [page, setPage] = useState(1)
export default function Custompagination({ product, perPage, setPage, page }) {
  // 控制單頁顯示數量(切割陣列，如1~10，slice(0,10))
  const [newProducts, setNewProducts] = useState([])
  useEffect(() => {
    const newArray = product.slice((page - 1) * perPage, page * perPage)
    setNewProducts(newArray)
  }, [page, product])

  // 點擊分頁時，同時影響分頁內容與分頁active樣式
  const [current, setCurrent] = useState(1)

  // 避免重整時，分頁active樣式在第一頁，但內容仍在其他頁
  useEffect(() => {
    setCurrent(1)
  }, [])

  // 以下為Custompagination 主code
  return (
    <>
      <div className="text-center ">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: '#C6AC8F',
                colorText: 'white',
                colorBgTextHover: '#C6AC8F',
                itemLinkBg: '#C6AC8F',
                borderRadius: 50,
                itemSize: 23,
                motionDurationSlow: 1,
              },
            },
          }}
        >
          <Pagination
            pageSize={perPage}
            total={product.length}
            onChange={(newPage) => {
              setPage(newPage)
              setCurrent(newPage)
            }}
            current={current}
            newProduct={newProducts}
            showSizeChanger={false}
          />
          {/* total資料總數、10筆為1頁  */}
          {/* defaultCurrent={2} 預設頁數 */}
          {/*onChange接受2個參數(page、pagesize)  */}
          {/* pageSize 預設10筆 */}
          {/* CustomPagination 點擊的數字會往下傳，需要在子組件Pagination加上onChange事件,onChange事件接受page參數 */}
          {/* onChange={(page)=>{console.log(page)} 輸出為你點擊的頁碼 */}
          {/* 要用slice產生1~10，要帶入0、10 */}
          {/* 要用slice產生11~20，要帶11、20 */}
        </ConfigProvider>
      </div>
    </>
  )
}
