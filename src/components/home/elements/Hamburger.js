import React, {useState} from 'react';

const Hamburger = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(true)

    const revealMenu = () => {

    };

    return (
        <div className="menu__hamburger" onClick={revealMenu}>
            <div className="menu__burger menu__burger--before"/>
            <div className="menu__burger"/>
            <div className="menu__burger menu__burger--after"/>
        </div>
    );
}

export default Hamburger;