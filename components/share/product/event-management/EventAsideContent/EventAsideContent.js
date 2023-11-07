import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import 'rc-slider/assets/index.css'
import 'rsuite/dist/rsuite.min.css'
import RatingComponent from '@/components/product/event-management/rate/rate'

import DateFilterComponent from '../dateFilterComponent/dateFilterComponent'
import PriceFilterComponent from '../priceFilterComponent/priceFilterComponent'

export default function EventAsideContentMo({
  type,
  subtitle,
  choice,
  onStartDateChange,
  onEndDateChange,
  onPriceRangeChange,
}) {
  const [priceRange, setPriceRange] = React.useState([1, 999999])

  const handleStartDateChange = (date) => {
    console.log('Start Date:', date)
    onStartDateChange(date)
  }

  const handleEndDateChange = (date) => {
    console.log('End Date:', date)
    onEndDateChange(date)
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
              <button
                className="btn btn-primary"
                key={v}
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="mt-4">{type}篩選</h1>
          <hr />
          <DateFilterComponent
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
          />
          <br />
          <PriceFilterComponent
            onPriceChange={(range) => {
              console.log('選擇的價格範圍:', range[0], '至', range[1])

              if (typeof onPriceRangeChange === 'function') {
                onPriceRangeChange(range[0], range[1])
              }
            }}
          />
          {/* <h2 className="d-flex justify-content-center mt-3 px-2">評價</h2>
          <div className="d-flex justify-content-center mt-3 px-2">
            <RatingComponent />
          </div> */}
        </div>
      </div>
    </>
  )
}
