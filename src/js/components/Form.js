import React from 'react';
import FormHeader from "./form/FormHeader";
import FormInfo from "./form/FormInfo";
import FormBody from "./form/FormBody";
import HomeContact from "./home/HomeContact";

const Form = () => {
    return (
        <>
            <FormHeader/>
            <FormInfo/>
            <FormBody/>
            <HomeContact/>
        </>
    );
}

export default Form;