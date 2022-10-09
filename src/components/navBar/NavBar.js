import React, { useState } from 'react'
import { Bars } from '../common/icons/Bars'
import { Close } from '../common/icons/Close'
import { Logo } from '../common/icons/Logo'

import styles from '../../scss/navBar/navBar.module.scss'
import { Button } from '../common/Button'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    const [isOpen, setIsopen] = useState(false)

    const handleOpenMenu = () => {
        setIsopen(pre => !pre)


    }



    return (
        <header
            className={styles.header}>

            <div className={styles.container}>


                <span className={styles.logoContainer}>


                    <Link to="/" >
                        <Logo />

                    </Link>
                </span>

                {

                    (isOpen) ?
                        <span
                            onClick={handleOpenMenu}
                            className={styles.close}>
                            <Close />
                        </span>

                        :
                        <span
                            onClick={handleOpenMenu}
                            className={styles.bars}>
                            <Bars />
                        </span>

                }





                <nav className={(isOpen) ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>

                    <ul className={styles.ul}>
                        <li
                            className={styles.li}
                        >
                            <a
                                className={styles.link}
                                href="#dfg" >Home</a>
                        </li>
                        <li
                            className={styles.li}
                        >
                            <a
                                className={styles.link}
                                href="#dfgd" >About</a>
                        </li>
                        <li
                            className={styles.li}
                        >
                            <a
                                className={styles.link}
                                href="#dfgfd" >Contact</a>
                        </li>
                        <li
                            className={styles.li}
                        >
                            <a
                                className={styles.link}
                                href="#dfgdfgd" >Blog</a>
                        </li>
                        <li
                            className={styles.li}
                        >
                            <a
                                className={styles.link}
                                href="#dfgd" >Careers</a>
                        </li>
                        <li
                            className={styles.li}
                        >
                            <Button text="Request Invite" />

                        </li>
                    </ul>
                </nav>


            </div>





        </header>
    )
}
