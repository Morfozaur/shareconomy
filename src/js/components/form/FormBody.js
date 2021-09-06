import React from 'react';
import {useSelector} from "react-redux";
import FormStepA from "./FormStepA";
import FormStepB from "./FormStepB";
import FormStepC from "./FormStepC";
import FormStepD from "./FormStepD";
import FormSummary from "./FormSummary";
import FormFinish from "./FormFinish";
import {fetchForm} from "../../redux/actions/allFetchers";

const FormBody = () => {

    const currForm = useSelector(state => state.currForm);

    // const prevForm = (e) => {
    //     e.preventDefault();
    //     dispatch(fetchForm(currForm-1))
    // };
    //
    // const nextForm = (e) => {
    //     e.preventDefault();
    //     dispatch(fetchForm(currForm+1));
    // };

    return (
        <div className='form'>
                {currForm === 1 && <FormStepA/>}
                {currForm === 2 && <FormStepB/>}
                {currForm === 3 && <FormStepC/>}
                {currForm === 4 && <FormStepD/>}
                {currForm === 5 && <FormSummary/>}
                {currForm === 6 && <FormFinish/>}

            {/*<div className="form__change">*/}
            {/*    <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>*/}
            {/*    <button className='btn btn--frame form__controls' onClick={e => nextForm(e)}>Dalej</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default FormBody;