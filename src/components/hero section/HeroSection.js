import React from 'react'

import { Button } from '../common/Button'
import { Mockup } from './Mockup'
import styles from '../../scss/hero section/hero.module.scss'


export const HeroSection = () => {
    return (
        <section className={styles.heroSection}>

            <div className={styles.container} >

                <div className={styles.wrapper}>
                    <h1 className={styles.title}>
                        Next generation digital banking
                    </h1>

                    <p className={styles.textDescription}>
                        Take your financial life online. Your Easybank account will
                        be a one-stop-shop for spending, saving. budgeting, nvesting, and much more.
                    </p>

                    <Button
                        text="Request Invite"
                        secondGradient={true} />
                </div>

                <div className={styles.wrapperMockup}>
                    <Mockup />

                </div>


            </div>





        </section>
    )
}
