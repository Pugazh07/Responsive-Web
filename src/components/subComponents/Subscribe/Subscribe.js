import React from "react";

import Image from '../../../assets/images/subscribe_bg.png';
import { Location } from "../../../assets/vectors/Icons";

import styles from './Subscribe.module.css';

export const Subscribe = () => {
    return<section style={{backgroundImage: 'url(' + Image + ')'}} className={styles.Subscribe}>
        <section>
            <div>
                <p>GET COUPONS <br/>& STYLE GUIDES</p>
                <p tabIndex="0">Subscribe to our Newsletter</p>
                <form className={styles.SubscribeForm}>
                    <input type='email' placeholder='E-mail ID'/>
                    <button className='RedButton'>SUBSCRIBE</button>
                </form>
            </div>
            <p className={styles.Locate} tabIndex="0"><i><Location/></i> <span>LOCATE US</span></p>
        </section>
    </section>
}