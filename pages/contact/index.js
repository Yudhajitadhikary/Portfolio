
import React from 'react'
import styles from './styles/contact-tw-styles'
export default function Contact() {
    return (
    <div className={styles.contentwrapper}>
    <h1 className={styles.nameStyleSub}>Want to connect with me ?</h1>
        <div className={styles.socialParent}>
            <a href='https://yudhajitadhikary.medium.com/' className={styles.socialWrapper}>
            <img src="https://img.icons8.com/ios/50/ffffff/medium-logo.png"/>
            </a>
            <a href='https://www.facebook.com/yudhajit.adhikary' className={styles.socialWrapper}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"/>
        </a>
        <a href='https://twitter.com/yudha19971' className={styles.socialWrapper}>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"/>
        </a>
        <a href='https://www.linkedin.com/in/yudhajit-adhikary-500898159' className={styles.socialWrapper}>
        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"/>
            </a>
            <a href='https://github.com/Yudhajitadhikary' className={styles.socialWrapper}>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png"/>
            </a>
            </div>
            <div>
        <div className={styles.nameStyle}>Contact: +91 6371272905</div>
        <div className={styles.nameStyle}>Address: Kolkata,India</div>
        <div className={styles.nameStyle}>Email: yudhajitadhikary@gmail.com</div>
        </div>
    </div>
    )
}