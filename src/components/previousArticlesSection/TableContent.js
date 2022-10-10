import React, { useContext } from 'react'

// context
import { articlesContext } from '../../context/articlesContext'

// styles

import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'


export const TableContent = ({ author, title, date, content, id }) => {

    const { setOpenModal, setActiveBlog } = useContext(articlesContext)


    const handleOpenModal = () => {

        setOpenModal(true)

        setActiveBlog({ activedAuthor: author, activedContent: content, date, activedTitle: title, id })
    }

    return (

        <tr>
            <td className={`${styles.tableD} ${styles.author}`}>{author}</td>
            <td className={styles.tableD}>{title}</td>
            <td className={styles.tableD}>{content}</td>
            <td className={styles.tableD}>{date.split('T')[0]}</td>
            <td className={styles.tableD}>
                <button
                    onClick={handleOpenModal}
                    className={styles.editButton}>Edit</button>

            </td>
        </tr>


    )
}
