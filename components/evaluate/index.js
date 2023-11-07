import Star from './star'
import evaluateStyle from './evaluate.module.scss'
import ScoreAccount from './scoreAccount'
import Comment from './comment'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CustomPagination from './custompagination'
import { useAuthJWT } from '../../hooks/use-auth-jwt'
import Image from 'next/image'
import Link from 'next/link'
import WriteArea from './writeArea'

export default function Evaluate() {
  const router = useRouter()
  const [product, setProduct] = useState([])
  const { pid } = router.query
  const [newProducts, setNewProducts] = useState([])
  const [page, setPage] = useState(1) //給分頁用的prop
  const { authJWT, setAuthJWT } = useAuthJWT()
  const userData = authJWT.userData
  // console.log(userData)
  const [shouldReload, setShouldReload] = useState(false) //子組件writecomment要用的，在父組件設定狀態，子組件抓取狀態
  let pageVar = 4 // 每頁顯示幾筆資料

  const targetTableCondition = router.asPath.split('/')[2]
  // 抓取評價資料庫資料
  const getProduct = async (pid) => {
    try {
      const res = await fetch(
        `http://localhost:3005/api/evaluate/${targetTableCondition}/${pid}`
      )
      const data = await res.json()
      // 設定到狀態中 -> 會觸發重新渲染(re-render)
      setProduct(data)
    } catch (e) {
      // 這裡可以作錯誤處理

      // setTimeout(() => {
      //   setIsLoading(false)
      // }, 2000)
      alert('伺服器連線失敗')
      console.error(e)
    }
  }
  // 以pid為參數，抓取評價資料庫資料，當pid改變時，重新抓取資料
  useEffect(() => {
    const { pid } = router.query
    getProduct(pid && Object.keys(pid).length > 0 ? pid : 1)
  }, [pid, shouldReload])
  // console.log(product)

  // 計算平均分數
  const totalStars = product.reduce((acc, review) => acc + review.stars, 0)
  const averageStars = Math.ceil(totalStars / product.length)

  // 控制留言送出動畫

  return (
    // 在productALBUM抽取pid->傳入個元件->各元件取的id後，再去指定資料表抓資料
    <>
      <div className="bg-success">
        <div className={`${evaluateStyle.outsideBox} d-flex `}>
          <div className={`col-sm-6 px-2`}>
            {/* 總評分、星星bar */}
            {/* 顯示平均分數averageStars */}

            <div className={` ${evaluateStyle.score}`}>
              <h3 className={evaluateStyle.title}>總評分</h3>
              <div className="text-center">
                <p className="text-warning ">
                  {isNaN(averageStars) ? '尚無評分' : `${averageStars}/5分`}
                </p>
                <Star value={averageStars} disabled={true} />
                {/*  各分數總數與長條圖*/}
                {/* 在這頁抓到該商品評價json檔，全部傳入ScoreAccount組件中 */}
              </div>
              <ScoreAccount product={product} />
              <div></div>
              <h3 className={evaluateStyle.title}>我要評論</h3>
              <div className={`${evaluateStyle.commentWriteBody}`}>
                <div>
                  {/* 寫下評論 */}
                  {/* TODO在未登入前要顯示"必須登入後才能留驗" */}
                  <div className="text-info row ">
                    <div className={`${evaluateStyle.commentWrite}`}>
                      <div>
                        <div className="d-flex">
                          {/* 評價星數、留言區 */}
                          <div className="row mx-1 col">
                            <div className="h2 d-flex align-items-center justify-content-center justify-content-sm-start">
                              {/* 留言區頭像 */}
                              <div>
                                <div className={`${evaluateStyle.userPhoto}`}>
                                  {authJWT.isAuth ? (
                                    <Image
                                      src={
                                        userData.photo !== ''
                                          ? `/member/image/${userData.photo}`
                                          : '/member/image/default.png'
                                      }
                                      width={60}
                                      height={60}
                                      alt="Oasis"
                                    />
                                  ) : (
                                    <Image
                                      src="/member/image/default.png"
                                      width={60}
                                      height={60}
                                      alt="Oasis"
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="ms-3">
                                {authJWT.isAuth
                                  ? `${userData.name}`
                                  : '尚未登入'}
                              </div>
                            </div>
                            <div >
                              {authJWT.isAuth ? (
                                <>
                                  <WriteArea
                                    userData={userData}
                                    product={product}
                                    getProduct={getProduct}
                                    pid={pid}
                                    targetTableCondition={targetTableCondition}
                                    shouldReload={shouldReload}
                                    setShouldReload={setShouldReload}
                                  />
                                </>
                              ) : (
                                <>
                                  Oops!請先登入才能評價喔! &nbsp;&nbsp;
                                  <Link href="/member/login">按我登入</Link>

                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-sm-6 d-flex row justify-content-sm-start  justify-content-center
`}><h3 className={evaluateStyle.title}>評論區</h3>
            <div className={evaluateStyle.commentBody}>
              {/* 觀看他人留言 */}
              <div className={`text-info`}>
                {/* 在這頁抓到該商品評價json檔，全部傳入ScoreAccount組件中 */}
                <Comment
                  newProducts={newProducts}
                  perPage={pageVar}
                  setNewProducts={setNewProducts}
                  product={product}
                  page={page}
                />

              </div>
              <div className="">
                {/* 留言分頁 */}
                {product.length > 0 ? (
                  <CustomPagination
                    product={product}
                    perPage={pageVar}
                    page={page}
                    setPage={setPage}
                    pid={pid}
                  />
                ) : (
                  ''
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
