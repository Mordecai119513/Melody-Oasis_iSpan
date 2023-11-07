import React from 'react'
import DropdownComponent from '@/components/share/product/event-management/sortButton/DropdownComponent'
import OffcanvasRightButton from '@/components/share/aside/offcanvas-right-button'
import AsideContentEvent from '@/components/product/event-management/aside-content-event/aside-content'
import Custompagination from '@/components/evaluate/custompagination'
import styles from './frameworkListPage.module.scss'
export default function RightContent({
  headerText = '', // 新增的prop
  eventType = '活動',
  subtitle = '地區',
  regionChoices = [
    '台灣北部',
    '台灣中部',
    '台灣南部',
    '台灣東部',
    '日韓地區',
    '歐美地區',
  ],
  allEvents = [],
  perPage = 4,
  setPage,
  page,
  onSelectRegion,
  cards,
  onSortSelect, // 新增的prop
}) {
  return (
    <div className={styles.rightBlock}>
      <h1 className={styles.headerStyle}>{headerText}</h1>
      <div className={styles.SortButtonStyle}>
        <DropdownComponent
          className={styles.SortButtonStyle}
          onSortSelect={onSortSelect}
        />
        <div className={styles.OffcanvasButtonStyle}>
          <OffcanvasRightButton>
            <AsideContentEvent
              type={eventType}
              subtitle={subtitle}
              choice={regionChoices}
              onSelectRegion={onSelectRegion}
            />
          </OffcanvasRightButton>
        </div>
      </div>
      <div className="row g-3 mt-3">{cards}</div>
    </div>
  )
}
