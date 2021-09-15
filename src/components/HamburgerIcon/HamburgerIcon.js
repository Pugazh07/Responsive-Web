import React from "react"

import styles from './HamburgerIcon.module.css'

const HamburgerIcon = ({clicked}) => {
    return <section className={styles.HamburgerIcon} onClick={clicked} tabIndex="0" onKeyPress={(e)=>{
        e.stopPropagation();
        switch (e.key){
            case "Enter":
                clicked()
                break
            default:
                break
        }
    }}>
    <div></div>
    <div></div>
    <div></div>
</section>
}

export default HamburgerIcon