import React, { useContext, useEffect } from 'react'
import { DetailsSection } from '../components/details section/DetailsSection'
import { Footer } from '../components/footer/Footer'
import { HeroSection } from '../components/hero section/HeroSection'
import { LastArticles } from '../components/last articles/LastArticles'
import { Modal } from '../components/Modal/Modal'
import { NavBar } from '../components/navBar/NavBar'
import { articlesContext } from '../context/articlesContext'

export const MainApp = () => {

    const { openModal } = useContext(articlesContext)

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [])

    return (


        <>

            {

                (openModal) && <Modal />
            }
            <NavBar />
            <HeroSection />
            <DetailsSection />
            <LastArticles mainPage={true} />
            <Footer />
        </>
    )
}
