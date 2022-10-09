import React, { useContext } from 'react'

// components
import { Table } from './Table'
import { articlesContext } from '../../context/articlesContext'

// styles
import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'
import { TableNavigation } from './TableNavigation'
import { NoArticles } from '../common/notFoundArticles/NoArticles'
import { Subtitle } from '../common/Subtitle'


export const PreviousArticlesSection = () => {

    const { tableElements, articles } = useContext(articlesContext)



    return (
        <section className={styles.PreviousArticlesSection}>
            <div className={styles.container}>

                <Subtitle text="Previous Articles" />

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
