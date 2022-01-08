
import React from 'react'
import styles from './styles/works-tw-styles'
import constants from '../../components/constants'
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
                        <a className={styles.anchor} href={item.url} target="_blank" rel="noreferrer">
                            <div className={styles.flexWrapper}>
                        <div className='cardText'>
                        <h4 className={styles.nameStyle}>
                            {item.title}
                        </h4>
                        <div className={styles.nameStyleLess}> 
                        {item.description}
                        </div>
                        </div>
                        <div className={styles.flexWrapperImage}>
                            <div>
                        <img src={item.imageFront} className={styles.workImage}/>
                        </div>
                        <div>
                        <img src={item.imageBack} className={styles.workImageSecond}/>
                        </div>
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