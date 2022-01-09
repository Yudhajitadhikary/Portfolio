
import React from 'react'
import styles from './styles/blogs-tw-styles'
import constants from '../../components/constants'
export default function Blogs() {
    return (
<div>
    <div className={styles.contentwrapper}>
        <h1 className={styles.nameStyleSub}>Blogs</h1>
        <p className={styles.nameStyle}>I write technical blogs in <a className={styles.anchor} href="https://yudhajitadhikary.medium.com/">Medium.com</a> . Through my blogs i try to bring technical knowledge that I have learned & worked on over the few years to my reader in my own simple way.The way I used to understand things with a simple demo with a complete line by line code walk through.</p>
        <p className={styles.nameStyle}>Below are few examples. If you find any topic interesting, take sometime to go through my blogs, and don't forget to share your thoughts! </p>
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