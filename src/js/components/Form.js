import React from 'react';
import FormControls from "./form/FormControls";
import FormInfo from "./form/FormWarning";
import FormBody from "./form/FormBody";
import HomeContact from "./home/HomeContact";

const Form = () => {
    return (
        <>
            <FormControls/>
            <FormInfo/>
            <FormBody/>
            <HomeContact/>
        </>
    );
}

export default Form;