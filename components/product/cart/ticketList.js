import { useTicketCart } from '@/hooks/use-cart-ticket'
import { useEffect, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export default function List() {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { tickets, ticketItems, plusOne, minusOne, removeItem } = useTicketCart()

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
      <div>
      <div className="thead row text-center">
        <h1 className='mt-3'>音樂祭票</h1>
          <div className="horizontal-line"></div>
          <div className="col"></div>
          <div className="col">名稱</div>
          <div className="col">單價</div>
          <div className="col">數量</div>
          <div className="col">小計</div>
          <div className="col">移除</div>
        </div>

        
          {ticketItems.map((v, i) => {
            return (
              <div className="tbody row text-center align-items-center" key={v.id}>
                <div className="col d-none">{v.location_id}</div>
                <div className="col"> <img width={120} height={60} src={`${v.picture}`} /></div>
                <div className="col" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{v.name}</div>
                <div className="col">${v.price}元</div>
                <div className="col">
                  <div className="btn-group mr-2" role="group">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        minusOne(v.id)
                      }}
                    >
                      -
                    </button>  
                    <button type="button" className="btn btn-light">
                      {v.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        plusOne(v.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col">${v.itemTotal}元</div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    <FaRegTrashCan/>
                  </button>
                </div>
              </div>
            )
          })}
        
      </div>
      <div>
        數量: {tickets.totalItems} / 總共: ${tickets.cartTotal}元
        <br />
        {tickets.isEmpty && '購物車為空'}
        <div className="horizontal-line"></div>
      </div>
    </div>
  )
}
