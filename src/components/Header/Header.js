import React, { useRef, useState } from 'react'
// import { Chevron } from '../../assets/vectors/Icons';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

// import Logo from '../Logo/Logo';

import styles from './Header.module.css';

const Header = ({menu, selectedMenu, selectMenuHandler, clicked}) =>{
    console.log(window.innerWidth)
    const [tabPos, setTabPos]=useState(1)
    const tabRef=useRef();
    let navLinks=<section ref={tabRef} className={styles.Links}> {menu.links.map(element => (
        <li
        key={element.id}
        className={styles.Menu} onClick={(e)=>selectMenuHandler(e, 'link', element.id)}>
            <img className={selectedMenu.id===element.id ? styles.activeImg : null} style={{backgroundColor: element.imgBg}} src={element.icon} alt='icon'/>
            <a className={selectedMenu.id===element.id ? styles.active : null} href={element.link}>
                {element.name}
            </a>
        </li>
    )) }</section>
    let options=menu.options.map(element => (
        <li
        key={element.id}
        className={styles.Menu+' '+styles[element.className]} onClick={(e)=>selectMenuHandler(e, 'option', 1)}>
            <a href="#Profile">{element.option}</a>
        </li>
    ))
    
    return<header className={styles.Header}>
        <section className={styles.Logo}><span>MADE UP</span></section>
        <nav className={styles.Navbar}>
            <section className={styles.NavLinks+' '+ (selectedMenu.type === 'link' ? null : styles.Override)}>
                <button disabled={!(tabPos >1)} className={tabPos >1 ? styles.LeftChevron : styles.LeftChevron + ' '+ styles.Disabled} onClick={()=>{
                    if(tabPos > 1){
                        tabRef.current.scrollBy({
                            left: window.innerWidth <= 768 && window.innerWidth >400 ? -120 : -60,
                            behavior: 'smooth'
                        })
                        setTabPos(tabPos-1)
                    }
                }}>
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.276045 20.9768C-0.104841 21.3768 -0.0894024 22.0098 0.310528 22.3906C0.710458 22.7715 1.34344 22.7561 1.72432 22.3562L0.276045 20.9768ZM10.524 11.6665L11.2481 12.3562C11.6159 11.97 11.6159 11.3631 11.2481 10.9768L10.524 11.6665ZM1.72432 0.976849C1.34344 0.576918 0.710458 0.56148 0.310528 0.942366C-0.0894024 1.32325 -0.104841 1.95623 0.276045 2.35616L1.72432 0.976849ZM1.72432 22.3562L11.2481 12.3562L9.79985 10.9768L0.276045 20.9768L1.72432 22.3562ZM11.2481 10.9768L1.72432 0.976849L0.276045 2.35616L9.79985 12.3562L11.2481 10.9768Z" fill="#333333"/>
                    </svg>
                </button>
                {navLinks}
                <button disabled={!(tabPos <3)} className={tabPos <3 ? styles.RightChevron : styles.RightChevron + ' '+styles.Disabled} onClick={() =>{
                    if(tabPos <3){
                        tabRef.current.scrollBy({
                            left: window.innerWidth <= 768 && window.innerWidth >400 ? 120 : 60,
                            behavior: 'smooth'
                        })
                        setTabPos(tabPos+1)
                    }
                }}>
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.276045 20.9768C-0.104841 21.3768 -0.0894024 22.0098 0.310528 22.3906C0.710458 22.7715 1.34344 22.7561 1.72432 22.3562L0.276045 20.9768ZM10.524 11.6665L11.2481 12.3562C11.6159 11.97 11.6159 11.3631 11.2481 10.9768L10.524 11.6665ZM1.72432 0.976849C1.34344 0.576918 0.710458 0.56148 0.310528 0.942366C-0.0894024 1.32325 -0.104841 1.95623 0.276045 2.35616L1.72432 0.976849ZM1.72432 22.3562L11.2481 12.3562L9.79985 10.9768L0.276045 20.9768L1.72432 22.3562ZM11.2481 10.9768L1.72432 0.976849L0.276045 2.35616L9.79985 12.3562L11.2481 10.9768Z" fill="#333333"/>
                    </svg>
                </button>
            </section>
            <section className={styles.Options}>
                {options}
            </section>
            <HamburgerIcon clicked={clicked} />
        </nav>
    </header>
}

export default Header;

