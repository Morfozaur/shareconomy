import React, {useRef} from 'react';
import {useClickOutside} from "../../../useClickOutside";

const CitySelector = ({setCity, setUnroll}) => {
    const box = useRef(null);
    useClickOutside(box, setUnroll);

    const citiesList = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice'];

    return (
        <div ref={box} className="form__list form__list--wide">
            {citiesList.map(city => {
                return <div key={city} className="form__toSelect" onClick={()=>setCity(city)}>{city}</div>
            })}
        </div>
    )
}

export default CitySelector;