import React, { useContext } from 'react'
import { toast } from 'react-toastify';
// hooks
import { useForm } from '../../../hooks/useForm'

//components

import { Button } from '../Button'
import { createArticleService } from '../../../services/postArticleService'
import { articlesContext } from '../../../context/articlesContext'

// styles


import styles from '../../../scss/createArticle/createArticle.module.scss'





export const Form = () => {

    const { setArticles } = useContext(articlesContext)

    const initialState = {

        author: '',
        content: '',
        title: ''

    }
    const [formValues, handleInputChange, clearForm] = useForm(initialState)

    const { author, content, title } = formValues




    const handleCreateArticle = (e) => {

        e.preventDefault()


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


        createArticleService(data, setArticles, toast)

        setTimeout(() => {

            clearForm()
        }, 600)

    }




    return (
        <form
            onSubmit={handleCreateArticle}
            className={styles.form}>
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
                    required={true}


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
                    required={true}
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
                    required={true}


                ></textarea>
            </div>
            <Button
                secondGradient={true}
                text="Save" />


        </form>
    )
}
