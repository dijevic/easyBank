import React, { useContext } from 'react'
import { CreateArticleSection } from '../components/create article section/CreateArticle'
import { Footer } from '../components/footer/Footer'
import { LastArticles } from '../components/last articles/LastArticles'
import { Modal } from '../components/Modal/Modal'
import { NavBar } from '../components/navBar/NavBar'
import { PreviousArticlesSection } from '../components/previousArticlesSection/PreviousArticlesSection'
import { articlesContext } from '../context/articlesContext'

export const CreateArticle = () => {

    const { openModal } = useContext(articlesContext)

    return (
        <>
            {
                (openModal) && <Modal />}
            <NavBar />
            <CreateArticleSection />
            <PreviousArticlesSection />

            <LastArticles />
            <Footer />


        </>
    )
}
