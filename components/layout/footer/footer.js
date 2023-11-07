import React from 'react'
import style from './footer.module.scss'
import { FaLocationDot } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={`container-fluid bg-light ${style.footer}`}>
        <div className={`${style.bgimg}`}>
          <div className={`${style.footer_nav} row`}>
            <div className="text-info col-sm-auto d-none d-sm-block">
              <Image src="/footer/copyright.svg" width={250} height={150} />
              <div>
                <FaLocationDot />
                &nbsp; 台灣 &nbsp; © 2023 Oasis-Coporation 版權所有
              </div>
            </div>
            <div className={`${style.href} col-sm-auto`}>
              <Link href="/about" className="h3">
                關於我們
              </Link>
            </div>
            <div className={`${style.href} col-sm-auto`}>
              <Link href="/disclaimer" className=" h3">
                免責聲明
              </Link>
            </div>

            <div className={`${style.href} col-sm-auto`}>
              <Link href="/customerservice" className="h3">
                客服中心
              </Link>
            </div>

            <div className={`col-sm-auto`}>
              <div className={`col-sm-2 row`}>
                <div className={`text-info d-flex align-items-center`}>
                  <div className="text-center text-sm-start">
                    <span className="h3 ">聯絡我們</span>
                    <div className="text-sm-start">
                      信箱: oasiscoperation12345@nezid.com
                    </div>
                    <div className="text-sm-start">電話: 02-2761794</div>
                    <div className="text-sm-start">
                      地址: 新北市新店區禾豐七路30號
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
