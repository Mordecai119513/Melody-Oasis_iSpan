import React, { useState } from 'react'
import style from './member-style.module.css'
import { FcGoogle } from 'react-icons/fc'
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi'
import axios from 'axios'
import { Button } from 'rsuite'
// 網址導向用
import { useRouter } from 'next/router'
export default function RegisterForm() {
  // 宣告狀態
  const router = useRouter()
  const [errors, setErrors] = useState({
    account: '',
    email: '',
    name: '',
    password: '',
    rePassword: '',
    systemMessage: '',
  })
  // 密碼顯示
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    account: '',
    password: '',
    name: '',
    rePassword: '',
    email: '',
  })

  // 執行動作

  // 密碼顯示
  function showPasswordClick() {
    setShowPassword(!showPassword)
  }
  // 改變input內容
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const registerBtnClick = (e) => {
    e.preventDefault()
    handleSubmit()
  }
  // 表單送出
  async function handleSubmit() {
    // console.log(formData)
    const res = await axios.post(
      'http://127.0.0.1:3005/api/users',

      {
        ...formData,
      },
      {
        withCredentials: true, // save cookie in browser
      }
    )
    // API回傳訊息
    console.log(res.data)
    if (res.data.message == 'success') {
      router.push('/member/login')
    }
    if (res.data.message == 'fail' && res.data.errors != {}) {
      setErrors(res.data.errors)
    }
  }
  return (
    <>
      <div className="bg-success p-5">
        <div className="container bg-secondary">
          <form
            action=""
            className="form-member d-flex flex-column align-items-center justify-content-center h-100 p-5 text-white"
          >
            <h1 className="mb-5">註冊</h1>
            <div className="mb-3">
              {/* <!-- 帳號 --> */}
              <div className="account form-floating">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  id="account"
                  placeholder="帳號"
                  onChange={handleInputChange}
                  name="account"
                />
                <label htmlFor="account">
                  <span className={`${style.msgError}`}>*</span>帳號
                </label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} account-error mb-3`}
              >
                {errors.account}
              </div>
              {/* <!-- 會員名稱 --> */}
              <div className="name form-floating">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  id="name"
                  placeholder="會員名稱"
                  name="name"
                  onChange={handleInputChange}
                />
                <label htmlFor="name">
                  <span className={`${style.msgError}`}>*</span>會員名稱
                </label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} name-error mb-3`}
              >
                {errors.name}
              </div>
              {/* <!-- 密碼 --> */}
              <div className={`${style.password} form-floating`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-transparent"
                  id="password"
                  placeholder="密碼"
                  onChange={handleInputChange}
                  name="password"
                />
                <label htmlFor="password">
                  <span className={`${style.msgError}`}>*</span>
                  密碼
                </label>
                <span className={`${style.show}`} onClick={showPasswordClick}>
                  {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
                </span>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} password-error mb-3`}
              >
                {errors.password}
              </div>
              {/* <!-- 確認密碼 --> */}
              <div className={`${style.password} form-floating`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-transparent"
                  id="rePassword"
                  placeholder="確認密碼"
                  onChange={handleInputChange}
                  name="rePassword"
                />
                <label htmlFor="rePassword">
                  <span className={`${style.msgError}`}>*</span>確認密碼
                </label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} rePassword-error mb-3`}
              >
                {errors.rePassword}
              </div>
              {/* <!-- 信箱 --> */}
              <div className="email form-floating">
                <input
                  type="email"
                  className="form-control bg-transparent"
                  id="email"
                  placeholder="信箱"
                  onChange={handleInputChange}
                  name="email"
                />
                <label htmlFor="email">
                  <span className={`${style.msgError}`}>*</span>信箱
                </label>
              </div>
              <div
                style={{ minHeight: 24 }}
                className={`${style.msgError} email-error mb-3`}
              >
                {errors.email}
              </div>
              {/* 提示訊息 */}
              <p>
                <span className={`${style.msgError}`}>*</span>
                為必填欄位，請填妥欄位資訊
              </p>
            </div>
            <div
              style={{ minHeight: 24 }}
              className={`${style.msgError} rePassword-error mb-3`}
            >
              {errors.systemMessage}
            </div>
            <Button
              className="btn btn-primary px-4 mb-3"
              onClick={registerBtnClick}
            >
              註冊
            </Button>
            <Button
              className="btn btn-primary px-4 d-none"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <FcGoogle />
              google
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
