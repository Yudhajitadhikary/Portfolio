
import React from 'react'
import styles from './homepage-tw-styles'
import Link from 'next/link'
export default function Home() {
    return (
        <div className={styles.body}>
            <div className={styles.contentwrapper}>
                <div className={styles.nameDiv}>
                    <h2 className={styles.nameStyle}>Hi, I am Yudha.</h2>
                </div>
                    <div className={styles.nameDivTitle}>
                    <h1 className={styles.nameStyleSub}>Web Developer. Technical Blogger<br/></h1>
                    </div>
                    <div className={styles.contentsubWrapper}> 
                        <h3 className={styles.nameStyle} >Meticulous web developer with over 6 years of front end experience </h3>
                    <h3 className={styles.nameStyle}>Module Lead at <Link href="https://www.ltimindtree.com/"  target="_blank" className={styles.anchor}  rel="noreferrer">LTIMindtree</Link>.</h3>

                    <h2> Educated at KIIT University (B.Tech), IIIT Bangalore (Postgraduate), and Liverpool John Moores University (MSc Computer Science).</h2>
                    
                    {/* <h3 className={styles.nameStyle}>Highly fascinated with Music.</h3> */}
                    </div>
                    <div className={styles.nameDiv}><h4 className={styles.nameStyle}><Link href="/about" target="_blank" className={styles.anchor} >Learn more&nbsp;</Link></h4></div></div></div>
    )
}
