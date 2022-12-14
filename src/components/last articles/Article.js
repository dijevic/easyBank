import React, { useContext } from 'react'
// context
import { articlesContext } from '../../context/articlesContext'
// styles

import styles from '../../scss/last article section/lastArticle.module.scss'



export const Article = ({ author, content, image_url, title, id, date }) => {

    const { setOpenModal, setActiveBlog } = useContext(articlesContext)


    const handleOpenModal = () => {

        setOpenModal(true)


        setActiveBlog({ activedAuthor: author, activedContent: content, date, activedTitle: title, id })

    }

    return (
        <div className={styles.articleCard}>

            <img loading='lazy' src={image_url} alt={title} className={styles.article} />

            <div className={styles.textContainer}>

                <span className={styles.author}>{author}</span>

                <h3
                    onClick={handleOpenModal}
                    className={styles.title}>{title}</h3>
                <p className={styles.articleContent}>
                    {content}
                </p>
            </div>
        </div>
    )
}
