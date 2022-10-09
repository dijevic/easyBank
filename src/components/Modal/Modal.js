import React from 'react'

// components
import { ModalForm } from './ModalForm'

// styles

import styles from '../../scss/modal/modal.module.scss'



export const Modal = () => {
    return (
        <div className={styles.modalContainer}>

            <div className={styles.container}>

                <ModalForm />
            </div>

        </div>
    )
}
