import React from 'react';
import Decoration from "../elements/Decoration";
import cover from "../../../assets/cover.jpg"

const HomeHeader = ({toLogin}) => {



    return (
        <section className='header'>
            <div className="cover">
                <img className='cover__img' src={cover} alt="cover"/>
            </div>
            <div className="toform">
                <div className="toform__group">
                    <div className="toform__title">
                        <span>Zacznij pomagać!</span>
                        <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    </div>
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