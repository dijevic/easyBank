import React, { useContext, useState } from 'react'
import { articlesContext } from '../../context/articlesContext'
import { useForm } from '../../hooks/useForm'

import styles from '../../scss/modal/modal.module.scss'
import { deleteArticleService } from '../../services/deleteArticleService'
import { updateArticleService } from '../../services/updatedArticles'
import { Button } from '../common/Button'


export const ModalForm = () => {

    const { setOpenModal, activeBlog, setArticles, articles, setTableElements, tableElements } = useContext(articlesContext)

    const { author: activedAuthor, content: activedContent, title: activedTitle, id } = activeBlog
    const [isClosing, setIsClosing] = useState(false)



    const initialState = {

        author: activedAuthor,
        content: activedContent,
        title: activedTitle

    }


    const [formValues, handleInputChange] = useForm(initialState)

    const { author, content, title } = formValues


    const handleCloseModal = () => {

        setIsClosing(true)

        setTimeout(() => {
            setOpenModal(false)
            setIsClosing(false)

        }, 200)


    }

    const handleUpdate = async () => {


        const data = {
            author,
            content,
            title

        }

        if (author.trim().length <= 3 | content.trim().length <= 3 || title.trim().length <= 3) {

            return
        }

        if (!isNaN(author.trim()) || !isNaN(content.trim()) || !isNaN(title.trim())) {
            return
        }

        await updateArticleService(data, setArticles, id, setTableElements, tableElements)
        handleCloseModal()
    }

    const handleDelete = async () => {

        await deleteArticleService(setArticles, id, setTableElements, articles)
        handleCloseModal()


    }




    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (


        <form

            onSubmit={handleSubmit}
            className={(!isClosing) ? `${styles.form}` : `${styles.form}  ${styles.close}`}>
            <h2>Update or delete a blog</h2>

            <div className={styles.inputContainer}>
                <span className={styles.inputName} >Author</span>
                <input
                    className={styles.input}
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleInputChange}
                    maxLength="50"
                    minLength="3"



                />
            </div>

            <div className={styles.inputContainer}>
                <span className={styles.inputName} >Blog title</span>

                <input
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    className={styles.input}
                    type="text"
                    maxLength="50"
                    minLength="3"

                />
            </div>

            <div className={styles.inputContainer}>
                <span className={styles.inputName} >Blog content</span>

                <textarea
                    name="content"
                    value={content}
                    onChange={handleInputChange}
                    className={styles.textArea}
                    maxLength="50"
                    minLength="3"



                ></textarea>
            </div>
            <div className={styles.buttonsContainer}>

                <Button
                    onClick={handleUpdate}
                    secondGradient={true}
                    type="submit"
                    text="Update" />
                <Button
                    onClick={handleDelete}
                    secondGradient={true}
                    text="Delete" />
                <Button
                    onClick={handleCloseModal}
                    type="button"
                    secondGradient={true}
                    text="Cancel" />

            </div>


        </form>

    )
}
