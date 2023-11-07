import React from 'react'
import { DatePicker, InputGroup } from 'rsuite'
import Slider from 'rc-slider'
import Select from 'react-select'
import { Button } from 'rsuite'

import 'react-datepicker/dist/react-datepicker.css'
import 'rc-slider/assets/index.css'

export default function AsideContentEvent({
  type,
  subtitle,
  choice,
  onSelectRegion,
}) {
  const [startDate, setStartDate] = React.useState(new Date())
  const [endDate, setEndDate] = React.useState(new Date())
  const [priceRange, setPriceRange] = React.useState([1, 999999])

  const handleSliderChange = (value) => {
    setPriceRange(value)
  }

  return (
    <>
      <div className="text-white bg-secondary p-2 text-center">
        <div>
          <h1 className="mt-4">{type}類別</h1>
          <hr className="text-white " />
          <h2>{subtitle}</h2>
          <div style={{ textAlign: 'center' }}>
            {choice.map((v) => (
              <Button
                className="btn btn-primary"
                key={v}
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                onClick={() => onSelectRegion(v)} // 這裡加上onClick事件
              >
                {v}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-4">{type}篩選</h1>
          <hr />
          <h2>日期</h2>
          <div className="d-flex justify-content-center mt-3">
            <InputGroup style={{ width: 300 }}>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                block
                appearance="subtle"
                style={{ width: 130 }}
              />
              <InputGroup.Addon>至</InputGroup.Addon>
              <DatePicker
                format="yyyy-MM-dd HH:mm:ss"
                block
                appearance="subtle"
                style={{ width: 130 }}
              />
            </InputGroup>
          </div>
          <br />
          <h2>價錢</h2>
          <div className="d-flex justify-content-center">
            <Slider
              range
              min={1}
              max={999999}
              defaultValue={priceRange}
              onAfterChange={handleSliderChange}
            />
          </div>
          <div className="mt-2">
            {priceRange[0]} ~ {priceRange[1]}
          </div>
        </div>
        <h2>評價</h2>
      </div>
    </>
  )
}
