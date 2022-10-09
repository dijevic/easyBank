import React, { useContext } from 'react'


// components


import { Table } from './Table'
import { articlesContext } from '../../context/articlesContext'

// styles
import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'
import { TableNavigation } from './TableNavigation'
import { NoArticles } from '../common/notFoundArticles/NoArticles'


export const PreviousArticlesSection = () => {

    const { tableElements, articles } = useContext(articlesContext)



    return (
        <section className={styles.PreviousArticlesSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>

                    Previous Articles
                </h2>

                <p className={styles.textDescription}>
                    Review and edit previous blog posts published on to the homepage.
                </p>
                {

                    (articles && articles.length > 0) ? <>
                        <div className={styles.tableContainer}>

                            <Table tableElements={tableElements} />
                        </div>

                        <TableNavigation />
                    </>

                        : <NoArticles />


                }








            </div>

        </section>
    )
}
