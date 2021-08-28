import React from 'react';
import Decoration from "../elements/Decoration";
import icon1 from "../../../assets/icon-1.svg"
import icon2 from "../../../assets/icon-2.svg"
import icon3 from "../../../assets/icon-3.svg"
import icon4 from "../../../assets/icon-4.svg"

const HomeSteps = ({toLogin}) => {
    return (
        <section className='steps'>
            <div className="steps__header">
                <div className="steps__title">Wystarczą 4 proste kroki</div>
                <Decoration/>
            </div>
            <div className="steps__bar">
                <div className="steps__group">
                    <img src={icon1} alt="shirt" className="steps__ico" />
                    <p className="steps__lead">Wybierz rzeczy</p>
                    <hr className="steps__line"/>
                    <p className="steps__text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__group">
                    <img src={icon2} alt="bag" className="steps__ico" />
                    <p className="steps__lead">Spakuj je</p>
                    <hr className="steps__line"/>
                    <p className="steps__text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__group">
                    <img src={icon3} alt="magnifying" className="steps__ico" />
                    <p className="steps__lead">Zdecyduj, komu chcesz pomóc</p>
                    <hr className="steps__line"/>
                    <p className="steps__text">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__group">
                    <img src={icon4} alt="arrows" className="steps__ico" />
                    <p className="steps__lead">Zamów kuriera</p>
                    <hr className="steps__line"/>
                    <p className="steps__text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps__btn" >
                <div className="btn btn--big" onClick={toLogin}>
                    <span>Oddaj</span>
                    <span>Rzeczy</span>
                </div>
            </div>
        </section>
    );
}

export default HomeSteps;