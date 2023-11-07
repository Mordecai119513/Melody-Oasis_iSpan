import React, { useEffect, useState } from 'react'
import axios from 'axios'

// 將categoryId映射到音樂類型的對象
const categoryMapping = {
  1: '電子音樂',
  2: '鄉村音樂',
  3: '放克',
  4: '嘻哈',
  5: '爵士',
  6: '流行',
  7: '搖滾',
  8: '舞台劇和電影音樂',
  9: '雷鬼',
  10: '藍調',
}

function AlbumCategories(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (props.id) {
      axios
        .get(`http://localhost:3005/api/album/${props.id}/categories`)
        .then((response) => {
          // 將categoryId映射為音樂類型
          const mappedCategories = response.data.map((row) => ({
            categoryId: row.category_id,
            categoryType: categoryMapping[row.category_id] || '未知類型',
          }))
          setCategories(mappedCategories)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [props.id])

  return (
    <>
      {categories.map((category, index) => (
        <fragment key={index}>
          {category.categoryType}
          {index < categories.length - 1 && '、'}
        </fragment>
      ))}
    </>
  )
}

export default AlbumCategories
