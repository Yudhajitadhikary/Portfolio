import React from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
const Header=dynamic(()=>import('../Header/Header'))

const Layout=({children})=>{
    return(
        <React.Fragment>
            <Header/>
            <main>
                {children}
            </main>
            {/* <Footer/> */}
        </React.Fragment>
    )
}
Layout.propTypes={
    children:PropTypes.any.isRequired
}
export default Layout
