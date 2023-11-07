import Framework from '@/components/share/framework/framework-left-right'
import React from 'react'

export default function TestFrameworkLeftRight() {
  return (
  <>
    <Framework
      leftContent=
      //  左邊內容放這
      <>
        <h1 className='text-white'>左邊內容</h1>
      </> 
      rightContent=
      //  右邊內容放這
      <>
        <h1 className='text-white'>右邊邊內容</h1>
      </>
     
    >
     </Framework>
  </>
  )
}
