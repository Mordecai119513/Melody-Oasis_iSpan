import Breadcrumb from '@/components/share/breadcrumb'
import React from 'react'

export default function CustomerService() {
  return (
    <>
      <div className="container p-5">
        <div className="mt-2">
          <Breadcrumb />
        </div>
        <h2 className="text-center bg-warning p-3 m-3">客服中心資訊</h2>
        <div className=" m-4  text-info">
          <div className="my-4">
            <h3>聯繫方式</h3>
            <p>電子郵件：oasiscoperation12345@nezid.com </p>
            <p>電話號碼：02-2761794</p>
            <p>傳真：(123) 456-7891 </p>
          </div>
          <div className="my-4">
            <h3>聯絡地址</h3>
            <p>地址：新北市新店區禾豐七路30號 </p>
            <p>
              工作時間： 平日：9:00AM - 6:00 PM 週末與假日：休息 緊急情況：24/7
              線上支持
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
