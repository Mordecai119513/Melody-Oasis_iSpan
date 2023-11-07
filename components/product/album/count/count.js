import React, { useState } from 'react'
import styles from './style.module.css'

export default function Count() {
  ///bbb
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-info btn-sm rightangle"
            id="minus-btn"
            style={{ borderRadius: '0' }}
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <input
          type="number"
          id="qty_input"
          className={`form-control form-control-sm ${styles.numInput} fs20`}
          defaultValue={1}
          min={1}
          value={quantity}
          readOnly
        />
        <div className="input-group-prepend">
          <button
            className={`btn btn-info btn-sm  `}
            id="plus-btn"
            style={{ borderRadius: '0' }}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}

//wrapset
// <>
// <div className="row mt-3">
//   <div className="col-3 col-sm-2 d-flex align-items-center">
//     <h4>購買數量:</h4>
//   </div>
//   <div className=" col-9 col-sm-10">

//   </div>
// </div>
// </>
