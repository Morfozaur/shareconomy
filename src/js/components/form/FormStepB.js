import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBags, fetchForm} from "../../redux/actions/allFetchers";
import iconUp from "../../../assets/icon-up.svg"
import iconDown from "../../../assets/icon-down.svg"

const FormStepB = () => {
    const bags = useSelector(state => state.formData.bags);

    const [select, setSelect] = useState(bags)
    const [unroll, setUnroll] = useState(false)
    const dispatch = useDispatch();
    const updateBags = (data) => dispatch(fetchBags(data))
    const currForm = useSelector(state => state.currForm);


    const setBags = (num) => {
        setSelect(num);
        updateBags(num);
        setUnroll(false)
    };


    const prevForm = (e) => {
        e.preventDefault();
        dispatch(fetchForm(currForm-1))
    };

    const nextForm = (e) => {
        e.preventDefault();
        dispatch(fetchForm(currForm+1));
    };

    return (
        <div className="form__step">
            <h3 className="form__title form__title--step">Podaj liczbę 60l worków, w które spakowano rzeczy:</h3>
            <div className="form__section">
                <div className="form__group form__group--select">
                    <div className="form__label">Liczba 60l worków:</div>
                    <div className="form__select">
                        <p className="form__placeholder" onClick={()=>setUnroll(e=>!e)}>{select === "" ? "— wybierz —" : select}</p>
                        <img src={unroll ? iconUp : iconDown}
                             className="form_arrow"
                             alt='arrow'
                             onClick={()=>setUnroll(e=>!e)}/>
                        {unroll && <div className="form__list">
                            {[...Array(4)].map((el, idx) => {
                                return <div key={idx + 1} className="form__toSelect" onClick={e=>setBags(idx + 1)}>{idx + 1}</div>
                            })}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="form__change">
                <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>
                <button className='btn btn--frame form__controls' disabled={bags === ""} onClick={e => nextForm(e)}>Dalej</button>
            </div>
        </div>
    );
}

export default FormStepB;