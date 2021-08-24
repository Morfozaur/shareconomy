import React from 'react';
import Decoration from "../elements/Decoration";

const HomeHeader = () => {
    return (
        <section className='home__header'>
            <div className="minicontainer">
                <div className="menu__toform">
                    <h2 className="menu__toform--title">Zacznij pomagać!</h2>
                    <h2 className="menu__toform--title">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <Decoration/>
                    <div className="menu__toform--buttons">
                        <div className="menu__toform--buttons-btn">Oddaj Rzeczy</div>
                        <div className="menu__toform--buttons-btn">Zorganizuj Zbiórkę</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;