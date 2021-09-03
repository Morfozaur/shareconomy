import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import NavBar from "./home/elements/NavBar";
import Hamburger from "./home/elements/Hamburger";
import {useDispatch, useSelector} from "react-redux";
import {loginData} from "../redux/reducers/loginData";
import {fetchLogin} from "../redux/actions/allFetchers";


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
    const dispatch = useDispatch();
    const history = useHistory();
    const isLogged = useSelector(state=> state.isLogged);
    const user = useSelector(state => loginData.mail);



    const logOut = (page) => {
        dispatch(fetchLogin(false));
        history.push(`/wylogowano`);
    };

    useEffect(()=> {
        if (windowWidth >776) {
            if (openNav) {setOpenNav(false)}
            if (mobile) {setMobile(false)}
        } else if (mobile === false) {setMobile(true)}
    }, [windowWidth, openNav, mobile])

    console.log(isLogged)
    return (
        <menu className='menu'>
            <div className="menu__login">
                <Hamburger openNav={openNav} setOpenNav={setOpenNav}/>
                {isLogged &&
                <>
                    <p>{user}</p>
                    <div className="menu__button menu__button--bordered"><Link to="/oddaj-rzeczy">Oddaj rzeczy</Link></div>
                    <div className="menu__button" onClick={e=>logOut()}>Wyloguj</div>
                </>}

                {!isLogged &&
                <>
                    <div className="menu__button"><Link to="/logowanie">Zaloguj</Link></div>
                    <div className="menu__button menu__button--bordered"><Link to="/rejestracja">Załóż konto</Link></div>
                </>}
            </div>
            <NavBar mobile={mobile} open={openNav}/>
        </menu>
    );
}

export default Menu;