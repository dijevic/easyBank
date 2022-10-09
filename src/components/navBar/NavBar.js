import React, { useState } from 'react'

// components
import { Bars } from '../common/icons/Bars'
import { Close } from '../common/icons/Close'
import { Logo } from '../common/icons/Logo'

import { Button } from '../common/Button'
import { Link } from 'react-router-dom'
// styles
import styles from '../../scss/navBar/navBar.module.scss'
import { NavBarItem } from '../common/NavbarItem'


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

                        <NavBarItem

                            styles={styles}
                            text="Home"
                            isLink={true}

                        />


                        <NavBarItem
                            href="About"
                            styles={styles}
                            text="About"

                        />
                        <NavBarItem
                            href="Contact"
                            styles={styles}
                            text="Contact"

                        />
                        <NavBarItem
                            href="Blog"
                            styles={styles}
                            text="Blog"

                        />
                        <NavBarItem
                            href="Careers"
                            styles={styles}
                            text="Careers"

                        />



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
