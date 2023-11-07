import { useEffect, React, useState } from 'react'
import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
import EventAsideContentMoMo from '@/components/share/product/event-management/EventAsideContentMo/EventAsideContentMo'
import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import Custompagination from '@/components/evaluate/custompagination'
import axios from 'axios'

export default function EventManagement() {
  const perPage = 4
  const [allEvents, setAllEvents] = useState([])
  const [selectedEvents, setSelectedEvents] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('全部')
  const [page, setPage] = useState(1)

  const [sortType, setSortType] = useState('dateDesc')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max })
  }

  // 排序
  const handleSort = (sortType) => {
    let sortedEvents = [...allEvents]
    switch (sortType) {
      case '日期由新到舊':
        sortedEvents.sort((a, b) => new Date(b.dates) - new Date(a.dates))
        break
      case '日期由舊到新':
        sortedEvents.sort((a, b) => new Date(a.dates) - new Date(b.dates))
        break
      case '價錢由高到低':
        sortedEvents.sort((a, b) => b.price - a.price)
        break
      case '價錢由低到高':
        sortedEvents.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }
    setSelectedEvents(sortedEvents)
  }

  // 接資料

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/product/event-management')
      .then((response) => {
        const products = response.data.products
        setAllEvents(products)
        console.log(products)
        const shuffled = products.sort(() => 0.5 - Math.random())
        setSelectedEvents(shuffled.slice(0, 4)) // 取前四項
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  // 日期篩選
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const handleStartDateChange = (date) => {
    setStartDate(date)
    console.log('選取的開始日期:', date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
    console.log('選取的結束日期:', date)
  }

  useEffect(() => {
    let filteredEvents = [...allEvents]

    console.log(startDate, endDate, allEvents, selectedRegion, priceRange)
    // 日期範圍篩選
    if (startDate && endDate) {
      // filteredEvents = filteredEvents.filter(
      //   (event) =>
      //     new Date(event.dates) >= new Date(startDate) &&
      //     new Date(event.dates) <= new Date(endDate)
      // )

      const startTimestamp = Number(new Date(startDate))
      const endTimestamp = Number(new Date(endDate))
      console.log(startTimestamp, endTimestamp)

      filteredEvents = filteredEvents.filter((v) => {
        return (
          Number(new Date(v.dates)) <= endTimestamp &&
          Number(new Date(v.dates)) >= startTimestamp
        )
      })
    }

    // 價錢篩選
    filteredEvents = filteredEvents.filter(
      (event) => event.price >= priceRange.min && event.price <= priceRange.max
    )

    // 地區分類
    if (selectedRegion && selectedRegion !== '全部') {
      filteredEvents = filteredEvents.filter(
        (event) => event.region === selectedRegion
      )
    }

    console.log(filteredEvents)
    setSelectedEvents(filteredEvents)
  }, [startDate, endDate, allEvents, selectedRegion, priceRange])

  const currentEvents = selectedEvents.slice(
    (page - 1) * perPage,
    page * perPage
  )

  const cards = (
    <>
      {currentEvents.map((eventItem, index) => {
        return (
          <div
            className="col-12 col-md-6"
            key={index}
            tabIndex={0}
            role="button"
            onClick={() =>
              (window.location.href = `/product/event-management/${eventItem.id}`)
            }
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                window.location.href = `/product/event-management/${eventItem.id}`
              }
            }}
          >
            <CardComponent eventData={eventItem} />
          </div>
        )
      })}

      <Custompagination
        product={allEvents}
        perPage={perPage}
        setPage={setPage}
        page={page}
      />
    </>
  )

  // const filterDates = (allEvents, start, end) => {
  //   if (!start) return allEvents
  //   if (!end) return allEvents

  //   const startTimestamp = Number(new Date(start))
  //   const endTimestamp = Number(new Date(end))
  //   console.log(startTimestamp, endTimestamp)

  //   const newEvents = allEvents.filter((v) => {
  //     return (
  //       Number(new Date(v.dates)) <= endTimestamp &&
  //       Number(new Date(v.dates)) >= startTimestamp
  //     )
  //   })
  //   console.log(newEvents)
  //   return newEvents
  // }

  return (
    <>
      <FrameworkLeftRight
        leftContent={
          <>
            <EventAsideContentMoMo
              type={'活動'}
              subtitle={'地區'}
              choice={['全部', '北部', '中部', '南部', '東部', '海外']}
              onRegionSelect={(region) => {
                setSelectedRegion(region)
                setPage(1)
              }}
              onStartDateChange={handleStartDateChange}
              onEndDateChange={handleEndDateChange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </>
        }
        rightContent={
          <>
            <RightContent
              headerText="全部活動"
              eventType="活動"
              subtitle="地區"
              regionChoices={['北部', '中部', '南部', '東部', '海外']}
              allEvents={selectedEvents}
              perPage={perPage}
              setPage={setPage}
              page={page}
              cards={cards}
              onSortSelect={handleSort}
              onRegionSelect={(region) => {
                setSelectedRegion(region)
                setPage(1)
              }}
            />
          </>
        }
      ></FrameworkLeftRight>
    </>
  )
}

// 1014早上寫的
// export default function EventManagement() {
//   return (
//     <FrameworkListPage
//       eventType="活動"
//       subtitle="地區"
//       regionChoices={[
//         '台灣北部',
//         '台灣中部',
//         '台灣南部',
//         '台灣東部',
//         '日韓地區',
//         '歐美地區',
//       ]}
//       perPage={5}
//       initialPage={2}
//       apiUrl="http://localhost:3005/api/product/event-management"
//     />
//   )
// }

//1013以前寫的.
// import { useEffect, React, useState } from 'react'
// import Breadcrumb from '@/components/share/breadcrumb'
// import EventAsideContent from '@/components/share/product/event-management/EventAsideContent/EventAsideContent'
// import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
// import styles from './event-management.module.scss'
// import Custompagination from '@/components/evaluate/custompagination' // 詢問炫志該如何使用
// import DropdownComponent from '@/components/share/product/event-management/sortButton/DropdownComponent'
// import OffcanvasRightButton from '@/components/share/aside/offcanvas-right-button'
// import AsideContentEvent from '@/components/product/event-management/aside-content-event/aside-content'
// import axios from 'axios'
// import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
// import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
// import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
// import DateFilterComponent from '@/components/share/product/event-management/dateFilterComponent/dateFilterComponent'
// import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
// import ListPageRight from '@/components/share/product/event-management/listPageRight/listPageRight'

// export default function FrameworkListPage() {
//   const [allEvents, setAllEvents] = useState([])
//   const [selectedEvents, setSelectedEvents] = useState([])
//   const [selectedRegion, setSelectedRegion] = useState('')
//   const [page, setPage] = useState(1)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3005/api/product/event-management')
//       .then((response) => {
//         const products = response.data.products
//         setAllEvents(products)
//         const shuffled = products.sort(() => 0.5 - Math.random())
//         setSelectedEvents(shuffled.slice(0, 4)) // 取前四項
//       })
//       .catch((error) => console.error('Error fetching data:', error))
//   }, [])

//   console.log(allEvents)

//   //大類按鈕
//   useEffect(() => {
//     if (allEvents.length === 0) return

//     let filteredEvents = allEvents
//     if (selectedRegion && selectedRegion !== '') {
//       filteredEvents = allEvents.filter(
//         (event) => event.region === selectedRegion
//       )
//     }

//     setSelectedEvents(filteredEvents.slice(0, 4))
//   }, [allEvents, selectedRegion])

//   //分頁按鈕
//   useEffect(() => {
//     const start = (page - 1) * 4
//     const end = page * 4
//     setSelectedEvents(allEvents.slice(start, end))
//   }, [page, allEvents])

//   return (
//     <>
//       <FrameworkLeftRight
//         leftContent=<>
//           {/* // 左邊內容放這 */}

//           <EventAsideContent
//             type={'活動'}
//             subtitle={'地區'}
//             choice={[
//               '台灣北部',
//               '台灣中部',
//               '台灣南部',
//               '台灣東部',
//               '日韓地區',
//               '歐美地區',
//             ]}
//           ></EventAsideContent>
//         </>
//         rightContent=<>
//           {/* // 右邊內容放這 */}
//           {/* <ListPageRight
//             cards={[1, 2, 3, 4]} // 這裡的陣列決定了要顯示哪些卡片
//             allEvents={allEvents}
//             setPage={setPage}
//             page={page}
//           /> */}

//           {/* <listPageRight
//             cards={[1, 2, 3, 4]}
//             allEvents={yourAllEventsArray}
//             setPage={yourSetPageFunction}
//             page={yourCurrentPage}
//           /> */}
//           <div className={styles.rightBlock}>
//             <h1 className={styles.headerStyle}>全部活動</h1>
//             <div className={styles.SortButtonStyle}>
//               <DropdownComponent />
//               <div className={styles.OffcanvasButtonStyle}>
//                 <OffcanvasRightButton>
//                   <AsideContentEvent
//                     type={'活動'}
//                     subtitle={'地區'}
//                     choice={[
//                       '台灣北部',
//                       '台灣中部',
//                       '台灣南部',
//                       '台灣東部',
//                       '日韓地區',
//                       '歐美地區',
//                     ]}
//                     onSelectRegion={setSelectedRegion}
//                   ></AsideContentEvent>
//                 </OffcanvasRightButton>
//               </div>
//             </div>
//             <div className={styles.sectionContent}>
//               <div className={styles.cardContainer}>
//                 <div className={styles.cardRow}>
//                   <CardComponent />
//                 </div>
//                 <div className={styles.cardRow}>
//                   <CardComponent2 />
//                 </div>
//               </div>
//               <div className={styles.cardContainer}>
//                 <div className={styles.cardRow}>
//                   <CardComponent3 />
//                 </div>
//                 <div className={styles.cardRow}>
//                   <CardComponent4 />
//                 </div>
//               </div>
//               <div className={styles.paginationContainerStyle}>
//                 <Custompagination
//                   product={allEvents} // 傳遞所有事件作為產品
//                   perPage={4}
//                   setPage={setPage} // 設定頁面的函數
//                   page={page}
//                 />
//               </div>
//             </div>
//           </div>
//         </>
//       ></FrameworkLeftRight>
//     </>

// <>
// <div className="container">
//   <div className="eventContainer">
//     <div className="bg-success p-5">
//       {/* 麵包屑 */}
//       <div className="breadCrumbs">
//         <Breadcrumb />
//       </div>
//       <div className="row">
//         {/* 左邊 */}
//         <leftContent />
//         <div className="left col-3 d-md-block d-none">
//           <EventAsideContent
//             type={'活動'}
//             subtitle={'地區'}
//             choice={[
//               '台灣北部',
//               '台灣中部',
//               '台灣南部',
//               '台灣東部',
//               '日韓地區',
//               '歐美地區',
//             ]}
//           ></EventAsideContent>
//         </div>
//         {/* 右邊 */}
//         <div className="right col-md-9 col-12">
//           <div className={styles.rightBlock}>
//             <h1 className={styles.headerStyle}>全部活動</h1>
//             <div className={styles.SortButtonStyle}>
//               <DropdownComponent />
//               <div className={styles.OffcanvasButtonStyle}>
//                 <OffcanvasRightButton>
//                   <AsideContentEvent
//                     type={'活動'}
//                     subtitle={'地區'}
//                     choice={[
//                       '台灣北部',
//                       '台灣中部',
//                       '台灣南部',
//                       '台灣東部',
//                       '日韓地區',
//                       '歐美地區',
//                     ]}
//                     onSelectRegion={setSelectedRegion}
//                   ></AsideContentEvent>
//                 </OffcanvasRightButton>
//               </div>
//             </div>
//             <div className={styles.sectionContent}>
//               <div className={styles.cardContainer}>
//                 <div className={styles.cardRow}>
//                   <CardComponent />
//                 </div>
//                 <div className={styles.cardRow}>
//                   <CardComponent2 />
//                 </div>
//               </div>
//               <div className={styles.cardContainer}>
//                 <div className={styles.cardRow}>
//                   <CardComponent3 />
//                 </div>
//                 <div className={styles.cardRow}>
//                   <CardComponent4 />
//                 </div>
//               </div>
//               <div className={styles.paginationContainerStyle}>
//                 <Custompagination
//                   product={allEvents} // 傳遞所有事件作為產品
//                   perPage={4}
//                   setPage={setPage} // 設定頁面的函數
//                   page={page}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </>
//   )
// }

// 加入排序功能
// useEffect(() => {
//   let sortedEvents = [...selectedEvents]
//   switch (sortType) {
//     case 'dateDesc':
//       sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date))
//       break
//     case 'dateAsc':
//       sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
//       break
//     case 'priceHigh':
//       sortedEvents.sort((a, b) => b.price - a.price)
//       break
//     case 'priceLow':
//       sortedEvents.sort((a, b) => a.price - b.price)
//       break
//     default:
//       break
//   }
//   setSelectedEvents(sortedEvents)
// }, [sortType, allEvents])
