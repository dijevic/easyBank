import React from 'react'

import styles from '../../../scss/common/noArticles.module.scss'
import { NotFoundIcon } from '../icons/NotFoundIcon'


export const NoArticles = () => {
    return (
        <div className={styles.container}>

            <p className={styles.message}>

                There are not  Articles at the moment or something went wrong getting them
            </p>

            <NotFoundIcon />
        </div>
    )
}
