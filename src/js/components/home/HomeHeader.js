import React from 'react';
import Decoration from "../elements/Decoration";
import cover from "../../../assets/cover.jpg"

const HomeHeader = ({toLogin}) => {



    return (
        <section className='header'>
            <div className="header__cover">
                <img className='header__img' src={cover} alt="cover"/>
            </div>
            <div className="header__toform">
                <div className="header__group">
                    <h2 className="header__title font__header">
                        <span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h2>
                    <Decoration/>
                    <div className="header__buttons">
                        <div className="btn btn--big btn--frame" onClick={toLogin}><span>Załóż</span><span>Zbiórkę</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;