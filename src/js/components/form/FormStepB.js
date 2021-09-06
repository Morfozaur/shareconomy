import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBags} from "../../redux/actions/allFetchers";
import iconUp from "../../../assets/icon-up.svg"
import iconDown from "../../../assets/icon-down.svg"
import BagsSelector from "./elements/BagsSelector";

const FormStepB = ({prevForm, nextForm}) => {
    const [unroll, setUnroll] = useState(false);

    const dispatch = useDispatch();
    const updateBags = (data) => dispatch(fetchBags(data));

    const bags = useSelector(state => state.formData.bags);

    const setBags = (num) => {
        updateBags(num);
        setUnroll(false)
    };

    return (
        <div className="form__step">
            <p className="form__progress">Krok 2/4</p>
            <h3 className="form__title form__title--step">Podaj liczbę 60l worków, w które spakowano rzeczy:</h3>
            <div className="form__section">
                <div className="form__group form__group--select">
                    <div className="form__label">Liczba 60l worków:</div>
                    <div className="form__select">
                        <p className="form__placeholder" onClick={()=>setUnroll(e=>!e)}>{bags}</p>
                        <img src={unroll ? iconUp : iconDown}
                             className="form_arrow"
                             alt='arrow'
                             onClick={()=>setUnroll(e=>!e)}/>
                        {unroll &&
                        <BagsSelector setBags={setBags} setUnroll={setUnroll}/>}
                    </div>
                </div>
            </div>
            <div className="form__change">
                <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>
                <button className='btn btn--frame form__controls' disabled={bags === "— wybierz —"} onClick={e => nextForm(e)}>Dalej</button>
            </div>
        </div>
    );
}

export default FormStepB;