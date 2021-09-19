import React from "react";
// import { useSessionStorage } from "../../assets/CustomHooks/useSessionStorage";

import styles from './NotificationBar.module.css';

const NotificationBar = ({showNotification, showNotificationHandler}) =>{
    
    /* const [showNotification, setShowNotification]=useSessionStorage(true);

    const showNotificationHandler=()=>{
        console.log("clicked")
        sessionStorage.setItem('showNotification', JSON.stringify(!showNotification))
            setShowNotification(!showNotification)
            
    } */
    return<section className={styles.NotificationBar}><section className={styles.Notification+' '+(showNotification ? styles.Show : styles.Disable)}>
        <p className={styles.DesktopOnly}>Stay safe and wear Mask</p>
        <p className={styles.MobileOnly}>Stay safe, Wear Mask and Sanitise your phone</p>
        <button className={styles.DesktopOnly} onClick={showNotificationHandler}>Dismiss</button>
        <i className={styles.MobileOnly} onClick={showNotificationHandler}>&#10006;</i>
        
    </section>
    {/* {!showNotification ? <>
    <button className={styles.ToggleButton+' '+styles.DesktopOnly} onClick={showNotificationHandler}>Show</button>
    <i className={styles.ToggleIcon+' '+styles.MobileOnly} onClick={showNotificationHandler}>i</i>
    </>: null} */}
    {!showNotification ?<i className={styles.ToggleIcon} onClick={showNotificationHandler}>i</i>: null}
    </section>
}

export default NotificationBar;