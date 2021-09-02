import React from 'react';
import Decoration from "./elements/Decoration";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='login'>
            <div className="login__header">
                <h2 className="login__title font__header">Zaloguj się</h2>
                <Decoration/>
            </div>
            <div className="login__box">
                <div className="login__group">
                    <label htmlFor="email" className='login__label'>Email</label>
                    <input type="text"
                           id="email"
                           autoComplete='none'
                           className='input login__input'/>
                </div>
                <div className="login__group">
                    <label htmlFor="password" className='login__label'>Hasło</label>
                    <input type="password"
                           id="password"
                           autoComplete='none'
                           className='input login__input'/>
                </div>
            </div>
            <div className="login__buttons">
                <button className="login__btn btn"><Link to="/rejestracja">Załóż konto</Link></button>
                <button className="login__btn btn btn--frame">Zaloguj się</button>
            </div>
        </div>
    );
}

export default Login;