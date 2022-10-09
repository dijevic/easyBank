import React from 'react'
import { DetailsSection } from '../components/details section/DetailsSection'
import { Footer } from '../components/footer/Footer'
import { HeroSection } from '../components/hero section/HeroSection'
import { LastArticles } from '../components/last articles/LastArticles'
import { NavBar } from '../components/navBar/NavBar'

export const MainApp = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <DetailsSection />
            <LastArticles mainPage={true} />
            <Footer />
        </>
    )
}
