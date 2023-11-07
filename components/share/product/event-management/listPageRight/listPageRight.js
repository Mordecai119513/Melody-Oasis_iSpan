import React from 'react'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
import styles from './listPageRight.module.scss'
import Custompagination from '@/components/evaluate/custompagination' // 詢問炫志該如何使用
import DropdownComponent from '@/components/share/product/event-management/sortButton/DropdownComponent'
import OffcanvasRightButton from '@/components/share/aside/offcanvas-right-button'
import AsideContentEvent from '@/components/product/event-management/aside-content-event/aside-content'

function DynamicCardComponent({ cardType }) {
  if (cardType === 1) return <CardComponent />
  if (cardType === 2) return <CardComponent2 />
  if (cardType === 3) return <CardComponent3 />
  if (cardType === 4) return <CardComponent4 />
  return null
}

export default function ListPageRight({
  cards = [],
  allEvents = [],
  setPage = () => {},
  page = 1,
}) {
  return (
    <div className={styles.rightBlock}>
      <h1 className={styles.headerStyle}>全部活動</h1>
      <div className={styles.SortButtonStyle}>
        <DropdownComponent />
        {/* // 手機版list */}
        <div className={styles.OffcanvasButtonStyle}>
          <OffcanvasRightButton>
            <AsideContentEvent
              type={'活動'}
              subtitle={'地區'}
              choice={[
                '台灣北部',
                '台灣中部',
                '台灣南部',
                '台灣東部',
                '日韓地區',
                '歐美地區',
              ]}
            />
          </OffcanvasRightButton>
        </div>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.cardContainer}>
          {cards.map((cardType, index) => (
            <div key={index} className={styles.cardRow}>
              <DynamicCardComponent cardType={cardType} />
            </div>
          ))}
        </div>
        <div className={styles.paginationContainerStyle}>
          <Custompagination
            product={allEvents}
            perPage={4}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </div>
  )
}
