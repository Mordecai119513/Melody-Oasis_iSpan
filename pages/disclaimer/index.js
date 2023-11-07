import Breadcrumb from '@/components/share/breadcrumb'
import React from 'react'

export default function Disclaimer() {
  return (
    <>
      <div className="container  p-5">
        {/* 麵包屑 */}
        <div className="breadCrumbs mt-2">
          <Breadcrumb />
        </div>
        <h2 className="text-center bg-warning p-3 m-5">免責聲明</h2>
        <p className="text-center py-2 text-info">
          本網站（以下簡稱“我們的網站”）僅供測試和參考用途。在使用我們的網站或其任何資源之前，請仔細閱讀以下免責聲明。
        </p>
        <div className=" my-4 text-info">
          <div className="p-2">
            <ul className="">
              <li className="h3">
                <p>一、一般免責</p>
                <p>
                  本網站內容（包括但不限於文字、圖片、視頻等）僅供參考和測試。
                  我們不保證網站內容的準確性、完整性、及時性或可靠性。
                  使用本網站的風險由用戶自行承擔。
                </p>
              </li>
              <li className="h3">
                <p>二、版權聲明</p>
                <p>
                  除非另有明確聲明，本網站的所有內容都屬於測試用途，不具有商業價值。
                  未經我們的明確書面許可，任何單位或個人不得以任何方式或理由對本網站內容進行使用、複製、修改或發佈。
                </p>
              </li>
              <li className="h3">
                <p>三、第三方連結</p>
                <p>
                  {' '}
                  本網站可能包含第三方網站的連結，但這不意味著我們認可或擁有這些第三方網站的內容。
                  我們對第三方網站的內容、產品或服務不承擔任何責任。
                </p>
              </li>
              <li className="h3">
                <p>四、隱私政策</p>
                <p>本網站尊重用戶隱私，不會在未經許可的情況下收集個人信息。</p>
              </li>
              <li className="h3">
                <p>五、限制和排除責任</p>
                <p>
                  在任何情況下，我們不會對因使用或不能使用本網站而造成的任何型態的損失或傷害負責。
                  我們不對用戶因遵循本網站信息而採取的行動負責。
                </p>
              </li>
              <li className="h3">
                <p>六、更新和修訂</p>
                <p>
                  我們有權隨時更新或修訂本免責聲明。
                  任何修訂都將在本頁面上發布，不另行通知。
                </p>
              </li>
              <li className="h3">
                <p>七、聯繫方式 </p>
                <p>電子郵件：test@yourdomain.com 電話：(123) 456-7890</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
