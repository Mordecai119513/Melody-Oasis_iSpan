import React, { useEffect, useState } from 'react'
import styles from './course.module.scss'
import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
import EventAsideContentMo from '@/components/share/product/event-management/EventAsideContent/EventAsideContent'
import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'
import Custompagination from '@/components/evaluate/custompagination'
import CourseCard from '@/components/product/course/course-card/course'
import { useCourseCart } from '@/hooks/use-cart-course'

export default function EventManagement() {
  const [courseData, setCourseData] = useState([])
  const [currentPage, setCurrentPage] = useState(1) // 当前页码
  const coursesPerPage = 4 // 每页显示的课程数量
  const [selectedEvents, setSelectedEvents] = useState([])
  const [sortType, setSortType] = useState('dateDesc') // 默认排序类型

  const { addCourse } = useCourseCart()

  useEffect(() => {
    // 获取课程数据
    fetch('http://localhost:3005/api/course')
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data)
        // 对数据进行默认排序
        const sortedData = sortCourseData(data, sortType)
        setSelectedEvents(sortedData)
      })
      .catch((error) => {
        console.error('发生错误：', error)
      })
  }, [sortType])

  const sortCourseData = (data, type) => {
    let sortedData = [...data]
    switch (type) {
      case '日期由新到舊':
        sortedData.sort((a, b) => new Date(b.up_date) - new Date(a.up_date))
        break
      case '日期由舊到新':
        sortedData.sort((a, b) => new Date(a.up_date) - new Date(b.up_date))
        break
      case '價錢由高到低':
        sortedData.sort((a, b) => b.price - a.price)
        break
      case '價錢由低到高':
        sortedData.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }
    return sortedData
  }

  const handleSort = (type) => {
    setSortType(type)
  }

  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = selectedEvents.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  )

  const cards = (
    <>
      <div className="row row-cols-2 w-150">
        {currentCourses.map((course, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <div className={`${styles.productcard}`} key={course.course_id}>
              <CourseCard
                course_id={course.course_id}
                name={course.name}
                teacher={course.teacher_name}
                price={course.price}
                img={course.img}
                directions={course.directions}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  const item = { ...course, quantity: 1 }
                  addCourse(item)
                }}
              >
                加入購物車
              </button>
            </div>
          </div>
        ))}
      </div>
      <Custompagination
        product={courseData}
        perPage={coursesPerPage}
        setPage={setCurrentPage}
        page={currentPage}
      />
    </>
  )

  return (
    <FrameworkLeftRight
      leftContent={
        <EventAsideContentMo type={'課程'} subtitle={'所有課程'} choice={[]} />
      }
      rightContent={
        <RightContent
          headerText="全部課程"
          eventType="課程"
          subtitle="所有課程"
          regionChoices={[]}
          allEvents={[]}
          perPage={coursesPerPage}
          setPage={setCurrentPage}
          page={currentPage}
          cards={cards}
          onSortSelect={handleSort}
        />
      }
    />
  )
}
