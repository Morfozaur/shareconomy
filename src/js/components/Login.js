import React from 'react';
import Decoration from "./elements/Decoration";

const Login = () => {
    return (
        <div className='login'>
            <div className="login__header">
                <h2 className="font__header">Zaloguj się</h2>
                <Decoration/>
            </div>
            <div className="login__box">
                <label htmlFor="email"className='login__label'>Email</label>
                <input type="text" id="email" className='login__input'/>
                <label htmlFor="password"className='login__label'>Hasło</label>
                <input type="password" id="password" className='login__input'/>
            </div>
            <div className="login__buttons">
                <button className="btn">Załóż konto</button>
                <button className="btn">Zaloguj się</button>
            </div>
        </div>
    );
}

export default Login;