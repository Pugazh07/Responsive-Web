import React from "react";

import cardImage from '../../../assets/images/testimonial_card.jpg';
import Card from "./Card/Card";

import styles from './Testimonials.module.css'

export const Testimonials = () => {
    return <section className={styles.Testimonials}>
        <p className={styles.Heading}>Testimonials</p>
        <section className={styles.Cards}>
        {[1,2,3].map((ele)=>{
            return <Card key={ele} className={styles.Card} image={cardImage}/>
        })}
        </section>
    </section>
}