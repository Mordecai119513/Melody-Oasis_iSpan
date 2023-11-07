import React, { useEffect, useState } from 'react'
import Writecomment from './writecomment'

export default function WriteArea({
  userData,
  getProduct,
  targetTableCondition,
  shouldReload,
  setShouldReload,
  pid,
}) {
  const [orderGet, setOrderGet] = useState([]) //
  // console.log(pid)
  const orderCheck = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3005/api/evaluate/orderCheck/${targetTableCondition}/${pid}`
      )
      const data = await res.json()
      // 設定到狀態中 -> 會觸發重新渲染(re-render)
      // console.log(data)
      setOrderGet(data)
    } catch (e) {
      alert('訂單連線失敗')
      console.error(e)
    }
  }
  const hasOrderArray = orderGet.filter((v) => v.member_id === userData.id)
  const hasOrder = hasOrderArray.length > 0 ? true : false

  // 確認是否留過言
  const [commentGet, setCommentGet] = useState([]) //訂單資料
  const commentCheck = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3005/api/evaluate/commentCheck/${targetTableCondition}/${pid}`
      )
      const data = await res.json()
      // 設定到狀態中 -> 會觸發重新渲染(re-render)
      // console.log(data)
      setCommentGet(data)
    } catch (e) {
      alert('留言連線失敗')
      console.error(e)
    }
  }
  // console.log(commentGet)
  const hasCommentArray = commentGet.filter((v) => v.member_id === userData.id)
  const hasComment = hasCommentArray.length > 0 ? true : false

  useEffect(() => {
    orderCheck()
    commentCheck()
  }, [pid])
  // console.log(hasOrder)
  // console.log(hasComment)

  return (
    <>
      {hasComment ? (
        <div className="text-center text-sm-start">您已留言過</div>
      ) : hasOrder ? (
        <Writecomment
          userData={userData}
          getProduct={getProduct}
          pid={pid}
          targetTableCondition={targetTableCondition}
          shouldReload={shouldReload}
          setShouldReload={setShouldReload}
        />
      ) : (
        <div className="text-center">您尚未購買此商品</div>
      )}
    </>
  )
}
