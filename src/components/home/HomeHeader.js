import React from 'react';
import Menu from "./elements/Menu";

const HomeHeader = () => {
    return (
        <header>
            <Menu/>
            <div className="minicontainer">
                <div className="menu__toform">
                    <h2 className="menu__toform--title">Zacznij pomagać!</h2>
                    <h2 className="menu__toform--title">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src="" alt="line" className="menu__toform--line"/>
                    <div className="menu__toform--buttons">
                        <div className="menu__toform--buttons-btn">Oddaj Rzeczy</div>
                        <div className="menu__toform--buttons-btn">Zorganizuj Zbiórkę</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeHeader;