import React from 'react'
import PropTypes from 'prop-types'
import dynamic  from 'next/dynamic'
const DesktopNavigation=({show})=>{
    return(
        <div data-collapse="small" data-animation="default" data-duration="400" id="navbar-desktop" class="navbar-desktop">
            <nav role="navigation" class="nav-menu-2">
                <a href="/" class="nav-link-desktop"> Home</a>
                <a href="/about" class="nav-link-desktop w-nav-link">About</a>
                <a href="/works" id="navbar-building" class="nav-link-desktop nav-link-building w-nav-link">Work</a>
                <a href="/blogs" class="nav-link-desktop w-nav-link">Blogs</a>
                <a href="/contact" aria-current="page" class="nav-link-desktop nav-link-contact w-nav-link w--current">Contact</a>
                </nav>
        </div>
    )
}
DesktopNavigation.propTypes={
    show:PropTypes.object.isRequired
}
export default DesktopNavigation