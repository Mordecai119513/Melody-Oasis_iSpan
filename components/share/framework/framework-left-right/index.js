import React from 'react'
import Breadcrumb from '@/components/share/breadcrumb'
export default function FrameworkLeftRight({ leftContent, rightContent }) {
  return (
    <>
      <div className="container">
        {/* 麵包屑 */}
        <div className="breadCrumbs">
          <Breadcrumb />
        </div>
        <div className="row">
          {/* 左邊 */}
          <div className="left col-3 d-md-block d-none">{leftContent}</div>
          {/* 右邊 */}
          <div className="right col-md-9 col-12">{rightContent}</div>
        </div>
      </div>
    </>
  )
}
