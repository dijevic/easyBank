import React from 'react'

import { IconApi } from '../common/icons/IconApi'
import { IconBudgeting } from '../common/icons/IconBudgeting'
import { IconOnboarding } from '../common/icons/IconOnboarding'
import { IconOnline } from '../common/icons/IconOnline'
import { Card } from './Card'
import styles from '../../scss/details section/details.module.scss'


export const DetailsSection = () => {
    return (
        <section className={styles.detailSection} >

            <div className={styles.container}>
                <h2 className={styles.subtitle}>
                    Why choose Easybank?
                </h2>


                <p className={styles.textDescription}>
                    We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.
                </p>


                <div className={styles.cardContainer} >
                    <Card
                        Icon={IconOnline}
                        title="Online Banking"
                        content="Our modern web and mobile applications allow 
                        you to keep track of your finances wherever you are
                         in the world." />
                    <Card
                        Icon={IconBudgeting}
                        title="Simple Budgeting"
                        content="See exactly where your money goes each month.
                         Receive notifications when you’re close to hitting your limits.." />
                    <Card
                        Icon={IconOnboarding}
                        title="Fast Onboarding"
                        content="We don’t do branches. Open your account in minutes online
                         and start taking control of your finances right away. " />
                    <Card
                        Icon={IconApi}
                        title="Open API"
                        content="Manage your savings, investments, pension, and much more from one account.
                         Tracking your money has never been easier. " />

                </div>
            </div>
        </section>
    )
}
