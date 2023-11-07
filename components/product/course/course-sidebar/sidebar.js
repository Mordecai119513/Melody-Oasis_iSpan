import React from 'react'
import styles from './sidebar.module.css'

const SidebarComponent = () => {
  return (
    <div className={styles.sidebar + ' text-center'}>
      <h2 className={styles['custom-font-size']}>活動類別</h2>
      <hr />
      <ul>
        <li
          className={styles['text-center'] + ' ' + styles['custom-font-size']}
        >
          所有課程
        </li>
      </ul>
      <h2 className={styles['custom-font-size']}>活動篩選</h2>
      <hr />
    </div>
  )
}

export default SidebarComponent
