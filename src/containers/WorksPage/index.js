
import React from 'react'
import styles from './works-tw-styles'
import constants from '../../components/constants'
import Image from 'next/image'
import Link from 'next/link'
export default function Works() {
    return (
<div>
    <div className={styles.contentwrapper}>
    <h1 className={styles.nameStyleSub}> A Trip Down Memory Lane.....</h1>
        <h1 className={styles.nameStyle}>From e-commerce platforms to tour and travels world.</h1>
        <p className={styles.nameStyle}>Mostly a trip down memory lane. To be expanded one day.</p>
        </div>
        <div>
        <div className={styles.cardParent}>
            {constants.works.map((item,index)=>(
            <div key={index} className='parentCardWrapper'>
                <div>
                    <div>
                        <Link href={item.url} className={styles.anchor} target="_blank" rel="noreferrer">
                            <div className={styles.flexWrapper}>
                        <div className='cardText'>
                        <h4 className={styles.nameStyle}>
                            {item.title}
                        </h4>
                        <div className={styles.nameStyleLess}> 
                        {item.description}
                        </div>
                        <div className={styles.nameStyleLess}>
                            {item.TechStack}
                            </div>
                        </div>
                        <div className={styles.flexWrapperImage}>
                            <div>
                        <Image priority={item.preload} src={item.imageFront} className={styles.workImage}
                        width={250}
                        height={250}
                        // quality={50}
                        alt="Picture of the author"/>
                        </div>
                        <div>
                        <Image 
                        // quality={50} 
                        priority={item.preload}
                        src={item.imageBack} className={styles.workImageSecond} width={250}
          height={250}
          alt="Picture of the author"/>
                        </div>
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