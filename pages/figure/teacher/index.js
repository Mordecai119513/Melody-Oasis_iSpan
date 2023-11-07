import React from 'react'
import styles from './teacher.module.scss'
import Card from '@/components/product/course/course-card/course'

export default function Teacher() {
  return (
    <>
      <div className={styles.pageStyle}>
        <div className={styles.teacherStyle}>
          <div
            className={`container d-flex justify-content-center align-items-center ${styles.teachertitleStyle}`}
          >
            <img
              className={styles.teacherimageStyle}
              src="/product/course/samlee.png"
              alt="techerimage"
            />
            <div className={styles.teachernameStyle}>
              <h4>授課老師</h4>
              <h1>Sam Lee</h1>
              <h5>Apple 認證 Logic Pro 講師</h5>
            </div>
          </div>
        </div>
        <div className={styles.teacherintroduceStyle}>
          <div className={styles.teacherintroducetitle1Style}>
            <h1>老師簡介</h1>
          </div>
          <div className={styles.teacherintroducetitle2Style}>
            <h3>
              Apple 認證 Logic Pro 講師，擁有Apple 認證 Logic Pro Trainer、Avid
              Pro Tools User證照，畢業於倫敦西敏寺大學聲音製作 (Audio
              Production) 碩士、洛杉磯 Musicians Institute RAP/RIT
              獨立製作/錄音工程學程。曾任音響論壇器材試聽評論及採訪編輯，房角石音樂工作室錄音師。
            </h3>
          </div>
          <div className={styles.button1Style}>
            <button className={` offset-md-11 ${styles.buttonStyle}`}>
              點我看更多
            </button>
          </div>
        </div>
        <div className={`${styles.teacherclassStyle}`}>
          <div className={styles.teachertopStyle}>
            <h2>SamLee的音樂課程</h2>
            <div className={`d-flex justify-content-center m-4 ${styles.cardContainerStyle}`}>
            <div className="col-4">
              <Card />
            </div>
              <div style={{ margin: '20px' }}></div>
            <div className="col-4">
              <Card />
            </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className={`btn btn-secondary p-2 ${styles.morebutton}`}>
                <h2 className="m-0">更多</h2>
              </button>
            </div>
          </div>
          <div className={styles.teachertopStyle}>
            <h2>其他老師的音樂課程</h2>
            <div className={`d-flex justify-content-center m-4 ${styles.cardContainerStyle}`}>
            <div className="col-4">
              <Card />
            </div>
              <div style={{ margin: '20px' }}></div>
            <div className="col-4">
              <Card />
            </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button className={`btn btn-secondary p-2 ${styles.morebutton}`}>
                <h2 className="m-0">更多</h2>
              </button>
            </div>
          </div>
          <div className={styles.teachertopStyle}>
            <h2>為您推薦的老師</h2>
            <div className="d-flex justify-content-center mt-5">
              <button className={`btn btn-secondary p-2 ${styles.morebutton}`}>
                <h2 className="m-0">更多</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
