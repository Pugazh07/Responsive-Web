import React from 'react';

import { Hero, SubBox, LatestCollections, Testimonials, Subscribe } from '../subComponents';

import styles from './css/ForMe.module.css';

export const ForMe=()=>{
    
    return<main className={styles.ForMe}>
        <Hero />
        <SubBox />
        <LatestCollections />
        <Testimonials />
        <Subscribe />
    </main>
}

export default ForMe;