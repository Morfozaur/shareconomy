import React, {useState} from 'react';
import Decoration from "./elements/Decoration";
import {Link, useHistory} from "react-router-dom";
import {validateMail} from "../validateMail";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {fetchLogin, fetchLoginData} from "../redux/actions/allFetchers";


const Register = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [passTwo, setPassTwo] = useState('');

    const [wrongMail, setWrongMail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();

    const singUp = (e) => {
        e.preventDefault();
        let check = true;

        if (!validateMail(mail)) {
            setWrongMail(true);
            check = false;
        } else {setWrongMail(false)}

        if ((pass.length < 6) || (pass !== passTwo)) {
            setWrongPass(true);
            check = false;
        } else {
            setWrongPass(false);
        }
        if (check) {
            dispatch(fetchLoginData({mail, pass}));
            dispatch(fetchLogin(true));
            history.push('/');
        } else {
            setMail('');
            setPass('');
            setPassTwo('');
        }
    };

    return (
        <div className='login'>
            <div className="login__header">
                <h2 className="login__title font__header">Załóż konto</h2>
                <Decoration/>
            </div>
            <form className="login__box" onSubmit={e=>singUp(e)}>
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
                <div className="login__group">
                    <label htmlFor="passwordTwo" className='login__label'>Powtórz hasło</label>
                    <input type="password"
                           id="passwordTwo"
                           autoComplete='none'
                           value={passTwo}
                           onChange={e=>setPassTwo(e.target.value)}
                           className={classNames('input login__input', {'input--error' : (wrongPass)})}/>
                    <p className="login__error">
                        {wrongPass && <>Nieprawidłowe hasło!</>}
                    </p>
                </div>
            </form>
            <div className="login__buttons">
                <button className="login__btn btn" onClick={e=>singUp(e)}>Załóż konto</button>
                <button className="login__btn btn btn--frame"><Link to="/logowanie">Zaloguj się</Link></button>
            </div>
        </div>
    );
}

export default Register;