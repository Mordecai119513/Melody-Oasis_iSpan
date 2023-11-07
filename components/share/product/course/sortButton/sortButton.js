import React from 'react'

export default function SortButton() {
  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: '150px' }}
        >
          排序
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              日期由新到舊
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              日期由舊到新
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              價錢由高到低
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              價錢由低到高
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              收藏由高到低
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              收藏由低到高
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
