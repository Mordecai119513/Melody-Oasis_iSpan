import { useCourseCart } from '@/hooks/use-cart-course'
import { useEffect, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export default function CourseList() {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { courses, courseCart, removeItem } = useCourseCart()

  // 修正 Next hydration 錯誤
  // https://stackoverflow.com/questions/72673362/error-text-content-does-not-match-server-rendered-html
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null
  }
  // fix end
  return (
    <div className='container'>
      <div className="thead row text-center">
        <h1 className='mt-3'>精選課程</h1>
        <div className="horizontal-line"></div>
        <div className="col"></div>
        <div className="col">名稱</div>
        <div className="col">單價</div>
        <div className="col">小計</div>
        <div className="col">移除</div>
      </div>
      {courseCart.map((v, i) => {
        return (
          <div className="tbody row text-center align-items-center" key={v.id}>
            {/* <div>{v.course_id}</div> */}
            <div className="col-3 d-flex justify-content-center align-items-center">
              <img src={`${v.picture}`} height={50} alt="" />
            </div>
            <div className="col" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{v.name}</div>
            <div className="col">${v.price}元</div>
            <div className="col">${v.itemTotal}元</div>
            <div className="col">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  removeItem(v.id);
                }}
              >
                <FaRegTrashCan/>
              </button>
            </div>
          </div>
        );
      })}
      <div>
        數量: {courses.totalItems} / 總共: ${courses.cartTotal}元
        <div className="horizontal-line"></div>
      </div>
    </div>
    
  )
}