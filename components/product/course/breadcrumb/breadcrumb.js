import React from 'react'
import { Breadcrumb } from 'antd'
import styles from './breadcrumb.module.css'

const CustomBreadcrumb = () => (
  <div className={styles.whiteText}>
    {' '}
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
  </div>
)

export default CustomBreadcrumb
