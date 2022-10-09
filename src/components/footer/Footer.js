import React from 'react'

// components
import { LogoWhite } from '../common/icons/LogoWhite'
import { FacebookIcon } from '../common/icons/FacebookIcon'
import { YoutubeIcon } from '../common/icons/YoutubeIcon'
import { TwitterIcon } from '../common/icons/TwitterIcon'
import { PinterestIcon } from '../common/icons/PinterestIcon'
import { InstagramIcon } from '../common/icons/InstagramIcon'
import { Button } from '../common/Button'

// components
import styles from '../../scss/footer/footer.module.scss'
import { NavBarItem } from '../common/NavbarItem'

export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>
                <div className={styles.socialMedia}>

                    <span className={styles.logoContainer}>
                        <LogoWhite />
                    </span>

                    <div className={styles.socialMediaContainer}>
                        <span className={styles.iconContainer}>
                            <FacebookIcon />
                        </span>
                        <span className={styles.iconContainer}>
                            <YoutubeIcon />
                        </span>
                        <span className={styles.iconContainer}>
                            <TwitterIcon />
                        </span>
                        <span className={styles.iconContainer}>
                            <PinterestIcon />
                        </span>
                        <span className={styles.iconContainer}>
                            <InstagramIcon />
                        </span>

                    </div>



                </div>


                <nav className={styles.navigation}>
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

                    </ul>

                    <ul className={`${styles.ul} ${styles.ulRight}`}>
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
                        <NavBarItem
                            href="PrivacyPolicy"
                            styles={styles}
                            text="PrivacyPolicy"

                        />
                    </ul>
                </nav>

                <div className={styles.wrapper} >
                    <Button secondGradient={true} text="Request Invite" />

                    <span className={styles.rights}>
                        © Easybank. All Rights Reserved
                    </span>
                </div>
            </div>
        </footer>
    )
}
