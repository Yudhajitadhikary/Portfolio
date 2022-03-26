import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-tw.styles'
import Link from 'next/link'
const DesktopNavigation=()=>{
    return(
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" className="navbar-desktop">
            <nav role="navigation" className="nav-menu-2">
                <Link href='/'><a className={styles.anchorLink}> Home</a></Link>
                <Link href='/about'><a className={styles.anchorLink} >About</a></Link>
                <Link href='/works'><a className={styles.anchorLink} id="navbar-building">Work</a></Link>
                <Link href='/blogs'><a className={styles.anchorLink} >Blogs</a></Link>
                <Link href='/contact'><a className={styles.anchorLink}  aria-current="page">Contact</a></Link>
                </nav>
        </div>
    )
}
DesktopNavigation.propTypes={
    show:PropTypes.object.isRequired
}
export default DesktopNavigation