import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
const MobileNavigation=({open,handleHamburgerClose})=>{
    return(
        <div>{
            open?
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" className="navbar-mobile">
            <nav role="navigation" className="nav-menu-2">
                <Link href="/" onClick={handleHamburgerClose} className="nav-link-desktop nav-link-nad w-nav-link"> Home</Link>
                <Link href="/about" onClick={handleHamburgerClose} className="nav-link-desktop w-nav-link">About</Link>
                <Link href="/works" onClick={handleHamburgerClose} id="navbar-building" className="nav-link-desktop nav-link-building w-nav-link">Work</Link>
                <Link href="/blogs" onClick={handleHamburgerClose}  className="nav-link-desktop w-nav-link">Blogs</Link>
                <Link href="/contact" onClick={handleHamburgerClose}  aria-current="page" className="nav-link-desktop nav-link-contact w-nav-link w--current">Contact</Link>
                <button 
                className="humburgerClose"
                onClick={handleHamburgerClose}
                > 
                        <Image src="https://img.icons8.com/material-sharp/24/ffffff/railroad-crossing-sign--v2.png" width={30}
                    height={30}
                    // quality={50}
                    alt="Picture of the author"/>
                            </button>
                </nav>
        </div>:''}
        </div>
    )
}
MobileNavigation.propTypes={
    open:PropTypes.bool,
    handleHamburgerClose:PropTypes.func

}
export default MobileNavigation
