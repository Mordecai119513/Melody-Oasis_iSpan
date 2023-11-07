import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Input, Popconfirm, notification } from 'antd'
import evaluateStyle from './evaluate.module.scss'
import Star from './star'
import { Animation, Button, Panel } from 'rsuite'

export default function Writecomment({
  userData,
  getProduct,
  pid,
  targetTableCondition,
  shouldReload,
  setShouldReload,
}) {
  const { TextArea } = Input
  // 送出評論
  // 抓取客人評論
  const [value, setValue] = useState('')
  const handleTextAreaChange = (e) => {
    setValue(e.target.value)
  }
  // 抓取客人評論星數
  const [userStars, setUserStars] = useState(3) // 初始值为 3
  const handleSetStars = (rateScore) => {
    setUserStars(rateScore)
  }
  const handleFormSubmit = async () => {
    setShouldReload(true)
    setBtnDisable(true)
    // 處理送出評論
    try {
      const response = await axios.post(
        `http://localhost:3005/api/evaluate/${targetTableCondition}/${pid}`,
        {
          member_id: userData.id,
          stars: userStars,
          comment: value,
        }
      )
      if (response.status === 200) {
        openNotification(
          '留言成功',
          '您的商品評價已成功送出',
          'topRight',
          <CheckCircleOutlined
            style={{
              color: '#009933',
            }}
          />
        )
      }
    } catch (error) {
      console.error('Error:新增評價失敗')
      openNotification(
        '留言失敗',
        '您的商品評價送出失敗，請聯絡客服中心',
        'topRight',
        <CloseCircleOutlined
          style={{
            color: '#cc0000',
          }}
        />
      )
    }
  }

  // 成功評論通知
  const [api, contextHolder] = notification.useNotification()
  const openNotification = (message, description, placement, icon) => {
    api.info({
      message: message,
      description: description,
      placement,
      icon: icon,
    })
  }

  //送出留言後 觸發重新渲染網頁
  //   const [shouldReload, setShouldReload] = useState(false)
  // 使用 useEffect 來觀察 shouldReload
  useEffect(() => {
    if (shouldReload) {
      getProduct(pid)
      setShouldReload(false) // 重置留言區狀態
      setUserStars(3)
      setValue('')
    }
  }, [shouldReload, pid])

  // 留言按鈕
  const [btnDisable, setBtnDisable] = useState(false)
  return (
    <>
      {
        contextHolder
      }
      <div>
        <div className={evaluateStyle.starChoose}>
          <span className="h3">
            選擇您的評價:&nbsp;&nbsp;
            <Star
              value={userStars}
              setValue={handleSetStars}
              style={{ fontSize: '30px' }}
            />
          </span>
        </div>
      </div>
      <div>
        <TextArea
          rows={4}
          placeholder="寫下您寶貴的意見"
          activeBorderColor={'#C6AC8F'}
          value={value}
          onChange={handleTextAreaChange}
        />
        <div className="text-end">
          <Popconfirm title={`確認送出留言?`} onConfirm={handleFormSubmit}>
            <Button
              type="submit"
              className={`h4 ${evaluateStyle.button}`}
              disabled={btnDisable}
            >
              {btnDisable ? '留言已送出' : '送出留言'}
            </Button>
          </Popconfirm>
        </div>
      </div>
    </>
  )
}
