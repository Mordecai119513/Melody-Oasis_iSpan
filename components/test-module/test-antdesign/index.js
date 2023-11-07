import React from 'react'
import { DatePicker, Breadcrumb } from 'antd'
export default function TestAntdesign() {
  return (
    <>
      <DatePicker />
      <br />
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
    </>
  )
}
