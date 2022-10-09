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
import { Input } from '../Input';
import { TextArea } from '../notFoundArticles/TextArea';
import { InputName } from '../InputName';





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
                <InputName styles={styles} text="Author" />


                <Input
                    name="author"
                    value={author}
                    handleInputChange={handleInputChange}
                    styles={styles}

                />

            </div>

            <div className={styles.inputContainer}>


                <InputName styles={styles} text="Blog title" />

                <Input
                    name="title"
                    value={title}
                    handleInputChange={handleInputChange}
                    styles={styles}

                />
            </div>

            <div className={styles.inputContainer}>

                <InputName styles={styles} text="Blog content" />
                <TextArea
                    name="content"
                    value={content}
                    handleInputChange={handleInputChange}
                    styles={styles}


                />


            </div>
            <Button
                secondGradient={true}
                text="Save" />

        </form>
    )
}
