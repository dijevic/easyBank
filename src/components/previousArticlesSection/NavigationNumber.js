import React from 'react'

// helper
import { nextPage } from '../../helpers/nextPage'

// styles
import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'


export const NavigationNumber = ({ activedPage, item, articles, setTableElements }) => {


    const handleChangeActivePage = () => {



        activedPage.current = item + 1

        nextPage(articles, activedPage.current, setTableElements)

    }
    return (
        <span
            onClick={handleChangeActivePage}
            className={(Number(activedPage.current) === Number(item + 1)) ? `${styles.activedPage} ${styles.paginationNumber}` : styles.paginationNumber}

        >
            {item + 1}
        </span>
    )
}
