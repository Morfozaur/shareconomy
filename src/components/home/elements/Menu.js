import React from 'react';

const Menu = () => {
    return (
        <menu className='menu'>
            <div className="menu__login">
                <div className="menu__login--button">Zaloguj</div>
                <div className="menu__login--button--new">Załóż konto</div>
            </div>
            <ul className='menu__main'>
                <li className='menu__main--link'>Start</li>
                <li className='menu__main--link'>O co chodzi?</li>
                <li className='menu__main--link'>O nas</li>
                <li className='menu__main--link'>Fundacja i organizacje</li>
                <li className='menu__main--link'>Kontakt</li>
            </ul>
        </menu>
    );
}

export default Menu;