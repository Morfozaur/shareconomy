import React, {useRef} from 'react';
import {useClickOutside} from "../../../useClickOutside";

const CitySelector = ({setTime, setUnroll}) => {
    const box = useRef(null);
    useClickOutside(box, setUnroll);

    const timeList = ['08-10', '10-12', '12-14', '14-16', '16-18', '18-20'];

    return (
        <div ref={box} className="form__list form__list">
            {timeList.map(time => {
                return <div key={time} className="form__toSelect" onClick={()=>setTime(time)}>{time}</div>
            })}
        </div>
    )
}

export default CitySelector;