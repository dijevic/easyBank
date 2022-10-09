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
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                About Us
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                Contact
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                Blog
                            </a>
                        </li>

                    </ul>

                    <ul className={`${styles.ul} ${styles.ulRight}`}>
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                Careers
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                Support
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a
                                className={styles.link}
                                href="https://gdfgdfg.com">
                                Privacy Policy
                            </a>
                        </li>
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
