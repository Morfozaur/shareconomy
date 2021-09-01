import React, {useState} from 'react';
import Decoration from "../elements/Decoration";
import face from "../../../assets/face.svg"
import insta from "../../../assets/insta.svg"
import classNames from "classnames";

const HomeContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [wrongName, setWrongName] = useState(false);
    const [wrongMail, setWrongMail] = useState(false);
    const [wrongMessage, setWrongMessage] = useState(false);

    const validate = (mail) => {
        const reg = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return reg.test(mail);
    }

    const fetchMail = `https://fer-api.coderslab.pl/v1/portfolio/contact`;
    const fetcher = async (name, email, message) => {
        const response = await fetch(fetchMail, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, message }),
        });
        return response.json();
    }

    const send = (e) => {
        e.preventDefault();

        const space = (str) =>(/\s/).test(str);
        const newName = name.trim();
        setName(newName);

        if (space(name) || (!name.length)) {setWrongName(true)}
        else {setWrongName(false)}

        if (!validate(email)) {setWrongMail(true)}
        else {setWrongMail(false)}

        if (message.length < 120 ) {setWrongMessage(true)}
        else {setWrongMessage(false)}

        fetcher(name, email, message)
            .then(res => {
                console.log(res);
                if (!res.errors) {
                    setSuccess(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                }

            })
            .catch(res => {
                console.log(res);
            })
    };

    const changeName = (e) => {
        setName(e.target.value);
        setWrongName(false);
        setSuccess(false);
    };

    const changeMail = (e) => {
        setEmail(e.target.value);
        setWrongMail(false);
        setSuccess(false);
    };

    const changeMessage = (e) => {
        setMessage(e.target.value);
        setWrongMessage(false);
        setSuccess(false);
    };

    return (
        <section className='contact'>
            <div className="contact__sender">
                <div className="contact__header">
                    <div className="contact__title">Skontaktuj się z nami</div>
                    <Decoration/>
                </div>
                <div className='contact__success'>
                    {success &&
                    <>
                        <p>Wiadomość została wysłana!</p>
                        <p>Wkrótce się skontaktujemy</p>
                    </>}
                </div>
                <form  className="contact__form" onSubmit={e=>send(e)}>
                    <div className={classNames("contact__data", {'contact__data--error' : wrongName || wrongMail})}>
                        <div className="contact__group contact__group--data">
                            <label className='contact__label contact__label--data' htmlFor="yourName">Wpisz swoje imię</label>
                            <input className={classNames('contact__input', {'contact__input--error' : (wrongName)})}
                                   type="text"
                                   id='yourName'
                                   autoComplete='none'
                                   value={name}
                                   onChange={e=>changeName(e)}
                                   placeholder='Krzysztof'/>
                            <p className="contact__error">
                                {wrongName && <>Podane imię jest nieprawidłowe!</>}
                            </p>
                        </div>
                        <div className="contact__group contact__group--data">
                            <label className='contact__label contact__label--data' htmlFor="yourMail">Wpisz swój email</label>
                            <input className={classNames('contact__input', {'contact__input--error' : (wrongMail)})}
                                   type="email"
                                   id='yourMail'
                                   autoComplete='none'
                                   value={email}
                                   onChange={e=>changeMail(e)}
                                   placeholder='abc@xyz.pl'/>
                            <p className="contact__error">
                                {wrongMail && <>Podany email jest nieprawidłowy!</>}
                            </p>
                        </div>
                    </div>
                    <div className="contact__group">
                        <label className='contact__label' htmlFor="text">Wpisz swoją wiadomość</label>
                        <textarea className={classNames('contact__input contact__textarea', {'contact__input--error' : (wrongMessage)})}
                                  id='text'
                                  rows={4}
                                  value={message}
                                  onChange={e=>changeMessage(e)}
                                  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'/>
                        <p className="contact__error">
                            {wrongMessage && <>Wiadomość musi mieć co najmniej 120 znaków!</>}
                        </p>
                    </div>
                    <button className=" btn contact__button" onClick={e=>send(e)}>Wyślij</button>
                </form>
            </div>
            <div className="contact__footer">
                <p className="contact__credits">Copyright by Coders Lab</p>
                <div className="contact__media">
                    <img src={face} className='contact__social' alt="Facebook"/>
                    <img src={insta} className='contact__social' alt="Instagram"/>
                </div>
            </div>
        </section>
    );
}

export default HomeContact;