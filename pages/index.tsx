import { GetStaticProps } from 'next'
import Head from 'next/head'
import CourseArticle from '../components/CourseArticle'
import InfoCard from '../components/InfoCard'
import List from '../components/List'
import styles from '../styles/Home.module.scss'

export default function Home({ courses }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Специализированные дисциплины</title> 
      </Head>
      <h1 className={styles.heading}>Специализированные дисциплины</h1>
      <main >
        <div className={styles.coursesWrapper}>
          {courses.map((course: Course) => <CourseArticle key={course.id} course={course} />)}
        </div>
        <div className={styles.infoCardsWrapper}>
          <div className={styles.info}>
            <InfoCard heading='Практические модули' red withBentEdge>
              Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
            </InfoCard>
            <InfoCard heading='Итоговая аттестация' dark>
              <List>
                <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
                <li>Защита итоговой аттестационной работы</li>
              </List>
            </InfoCard>
          </div>
        </div>
      </main>

    </div>
  )
}

export type ModuleSubject = {
  string: string,
  id: string
  _id: string,
  _v: number
}

export type Module = ModuleSubject[]

export type Course = {
  id: string,
  title: string,
  firstModule: Module
  secondModule: Module
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api-moscow-mba.herokuapp.com/products?_limit=2')
  const data = await response.json()
  const courses: Course[] = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      firstModule: item.baseSubjects.slice(0, 5),
      secondModule: item.specializedSubjects.slice(0, 5)
    }
  })

  return {
    props: {
      courses
    }
  }
}