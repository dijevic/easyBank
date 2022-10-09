import React, { useContext, useState, useEffect, useRef } from 'react'

import { LetfArrow } from '../common/icons/LetfArrow'
import { RightArrow } from '../common/icons/RightArrow'
import { nextPage } from '../../helpers/nextPage'

import { articlesContext } from '../../context/articlesContext'
import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'
import { NavigationNumber } from './NavigationNumber'


export const TableNavigation = () => {

    const { articles, setTableElements } = useContext(articlesContext)


    const [totalPagesArray, setTotalPagesArray] = useState([])


    const [totalPages, setTotalPage] = useState(1)

    let activedPage = useRef(1)


    useEffect(() => {

        if (articles.length === 0) return

        const unRoundedPages = articles.length / 6
        const totalPagesNumberPlusOne = Math.floor(unRoundedPages) + 1
        const pagesArray = []


        if (unRoundedPages % 2 === 0) {
            setTotalPage(unRoundedPages)
            for (let i = 0; i < unRoundedPages; i++) {
                pagesArray[i] = i
            }
            setTotalPagesArray(pagesArray)

        } else {

            setTotalPage(totalPagesNumberPlusOne)

            for (let i = 0; i < totalPagesNumberPlusOne; i++) {
                pagesArray[i] = i
            }
            setTotalPagesArray(pagesArray)





        }


    }, [articles, setTotalPage])






    const handleNextPage = async () => {

        if (activedPage.current + 1 > totalPages) {
            return
        }


        activedPage.current += 1



        await nextPage(articles, activedPage.current, setTableElements)




    }
    const handlePreviousPage = () => {

        if (activedPage.current - 1 < 1) {
            return
        }
        activedPage.current -= 1


        nextPage(articles, activedPage.current, setTableElements)




    }
    return (
        <div className={styles.tableNavigationContainer}>
            <div className={styles.tableNavigation}>
                <div className={styles.actionBox}>
                    <span
                        onClick={handlePreviousPage}
                        className={styles.IconContainer}>
                        <LetfArrow />
                    </span>
                    <span
                        onClick={handlePreviousPage}

                        className={styles.description}>Previous</span>

                </div>

                <div className={styles.actionBox}>

                    {


                        totalPagesArray.map(item =>
                            <NavigationNumber
                                item={item}
                                activedPage={activedPage}
                                articles={articles}
                                setTableElements={setTableElements}
                                key={item + 1}
                            />
                        )
                    }

                </div>
                <div className={styles.actionBox}>
                    <span
                        onClick={handleNextPage}
                        className={styles.description}>Next</span>
                    <span
                        onClick={handleNextPage}
                        className={styles.IconContainer}>

                        <RightArrow />
                    </span>
                </div>

            </div>

        </div>
    )
}
