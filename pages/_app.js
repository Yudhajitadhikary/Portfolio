import '../styles/global.css'
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'
function MyApp({ Component, pageProps }) {

    return( <>
    <head>
    {/* <link rel='stylesheet' type='text/css' href='../styles/global.css'/> */}
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
