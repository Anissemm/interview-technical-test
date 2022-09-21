import { PropsWithChildren } from 'react'
import styles from './InfoCard.module.scss'

type CardProps = {
    heading?: string
    withBentEdge?: boolean
}

type RedCardProps = CardProps & { red: boolean, dark?: never }
type DarkCardProps = CardProps & { dark: boolean, red?: never }

export const InfoCard = ({ heading, red = false, dark = true, withBentEdge, children }: PropsWithChildren<RedCardProps | DarkCardProps>) => {
    return (
        <div className={`${styles.card} ${red ? styles.red : styles.dark} ${withBentEdge ? styles.withBentEdge : ''}`}>
            <h4 className={styles.heading}>{heading}</h4>
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    )
}
