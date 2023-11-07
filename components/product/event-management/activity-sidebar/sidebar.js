import React from 'react'
import styles from './sidebar.module.scss'

const SidebarComponent = () => {
  return (
    <div className={styles.sidebar + ' text-center'}>
      <h2 className={styles['custom-font-size']}>活動類別</h2>
      <hr />
      <ul>
        <li
          className={styles['text-center'] + ' ' + styles['custom-font-size']}
        >
          台灣
        </li>
        <ul>
          <li
            className={styles['text-center'] + ' ' + styles['custom-font-size']}
          >
            北部
          </li>
          <li
            className={styles['text-center'] + ' ' + styles['custom-font-size']}
          >
            中部
          </li>
          <li
            className={styles['text-center'] + ' ' + styles['custom-font-size']}
          >
            南部
          </li>
          <li
            className={styles['text-center'] + ' ' + styles['custom-font-size']}
          >
            東部
          </li>
          <li
            className={styles['text-center'] + ' ' + styles['custom-font-size']}
          >
            海外
          </li>
        </ul>
      </ul>
      <h2 className={styles['custom-font-size']}>活動篩選</h2>
      <hr />
    </div>
  )
}

export default SidebarComponent
