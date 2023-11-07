import React, { useState } from 'react'
import MyStepsComponent from '@/components/product/cart/ant';
// import CartPage from '@/components/product/cart/cartPage';


function ProgressBar() {

  const [totalAmount, setTotalAmount] = useState(0);// 跟踪总计金额

  const updateTotalAmount = (subtotal, isSelected) => {
    // 如果 isSelected 为 true，添加小计金额；如果为 false，减去小计金额
    setTotalAmount((prevTotal) =>
      isSelected ? prevTotal - subtotal : prevTotal + subtotal
    );
  };
  return (
    <>
      {/* 外層巢狀scss */}
      <div className='pingYeh'>
        <div className="main">
          {/* <h1 className="topName">購物明細</h1>          */}
           <MyStepsComponent/>
        </div>
      </div>

    </>
  );
}
export default ProgressBar;