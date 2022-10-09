import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { articlesContext } from '../context/articlesContext'
import { CreateArticle } from '../pages/CreateArticle'
import { MainApp } from '../pages/MainApp'
import { getArticlesService } from '../services/getArticles'


export const AppRouter = () => {

    const [articles, setArticles] = useState(false)
    const [latestArticles, setLatestArticles] = useState(false)
    const [tableElements, setTableElements] = useState([])

    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [activeBlog, setActiveBlog] = useState(false)


    useEffect(() => {

        getArticlesService(setArticles, setLoading, setTableElements)

    }, [])

    if (loading) {
        return (<h2>Loading</h2>)
    }

    return (
        <articlesContext.Provider value={{
            articles,
            latestArticles,
            setLatestArticles,
            setArticles,
            tableElements,
            setTableElements,
            setOpenModal,
            openModal,
            activeBlog,
            setActiveBlog
        }}>


            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/createArticle" element={<CreateArticle />} />

            </Routes>

        </articlesContext.Provider>

    )
}