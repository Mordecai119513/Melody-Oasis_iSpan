import React from 'react'
import styles from './detailSection2.module.scss'

const DetailSection2 = ({
  titleIntroduce,
  introduceStyle,
  titleIntroduceTwo,
  children,
  contentDetail,
}) => {
  const styleName = styles[introduceStyle] ? introduceStyle : 'introduceStyle'

  return (
    <div className={styles.blockMask}>
      <div className={styles.introducepageStyle}>
        <div className={styles.contentWrapper}>
          <div className={styles.headerStyle}>
            <p className={styles.titleintroduce}>
              {titleIntroduce || '活動介紹'}
            </p>
          </div>
          <p className={styles[styleName]}>
            {children || '這裡是一些內容或占位符'}
          </p>
          <div className={`px-2 ${styles.headerStyle}`}>
            <p className={styles.titleintroduceTwo}>
              {titleIntroduceTwo || '活動地點'}
            </p>
          </div>
          <div className={styles.centerContent}>{contentDetail}</div>
        </div>
      </div>
    </div>
  )
}

export default DetailSection2
