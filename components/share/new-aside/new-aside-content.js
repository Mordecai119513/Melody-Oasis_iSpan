import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'react-datepicker/dist/react-datepicker.css'
import 'rc-slider/assets/index.css'
import 'rsuite/dist/rsuite.min.css'
import RatingComponent from '@/components/product/event-management/rate/rate'
import DateFilterComponent from '@/components/share/new-aside/new-date-filter-component'
import PriceFilterComponent from '@/components/share/new-aside/new-price-filter-component'

export default function EventAsideContentMoMo({
  type,
  subtitle,
  choice,
  onRegionSelect,

  onStartDateChange,
  onEndDateChange,
  onPriceRangeChange,
}) {
  const [priceRange, setPriceRange] = useState([1, 4000])
  const [allEvents, setAllEvents] = useState([])
  const [selectedEvents, setSelectedEvents] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState(null)

  const handleSliderChange = (value) => {
    setPriceRange(value)
    console.log(value)
  }

  const handleDateChange = (startDate, endDate) => {
    console.log('選取的開始日期:', startDate)
    console.log('選取的結束日期:', endDate)
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
          <hr />
          <hr />
          <DateFilterComponent
            onDateChange={(startDate, endDate) => {
              onStartDateChange(startDate)
              onEndDateChange(endDate)
            }}
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
          <hr />
          <hr />
          <hr />

          <h2 className="d-flex justify-content-center mt-3 px-2">評價</h2>
          <div className="d-flex justify-content-center mt-3 px-2">
            <RatingComponent />
          </div>
        </div>
      </div>
    </>
  )
}
