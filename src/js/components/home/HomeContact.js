import React from 'react';
import Decoration from "../elements/Decoration";
import face from "../../../assets/face.svg"
import insta from "../../../assets/insta.svg"

const HomeContact = () => {

    const send = (e) => {
        e.preventDefault();
    };
    return (
        <section className='contact'>
            <div className="contact__sender">
                <div className="contact__header">
                    <div className="contact__title">Skontaktuj się z nami</div>
                    <Decoration/>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__data">
                        <div className="contact__group contact__group--data">
                            <label className='contact__label contact__label--data' htmlFor="name">Wpisz swoje imię</label>
                            <input className='contact__input' type="text" id='name' placeholder='Krzysztof'/>
                        </div>
                        <div className="contact__group contact__group--data">
                            <label className='contact__label contact__label--data' htmlFor="mail">Wpisz swój email</label>
                            <input className='contact__input' type="text" id='mail' placeholder='abc@xyz.pl'/>
                        </div>
                    </div>
                    <div className="contact__group">
                        <label className='contact__label' htmlFor="name">Wpisz swoją wiadomość</label>
                        <textarea className='contact__input contact__textarea' id='name' rows={4} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                    </div>
                    <button className="contact__button" onClick={e=>send(e)}>Wyślij</button>
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