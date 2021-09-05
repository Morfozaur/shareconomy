import React from 'react';
import FormControls from "./form/FormControls";
import FormWarning from "./form/FormWarning";
import FormBody from "./form/FormBody";
import HomeContact from "./home/HomeContact";
import {useSelector} from "react-redux";

const Form = () => {

    const currForm = useSelector(state => state.currForm)

    return (
        <>
            <FormControls/>
            {currForm < 5 && <FormWarning/>}
            <FormBody/>
            <HomeContact/>
        </>
    );
}

export default Form;