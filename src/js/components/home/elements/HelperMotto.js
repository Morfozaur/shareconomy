import React from 'react';
import {useSelector} from "react-redux";

const HelperMotto = ({active}) => {
    const motto = useSelector(state => state.motto)
    return (
        <div>{motto[active]}</div>
    );
}

export default HelperMotto;