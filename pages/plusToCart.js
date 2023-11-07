
import { useCart } from '@/hooks/use-cart'  //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

  const { addItem } = useCart()  //課程const addCourse、活動const addTicket


    return(
      //購物車按鈕

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
        const item = { ...album, quantity: 1}; //ablum要更改
        addItem(item); //課程 addCourse、活動 addTicket
      }}
    >
      加入購物車
    </button>

)
   

import { useCourseCart } from '@/hooks/use-cart-course'

//購物按鈕
const {addCourse,course,courseCart}=useCourseCart()

onClick={()=>{
  addCourse({
    id:{id},
    price:{price},
    picture:`/product/event-management/eventBanner/${images}`,
    quantity:1,
    name:{names},
  })
}}