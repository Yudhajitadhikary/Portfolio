import React from 'react'
import PropTypes from 'prop-types'
import styles from './header-tw.styles'
import Link from 'next/link'
const DesktopNavigation=()=>{
    return(
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" className="navbar-desktop">
            <nav role="navigation" className="nav-menu-2">
                <Link href='/' className={styles.anchorLink}>Home</Link>
                <Link href='/about' className={styles.anchorLink} >About</Link>
                <Link href='/works' className={styles.anchorLink} id="navbar-building">Work</Link>
                <Link href='/blogs' className={styles.anchorLink} >Blogs</Link>
                <Link href='/contact' className={styles.anchorLink}  aria-current="page">Contact</Link>
                </nav>
        </div>
    )
}
DesktopNavigation.propTypes={
    show:PropTypes.object.isRequired
}
export default DesktopNavigation