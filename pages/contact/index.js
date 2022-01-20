import React , { useState }from "react";
import styles from "./styles/contact-tw-styles";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
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
                        .matches(/[A-Za-z]/g,'invalid Password')
                        .required('Password is required'),
                    message:  Yup.string()
                })}
                onSubmit={fields => {
                  emailjs.init("user_Q2lUYckdn04UnayhBs4hr");
                  emailjs.send('service_kciys6q', 'template_x19ywo4', fields)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
                    console.log(fields)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                      
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Message</label>
                            <Field name="message" type="text" className={'form-control'} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className={styles.button}>Contact</button>
                            
                        </div>
                    </Form>
                )}
            />
      <div className={styles.socialParent}>
        <a target="_blank"
          href="https://yudhajitadhikary.medium.com/"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios/50/ffffff/medium-logo.png" />
        </a>
        <a target="_blank"
          href="https://www.facebook.com/yudhajit.adhikary"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" />
        </a>
        <a target="_blank"
          href="https://twitter.com/yudha19971"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" />
        </a>
        <a target="_blank"
          href="https://www.linkedin.com/in/yudhajit-adhikary-500898159"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" />
        </a>
        <a target="_blank"
          href="https://github.com/Yudhajitadhikary"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" />
        </a>
        <a target="_blank"
          href="https://www.instagram.com/yudha_clicks"
          className={styles.socialWrapper}
        >
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"/>
        </a>
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
