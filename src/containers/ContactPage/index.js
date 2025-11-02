/* eslint-disable */
import React from "react";
import styles from "./contact-tw-styles";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import Image from 'next/image'
import Link from 'next/link'
export default function Contact() {

  return (
      
    <div className={styles.contentwrapper}>
      <h1 className={styles.nameStyleSub}>Want to connect with me ?</h1>
      <div className={styles.nameStyle}>Get in touch via the form below, or by emailing <div className={styles.anchor}>yudhajitadhikary@gmail.com.</div></div>
      <Formik
                initialValues={{
                    email: '',
                    name: '',
                    message: ''
                }}
                validationSchema={Yup.object().shape({
                    
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    name: Yup.string()
                        .min(1, 'name is required')
                        .matches(/[A-Za-z]/g,'invalid Name')
                        .required('Name is required'),
                    message:  Yup.string()
                })}
                onSubmit={(fields, { resetForm })=> {
                  emailjs.init("user_Q2lUYckdn04UnayhBs4hr");
                  emailjs.send('service_kciys6q', 'template_x19ywo4', fields)
    .then(function(response) {
      resetForm()
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
                    console.log(fields)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                      
                        <div className="form-group">
                            <label htmlFor="email" className="formikLabel">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="formikLabel">Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="formikLabel">Message</label>
                            <Field name="message" type="text" className={'form-control'} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className={styles.button}>Contact</button>
                            
                        </div>
                    </Form>
                )}
            />
      <div className={styles.socialParent}>
        <Link href="https://yudhajitadhikary.medium.com/" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image src="https://img.icons8.com/ios/50/ffffff/medium-logo.png" width={250}
                    height={250}
                    quality={50}
                    alt="Picture of the author" />
        </Link>
        <Link href="https://www.facebook.com/yudhajit.adhikary" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image  src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"  width={250}
                    height={250}
                    quality={50}
                    alt="Picture of the author"/>
        </Link>
        <Link href="https://twitter.com/yudha19971" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
          width={250}
          height={250}
          quality={50}
          alt="Picture of the author"
          />
        </Link>
        <Link  href="https://www.linkedin.com/in/yudhajit-adhikary-500898159" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
          width={250}
          height={250}
          quality={50}
          alt="Picture of the author"
          />
        </Link>
        <Link href="https://github.com/Yudhajitadhikary" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
          width={250}
          height={250}
          quality={50}
          alt="Picture of the author"
          />
        </Link>
        <Link href="https://www.instagram.com/yudha_clicks" target="_blank"
          className={styles.socialWrapper} rel="noreferrer"
        >
          <Image  src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
          width={250}
          height={250}
          quality={50}
          alt="Picture of the author"
          />
        </Link>
      </div>
      <div>
        <div className={styles.nameStyle}>Contact: +91 6371272905</div>
        <div className={styles.nameStyle}>Address: Kolkata,India</div>
        <div className={styles.nameStyle}>
          Email: yudhajitadhikary@gmail.com
        </div>
      </div>
    </div>
  );
}
