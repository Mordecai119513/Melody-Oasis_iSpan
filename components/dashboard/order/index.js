import React, { useState, useEffect } from 'react'
import List from '../list'
import MbList from '../mb-list'
import Framework from '@/components/share/framework/framework-left-right'
import { Collapse, Empty } from 'antd'
import OrderContent from './order-content'
// 取得會員資料並傳給list用
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
export default function Order() {
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
  const [data, setData] = useState({})
  // 取的user資料
  const getUserData = async (id) => {
    const res = await axios.get('http://127.0.0.1:3005/api/users/' + `${id}`)

    if (res.data.message === 'success') {
      // console.log(res.data.user)
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

  // 訂單資料
  // 取得資料用
  const fetchData = async (id) => {
    // 使用异步操作获取数据
    // 例如：const result = await yourApiCall();
    // 更新 data 和 totalRows
    // setData(result.data); // 更新数据
    // setTotalRows(result.totalRows); // 更新记录数量
    const res = await axios.get(
      'http://127.0.0.1:3005/api/users/order/' + `${id}`
    )
    // console.log(res.data)

    setData(res.data)
  }

  // 手機板List
  const mbList = (
    <>
      <MbList userData={userData} />
    </>
  )
  // 主內容
  const Content = (
    <>
      <div className="container bg-primary mb-3">
        <div className=" row ">
          <div className="col-12 d-flex align-items-center justify-content-center border-bottom border-danger border-2 p-4">
            <h1>訂單查詢</h1>
          </div>
          <div className="pb-3">
            {Object.values(data).length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {Object.keys(data).map((Source) => {
                  return (
                    <Collapse
                      key={Source}
                      accordion
                      items={[
                        {
                          key: { Source },
                          label: `訂單編號:${Source}`,
                          children: (
                            <>
                              <h3>下單日期:{data[Source][0].Order_date}</h3>

                              <OrderContent data={data[Source]} />
                            </>
                          ),
                        },
                      ]}
                    />
                  )
                })}
              </>
            )}
            {/* {Object.keys(data).map((Source) => {
              return (
                <Collapse
                  key={Source}
                  accordion
                  items={[
                    {
                      key: { Source },
                      label: `訂單編號:${Source}`,
                      children: (
                        <>
                          <h3>下單日期:{data[Source][0].Order_date}</h3>

                          <OrderContent data={data[Source]} />
                        </>
                      ),
                    },
                  ]}
                />
              )
            })} */}

            {/* <Collapse
              accordion
              items={[
                {
                  key: '1',
                  label: '訂單編號:1',
                  children: (
                    <>
                      <h3>下單日期:2023-09-26</h3>

                      <OrderContent data={data} />
                    </>
                  ),
                },
              ]}
            /> */}
          </div>
        </div>
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
