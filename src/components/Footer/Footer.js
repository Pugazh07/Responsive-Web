import React from 'react';

import Logo from '../Logo/Logo';
import { Facebook, Insta, Youtube, MailBox, Phone } from '../../assets/vectors/Icons';
import styles from './Footer.module.css';

const Footer = () => {
    return<footer className={styles.Footer}>
        <section className={styles.Links}>
            <li><a href='#aboutus'>About Us</a></li>
            <li><a href='#deliveryinformation'>Delivery Information</a></li>
            <li><a href='#returns&exchange'>Returns & Exchange</a></li>
            <li><a href='#technical&privacy'>Technical & Privacy</a></li>
            <li><a href='#orderstatus'>Order Status</a></li>
        </section>
        <section className={styles.SocialMedia}>
            <Logo />
            <p>Stay in touch with us</p>
            <div className={styles.Icons}>
                <a href="#facebook"><Facebook /></a>
                <a href="#insta"><Insta /></a>
                <a href="#yt"><Youtube /></a>
            </div>
        </section>
        <section className={styles.Contact}>
            <div className={styles.Address}>
                <p style={{color: '#DDDDDD'}}>Our Corporate Office</p>
                <p>
                {`No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.`}
                </p>
            </div>
            <div>
                <p><MailBox/> sales@madeup.com</p>
                <p><Phone/>  044 9999 9999</p>
            </div>
        </section>
    </footer>
}

export default Footer;