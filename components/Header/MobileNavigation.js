import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
const MobileNavigation=({open,handleHamburgerClose})=>{
    return(
        <div>{
            open?
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" className="navbar-mobile">
            <nav role="navigation" className="nav-menu-2">
                <Link href="/"><a className="nav-link-desktop nav-link-nad w-nav-link"> Home</a></Link>
                <Link href="/about"><a className="nav-link-desktop w-nav-link">About</a></Link>
                <Link href="/works"><a id="navbar-building" className="nav-link-desktop nav-link-building w-nav-link">Work</a></Link>
                <Link href="/blogs"><a  className="nav-link-desktop w-nav-link">Blogs</a></Link>
                <Link href="/contact"><a  aria-current="page" className="nav-link-desktop nav-link-contact w-nav-link w--current">Contact</a></Link>
                <button 
                className="humburgerClose"
                onClick={handleHamburgerClose}
                > 
                        <img src="https://img.icons8.com/material-sharp/24/ffffff/railroad-crossing-sign--v2.png"/>
                            </button>
                </nav>
        </div>:''}
        </div>
    )
}
MobileNavigation.propTypes={
    show:PropTypes.object.isRequired
}
export default MobileNavigation