import React, {useState} from 'react';
import iconUp from "../../../assets/icon-up.svg";
import iconDown from "../../../assets/icon-down.svg";
import {useDispatch, useSelector} from "react-redux";
import {fetchCity, fetchOrganisation, fetchRecipient} from "../../redux/actions/allFetchers";
import CitySelector from "./elements/CitySelector";
import classNames from "classnames";

const FormStepC = ({prevForm, nextForm}) => {
    const [unroll, setUnroll] = useState(false);

    const dispatch = useDispatch();
    const updateCity = (data) => dispatch(fetchCity(data));
    const updateRecipients = (data) => dispatch(fetchRecipient(data));
    const updateOrganisation = (data) => dispatch(fetchOrganisation(data));

    const city = useSelector(state => state.formData.city);
    const recipients = useSelector(state => state.formData.recipient);
    const organisation = useSelector(state => state.formData.organisation);

    const setCity = (city) => {
        updateCity(city);
        setUnroll(false);
    };

    const setActualRecipients = (rec) => {
        let update = recipients[rec]
        update = !update;
        const newState = {...recipients, [rec]: update};
        updateRecipients(newState)
    };

    const addRec = (e, rec) => {
        e.preventDefault();
        setActualRecipients(rec);
    };

    return (
        <div className="form__step">
            <p className="form__progress">Krok 3/4</p>
            <h3 className="form__title form__title--step">Lokalizacja:</h3>
            <div className="form__section">
                <div className="form__select form__select--wide">
                    <p className="form__placeholder" onClick={()=>setUnroll(e=>!e)}>{city}</p>
                    <img src={unroll ? iconUp : iconDown}
                         className="form_arrow"
                         alt='arrow'
                         onClick={()=>setUnroll(e=>!e)}/>
                    {unroll && <CitySelector setCity={setCity} setUnroll={setUnroll}/>}
                </div>
                <h4 className='font__header--small'>Komu chcesz pomóc?</h4>
                <div className="form__multiselect">
                     <button className={classNames("form__onebutton", {"form__onebutton--active" : recipients.dzieci})} onClick={e=>addRec(e, "dzieci")}>dzieciom</button>
                     <button className={classNames("form__onebutton", {"form__onebutton--active" : recipients.matki})} onClick={e=>addRec(e, "matki")}>samotnym matkom</button>
                     <button className={classNames("form__onebutton", {"form__onebutton--active" : recipients.bezdomni})} onClick={e=>addRec(e, "bezdomni")}>bezdomnym</button>
                     <button className={classNames("form__onebutton", {"form__onebutton--active" : recipients.niepełnosprawni})} onClick={e=>addRec(e, 'niepełnosprawni')}>niepełnosprawnym</button>
                     <button className={classNames("form__onebutton", {"form__onebutton--active" : recipients.starsi})} onClick={e=>addRec(e, "starsi")}>osobom starszym</button>
                </div>
                <h4 className='font__header--small'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
                <input className="form__input"
                       type="text"
                       autoComplete='none'
                       value={organisation}
                       onChange={e=>updateOrganisation(e.target.value)}
                />
            </div>
            <div className="form__change">
                <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>
                <button className='btn btn--frame form__controls' disabled={(city === "— wybierz —") || (Object.values(recipients).every(item => !item))} onClick={e => nextForm(e)}>Dalej</button>
            </div>
        </div>
    );
}

export default FormStepC;