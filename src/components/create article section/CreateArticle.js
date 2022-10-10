import React, { useContext, useEffect } from 'react'

// context
import { articlesContext } from '../../context/articlesContext'


// components
import { Form } from '../common/form/Form'
import { SomethingWentWrong } from '../somethingWentWrong/SomethingWentWrong'

// styles
import styles from '../../scss/createArticle/createArticle.module.scss'
import { Subtitle } from '../common/Subtitle'


export const CreateArticleSection = () => {

    const { articles } = useContext(articlesContext)

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])


    return (
        <section

            className={styles.createArticleSection}>
            <div className={styles.container}>

                <Subtitle text="Add New Blog Article" />

                <p className={styles.textDescription}>
                    Publish a new blog article to feature in the Easybank homepage.
                </p>

                {
                    (articles && articles.length > 0) ?
                        <div className={styles.formContainer}>

                            <Form />
                        </div>
                        :
                        <SomethingWentWrong />

                }
            </div>

        </section>
    )
}
