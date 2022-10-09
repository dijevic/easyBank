import React from 'react'

import styles from '../../scss/details section/details.module.scss'


export const Card = ({ Icon, title, content }) => {
    return (
        <div className={styles.card}>
            <Icon />

            <h3 className={styles.title}>

                {title}
            </h3>

            <p className={styles.content} >

                {content}
            </p>


        </div>
    )
}
