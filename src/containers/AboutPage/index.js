
import React from 'react'
import styles from './about-tw.styles' 
import Link from 'next/link'
export default function About() {
    return (
<div className={styles.body}>
    <div className={styles.contentwrapper}>
        <h1 className={styles.nameStyleSub}>I build value by coding.</h1>
        <p className={styles.nameStyle}>I am Yudhajit Adhikary, but you can just call me Yudha.
        Meticulous web developer with over 5 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach.
        I’ve worked with small, agile teams on skunkworks projects and larger development teams with product lifecycles spanning multiple years.
        Bringing forth expertise in design, installation, testing and maintenance of web systems.
        Equipped with a diverse and promising skillset.</p>
        <p className={styles.nameStyle}>Want to connect with me ?&nbsp;<Link href="/contact" className={styles.anchor} >Let's talk</Link>.</p>
        <p className={styles.nameStyle}>Want to know more on my&nbsp;<Link href="/Resume.pdf"  target={'_blank'} className={styles.anchor} rel="noreferrer">Technical Skill ?</Link></p>
        {/* Meticulous web developer with over 3 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. Implemented new responsive website approach with complete unit testing and SEO which increases performance and traffic of the website */}

        </div>
        </div>
    )
}
