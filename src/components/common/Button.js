import React from 'react'

// styles

import styles from '../../scss/common/button.module.scss'


export const Button = ({ secondGradient, text, type, onClick }) => {
    return (
        <button
            onClick={onClick}
            type={(type) ? type : 'submit'}
            className={(secondGradient) ? `${styles.button} ${styles.gradient2}` : styles.button}>

            {text}
        </button>
    )
}
