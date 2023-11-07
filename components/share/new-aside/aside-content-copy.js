//http://localhost:3000/test-module/aside
//
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//
// import React from 'react'
//
export default function AsideContent({
  type,
  subtitle,
  choice,
  genreDivPosition = <></>,
  collectDivPosition = <></>,
  // AlbumCatagory,
}) {
  // console.log(genrePosition)

  //
  const [albumData, setAlbumData] = useState([])
  // jjj part-2 search axios post
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault() // 防止表单默认提交行为
    try {
      // 创建一个包含表单数据的对象
      const formData = {
        min: min,
        max: max,
        start: start,
        end: end,
      }
      // 發送 POST 請求到後端
      const response = await axios.post(
        'http://localhost:3005/api/album/search',
        formData
      )
      setAlbumData(response.data)
      console.log('后端响应：', response.data)
    } catch (error) {
      // 处理错误
      console.error('发送请求时出错：', error)
    }
  }
  return (
    <>
      <div className="text-white bg-secondary p-2 text-center">
        <div>
          <h1 className="mt-4">{type}類別</h1>
          <hr className="text-white " />
          {genreDivPosition}
          <h2>{subtitle}</h2>
          {choice.map((v) => (
            <div key={v}>
              <input type="checkbox" />
              {v}
            </div>
          ))}
        </div>
        <div>
          <h1 className="mt-4">{type}篩選</h1>
          <hr />
          <form action="" method="post" onSubmit={handleSubmit}>
            <h2>日期</h2>
            <div class="input-group input-group-sm d-flex justify-content-center">
              <input
                type="text"
                className={`form-control-sm `}
                placeholder="2023/12/30"
                style={{ width: '100px' }}
                //
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
              <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                ~
              </span>
              <input
                type="text"
                className={`form-control-sm  `}
                placeholder="2023/12/31"
                style={{ width: '100px' }}
                //
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </div>
            <br />
            <div>
              <h2>價錢</h2>
              <div class="input-group input-group-sm  d-flex justify-content-center">
                <input
                  //   type="text"
                  className="form-control-sm"
                  placeholder="1"
                  style={{ width: '100px' }}
                  //
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                  ~
                </span>
                <input
                  //   type="text"
                  className="form-control-sm"
                  placeholder="999999"
                  style={{ width: '100px' }}
                  //
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
            </div>
            {/*  */}
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              onClick={() => {}}
            >
              提交
            </button>
          </form>
          <br />
          <div>{collectDivPosition}</div>
          <br />
        </div>
      </div>
    </>
  )
}
