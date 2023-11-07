import React, { useState, useEffect } from 'react'

import List from '../list'
import Cookies from 'js-cookie'
import Image from 'next/image'
import MbList from '../mb-list'
import Framework from '@/components/share/framework/framework-left-right'
import {
  Input,
  Tooltip,
  Radio,
  DatePicker,
  Space,
  ConfigProvider,
  Avatar,
  message,
} from 'antd'
import dayjs from 'dayjs'
import { HiInformationCircle } from 'react-icons/hi'
import locale from 'antd/locale/zh_TW'
import 'dayjs/locale/zh-tw'
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
import { Button } from 'rsuite'
export default function ProfileContent() {
  // 解析通行證內容
  const parseJwt = (token) => {
    const base64Payload = token.split('.')[1]
    const payload = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payload.toString())
  }
  const { authJWT, setAuthJWT } = useAuthJWT()
  // 設定狀態
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
  const [userEditData, setUserEditData] = useState({
    account: '',
    address: '',
    birthday: '',
    created_at: '',
    email: '',
    gender: '',
    id: 0,
    name: '',
    phone: '',
    photo: '',
    status: '',
    password: '',
    rePassword: '',
    iat: 0,
    exp: 0,
  })
  const [edit, setEdit] = useState(false)

  // 會員設定錯誤訊息回傳宣告
  const [editNameError, setEditNameError] = useState(undefined)
  const [editPasswordError, setEditPasswordError] = useState(undefined)
  const [editRePasswordError, setEditRepasswordError] = useState(undefined)
  const [editPhoneError, setEditPhoneError] = useState(undefined)
  const [editAddressError, setEditAddressError] = useState(undefined)
  const [editBirthdayError, setEditBirthdayError] = useState(undefined)
  const [editSystem, setSystem] = useState(undefined)
  // ediSystem使用全局訊息
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    setSystem(undefined)
    // console.log(setSystem);
    if (editSystem != undefined) {
      messageApi.open({
        type: editSystem == '修改成功' ? 'success' : 'error',
        content: editSystem,
      })
    }
  }, [[editSystem, messageApi]])

  let Imageurl = ''
  if (!isLoading) {
    if (userData.photo == '') {
      Imageurl = `/member/image/default.png`
    } else {
      Imageurl = `/member/image/${userData.photo}`
    }
  }
  // 取的user資料
  const getUserData = async (id) => {
    const res = await axios.get('http://127.0.0.1:3005/api/users/' + `${id}`)

    if (res.data.message === 'success') {
      console.log(res.data.user)
      setUserData(res.data.user)
      setUserEditData(res.data.user)
      addKeyValue('rePassword', '')
    }
  }
  useEffect(() => {
    const id = authJWT.userData.id
    // console.log(id)
    getUserData(id).then(() => {
      setIsLoading(false)
    })
  }, [authJWT.userData])
  // 更換UserEditData的value到指定key
  function updateValueByKey(key, value) {
    setUserEditData((prevUser) => {
      // 创建一个新的对象，以确保状态更新
      return {
        ...prevUser, // 复制先前的状态
        [key]: value, // 使用新值更新特定的键
      }
    })
  }
  // 增加UserEditData欄位
  const addKeyValue = (key, value) => {
    setUserEditData((prevUser) => {
      // 创建一个新的对象，以确保状态更新
      return {
        ...prevUser, // 复制先前的状态
        [key]: value, // 添加新的键值对
      }
    })
  }
  function genderTranslation(gender) {
    if (!isLoading) {
      if (gender == '') {
        return ''
      }
      if (gender == 'male') {
        return '男性'
      } else {
        return '女性'
      }
    }
  }
  // 會員生日參考格式
  const dateFormat = 'YYYY-MM-DD'
  // 會員設定生日日期預設
  const defaultDateValue =
    userEditData.birthday === '' ? '' : dayjs(userEditData.birthday, dateFormat)
  // 小於10補0
  function formattedNumber(number) {
    return number < 10 ? `0${number}` : `${number}`
  }
  // 會員生日禁止今日以後
  function disabledDate(current) {
    // 获取当前日期
    const today = new Date()

    // 比较当前日期与选择的日期
    return current && current.valueOf() > today.valueOf()
  }
  // 設定時會員圖片預覽用
  const [previewImage, setPreviewImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(e.target.files[0])
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setPreviewImage(e.target.result)
      }

      reader.readAsDataURL(file)
    }
  }
  // 表單送出
  async function handleSubmit() {
    const id = userData.id

    // 圖片上傳
    const formData = new FormData()
    formData.append('photo', selectedImage)
    try {
      const res = await axios.post(
        'http://127.0.0.1:3005/api/users/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(res)
      if (res.data.message == 'success') {
        userEditData.photo = res.data.photo
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }

    // 更新會員資料
    const res = await axios.put(
      'http://127.0.0.1:3005/api/users/' + `${id}`,

      {
        userEditData,
        userData,
      }
    )
    // API回傳訊息
    // console.log(res.data)
    if (res.data.message === 'fail') {
      if (res.data.errors && Object.keys(res.data.errors).length > 0) {
        // 存在 errors 对象并且它包含至少一个错误消息
        // 在这里处理错误
        const errors = res.data.errors
        setEditNameError(errors.name)
        setEditPasswordError(errors.password)
        setEditRepasswordError(errors.rePassword)
        setEditPhoneError(errors.phone)
        setEditAddressError(errors.address)
        setEditBirthdayError(errors.birthday)
        setSystem('修改失敗')
      }
    }

    if (res.data.message === 'success') {
      const res = await axios.post(
        'http://127.0.0.1:3005/api/member/login',

        {
          account: userData.account,
          password: userData.password,
        },
        {
          withCredentials: true, // save cookie in browser
        }
      )
      // 取得訊息、通行證
      console.log(res.data)
      // 解析通行證內容
      // console.log(parseJwt(res.data.accessToken))

      // 設定cookie
      Cookies.set('accessToken', res.data.accessToken, { expires: 1 })
      if (res.data.message === 'success') {
        setAuthJWT({
          isAuth: true,
          userData: parseJwt(res.data.accessToken),
        })
      }

      setEdit(false)
      setSystem('修改成功')
      setEditNameError(undefined)
      setEditPasswordError(undefined)
      setEditRepasswordError(undefined)
      setEditPhoneError(undefined)
      setEditAddressError(undefined)
      setEditBirthdayError(undefined)
    }
  }

  // 設定時的內容
  const Settings = (
    <>
      <form>
        <div className="row">
          {/* 儲存按鈕 */}
          <div className="col-4 border-end border-danger border-2 p-2"></div>
          <div className="col-8 p-2 d-flex">
            <Button
              className="btn btn-secondary ms-auto "
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              儲存
            </Button>
          </div>
          {/* 會員名稱 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">會員名稱</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="name"
              className="m-0"
              maxLength="20"
              // 錯誤時使用
              status={editNameError == undefined ? null : 'error'}
              suffix={
                editNameError === undefined ? null : (
                  <Tooltip title={editNameError}>
                    <HiInformationCircle />
                  </Tooltip>
                )
              }
              value={userEditData.name}
              onChange={(e) => updateValueByKey('name', e.target.value)}
            />
          </div>
          {/* 帳號 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">帳號</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="account"
              className="m-0"
              value={userData.account}
              maxLength="20"
              disabled={true}
            />
          </div>
          {/* 密碼 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">密碼</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="password"
              className="m-0"
              maxLength="20"
              // 錯誤時使用
              status={editPasswordError == undefined ? null : 'error'}
              suffix={
                editPasswordError === undefined ? null : (
                  <Tooltip title={editPasswordError}>
                    <HiInformationCircle />
                  </Tooltip>
                )
              }
              value={userEditData.password}
              onChange={(e) => updateValueByKey('password', e.target.value)}
            />
          </div>
          {/* 確認密碼 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">確認密碼</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="repassword"
              className="m-0"
              maxLength="20"
              // 錯誤時使用
              status={editRePasswordError == undefined ? null : 'error'}
              suffix={
                editRePasswordError === undefined ? null : (
                  <Tooltip title={editRePasswordError}>
                    <HiInformationCircle />
                  </Tooltip>
                )
              }
              value={userEditData.rePassword}
              onChange={(e) => updateValueByKey('rePassword', e.target.value)}
            />
          </div>
          {/* 信箱 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">信箱</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="email"
              className="m-0"
              disabled={true}
              maxLength="30"
              value={userData.email}
            />
          </div>
          {/* 電話 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">電話</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="phone"
              className="m-0"
              maxLength="10"
              // 錯誤時使用
              status={editPhoneError == undefined ? null : 'error'}
              suffix={
                editPhoneError === undefined ? null : (
                  <Tooltip title={editPhoneError}>
                    <HiInformationCircle />
                  </Tooltip>
                )
              }
              value={userEditData.phone}
              onChange={(e) => updateValueByKey('phone', e.target.value)}
            />
          </div>
          {/* 地址 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">地址</h3>
          </div>
          <div className="col-8 pb-2">
            <Input
              name="address"
              className="m-0"
              maxLength="30"
              // 錯誤時使用
              status={editAddressError == undefined ? null : 'error'}
              suffix={
                editAddressError === undefined ? null : (
                  <Tooltip title={editAddressError}>
                    <HiInformationCircle />
                  </Tooltip>
                )
              }
              value={userEditData.address}
              onChange={(e) => updateValueByKey('address', e.target.value)}
            />
          </div>
          {/* 性別 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">性別</h3>
          </div>
          <div className="col-8 pb-2">
            <Radio.Group
              className="ps-2"
              name="gender"
              value={userEditData.gender == '' ? 'male' : userEditData.gender}
              onChange={(e) => updateValueByKey('gender', e.target.value)}
            >
              <Radio value={'male'}>男性</Radio>
              <Radio value={'female'}>女性</Radio>
            </Radio.Group>
          </div>
          {/* 出日 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">生日</h3>
          </div>
          <div className="col-8 pb-2">
            <ConfigProvider locale={locale}>
              <Space direction="vertical">
                <DatePicker
                  name="birthday"
                  defaultValue={defaultDateValue}
                  format={dateFormat}
                  locale={locale}
                  allowClear={false}
                  inputReadOnly={true}
                  showToday={false}
                  disabledDate={disabledDate}
                  // 錯誤時使用
                  status={editBirthdayError == undefined ? null : 'error'}
                  onChange={(e) =>
                    updateValueByKey(
                      'birthday',
                      `${e.$y}-${formattedNumber(e.$M + 1)}-${formattedNumber(
                        e.$D
                      )}`
                    )
                  }
                />
              </Space>
            </ConfigProvider>
          </div>
          {/* 頭像 */}
          <div className="col-4 border-end border-danger border-2 p-2 text-center">
            <h3 className="m-0">頭像</h3>
          </div>
          <div className="col-8 p-2">
            <input
              className="d-none"
              id="photo"
              name="photo"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="photo">
              <Space className="mb-3 ps-2">
                <Avatar
                  className="bg-white"
                  src={
                    <Image
                      src={previewImage ? previewImage : Imageurl}
                      alt={userData.name}
                      width={120}
                      height={120}
                    />
                  }
                  size={120}
                  alt="預覽頭像"
                  shape="circle"
                />
              </Space>
            </label>
          </div>
        </div>
      </form>
    </>
  )
  // 一般顯示
  const Show = (
    <>
      <div className="row">
        {/* 編輯按鈕 */}
        <div className="col-4 border-end border-danger border-2 p-2"></div>
        <div className="col-8 p-2 d-flex">
          <Button
            className="btn btn-secondary ms-auto"
            onClick={() => {
              setEdit(true)
            }}
          >
            編輯
          </Button>
        </div>
        {/* 會員名稱 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">會員名稱</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.name}</p>
        </div>
        {/* 帳號 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">帳號</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.account}</p>
        </div>
        {/* 信箱 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">信箱</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.email}</p>
        </div>
        {/* 電話 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">電話</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.phone}</p>
        </div>
        {/* 地址 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">地址</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.address}</p>
        </div>
        {/* 性別 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">性別</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{genderTranslation(userData.gender)}</p>
        </div>
        {/* 出生年月日 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">生日</h3>
        </div>
        <div className="col-8 p-2">
          <p className="ps-2">{userData.birthday}</p>
        </div>
        {/* 頭像 */}
        <div className="col-4 border-end border-danger border-2 p-2 text-center">
          <h3 className="m-0">頭像</h3>
        </div>
        <div className="col-8 p-2">
          <Space className="mb-3 ps-2">
            <Avatar
              className="bg-white"
              src={
                <Image
                  src={Imageurl}
                  alt={userData.name}
                  width={120}
                  height={120}
                />
              }
              size={120}
              alt={userData.name}
              shape="circle"
            />
          </Space>
        </div>
      </div>
    </>
  )
  // 手機板List
  const mbList = <>{isLoading ? null : <MbList userData={userData} />}</>
  // 主內容
  const Content = (
    <>
      {contextHolder}
      <div className="container bg-primary mb-3">
        <div className=" row">
          <div className="col-12 d-flex align-items-center justify-content-center border-bottom border-danger border-2 p-4">
            <h1>個人資料</h1>
          </div>
        </div>
        {edit ? Settings : Show}
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
