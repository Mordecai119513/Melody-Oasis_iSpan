//http://localhost:3000/test-module/aside
import React from 'react'
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
          <form action="" method="get">
            <h2>日期</h2>
            <div class="input-group input-group-sm d-flex justify-content-center">
              <input
                type="text"
                className={`form-control-sm `}
                placeholder="2023/12/30"
                style={{ width: '100px' }}
              />
              <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                ~
              </span>
              <input
                type="text"
                className={`form-control-sm  `}
                placeholder="2023/12/31"
                style={{ width: '100px' }}
              />
            </div>
            <br />
            <div>
              <h2>價錢</h2>
              <div class="input-group input-group-sm  d-flex justify-content-center">
                <input
                  type="text"
                  className="form-control-sm"
                  placeholder="1"
                  style={{ width: '100px' }}
                />
                <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                  ~
                </span>
                <input
                  type="text"
                  className="form-control-sm"
                  placeholder="999999"
                  style={{ width: '100px' }}
                />
              </div>
            </div>
          </form>
          <br />
          <div>{collectDivPosition}</div>
          <br />
        </div>
      </div>
    </>
  )
}
