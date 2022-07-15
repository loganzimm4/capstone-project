import React from 'react'
import CourseCard from './CourseCard'

function CoursesList({courses, filteredDeletedCourse, onUpdatedCourse}) {

  return (
    <ul>
      {courses.map(course => <CourseCard course={course} key={course.id} filteredDeletedCourse={filteredDeletedCourse} onUpdatedCourse={onUpdatedCourse}/>)}
    </ul>
  )
}

export default CoursesList