//購物車組件
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import List from '@/components/product/cart/list'
import CourseList from './courseList';
import TicketList from './ticketList'
// import Product from "@/components/product/cart/product"
import { useCart } from '@/hooks/use-cart'
import { useCourseCart } from '@/hooks/use-cart-course'
import { useTicketCart } from '@/hooks/use-cart-ticket';
import axios from 'axios';
import { Dropdown } from 'rsuite';


export default function CartPage({ totalAmount, setTotalAmount }) {

  // const [totalAmount, setTotalAmount] = useState(0);// 跟踪总计金额

  const updateTotalAmount = (subtotal, isSelected) => {
    // 如果 isSelected 为 true，添加小计金额；如果为 false，减去小计金额
    setTotalAmount((prevTotal) =>
      isSelected ? prevTotal - subtotal : prevTotal + subtotal
    );
  };

  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart()

  const {
    courses,
    addCourse
  } = useCourseCart()

  const {
    tickets,
    addTicket
  } = useTicketCart()

  //找優惠券
  const [coupons, setCoupons] = useState([]); // 初始化为空数组
  // const [couponOptions, setCouponOptions] = useState(coupons)
  const [selectedCouponId, setSelectedCouponId] = useState(0)
  const [netTotal, setNetTotal] = useState(0)
  

  useEffect(() => {
    // 在组件加载时获取優惠券数据
    axios.get('http://localhost:3005/api/cart/coupon')
      .then(response => {
        const couponsData = response.data;
        setCoupons(couponsData);
      })
      .catch(error => {
        console.error('发生错误：', error);
      });
  }, []);

  // 计算折扣后的总金额
  // useEffect(() => {
  //   const selectedCoupon = coupons.find((coupon) => coupons.id === selectedCouponId);
  //   if (selectedCoupon) {
  //     // 假设折扣为一个小数，例如 0.1 表示 10% 折扣
  //     const discount = selectedCoupon.discount;
  //     const newNetTotal = allTotal - allTotal * discount;
  //     setNetTotal(newNetTotal);
  //   } else {
  //     // 如果没有选择折价券，总金额不变
  //     setNetTotal(allTotal);
  //   }
  //   const coupon = coupons.find((v) => v.id === selectedCouponId)
  // }, [selectedCouponId, coupons, totalAmount]);
  //總金額
  useEffect(() => {
    setNetTotal(cart.cartTotal + courses.cartTotal + tickets.cartTotal )
  }, [])
  // const allTotal = cart.cartTotal + courses.cartTotal + tickets.cartTotal
  const finalAmount = netTotal - (selectedCouponId !== 0 ? coupons.find((v) => v.id === selectedCouponId).discount : 0);
  return (
    <>
      <div className="container commodity">
        {/* 切換頁面按鈕 */}
        <div>
          <button className='buttonCart'>購物車</button>
          {/* <button className='buttonCollect'>收藏清單</button> */}
        </div>
        <div className="horizontal-line"></div>

        <div className='cartProduct'>
          {/* <Product product={{ picture: 'product-picture', name: 'Product Name' }} price={10} totalAmount={totalAmount}
            onUpdateTotal={updateTotalAmount} /> */}
          {/* <div className="horizontal-line"></div> */}
          <div className='productScss'>
            {totalAmount > 0 && <div>總計：NT${totalAmount}</div>}
          </div>
        </div>
        <List />


        <CourseList />
        

        <TicketList />
        
        {/* <div className="horizontal-line"></div> */}
        <div className="totalAmount">
          總計金额:${netTotal}元
        </div>

        <div className='totalAmount'>
          <select 
            className="form-select"
            value={selectedCouponId}
            onChange={(e) => {
              setSelectedCouponId(Number(e.target.value))
            }}
          >
            <option value="0">選擇折價券</option>
            {coupons.map((v) => {
              return (
                <option key={v.id} value={v.id} type={v.countType}>
                  {v.discountName}
                </option>
              )
            })}
          </select>
          </div>
          {selectedCouponId !== 0 && (
            <div className="totalAmount">可折價金額: {coupons.find((v) => v.id === selectedCouponId).discount}元</div>
          )}
          <div className="totalAmount">
          應付金额:${finalAmount}元        
        </div>

      </div>
    </>
  )
}
