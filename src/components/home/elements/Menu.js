import React from 'react';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

const Menu = () => {

    const scrollToInfo = () => {

    };
    const scrollToSteps = () => {

    };
    const scrollToAbout = () => {

    };
    const scrollToHelper = () => {

    };
    const scrollToContact = () => {

    };

    return (
        <menu className='menu'>
            <div className="menu__login">
                <div className="menu__login--button"><Link to="/logowanie">Zaloguj</Link></div>
                <div className="menu__login--button"><Link to="/rejestracja">Załóż konto</Link></div>
            </div>
            <ul className='menu__main'>
                <li className='menu__main--link'><ScrollLink>Start</ScrollLink></li>
                <li className='menu__main--link'>O co chodzi?</li>
                <li className='menu__main--link'>O nas</li>
                <li className='menu__main--link'>Fundacja i organizacje</li>
                <li className='menu__main--link'><ScrollLink to='contact' smooth={true} duration={700}>Kontakt</ScrollLink></li>
            </ul>
        </menu>
    );
}

export default Menu;