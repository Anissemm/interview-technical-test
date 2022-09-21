import { PropsWithChildren } from 'react'
import styles from './List.module.scss'

export const List = ({ children }: PropsWithChildren) => {
    return (
        <ul className={`${styles.list}`}>
            {children}
        </ul>
    )
}
