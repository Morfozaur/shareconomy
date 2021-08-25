import React from 'react';
import {Link} from "react-router-dom";
import NavBar from "./home/elements/NavBar";
import Hamburger from "./home/elements/Hamburger";


const Menu = () => {

    return (
        <menu className='menu'>
            <div className="menu__login">
                <Hamburger/>
                <div className="menu__button"><Link to="/logowanie">Zaloguj</Link></div>
                <div className="menu__button menu__button--bordered"><Link to="/rejestracja">Załóż konto</Link></div>
            </div>
            <NavBar/>
            <NavBar addClass={true}/>
        </menu>
    );
}

export default Menu;