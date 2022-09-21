import React, { useContext } from 'react'
import { Course } from '../../pages'
import { BreakpointContext } from '../../providers/BreakpointProvider'
import CourseModule from '../CourseModule'
import styles from './CourseArticle.module.scss'

type CourseArticleProps = {
  course: Course
}

export const CourseArticle = ({ course }: CourseArticleProps ) => {
  const breakpoint = useContext(BreakpointContext)

  return (
    <article className={styles.article}>
      <h2 className={styles.heading}>{course.title}</h2>
      <div role={breakpoint == 'sm' ? 'tablist' : undefined} className={styles.modules}>
        <CourseModule courseId={course.id} moduleCount={1} module={course.firstModule} />
        <CourseModule courseId={course.id} moduleCount={2} module={course.secondModule} />
      </div>
    </article>
  )
}
