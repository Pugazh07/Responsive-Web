import React from 'react'

import HeroImage from '../../../assets/images/hero_image.jpg';
import DenimJeans from '../../../assets/images/denim_jeans.jpg';

import styles from './LatestCollections.module.css';

export const LatestCollections = () =>{
    return <section className={styles.LatestCollections}>
        <div className={styles.Heading}>
        <hr/>
            <p>lATEST COLLECTIONS</p>
        <hr/>
        </div>
        
        <section className={styles.LatestCollection}>
        {[1,2,3,4,5].map((i) => {
            return <div key={i}>
                <img src={i%2 !== 0 ? DenimJeans : HeroImage} alt={i%2 !== 0 ? 'DenimJeans' : 'HeroImage'}/>
                <p>Printed Polo T-Shirt</p>
                <p><span className='Red'>&#8377;1,499.00</span></p>
            </div>
        })}
        </section>  
    </section>
}