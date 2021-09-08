import React from "react";

import styles from './MyProfile.module.css'

const MyProfile = () => {
    return <section className={styles.MyProfile}>
        <p className={styles.Title}>My Profile</p>
        <form>
            <section className={styles.Name}>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
            </section>
            <input type='email' placeholder='Email'/>
            <input type='phone' placeholder='Phone number'/>
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            <button type='submit'>SAVE CHANGES</button>
        </form>
    </section>
}

export default MyProfile