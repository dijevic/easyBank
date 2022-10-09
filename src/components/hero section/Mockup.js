import React from 'react'
import styles from '../../scss/hero section/hero.module.scss'
import bgIntro from '../../assets/bg-intro.png'
import mockup from '../../assets/mockup.png'


export const Mockup = () => {
    return (
        <div className={styles.mockupContainer}>
            <img loading="lazy" className={styles.bgIntro} src={bgIntro} alt="easy bank app" />
            <img loading="lazy" className={styles.mockup} src={mockup} alt="easy bank app" />

        </div>
    )
}
