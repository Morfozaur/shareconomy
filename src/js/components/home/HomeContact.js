import React from 'react';
import Decoration from "../elements/Decoration";

const HomeContact = () => {
    return (
        <section className='contact'>
            <div className="contact__content">
                <div className="contact__header">
                    <div className="contact__title">f</div>
                    <Decoration/>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__inputs">
                        <div className="contact__mail">
                            <label htmlFor=""></label>
                            <input type="text"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default HomeContact;