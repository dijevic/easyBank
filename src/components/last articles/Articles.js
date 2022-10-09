import React, { useContext } from 'react'
import { articlesContext } from '../../context/articlesContext'

// components
import { Article } from './Article'

export const Articles = ({ styles }) => {

    const { latestArticles } = useContext(articlesContext)




    return (
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
    )
}
