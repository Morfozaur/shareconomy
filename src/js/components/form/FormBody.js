import React from 'react';
import {useSelector} from "react-redux";
import FormStepA from "./FormStepA";
import FormStepB from "./FormStepB";
import FormStepC from "./FormStepC";
import FormStepD from "./FormStepD";
import FormSummary from "./FormSummary";
import FormFinish from "./FormFinish";

const FormBody = () => {
    const currForm = useSelector(state => state.currForm)


    return (
        <div className='form'>
                {currForm === 1 && <FormStepA/>}
                {currForm === 2 && <FormStepB/>}
                {currForm === 3 && <FormStepC/>}
                {currForm === 4 && <FormStepD/>}
                {currForm === 5 && <FormSummary/>}
                {currForm === 6 && <FormFinish/>}
        </div>
    );
}

export default FormBody;