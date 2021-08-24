import React from 'react';
import {Link, useHistory} from "react-router-dom";
import {scroller} from "react-scroll";


const Menu = () => {

    const history = useHistory()

    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700})

    const scrollToPage = async (target) => {
        if (history.location.pathname !=='/') {
            await history.push('/')
        }
        scrollTarget(target)
    };

    return (
        <menu className='menu'>
            <div className="menu__login">
                <div className="login__button"><Link to="/logowanie">Zaloguj</Link></div>
                <div className="login__button"><Link to="/rejestracja">Załóż konto</Link></div>
            </div>
            <ul className='menu__main'>
                <li className='main__link'>
                    <div onClick={() => scrollToPage('info')}>Start</div>
                </li>
                <li className='main__link'>
                    <div onClick={() => scrollToPage('steps')}>O co chodzi?</div>
                </li>
                <li className='main__link'>
                    <div onClick={() => scrollToPage('about')}>O nas</div>
                </li>
                <li className='main__link'>
                    <div onClick={() => scrollToPage('helpers')}>Fundacja i organizacje</div>
                </li>
                <li className='main__link'>
                    <div onClick={() => scrollToPage('contact')}>Kontakt</div>
                </li>
            </ul>
        </menu>
    );
}

export default Menu;