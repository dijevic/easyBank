import React, { useContext, useRef } from 'react'

// components
import { ModalForm } from './ModalForm'

// styles

import styles from '../../scss/modal/modal.module.scss'
import { articlesContext } from '../../context/articlesContext'



export const Modal = () => {
    const { setOpenModal } = useContext(articlesContext)
    const modalContainerRef = useRef()



    const handleCloseModal = ({ target }) => {

        if (target === modalContainerRef.current) {

            setOpenModal(false)
        }
    }
    return (
        <div
            onClick={handleCloseModal}
            ref={modalContainerRef}
            className={styles.modalContainer}>

            <div className={styles.container}>

                <ModalForm />
            </div>

        </div>
    )
}
