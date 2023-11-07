import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'

export default function Logout() {
  const [user, setUser] = useState('')
  useEffect(() => {
    // 这里的代码只会在组件初次加载时执行一次
    setUser(Cookies.get('user'))
  }, [])

  return (
    <>
      <div
        className="bg-success p-5 d-flex justify-content-center align-items-center flex-grow-1"
        style={{ height: '100%' }}
      >
        <div className="container bg-secondary p-5 " style={{ height: '100%' }}>
          <h1 className={`text-white text-center m-0`}>{user}已登出</h1>
        </div>
      </div>
    </>
  )
}
