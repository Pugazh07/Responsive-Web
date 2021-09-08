import React from 'react';
import { useState } from 'react/cjs/react.development';

import ProfileImage from '../../assets/images/profile.png';
import { Shevron } from '../../assets/vectors/Icons';
import MyOrders from '../subComponents/MyOrders/MyOrders';
import MyProfile from '../subComponents/MyProfile/MyProfile';

import styles from './css/Profile.module.css';

const options=[
    {id: 1, name:'My Profile', details: 'Notifications, password', option: <MyProfile/>},
    {id: 2, name:'My Orders', details: 'Already have 12 orders', option: <MyOrders/>},
    {id: 3, name:'Shipping addresses', details: '3 addresses', option: <MyOrders/>},
]

export const Profile = () => {
    const [selectedOption, setSelectedOption]=useState(2)

    const selectOptionHandler = (id) => {
        setSelectedOption(id)
    }

    return <main className={styles.Profile}>
        <p className={styles.PageName}>Home / My Profile</p>
        <section className={styles.Box1}>
            <img src={ProfileImage} alt='profile' />
            <p><span>Grishk</span>
            <br/>
            <span>griiskaim@gmail.com</span></p>
        </section>
        <section className={styles.Box2}>
            {options.map(option => (<div key={option.id} className={styles.Option}>
                <section className={styles.OptionCard} onClick={()=>selectOptionHandler(option.id)}>
                    <span className={styles.InnerCard}>
                        <div>
                            <span>{option.name}</span>
                            <br/>
                            <span>{option.details}</span>
                        </div>
                        <div>
                        <Shevron/>
                        </div>
                    </span>
                    {option.id === selectedOption ? <hr/> : null}
                </section>
                {option.id === selectedOption ? <span className={styles.SelectedOption}>{option.option}</span> : null}
                </div>
                )
                )}
        </section>
    </main>
}