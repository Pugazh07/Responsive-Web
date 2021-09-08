import React, { useState } from 'react';
import { Cart, Favorite, Search, Person } from '../../assets/vectors/Icons';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { ForMe, Profile } from '../../components/Pages';

const menu ={
    links: [
        {id: 1, name: 'For Me', link: '#forme'}, {id: 2, name: 'Jeans', link: '#jeans'}, {id: 3, name: 'Shirts', link: '#shirts'},
        {id: 4, name: 'T-Shirts', link: '#tshirts'}, {id: 5, name: 'Trousers', link: '#trousers'},
        {id: 6, name: 'Joggers', link: '#joggers'}, {id: 7, name: 'Shorts', link: '#shorts'}
    ],
    options: [
        {id: 1, option: <Search/>}, {id: 2, option: <Cart/>}, {id: 3, option: <Favorite/>}, {id: 4, option: <Person/>}
    ]
}

const Main = () =>{
    const [selectedMenu, setSelectedMenu] = useState({type: 'link', id: 1})
    const selectMenuHandler = (e, type, id) => {
        e.stopPropagation();
        if(type === 'option') setSelectedMenu({
            ...selectedMenu, type: type
        })
        else setSelectedMenu({type: type, id: id})
    }
    const selectedContent=selectedMenu.type === 'link' ? <ForMe/> : <Profile/>
    return <div>
        <Header menu={menu} selectedMenu={selectedMenu} selectMenuHandler={selectMenuHandler}/>
        {selectedContent}
        <Footer />
    </div>
}

export default Main