//http://localhost:3000/test-module/aside
import React from 'react'

export default function OffcanvasRightButton({ children }) {
  return (
    <>
      <button
        // className="btn btn-primary ms-2"
        className="btn btn-primary d-sm-none ms-2" //螢幕<576px時顯示此按鈕
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        篩選
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-secondary">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-secondary">{children}</div>
      </div>
    </>
  )
}
