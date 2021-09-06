import React, {useRef} from 'react';
import {useClickOutside} from "../../../useClickOutside";

const BagsSelector = ({setBags, setUnroll}) => {
    const box = useRef(null);
    useClickOutside(box, setUnroll);
    return (
        <div ref={box} className="form__list">
            {[...Array(4)].map((el, idx) => {
                return <div key={idx + 1} className="form__toSelect" onClick={e=>setBags(idx + 1)}>{idx + 1}</div>
            })}
        </div>
    )
}

export default BagsSelector;