import React, {useState} from 'react';
import Decoration from "./elements/Decoration";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../redux/actions/allFetchers";
import classNames from "classnames";

const Login = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const [wrongMail, setWrongMail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();
    const {mail:mailDB, pass:passDB} = useSelector(state => state.loginData)

    const logIn = (e) => {
        e.preventDefault();
        let check = true;

        if (mail !== mailDB) {
            setWrongMail(true);
            check = false;
        } else {setWrongMail(false)}

        if (pass !== passDB) {
            setWrongPass(true);
            check = false;
        } else {
            setWrongPass(false);
        }
        if (check) {
            dispatch(fetchLogin(true));
            history.push('/');
        } else {
            setMail('');
            setPass('');
        }
    };

    return (
        <div className='login'>
            <div className="login__header">
                <h2 className="login__title font__header">Zaloguj się</h2>
                <Decoration/>
            </div>
            <form className="login__box">
                <div className="login__group">
                    <label htmlFor="email" className='login__label'>Email</label>
                    <input type="text"
                           id="email"
                           autoComplete='none'
                           value={mail}
                           onChange={e=>setMail(e.target.value)}
                           className={classNames('input login__input', {'input--error' : (wrongMail)})}/>
                    <p className="login__error">
                        {wrongMail && <>Błędny email!</>}
                    </p>
                </div>
                <div className="login__group">
                    <label htmlFor="password" className='login__label'>Hasło</label>
                    <input type="password"
                           id="password"
                           autoComplete='none'
                           value={pass}
                           onChange={e=>setPass(e.target.value)}
                           className={classNames('input login__input', {'input--error' : (wrongPass)})}/>
                    <p className="login__error">
                        {wrongPass && <>Nieprawidłowe hasło!</>}
                    </p>
                </div>
            </form>
            <div className="login__buttons">
                <button className="login__btn btn"><Link to="/rejestracja">Załóż konto</Link></button>
                <button className="login__btn btn btn--frame" onClick={e=>logIn(e)}>Zaloguj się</button>
            </div>
        </div>
    );
}

export default Login;