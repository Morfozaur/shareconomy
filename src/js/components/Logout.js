import React from 'react';
import Decoration from "./elements/Decoration";
import {Link} from "react-router-dom";

const Logout = () => {


    return (
        <div className='login'>
            <div className="login__header login__header--logout">
                <h2 className="login__title font__header">Wylogowanie nastąpiło pomyślnie!</h2>
                <Decoration/>
                <button className="login__btn login__btn--logout btn btn--frame"><Link to="/">Strona główna</Link></button>
            </div>
        </div>
    );
}

export default Logout;