import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

// context
import { articlesContext } from '../../context/articlesContext'

// hooks
import { useForm } from '../../hooks/useForm'

// services
import { deleteArticleService } from '../../services/deleteArticleService'
import { updateArticleService } from '../../services/updatedArticles'

// components
import { Button } from '../common/Button'
import { Input } from '../common/Input';
import { TextArea } from '../common/notFoundArticles/TextArea';
import { InputName } from '../common/InputName';


// styles
import styles from '../../scss/modal/modal.module.scss'



export const ModalForm = () => {

    const { setOpenModal, activeBlog, setArticles, setTableElements } = useContext(articlesContext)

    const { activedAuthor, activedContent, activedTitle, id } = activeBlog
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

            return toast.error('The length has to be over 3 characteres')

        }

        if (!isNaN(author.trim()) || !isNaN(content.trim()) || !isNaN(title.trim())) {
            return toast.error('number are not allowed')

        }


        await updateArticleService(data, setArticles, id, setTableElements, toast)
        handleCloseModal()
    }

    const handleDelete = async () => {

        await deleteArticleService(setArticles, id, setTableElements, toast)
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
