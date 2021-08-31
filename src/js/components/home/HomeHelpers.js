import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Decoration from "../elements/Decoration";
import HelperMotto from "./elements/HelperMotto";
import Paginator from "./elements/Paginator";
import classNames from "classnames";
import {dumbData} from "../../dumbData";


const HomeHelpers = () => {
    const [active, setActive] = useState('foundations');


    const dispatch = useDispatch();

    // const starter = useSelector(state => state.helpers.foundations)
    const starter = dumbData

    const setActivator = (e, type) => {
        e.preventDefault();
        setActive(type);
    };

    return (
        <section className='helpers'>
            <div className="helpers__header">
                <div className="helpers__title">Komu pomagamy?</div>
                <Decoration/>
            </div>
            <div className="helpers__selector">
                <button className={classNames("helpers__choose", {'helpers__choose--active': active==='foundations'})}
                        onClick={e=>setActivator(e,'foundations')}>Fundacjom</button>
                <button className={classNames("helpers__choose", {'helpers__choose--active': active==='organisations'})}
                        onClick={e=>setActivator(e,'organisations')}>Organizacjom pozarządowym</button>
                <button className={classNames("helpers__choose", {'helpers__choose--active': active==='fundraisers'})}
                            onClick={e=>setActivator(e,'fundraisers')}>Lokalnym zbiórkom</button>
            </div>
            <HelperMotto active={active}/>
            <Paginator starter={starter}/>
        </section>
    );
}

export default HomeHelpers;