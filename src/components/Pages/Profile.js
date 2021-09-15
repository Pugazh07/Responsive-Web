import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import ProfileImage from '../../assets/images/profile.png';
import { Chevron } from '../../assets/vectors/Icons';
import { MyOrders, MyProfile } from '../subComponents';


import styles from './css/Profile.module.css';

const options=[
    {id: 1, name:'My Profile', details: 'Notifications, password', option: <MyProfile/>},
    {id: 2, name:'My Orders', details: 'Already have 12 orders', option: <MyOrders/>},
    {id: 3, name:'Shipping addresses', details: '3 addresses', option: null},
]

export const Profile = ({selectedOptionId}) => {
    const [selectedOption, setSelectedOption]=useState(null)

    useEffect(()=>{
        if(selectedOptionId){
            setSelectedOption(selectedOptionId)
        }
    },[selectedOptionId])
    const selectOptionHandler = (id) => {
        setSelectedOption(id)
    }

    return <main className={styles.Profile+' '+(selectedOption === 1 ? styles.height1 : styles.height2)}>
        <p className={styles.PageName}>Home / My Profile</p>
        <section className={styles.Box1}>
            <img src={ProfileImage} alt='profile' />
            <p><span>Grishk</span>
            <br/>
            <span>griiskaim@gmail.com</span></p>
        </section>
        <section className={styles.Box2}>
            {options.map(option => (<div key={option.id} className={styles.Option}>
                <section className={styles.OptionCard+' '+(option.id === selectedOption? styles.active : null)} onClick={()=>selectOptionHandler(option.id)} tabIndex="0"
                onKeyPress={(e)=>{
                    e.stopPropagation();
                    switch (e.key){
                      case "Enter":
                        selectOptionHandler(option.id)
                        break
                      default:
                        break
                    }
                }}>
                    <span className={styles.InnerCard}>
                        <div>
                            <span>{option.name}</span>
                            <br/>
                            <span>{option.details}</span>
                        </div>
                        <div>
                        <Chevron/>
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