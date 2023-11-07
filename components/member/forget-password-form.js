import React, { useState, useEffect } from 'react'
import { Button } from 'rsuite'
import style from './member-style.module.css'
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi'
import useInterval from '@/hooks/use-interval'
import axios from 'axios'
import { message } from 'antd'
import { useRouter } from 'next/router'
export default function ForgetPasswordForm() {
  const router = useRouter()
  // 宣告狀態
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [verifyMessage, setVerifyMessage] = useState('')
  const [system, setSystem] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')

  // ediSystem使用全局訊息
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    setSystem('')
    // console.log(setSystem);
    if (system != '') {
      messageApi.open({
        type: system == '密碼已成功修改!' ? 'success' : 'error',
        content: system,
      })
    }
  }, [system])

  // countdown use
  const [count, setCount] = useState(10) // 60s
  const [delay, setDelay] = useState(null) // delay=null to stop, delay=1000 to start
  // countdown use
  useInterval(() => {
    setCount(count - 1)
  }, delay)

  useEffect(() => {
    if (count <= 0) {
      setDelay(null)
    }
  }, [count])

  const getOtp = async () => {
    if (delay !== null) {
      setVerifyMessage('60s內無法重新獲得驗証碼')
      return
    }
    const res = await axios.post(
      'http://localhost:3005/api/reset-password/otp',
      {
        email,
      }
    )

    console.log(res.data)
    if (res.data.message === 'fail') {
      setVerifyMessage('驗証碼取得失敗，請確認Email是否已經註冊')
    }

    if (res.data.message === 'email sent') {
      setVerifyMessage('驗証碼已寄送到你填寫的Email信箱中')
      setCount(60) // reset countdown
      setDelay(1000) // 1000ms = 1s
    }
  }

  const resetPassword = async (e) => {
    e.preventDefault()

    const res = await axios.post(
      'http://localhost:3005/api/reset-password/reset',
      {
        email,
        token,
        password,
        rePassword,
      }
    )
    if (res.data.message === 'fail' && res.data.error == '認證碼不正確') {
      setVerifyMessage('驗証碼取得失敗，請確認Email是否已經註冊')
    }

    if (res.data.message === 'success') {
      setSystem('密碼已成功修改!')
      setPasswordMessage('')
      setTimeout(() => {
        router.push('/member/login')
      }, 1000)
    }
    if (res.data.message === 'fail') {
      setSystem('密碼修改失敗!')
      if (res.data.error === '密碼與確認密碼不正確') {
        setVerifyMessage('')
        setPasswordMessage('密碼與確認密碼不正確')
      }
    }
    console.log(res.data)
  }
  // 密碼顯示
  function showPasswordClick() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      {contextHolder}
      <div className="bg-success p-5">
        <div className="container  bg-secondary">
          <form className=" form-member d-flex flex-column align-items-center justify-content-center p-5 text-white">
            <h1 className="">忘記密碼?</h1>
            <div
              style={{ minHeight: 24 }}
              className={`${style.msgError} system-error mb-3`}
            >
              {system}
            </div>
            <div className="mb-3 ">
              {/* <!-- 信箱 --> */}
              <div className="email form-floating">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  id="email"
                  placeholder="信箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">信箱</label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} email-error mb-3`}
              ></div>
              {/* <!-- 認證碼 --> */}
              <div class="input-group  ">
                <div className="verify form-floating ">
                  <input
                    type="text"
                    className="form-control bg-transparent"
                    id="verify"
                    placeholder="認證碼"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                  <label htmlFor="verify">認證碼</label>
                </div>
                {/* 取得驗證碼 */}
                <Button
                  onClick={getOtp}
                  class="btn  btn-outline-info rounded-end"
                  style={{ width: '106px' }}
                  type="button"
                >
                  {delay ? count + '秒' : '取得驗証碼'}
                </Button>
              </div>

              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} email-error mb-3`}
              >
                {verifyMessage}
              </div>
              {/* <!-- 新密碼 --> */}
              <div className={`${style.password} form-floating`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-transparent"
                  id="password"
                  placeholder="新密碼"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password">新密碼</label>
                <span onClick={showPasswordClick} className={`${style.show}`}>
                  {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
                </span>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} password-error mb-3`}
              >
                {passwordMessage}
              </div>
              {/* <!-- 確認密碼 --> */}
              <div className={`${style.password} form-floating`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-transparent"
                  id="rePassword"
                  placeholder="確認密碼"
                  name="rePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <label htmlFor="rePassword">確認密碼</label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} rePassword-error mb-3`}
              >
                {passwordMessage}
              </div>
            </div>
            <Button
              className="btn btn-primary px-4 mb-3"
              onClick={resetPassword}
            >
              重設密碼
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
