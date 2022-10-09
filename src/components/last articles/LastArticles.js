import React, { useContext, useEffect } from 'react'

// context
import { articlesContext } from '../../context/articlesContext'


// helper
import { lastFourthArticles } from '../../helpers/LastfourthArticles'

// components
import { Button } from '../common/Button'
import { Link } from 'react-router-dom'
import { NoArticles } from '../common/notFoundArticles/NoArticles'

// components
import styles from '../../scss/last article section/lastArticle.module.scss'
import { Subtitle } from '../common/Subtitle'
import { Articles } from './Articles'

export const LastArticles = ({ mainPage }) => {

    const { latestArticles, articles, setLatestArticles } = useContext(articlesContext)




    useEffect(() => {
        lastFourthArticles(articles, setLatestArticles)

    }, [articles, setLatestArticles])


    return (

        <section className={(mainPage) ? `${styles.lastArticleSection} ${styles.negativeMarginTop}` : styles.lastArticleSection}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Subtitle text=" Latest Articles" />

                    {mainPage &&

                        <Link to="/createArticle" >
                            <Button text="+ Add New Article" secondGradient={true} />
                        </Link>

                    }
                </div>



                {
                    (latestArticles.length > 0) ?

                        <Articles styles={styles} />
                        :

                        <NoArticles />


                }


            </div>
        </section>
    )
}
