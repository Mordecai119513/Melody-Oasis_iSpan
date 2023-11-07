import React, { useState } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { DatePicker, Space } from 'antd'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker
const dateFormat = 'YYYY-MM-DD'

export default function DateFilterComponent({
  onStartDateChange,
  onEndDateChange,
}) {
  const [dates, setDates] = useState([null, null])

  const handleDateChange = (datesArr) => {
    if (datesArr && datesArr.length === 2) {
      const startDate = dayjs(datesArr[0])
      const endDate = dayjs(datesArr[1])

      const formattedStartDate = startDate.format(dateFormat)
      const formattedEndDate = endDate.format(dateFormat)

      setDates([formattedStartDate, formattedEndDate])

      onStartDateChange && onStartDateChange(formattedStartDate)
      onEndDateChange && onEndDateChange(formattedEndDate)
    } else {
      setDates([null, null])
      onStartDateChange && onStartDateChange(null)
      onEndDateChange && onEndDateChange(null)
    }
  }

  return (
    <div>
      <h2>日期</h2>
      <Space
        direction="vertical"
        size={12}
        className="d-flex justify-content-center mt-3"
      >
        <RangePicker
          format={dateFormat}
          value={dates.map((date) => (date ? dayjs(date) : null))}
          onChange={handleDateChange}
        />
      </Space>
    </div>
  )
}
