import React from 'react';
import {useHistory} from "react-router-dom";
import {scroller} from "react-scroll";
import classNames from "classnames";


const NavBar = ({mobile, open}) => {

    const history = useHistory();

    const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700})

    const scrollToPage = async (target) => {
        if (history.location.pathname !=='/') {
            await history.push('/');
        }
        scrollTarget(target);
    };

    return (
        <ul className={classNames('menu__main', {'menu__main--mobile':mobile})}
            style={mobile ? {maxHeight: open ? '400px': '0'} : {}}>
            <li className='menu__link menu__link--bordered'>
                <div onClick={() => scrollToPage('header')}>Start</div>
            </li>
            <li className='menu__link'>
                <div onClick={() => scrollToPage('steps')}>O co chodzi?</div>
            </li>
            <li className='menu__link'>
                <div onClick={() => scrollToPage('about')}>O nas</div>
            </li>
            <li className='menu__link'>
                <div onClick={() => scrollToPage('helpers')}>Fundacja i organizacje</div>
            </li>
            <li className='menu__link menu__link--last'>
                <div onClick={() => scrollToPage('contact')}>Kontakt</div>
            </li>
        </ul>
    );
}

export default NavBar;