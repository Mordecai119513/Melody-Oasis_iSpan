import React, { useState, useEffect } from 'react'

import 'react-datepicker/dist/react-datepicker.css'
import 'rc-slider/assets/index.css'
import 'rsuite/dist/rsuite.min.css'
import RatingComponent from '@/components/product/event-management/rate/rate'
import DateFilterComponent from '../dateFilterComponent/dateFilterComponent'
import PriceFilterComponent from '../priceFilterComponent/priceFilterComponent'

export default function EventAsideContentMoMo({
  type,
  subtitle,
  choice,
  onRegionSelect,
  onStartDateChange,
  onEndDateChange,
  onPriceRangeChange,
}) {
  const [priceRange, setPriceRange] = useState([1, 999999])
  const [allEvents, setAllEvents] = useState([])
  const [selectedEvents, setSelectedEvents] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState(null)

  // Pagination effect
  useEffect(() => {
    if (selectedRegion) {
      const filteredEvents = allEvents.filter(
        (event) => event.region === selectedRegion
      )
      setSelectedEvents(filteredEvents) // Update this as per your pagination needs
    } else {
      setSelectedEvents(allEvents) // Update this as per your pagination needs
    }
  }, [selectedRegion, allEvents]) // I'm not sure about your 'page' and 'perPage' values. Add them here if necessary.

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
                onClick={() => {
                  console.log(`Button with value ${v} clicked`)
                  if (typeof onRegionSelect === 'function') {
                    onRegionSelect(v)
                  }
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
          <br />
          {/* <h2 className="d-flex justify-content-center mt-3 px-2 display-none">
            評價
          </h2>
          <div className="d-flex justify-content-center mt-3 px-2">
            <RatingComponent className="display-none" />
          </div> */}
        </div>
      </div>
    </>
  )
}

// Axios call effect
// useEffect(() => {
//   axios
//     .get('http://localhost:3005/api/product/event-management')
//     .then((response) => {
//       const products = response.data.products

//       let filteredProducts = products
//       if (selectedRegion) {
//         filteredProducts = products.filter(
//           (product) => product.region === selectedRegion
//         )
//       }

//       setAllEvents(filteredProducts)
//       const shuffled = filteredProducts.sort(() => 0.5 - Math.random())
//       setSelectedEvents(shuffled.slice(0, 4))
//     })
//     .catch((error) => console.error('Error fetching data:', error))
// }, [selectedRegion])
