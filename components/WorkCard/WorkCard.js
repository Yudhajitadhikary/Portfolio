<div className='parentCardWrapper'>
<div>
    <div>
        <a href={item.url} target="_blank">
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
        </div>
        