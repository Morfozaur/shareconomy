import React from 'react';
import Decoration from "../elements/Decoration";
import cover from "../../../assets/cover.jpg"

const HomeHeader = ({toLogin}) => {



    return (
        <section className='header'>
            <div className="header__cover">
                <img className='header__img' src={cover} alt="cover"/>
            </div>
            <div className="toform">
                <div className="toform__group">
                    <h2 className="toform__title font__header">
                        <span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </h2>
                    <Decoration/>
                    <div className="toform__buttons">
                        <div className="btn btn--big" onClick={toLogin}><span>Oddaj</span><span>Rzeczy</span></div>
                        <div className="btn btn--big" onClick={toLogin}><span>Zorganizuj</span><span>Zbiórkę</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;