import React from 'react'

import styles from '../../scss/somethingWrong/somethingWrong.module.scss'


export const SomethingWentWrong = () => {
    return (
        <div className={styles.container}>

            <p className={styles.message}>

                Something went wrong
            </p>

        </div>
    )
}
