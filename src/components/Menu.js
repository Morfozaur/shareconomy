import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import NavBar from "./home/elements/NavBar";
import Hamburger from "./home/elements/Hamburger";


function useResizer() {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(()=> {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowWidth
}

const Menu = () => {
    const [openNav, setOpenNav] = useState(false);
    const [mobile, setMobile] = useState(true);

    const windowWidth = useResizer();

    useEffect(()=> {
        if (windowWidth >776) {
            if (openNav) {setOpenNav(false)}
            if (mobile) {setMobile(false)}
        } else if (mobile === false) {setMobile(true)}
    }, [windowWidth, openNav])

    return (
        <menu className='menu'>
            <div className="menu__login">
                <Hamburger openNav={openNav} setOpenNav={setOpenNav}/>
                <div className="menu__button"><Link to="/logowanie">Zaloguj</Link></div>
                <div className="menu__button menu__button--bordered"><Link to="/rejestracja">Załóż konto</Link></div>
            </div>
            <NavBar mobile={mobile} open={openNav}/>
        </menu>
    );
}

export default Menu;