import React, { useState, useEffect } from 'react'
import { ConfigProvider, Rate } from 'antd'

export default function Star({ value, setValue, disabled, style }) {
  const [localValue, setLocalValue] = useState(value || 3)

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setLocalValue(value)
    }
  }, [value])

  const handleChange = (newValue) => {
    setLocalValue(newValue)
    if (typeof setValue === 'function') {
      setValue(newValue)
    }
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorFillContent: 'grey',
        },
      }}
    >
      <span>
        <Rate
          allowClear={false}
          value={localValue}
          onChange={handleChange}
          disabled={disabled}
          style={style}
        />
        {localValue ? <span className="ant-rate-text text-warning"></span> : ''}
      </span>
    </ConfigProvider>
  )
}
