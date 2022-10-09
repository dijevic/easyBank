import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarItem = ({ isLink, href, styles, text }) => {


    if (isLink) {
        return (


            <li
                className={styles.li}>

                <Link to="/" className={styles.link} >
                    {text}
                </Link>

            </li>
        )


    }
    return (


        <li
            className={styles.li}>
            <a
                className={styles.link}
                href={`#${href}`} >{text}</a>
        </li>
    )
}
