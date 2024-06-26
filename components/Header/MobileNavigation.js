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
                <Link href="/"><a onClick={handleHamburgerClose} className="nav-link-desktop nav-link-nad w-nav-link"> Home</a></Link>
                <Link href="/about"><a onClick={handleHamburgerClose} className="nav-link-desktop w-nav-link">About</a></Link>
                <Link href="/works"><a onClick={handleHamburgerClose} id="navbar-building" className="nav-link-desktop nav-link-building w-nav-link">Work</a></Link>
                <Link href="/blogs"><a onClick={handleHamburgerClose}  className="nav-link-desktop w-nav-link">Blogs</a></Link>
                <Link href="/contact"><a onClick={handleHamburgerClose}  aria-current="page" className="nav-link-desktop nav-link-contact w-nav-link w--current">Contact</a></Link>
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
