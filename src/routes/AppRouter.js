import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

// context
import { articlesContext } from '../context/articlesContext'

// components
import { CreateArticle } from '../pages/CreateArticle'
import { MainApp } from '../pages/MainApp'
import { getArticlesService } from '../services/getArticles'

// styles

import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../components/loader/Loader';


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
        return (<Loader />)
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
            <ToastContainer />
        </articlesContext.Provider>

    )
}