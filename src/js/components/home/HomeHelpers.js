import React, {useState} from 'react';
import Decoration from "../elements/Decoration";
import HelperMotto from "./elements/HelperMotto";
import Paginator from "./elements/Paginator";
import classNames from "classnames";


const HomeHelpers = () => {
    const [active, setActive] = useState('foundations');

    const setActivator = (e, type) => {
        e.preventDefault();
        setActive(type);
    };

    return (
        <section className='helpers'>
            <div className="helpers__header">
                <h2 className="font__header">Komu pomagamy?</h2>
                <Decoration/>
            </div>
            <div className="helpers__selector">
                <button className={classNames("helpers__choose", {'btn--frame': active==='foundations'})}
                        onClick={e=>setActivator(e,'foundations')}>Fundacjom</button>
                <button className={classNames("helpers__choose", {'btn--frame': active==='organisations'})}
                        onClick={e=>setActivator(e,'organisations')}>Organizacjom pozarządowym</button>
                <button className={classNames("helpers__choose", {'btn--frame': active==='fundraisers'})}
                            onClick={e=>setActivator(e,'fundraisers')}>Lokalnym zbiórkom</button>
            </div>
            <HelperMotto active={active}/>
            <Paginator active={active}/>
        </section>
    );
}

export default HomeHelpers;