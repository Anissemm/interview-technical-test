import { PropsWithChildren } from 'react'
import styles from './InfoCard.module.scss'

type CardProp = {
    heading?: string
    withBentEdge?: boolean
}

type RedCardProp = CardProp & { red: boolean, dark?: never }
type DarkCardProp = CardProp & { dark: boolean, red?: never }

export const InfoCard = ({ heading, red = false, dark = true, withBentEdge, children }: PropsWithChildren<RedCardProp | DarkCardProp>) => {
    return (
        <div className={`${styles.card} ${red ? styles.red : styles.dark} ${withBentEdge ? styles.withBentEdge : ''}`}>
            <h4 className={styles.heading}>{heading}</h4>
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    )
}
