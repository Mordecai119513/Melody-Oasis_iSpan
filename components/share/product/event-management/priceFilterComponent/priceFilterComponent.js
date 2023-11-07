import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function PriceFilterComponent({ onPriceChange }) {

  const [priceRange, setPriceRange] = useState([1, 20000])


  const handleSliderChange = (value) => {
    setPriceRange(value)
    if (onPriceChange) {
      onPriceChange(value)
    }
  }

  return (
    <div>
      <h2>價錢</h2>
      <div className="d-flex justify-content-center mt-3 px-2">
        <Slider
          range
          min={1}

          max={20000}

          defaultValue={priceRange}
          onAfterChange={handleSliderChange}
        />
      </div>
      <div className="mt-2 px-3">
        {priceRange[0]} ~ {priceRange[1]}
      </div>
    </div>
  )
}
