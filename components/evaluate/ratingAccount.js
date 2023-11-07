import { ConfigProvider } from 'antd'

import ScoreBar from './scoreBar'

export default function ratingAccount({ target, product }) {
  // console.log(product)

  // 找出指定星數的人數
  const starReviews = product.filter((item) => item.stars === target)
  const totalCount = starReviews.length
  // 計算百分比
  // 乘與3是因為長條太短，加大基數看起來較長
  const percent = ((3 * totalCount) / product.length) * 100
  return (
    <>
      {/* 各分數人數 */}
      <div>
        <span className="text-info ">({totalCount})</span>
      </div>
      {/* 長條圖 */}
      <div style={{ flex: 1 }}>
        <ScoreBar percent={percent} />
      </div>
    </>
  )
}
