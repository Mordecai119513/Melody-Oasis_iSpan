import React from 'react'
import { Dropdown } from 'rsuite'

const DropdownComponent = ({ onSortSelect }) => (
  <Dropdown title="排列" class="btn btn-secondary dropdown-toggle">
    <Dropdown.Item onClick={() => onSortSelect('日期由新到舊')}>
      日期由新到舊
    </Dropdown.Item>
    <Dropdown.Item onClick={() => onSortSelect('日期由舊到新')}>
      日期由舊到新
    </Dropdown.Item>
    <Dropdown.Item onClick={() => onSortSelect('價錢由高到低')}>
      價錢由高到低
    </Dropdown.Item>
    <Dropdown.Item onClick={() => onSortSelect('價錢由低到高')}>
      價錢由低到高
    </Dropdown.Item>
  </Dropdown>
)

export default DropdownComponent
