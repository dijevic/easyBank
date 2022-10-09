import React, { useContext, useEffect } from 'react'

// context
import { articlesContext } from '../../context/articlesContext'


// helper
import { lastFourthArticles } from '../../helpers/LastfourthArticles'

// components
import { Button } from '../common/Button'
import { Article } from './Article'
import { Link } from 'react-router-dom'
import { NoArticles } from '../common/notFoundArticles/NoArticles'

// components
import styles from '../../scss/last article section/lastArticle.module.scss'

export const LastArticles = ({ mainPage }) => {

    const contextArticlesArray = useContext(articlesContext)

    const { latestArticles, articles, setLatestArticles } = contextArticlesArray


    useEffect(() => {
        lastFourthArticles(articles, setLatestArticles)

    }, [articles, setLatestArticles])


    return (

        <section className={(mainPage) ? `${styles.lastArticleSection} ${styles.negativeMarginTop}` : styles.lastArticleSection}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.subtitle}>
                        Latest Articles
                    </h2>

                    {mainPage &&

                        <Link to="/createArticle" >
                            <Button text="+ Add New Article" secondGradient={true} />
                        </Link>

                    }
                </div>

                {
                    (latestArticles && latestArticles.length > 0) ?
                        <div className={styles.articlesContainer} >


                            {

                                latestArticles.map(({ author, content, date, image_url, title, id }) =>
                                    <Article
                                        key={id}
                                        author={author}
                                        content={content}
                                        date={date}
                                        image_url={image_url}
                                        title={title}
                                        id={id}
                                    />



                                )
                            }

                        </div>

                        :

                        <NoArticles />


                }


            </div>
        </section>
    )
}
