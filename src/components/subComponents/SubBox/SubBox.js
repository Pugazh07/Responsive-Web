import React from 'react';

import Image1 from '../../../assets/images/image1.jpg';
import Image2 from '../../../assets/images/image2.jpg';

import styles from './SubBox.module.css'

export const SubBox = () => {
    return <section className={styles.SubBox}>
        <section style={{backgroundImage: "url(" + Image1 + ")"}} className={styles.InnerBox1}>
            <div>
                <p className='ParaStyle'><span className='Red'>Summer</span> is here and</p>
                <p className='ParaStyle'>so is our <span className='Red'>collection</span></p>
            </div>
        </section>
        <section className={styles.InnerBox2}>
            <section style={{backgroundImage: "url(" + Image2 + ")"}}>
            <div>
                <p className='ParaStyle'><span className='Red'>Wrinle-free</span> t-shirts</p>
            </div>
            </section>
            <section style={{backgroundImage: "url(" + Image1 + ")"}}>
            <div>
                <p className='ParaStyle'><span className='Red'>Stain-free</span> denim shirts</p>
            </div>
            </section>
        </section>
    </section>
}