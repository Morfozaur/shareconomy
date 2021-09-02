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
                <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
                <Decoration/>
            </div>
            <div className="steps__bar">
                <div className="steps__group">
                    <img src={icon1} alt="shirt" className="steps__ico" />
                    <h3 className="font__subheader">Wybierz rzeczy</h3>
                    <hr className="steps__line"/>
                    <p className="steps__text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__group">
                    <img src={icon2} alt="bag" className="steps__ico" />
                    <h3 className="font__subheader">Spakuj je</h3>
                    <hr className="steps__line"/>
                    <p className="steps__text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__group">
                    <img src={icon3} alt="magnifying" className="steps__ico" />
                    <h3 className="font__subheader">Zdecyduj, komu chcesz pomóc</h3>
                    <hr className="steps__line"/>
                    <p className="steps__text">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__group">
                    <img src={icon4} alt="arrows" className="steps__ico" />
                    <h3 className="font__subheader">Zamów kuriera</h3>
                    <hr className="steps__line"/>
                    <p className="steps__text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps__btn" >
                <div className="btn btn--big btn--frame" onClick={toLogin}>
                    <span>Oddaj</span>
                    <span>Rzeczy</span>
                </div>
            </div>
        </section>
    );
}

export default HomeSteps;