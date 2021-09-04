import React from 'react';
import hero from "../../../assets/hero.jpg"
import Decoration from "../elements/Decoration";

const FormControls = () => {
    return (
        <div className="controls">
            <div className="controls__cover">
                <img alt="hero" src={hero} className="controls__img"/>
            </div>
            <div className="controls__frame">
                <div className="controls__box">
                    <div className="controls__header">
                        <div className="controls__title font__header">Oddaj rzeczy, których już nie chcesz <span className='controls__upper'>potrzebującym</span></div>
                        <Decoration/>
                        <div className="controls__lead font__header">Wystarczą 4 proste kroki:</div>
                    </div>
                    <div className="controls__menu">
                        <div className="controls__select">
                            <p className="controls__step">1</p>
                            <p className="controls__text">Wybierz rzeczy</p>
                        </div>
                        <div className="controls__select">
                            <p className="controls__step">2</p>
                            <p className="controls__text">Spakuj je w worki</p>
                        </div>
                        <div className="controls__select">
                            <p className="controls__step">3</p>
                            <p className="controls__text">Wybierz Fundację</p>
                        </div>
                        <div className="controls__select">
                            <p className="controls__step">4</p>
                            <p className="controls__text">Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormControls;