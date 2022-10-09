import React from 'react'

import styles from '../../scss/previousArticlesSection/previousArticlesSection.module.scss'
import { TableContent } from './TableContent'

export const Table = ({ tableElements }) => {



    return (
        <table className={styles.table}>

            <tbody>
                <tr>

                    <th className={styles.tableHead}>Author Name</th>
                    <th className={styles.tableHead}>Title</th>
                    <th className={styles.tableHead}>Content</th>
                    <th className={`${styles.tableHead} ${styles.date}`}>date</th>
                    <th id="blankHead" className={`${styles.tableHead} ${styles.blankHead}`}></th>
                </tr>

                {
                    tableElements.map(({ author, title, date, content, id }) =>
                        <TableContent
                            author={author}
                            title={title}
                            date={date}
                            content={content}
                            key={id}
                            id={id}
                        />

                    )
                }


            </tbody>

        </table>
    )
}
