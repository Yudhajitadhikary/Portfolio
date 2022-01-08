
import React from 'react'
import styles from './styles/blogs-tw-styles'
import constants from '../../components/constants'
export default function Blogs() {
    return (
<div>
    <div className={styles.contentwrapper}>
        <h1 className={styles.nameStyleSub}>Blogs</h1>
        <p className={styles.nameStyle}>I use to write technical blogs in <a className={styles.anchor} href="https://yudhajitadhikary.medium.com/">Medium.com</a> . Through Blogs I try to bring technical staffs related to my domain to my readers in my own simple way , the way I used to understand things with a simple demo with a complete line by line code walk through.</p>
        </div>
        <div>
        <div className={styles.cardParent}>
            {constants.blogs.map((item,index)=>(
            <div key={index} className='parentCardWrapper'>
                <div>
                    <div>
                        <a className={styles.anchorLink} href={item.url} target="_blank" rel="noreferrer">
                            <div className={styles.flexWrapper}>
                        <div className='cardTextBlogs'>
                        <h4 className={styles.nameStyle}>
                            {item.title}
                        </h4>
                        {/* <div className={styles.nameStyleLess}> 
                        {item.description}
                        </div> */}
                        </div>
                        <div className={styles.flexWrapperImage}>
                            <div>
                        <img src={item.imageFront} className={styles.workImage}/>
                        </div>
                        {/* <div>
                        <img src={item.imageBack} className={styles.workImageSecond}/>
                        </div> */}
                        </div>
                        </div>
                        
                        </a></div>
                        </div>
                        </div>))
}
                        </div>
        </div>
        </div>
    )
}