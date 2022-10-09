import React, { useContext } from 'react'

// components
import { Form } from '../common/form/Form'
import { articlesContext } from '../../context/articlesContext'
import { SomethingWentWrong } from '../somethingWentWrong/SomethingWentWrong'

// styles
import styles from '../../scss/createArticle/createArticle.module.scss'


export const CreateArticleSection = () => {

    const { articles } = useContext(articlesContext)




    return (
        <section className={styles.createArticleSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>

                    Add New Blog Article
                </h2>

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
