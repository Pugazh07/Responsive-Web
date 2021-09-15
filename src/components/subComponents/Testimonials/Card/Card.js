import React from "react";

import { StarRate } from "../../../../assets/vectors/Icons";
import styles from './Card.module.css';

const Card = ({image}) => {
    return <div className={styles.Card} tabIndex="0">
        <img src={image} alt={'card'}/>
        <section className={styles.InnerCard}>
            <div><span>Vikas</span> <span className={styles.Rating}>{[1,2,3,4,5].map((ele)=> <StarRate key={ele}/> )}</span></div>
            <p>Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.</p>
        </section>
    </div>
}

export default Card;