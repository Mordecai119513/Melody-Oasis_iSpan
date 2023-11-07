import React from 'react'
import styles from './detailSection1.module.scss'
import Breadcrumb from '@/components/share/breadcrumb'
import DetailCard from '../detailPage-card/detailPage-card'

const DetailSection1 = ({ data }) => {
  // console.log(data)

  const [hasImageError, setHasImageError] = React.useState(false)

  const handleImageError = () => {
    console.log('Image failed to load:', data.images)
    setHasImageError(true)
  }
  console.log('Image URL:', data.images)

  return (
    <div className={styles.pageContainer}>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.imageBlock}>
          <img
            src={
              hasImageError
                ? '/homePage/fireball.png'
                : `/product/event-management/eventBanner/${data.images}`
            }
            alt="TopImg"
            className={styles.imageContainer}
            onError={handleImageError}
          />
        </div>
        <div className={styles.cardContainer}>
          <DetailCard
            currency={data.names}
            cardTextOne={data.dates}
            cardTextTwo={data.location_name}
            priceText={data.price}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailSection1

//傳遞的使用方法
{
  /* <DetailCard
currency={eventData.names} 這樣用
cardTextOne="時間: 2023-11-11"
cardTextTwo="活動地點: 高雄國家體育場 (世運主場館)"
priceText="$1,990"
/> */
}

// 以下為成功傳遞的寫法
// import React, { useEffect, useState } from 'react'
// import styles from './detailSection1.module.scss'
// import Breadcrumb from '@/components/share/breadcrumb'
// import DetailCard from '../detailPage-card/detailPage-card'
// import { useRouter } from 'next/router'
// import axios from 'axios'
// import EventCardButton from '../detailPage-button/detailPage-button'

// const DetailSection1 = () => {
//   const [eventData, seteventData] = useState({
//     id: 1,
//     images: '',
//     names: '',
//     dates: '',
//     location_id: 0,
//     price: 0,
//     statuss: 0,
//     launch_date: '',
//     descriptions: '',
//   })
//   // const router = useRouter()
//   // console.log(eventData)
//   useEffect(() => {
//     // 這裡是一個獲取資料的範例，您需要根據實際的API或方法來替換這部分。
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3005/api/product/event-management/${id}`
//         )
//         console.log(response.data)
//         seteventData(response.data)
//       } catch (error) {
//         console.error('資料獲取失敗:', error)
//       }
//     }
//     fetchData()
//   }, [])
//   DetailSection1()
//   return (
//     <div className={styles.pageContainer}>
//       <div className={styles.breadcrumb}>
//         <Breadcrumb />
//       </div>
//       <div className={styles.flexContainer}>
//         <div className={styles.imageBlock}>
//           <img
//             src="/homePage/fireball.png"
//             alt="TopImg"
//             className={styles.imageContainer}
//           />
//         </div>
//         <div className={styles.cardContainer}>
//           <div className={styles.card}>
//             <main className={styles.container}>
//               <div className={styles.row}>
//                 <div className={`${styles.col} mt-2`}>
//                   <div
//                     className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
//                   >
//                     <div className={styles.positionRelative}></div>
//                     <div className={styles.cardBody}>
//                       <h2 className={`${styles.currency} bold`}>
//                         {response.data.names}
//                       </h2>
//                       <p className={styles.cardTextOne}>{cardTextOne}</p>
//                       <p className={styles.cardTextTwo}>{cardTextTwo}</p>
//                       <h2 className={`${styles.priceText} bold`}>
//                         {priceText}
//                       </h2>
//                     </div>
//                     <div className={styles.footer}>
//                       <EventCardButton />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DetailSection1

// 傳遞的使用方法
// {
//   /* <DetailCard
// currency={eventData.names} 這樣用
// cardTextOne="時間: 2023-11-11"
// cardTextTwo="活動地點: 高雄國家體育場 (世運主場館)"
// priceText="$1,990"
// /> */
// }
