import React from 'react'
// styles
import styles from '../../scss/common/subtitle.module.scss'


export const Subtitle = ({ text }) => {
    return (
        <h2 className={styles.subtitle}>
            {text}
        </h2>
    )
}
