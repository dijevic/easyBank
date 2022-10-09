import React from 'react'

import styles from '../../scss/modal/modal.module.scss'

import { ModalForm } from './ModalForm'


export const Modal = () => {
    return (
        <div className={styles.modalContainer}>

            <div className={styles.container}>

                <ModalForm />
            </div>

        </div>
    )
}
