import React, { useReducer, useContext, createContext, useEffect } from 'react'
import { reducer, init } from './cart-reducer'
import useLocalStorage from './use-localstorage'
const CourseCartContext = createContext(null)
//購物車按鈕
// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

// item = {
//   id: '',
//   quantity: 0,
//   name: '',
//   price: 0,
// }
//以後要取用可以直接輸出
export const useCourseCart = () => useContext(CourseCartContext);

export const CartCourseProvider = ({
  children,
  initialCartItems = [], //初始化購物車的加入項目
  localStorageKey = 'coursecart', //初始化localStorage的鍵名
}) => {
  // 如果localStorage有此鍵中的值，則套入使用作為初始items
  // localStorage中只儲存 items
  let items = initialCartItems

  if (!items.length) {
    try {
      // Get from local storage by key
      // fix next issue
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(localStorageKey)
        // Parse stored json or if none return initialValue
        items = item ? JSON.parse(item) : []
      }
    } catch (error) {
      items = []
      console.log(error)
    }
  }

  // init state, init來自cartReducer中
  const [state, dispatch] = useReducer(reducer, items, init)

  // init setValue(localStoage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  // 當 state.items 更動時 -> 更動 localStorage 中的值
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(state.items) !== storedValue) {
      setValue(state.items)
    }
  }, [state])

  /**
   * 加入新項目(quantity:1)，重覆項目 quantity: quantity + 1
   * @param  {Object} item
   * @returns {void}
   */
  const addCourse = (item) => {
    if(isInCourseCart(item.id)){
      alert(`課程${item.name}已存在於購物車中`)
    }else{
      dispatch({
        type: 'ADD_ITEM',
        payload: item,
      })
    }
  }

  /**
   * 給定一id值，將這商品移出陣列中
   * @param {string} id
   * @returns {void}
   */
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        id,
      },
    })
  }

  /**
   * 給定一item物件，依照id尋找後更新其中的屬性值
   * @param {Object} item
   * @returns {void}
   */
  const updateItem = (item) => {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    })
  }

  /**
   * 清空整個購物車
   * @returns {void}}
   */
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  /**
   * 給定一id值，回傳是否存在於購物車中
   * @param {string} id
   * @returns {boolean}
   */
  const isInCart = (id) => {
    return state.items.some((item) => item.id === id)
  }

  /**
   * 給定一id值，回傳是否存在於購物車
   * @param {string} id
   * @returns {boolean}
   */
  const isInCourseCart = (id) => {
    return state.items.some((item)=>item.id === id)
  }

  


  return (
    <CourseCartContext.Provider
      value={{
        courses: state,
        courseCart: state.items,
        addCourse,
        removeItem,
        updateItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CourseCartContext.Provider>
  )
}
