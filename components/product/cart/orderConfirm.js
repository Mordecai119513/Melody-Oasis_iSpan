// //訂單確認頁組件
import React, { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart'
import { useCourseCart } from '@/hooks/use-cart-course'
import { useTicketCart } from '@/hooks/use-cart-ticket';
import { useOrder } from '@/hooks/use-order';
import { useAuthJWT } from '@/hooks/use-auth-jwt';

export default function OrderConfirm({ allPeople, setAllPeople  }) {
  const { authJWT } = useAuthJWT()
  const cart = useCart();
  const courseCart = useCourseCart();
  const ticketCart = useTicketCart();
  const order = useOrder()
  console.log(cart.items)

  // 合并产品数据
  const products = [...cart.items, ...courseCart.courseCart, ...ticketCart.ticketItems];
  console.log(products);
  // 假设優惠券折抵金额
  const couponDiscount = 100;

  // 计算总金额
  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // 计算訂單需付款金額
  const orderAmount = totalAmount - couponDiscount;
  //時間區塊
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0表示一月，11表示十二月
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const orderDate = `${year}-${month + 1}-${day}`//訂單日期
  console.log(orderDate);
  const orderNumber = Date.now()//訂單編號
  console.log(orderNumber);
  const authId = authJWT.userData.id//會員id
  const sourceIds = [1, 2, 3];//課程大類
  //專輯加入
  const cartArray = cart.items
  const peopleWithCart = cartArray.map(person => ({
    ...person,
    Order_Date: orderDate,
    order_number: orderNumber,
    Source_id: 1,
    ch_id: 1,
    member_id: authId
  }));
  //課程加入
  const cartCourseArray = courseCart.courseCart
  const peopleWithCourse = cartCourseArray.map(person => ({
    ...person,
    Order_Date: orderDate,
    order_number: orderNumber,
    Source_id: 2,
    ch_id: 1,
    member_id: authId
  }));
  //票券加入
  const cartTicketArray = ticketCart.ticketItems
  const peopleWithTicket = cartTicketArray.map(person2 => ({
    ...person2,
    Order_Date: orderDate,
    order_number: orderNumber,
    Source_id: 3,
    ch_id: 1,
    member_id: authId
  }));
  //合成總訂單Array
  const allPeoples = [
    ...peopleWithCart,
    ...peopleWithCourse,
    ...peopleWithTicket
  ];
  const sendDataToParent = () => {
    // 在需要传递的地方调用这个函数，并传递数据（allPeople）
    onAllPeopleReady(allPeople);
  };
  useEffect(()=>{
    if(allPeoples){
      setAllPeople(allPeoples)
    }
  },[])


  console.log(peopleWithCart);
  console.log(peopleWithCourse);
  console.log(peopleWithTicket);
  console.log(allPeople);

  return (
    <div className='container commodity'>
      <table className='order-table'>
        <thead>
          <tr className=''>
            <th>商品圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img width={120} height={60} src={product.picture} /></td>
              <td>{product.name}{product.title}</td>
              <td>${product.price}元</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}元</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='line'></div>
      <div className='totalContainer totalAmount'>
        <div className='totalAcount'>
          <p>總計金額: ${totalAmount}元</p>
        </div>
        <div className='totalAcount'>
          <p>優惠卷折抵:${couponDiscount}元 </p>
        </div>
        <div className='totalAcount'>
          <p>應付金額: ${orderAmount}元</p>
        </div>
      </div>
    </div>
  );
}