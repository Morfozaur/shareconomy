import React from 'react';
import face from "../../../assets/face.svg";
import insta from "../../../assets/insta.svg";

const Footer = () => {
    return (
        <div className="contact__footer">
            <p className="contact__credits">Copyright by Coders Lab</p>
            <div className="contact__media">
                <img src={face} className='contact__social' alt="Facebook"/>
                <img src={insta} className='contact__social' alt="Instagram"/>
            </div>
        </div>
    );
}

export default Footer;