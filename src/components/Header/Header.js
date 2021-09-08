import React from 'react'

import Logo from '../Logo/Logo';

import styles from './Header.module.css';

const Header = ({menu, selectedMenu, selectMenuHandler}) =>{
    let navLinks=menu.links.map(element => (
        <li
        key={element.id}
        className={styles.Menu} onClick={(e)=>selectMenuHandler(e, 'link', element.id)}>
            <a className={selectedMenu.id===element.id ? styles.active : null} href={element.link}>
                {element.name}
            </a>
        </li>
    ))
    let options=menu.options.map(element => (
        <li
        key={element.id}
        className={styles.Menu} onClick={(e)=>selectMenuHandler(e, 'option', element.id)}>
            {element.option}
        </li>
    ))
    
    return<header className={styles.Header}>
        <Logo/>
        <nav className={styles.Navbar}>
            <section className={styles.NavLinks}>
                {navLinks}
            </section>
            <section className={styles.Options}>
                {/* <li className={styles.Menu}><Search/></li>
                <li className={styles.Menu}><Cart/></li>
                <li className={styles.Menu}><Favorite/></li>
                <li className={styles.Menu}><Profile/></li> */}
                {options}
            </section>
        </nav>
    </header>
}

export default Header;