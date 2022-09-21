import React, { useContext, useState } from 'react'
import { Module } from '../../pages'
import { BreakpointContext } from '../../providers/BreakpointProvider'
import List from '../List'
import styles from './CourseModule.module.scss'

type CourseModuleProps = {
  module: Module,
  moduleCount: number
  courseId: string
}

export const CourseModule = ({ courseId, module, moduleCount }: CourseModuleProps) => {
  const [showList, setShowList] = useState(false)
  const breakpoint = useContext(BreakpointContext)
  const smScreen = breakpoint == 'sm'

  return (
    <div className={styles.moduleWrapper}>
      <div
        role={smScreen ? 'tab' : undefined}
        className={`${styles.tab} ${showList && smScreen ? styles.show : ''}`}
        aria-expanded={smScreen ? showList : undefined}
        aria-controls={smScreen ? `module-tab-${moduleCount}-${courseId}` : undefined}
        onClick={() => {
          if (smScreen) {
            setShowList(prev => !prev)
          }
        }
        }
      >
        <h3 className={styles.tabText}>{moduleCount} Модуль</h3>
      </div>
      <div
        id={`module-tab-${moduleCount}-${courseId}`}
        role={smScreen ? 'tabpanel' : undefined}
        className={`${styles.list} ${showList && smScreen ? styles.show : ''}`}
        aria-hidden={smScreen ? !showList : undefined}
      >
        <List>
          {
            module.map((subject: { _id: string, string: string }) => {
              return <li className={styles.item} key={subject._id}>{subject.string}</li>
            })
          }
        </List>
      </div>
    </div>
  )
}
