import React from 'react';
import Decoration from "../elements/Decoration";
import cover from "../../assets/cover.jpg"
import {useHistory} from "react-router-dom";

const HomeHeader = () => {

    const history = useHistory()

    const toLogin = () => {
        history.push('/logowanie')
    };

    return (
        <section className='header'>
            <div className="cover">
                <img className='cover__img' src={cover} alt="cover"/>
            </div>
            <div className="toform">
                <h2 className="toform__title">
                    <span>Zacznij pomagać!</span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                </h2>
                <Decoration/>
                <div className="toform__buttons">
                    <div className="toform__btn btn--big" onClick={toLogin}><span>Oddaj</span><span>Rzeczy</span></div>
                    <div className="toform__btn btn--big" onClick={toLogin}><span>Zorganizuj</span><span>Zbiórkę</span></div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;