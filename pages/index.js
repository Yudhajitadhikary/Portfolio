
import React from 'react'
import styles from './styles/homepage-tw-styles'
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
                        <h3 className={styles.nameStyle} >3 years of experience in developing responsive website.</h3>
                    <h3 className={styles.nameStyle}>Senior Software Engineer at <a className={styles.anchor} href="https://www.mindtree.com/" target="_blank" rel="noreferrer">Mindtree</a>.</h3>
                    <h3 className={styles.nameStyle}>Highly fascinated with Music.</h3>
                    </div>
                    <div className={styles.nameDiv}><h4 className={styles.nameStyle}><a className={styles.anchor} href="/about">Learn more&nbsp;</a></h4></div></div></div>
    )
}
