import axios from 'axios'
import { useState } from 'react'

// order發送測試
// 正式環境預計刪除
export default function Ordertest() {
  const [formData, setFormData] = useState({
    product_id: '',
    payment_method: '',
    Order_date: '',
    quantity: '',
    Source_id: '',
    ch_id: '',
    member_id: '',
  })
  // 處理input變化
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3005/api/order/',
        JSON.stringify([formData]),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('Post response:', response)
      if (response.status === 200) {
        alert('訂單新增成功')
      }
      if (response.status === 500) {
        alert('訂單新增失敗')
      }
      alert(response.body.message2)
    } catch (error) {
      console.error('Error posting data:', error)
    }
  }
  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="product_id"
          placeholder="Product ID"
          onChange={handleChange}
        />
        <input
          type="text"
          name="payment_method"
          placeholder="Payment Method"
          onChange={handleChange}
        />
        <input
          type="date"
          name="Order_date"
          placeholder="Order Date"
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />
        <input
          type="number"
          name="Source_id"
          placeholder="Source ID"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ch_id"
          placeholder="Ch ID"
          onChange={handleChange}
        />
        <input
          type="number"
          name="member_id"
          placeholder="Member ID"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
