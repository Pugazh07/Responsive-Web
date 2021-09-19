import React from 'react'
import { MyOrders, MyProfile } from '../subComponents';


import styles from './SideDrawer.module.css'

const menu={
    options1: [
        {id: 1, name:'MY PROFILE', option: <MyProfile/>, className: 'MyProfile'},
        {id: 'none', name:'MY WISHLIST', option: null, className: 'MyWishlist'},
        {id: 2, name:'MY ORDERS', option: <MyOrders/>, className: 'MyOrders'},
        {id: 3, name:'MY ADDRESSES', option: null, className: 'MyAddresses'}
    ],
    options2: [
        {id: 1, name:'THE BRAND', className: 'ForMe'},
        {id: 2, name:'THE MADE UP STORY', className: 'ForMe'},
        {id: 3, name:'FRANCHISE AND SUPPLIEDS', className: 'ForMe'},
        {id: 4, name:'STORE LOCATOR', className: 'ForMe'}
    ]
}

const SideDrawer = ({show, clicked, selectMenuHandler}) =>{
    let sideDrawerClass=[styles.SideDrawer, styles.Close];
    if(show){
        sideDrawerClass=[styles.SideDrawer, styles.Open];
    }
    return<section className={sideDrawerClass.join(' ')}>
        <i onClick={clicked} tabIndex={show ? "0" : "-1"} onKeyPress={(e)=>{
            e.stopPropagation();
            switch (e.key){
                case "Enter":
                    clicked()
                    break
                default:
                    break
            }
        }}>&#10006;</i>
        <section className={styles.Menu}>
            <div className={styles.Box1}>
                {
                    menu.options1.map(element => <li key={element.id} className={element.className} onClick={(e)=>selectMenuHandler(e, 'option', element.id)}>
                        <a href='#menu' tabIndex={show ? "0" : "-1"}>{element.name}</a>
                    </li>)
                }
            </div>
            <hr/>
            <div className={styles.Box2}>
                {
                    menu.options2.map(element => <li key={element.id} className={element.className} onClick={(e)=>selectMenuHandler(e, 'link', element.id)}>
                        <a href='#menu' tabIndex={show ? "0" : "-1"}>{element.name}</a>
                    </li>)
                }
            </div>
        </section>
    </section>
}

export default SideDrawer;