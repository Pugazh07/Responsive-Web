import React, { useState } from 'react';
import { Cart, Favorite, Search, Person } from '../../assets/vectors/Icons';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { ForMe, Profile } from '../../components/Pages';
import formeicon from '../../assets/images/forme.png';
import jeansicon from '../../assets/images/jeans.png';
import tshirticon from '../../assets/images/t-shirt.png';
import shirticon from '../../assets/images/shirt.png';
import trousersicon from '../../assets/images/trousers.png';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

const menu ={
    links: [
        {id: 1, name: 'For Me', link: '#forme', icon: formeicon, imgBg: '#E6E7E7'}, {id: 2, name: 'Jeans', link: '#jeans', icon: jeansicon, imgBg: '#E8F7FD'},
        {id: 3, name: 'Shirts', link: '#shirts', icon: shirticon, imgBg: '#EAE8FD'}, {id: 4, name: 'T-Shirts', link: '#tshirts', icon: tshirticon, imgBg: '#FFE3E3'},
        {id: 5, name: 'Trousers', link: '#trousers', icon: trousersicon, imgBg: '#FAFAE0'}, {id: 6, name: 'Joggers', link: '#joggers', icon: jeansicon, imgBg: '#E8F7FD'},
        {id: 7, name: 'Shorts', link: '#shorts', icon: trousersicon, imgBg: '#FAFAE0'}
    ],
    options: [
        {id: 1, option: <Search/>, className: 'Search'}, {id: 2, option: <Cart/>, className: 'Cart'},
        {id: 3, option: <Favorite/>, className: 'Favorite'}, {id: 4, option: <Person/>, className: 'Person'}
    ]
}

const Main = () =>{
    const [selectedMenu, setSelectedMenu] = useState({type: 'link', id: 1})
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const selectMenuHandler = (e, type, id) => {
        e.stopPropagation();
        /* if(type === 'option') setSelectedMenu({
            ...selectedMenu, type: type
        })
        else */ setSelectedMenu({type: type, id: id})
    }
    const sideDrawerHandler=()=>{
        setShowSideDrawer(!showSideDrawer)
    }

    const selectedContent=selectedMenu.type === 'link' ? <ForMe/> : <Profile selectedOptionId={selectedMenu.id}/>
    return <div>
        <Header menu={menu} selectedMenu={selectedMenu} selectMenuHandler={selectMenuHandler} clicked={sideDrawerHandler}/>
        <SideDrawer show={showSideDrawer} clicked={sideDrawerHandler} selectMenuHandler={selectMenuHandler}/>
        {selectedContent}
        <Footer />
    </div>
}

export default Main