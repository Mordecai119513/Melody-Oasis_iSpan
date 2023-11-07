import React from 'react'
import { Table } from 'antd'
export default function OrderContent({ data }) {
  console.log(data)
  const columns = [
    {
      title: '項次',
      dataIndex: 'item',
      key: 'item',
      render: (text, record, index) => index + 1,
    },
    {
      title: '品項',
      dataIndex: 'Source_id',
      key: 'Source_id',
      render: (text, record, index) => {
        if (record.Source_id == 1) return '專輯'
        if (record.Source_id == 2) return '票券'
        if (record.Source_id == 3) return '課程'
      },
    },
    {
      title: '產品名稱',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: '單件價格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '數量',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: '小計',
      dataIndex: 'subtotal',
      render: (_, record) => {
        let subtotal = record.price * record.quantity
        return subtotal
      },
    },
  ]

  const countTypeConvert = (id) => {
    if (id == '1') {
      return ''
    } else if (id == '2') {
      return '%'
    }
  }

  return (
    <>
      <Table
        columns={columns}
        bordered
        scroll={{ x: true }}
        dataSource={data}
        pagination={false}
        footer={() => {
          let total = 0
          data.forEach((record) => {
            const subtotal = record.price * record.quantity
            total += subtotal
          })
          if (data[0].ch_id) {
            if (data[0].countType == 1) {
              total = total - data[0].discount
            }
            if (data[0].countType == 2) {
              total = total * (data[0].discount / 100)
            }
          }
          return (
            <>
              {data[0].ch_id ? (
                <div className="d-flex justify-content-between">
                  <div>
                    <p>使用優惠</p>
                  </div>
                  <div>
                    <p>代碼:{data[0].discountCode}</p>
                  </div>
                  <div>
                    <p>
                      折扣:{data[0].discount}
                      {countTypeConvert(data[0].countType)}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="d-flex">
                <p className="ms-auto my-0  d-inline">總計:${total}</p>
              </div>
            </>
          )
        }}
      />
    </>
  )
}
