import React, { useState, useEffect } from 'react'
import List from '../list'
import MbList from '../mb-list'
import Framework from '@/components/share/framework/framework-left-right'
import { Table } from 'antd'
// 取得會員資料並傳給list用
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
export default function Coupon() {
  const { authJWT, setAuthJWT } = useAuthJWT()
  // 讀取中狀態
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({
    account: '',
    address: '',
    birthday: '',
    created_at: '',
    password: '',
    email: '',
    gender: '',
    id: 0,
    name: '',
    phone: '',
    photo: '',
    status: '',
    iat: 0,
    exp: 0,
  })
  // 取的user資料
  const getUserData = async (id) => {
    const res = await axios.get('http://127.0.0.1:3005/api/users/' + `${id}`)

    if (res.data.message === 'success') {
      console.log(res.data.user)
      setUserData(res.data.user)
    }
  }
  useEffect(() => {
    const id = authJWT.userData.id
    // console.log(id)
    getUserData(id).then(() => {
      setIsLoading(false)
      fetchData(id)
    })
  }, [authJWT.userData])

  const columns = [
    {
      title: '項次',
      dataIndex: 'item',
      key: 'item',
      render: (text, record, index) => index + 1,
    },
    {
      title: '折扣類型',
      dataIndex: 'countType',
      key: 'countType',
    },
    {
      title: '名稱',
      dataIndex: 'discountName',
      key: 'discountName',
    },

    {
      title: '折扣碼',
      dataIndex: 'discountCode',
      key: 'discountCode',
    },
    {
      title: '條件',
      dataIndex: 'minimum',
      key: 'minimum',
      render: (_, record) => {
        return !record.minimum ? '' : `消費滿 ${record.minimum} 元`
      },
    },
    {
      title: '使用期限',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: '使用狀態',
      dataIndex: 'couponUse',

      key: 'couponUse',
      render: (_, record) => {
        console.log(record.couponUsage)
        return record.couponUsage
      },
    },
  ]

  const [data, setData] = useState([])
  // 取得資料用
  const fetchData = async (id) => {
    // 使用异步操作获取数据
    // 例如：const result = await yourApiCall();
    // 更新 data 和 totalRows
    // setData(result.data); // 更新数据
    // setTotalRows(result.totalRows); // 更新记录数量
    const res = await axios.get(
      'http://127.0.0.1:3005/api/users/coupon/' + `${id}`
    )
    // console.log(res.data)

    setData(res.data)
  }

  // // 監聽data資料

  useEffect(() => {
    const id = authJWT.userData.id
    // 在组件加载后，获取数据并更新记录数量
    fetchData(id)
  }, []) // 仅在组件加载时运行一次

  // 手機板List
  const mbList = (
    <>
      <MbList userData={userData} />
    </>
  )
  // 表格分頁設定

  // 主內容
  const paginationConfig = {
    position: ['bottomCenter'],
    hideOnSinglePage: true,
  }
  const Content = (
    <>
      <div className="container bg-primary mb-3">
        <div className=" row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center border-bottom border-danger border-2 pt-4">
            <h1>折價卷</h1>
          </div>
        </div>
        <Table
          className="p-5"
          columns={columns}
          bordered
          scroll={{ x: 20 }}
          dataSource={data}
          pagination={paginationConfig}
          size="small"
        />
      </div>
    </>
  )
  const main = (
    <>
      {mbList}
      {Content}
    </>
  )
  return (
    <>
      <Framework
        leftContent=<>{isLoading ? null : <List userData={userData} />}</>
        rightContent={<>{isLoading ? null : main}</>}
      ></Framework>
    </>
  )
}
