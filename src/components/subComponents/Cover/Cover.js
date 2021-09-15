import React from 'react';

import HeroImage from '../../../assets/images/hero_image.jpg';

import styles from './Cover.module.css';

export const Cover = () => {
    return <section style={{backgroundImage: "url(" + HeroImage + ")"}} className={styles.Cover}>
        <div>
            <p className='ParaStyle'>Clothes that <span className='Red'>respire</span></p>
            <p className='ParaStyle'>for me who <span className='Red'>aspire</span></p>
        </div>
        <button className='RedButton'>
            BROWSE COLLECTIONS
        </button>
    </section>
}