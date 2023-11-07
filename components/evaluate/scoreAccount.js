import { React } from 'react'
import RatingAccount from './ratingAccount'
import { AiFillStar } from 'react-icons/ai'
import evaluateStyle from './evaluate.module.scss'

export default function ScoreAccount({ product }) {
  const starCount = [5, 4, 3, 2, 1]
  //5帶入=>抓出5星的人數、總數、計算百分比(帶入scoreBar)
  // 4
  // 3
  // 2
  // 1
  return (
    <>
      <div className={`col-9 ${evaluateStyle.scoreBar}`}>
        {starCount.map((row) => (
          <>
            <div className=" d-flex" key={row}>
              <div className="col-auto">
                {/* 1~5星 */}
                <div className={evaluateStyle.starAndAccount}>
                  <div style={{ width: '90px' }}>
                    {[...Array(row)].map((_, index) => (
                      <AiFillStar key={index} color="#C6AC8F" />
                    ))}
                  </div>
                </div>
              </div>
              <RatingAccount product={product} target={row} />
            </div>
          </>
        ))}
      </div>
    </>
  )
}
