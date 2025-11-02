
import React from 'react'
import styles from './blogs-tw-styles'
import constants from '../../components/constants'
import Image from 'next/image'
import Link from 'next/link'
export default function Blogs() {
    return (
<div>
    <div className={styles.contentwrapper}>
        <h1 className={styles.nameStyleSub}>Blogs</h1>
        <p className={styles.nameStyle}>I write technical blogs in <Link href="https://yudhajitadhikary.medium.com/" target="_blank" className={styles.anchor} rel="noreferrer">Medium.com</Link> . Through my blogs i try to bring technical knowledge that I have learned & worked on over the few years to my reader in my own simple way.The way I used to understand things with a simple demo with a complete line by line code walk through.</p>
        <p className={styles.nameStyle}>Below are few examples. If you find any topic interesting, take sometime to go through my blogs, and don't forget to share your thoughts! </p>
        </div>
        <div>
        <div className={styles.cardParent}>
            {constants.blogs.map((item,index)=>(
            <div key={index} className='parentCardWrapper'>
                <div>
                    <div>
                        <Link href={item.url} className={styles.anchorLink}  target="_blank" rel="noreferrer">
                            <div className={styles.flexWrapper}>
                        {/* <div className='cardTextBlogs'> */}
                        
                        {/* <div className={styles.nameStyleLess}> 
                        {item.description}
                        </div> */}
                        {/* </div> */}
                        < div className={styles.flexWrapperImage}>
                        <h4 className={styles.nameStyle}>
                            {`${item.title.substring(0,60)}...`}
                        </h4> 
                        <Image src={item.imageFront} className={styles.workImage} width={250}
                    height={250}
                    quality={50}
                    priority={item.priority}
                    alt="Picture of the author"/>
                        
                        {/* <div>
                        <img src={item.imageBack} className={styles.workImageSecond}/>
                        </div> */}
                        </div>
                        </div>
                        
                        </Link></div>
                        </div>
                        </div>))
}
                        </div>
        </div>
        </div>
    )
}