import '../styles/global.css'
import React from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
const Layout=dynamic(()=>import('../components/Layout/Layout'))
function MyApp({ Component, pageProps }) {

    return( <>
    <head>
    {/* <link rel='stylesheet' type='text/css' href='../styles/global.css'/> */}
    <link rel="preload" as="image" href="Yudha.avif"/>
    </head>
        <Layout>
            <div id='body'>
            <Component {...pageProps}/>
            </div>
        </Layout> 
    </>)
}
MyApp.propTypes={
    Component:PropTypes.object,
    pageProps:PropTypes.object
}

export default MyApp
