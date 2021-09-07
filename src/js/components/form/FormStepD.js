import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchClientCity,
    fetchDate, fetchNotes,
    fetchPhone,
    fetchPostcode,
    fetchStreet,
    fetchTime
} from "../../redux/actions/allFetchers";

const FormStepD = ({prevForm, nextForm}) => {

    const dispatch = useDispatch();
    const {street, clientCity, postcode, phone, date, time, notes} = useSelector(state => state);

    const updateStreet = (data) => dispatch(fetchStreet(data))
    const updateCity = (data) => dispatch(fetchClientCity(data))
    const updatePostcode = (data) => dispatch(fetchPostcode(data))
    const updatePhone = (data) => dispatch(fetchPhone(data))
    const updateDate = (data) => dispatch(fetchDate(data))
    const updateTime = (data) => dispatch(fetchTime(data))
    const updateNotes = (data) => dispatch(fetchNotes(data))

    const validate = () => {
    
    };
    
    return (
        <div className="form__step form__step--address">
            <p className="form__progress">Krok 4/4</p>
            <h3 className="form__title form__title--step">Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
            <div className="form__section form__section--address">
                <div className="form__delivery">
                    <h4 className='font__header--small'>Adres odbioru:</h4>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Ulica</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={street}
                               onChange={e=>updateStreet(e.target.value)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Miasto</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={clientCity}
                               onChange={e=>updateCity(e.target.value)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Kod pocztowy</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={postcode}
                               onChange={e=>updatePostcode(e.target.value)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Numer telefonu</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={phone}
                               onChange={e=>updatePhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form__delivery">
                    <h4 className='font__header--small'>Termin odbioru:</h4>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Data</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={date}
                               onChange={e=>updateDate(e.target.value)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Godzina</label>
                        <input className="form__input form__input--address"
                               type="text"
                               autoComplete='none'
                               value={time}
                               onChange={e=>updateTime(e.target.value)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Uwagi dla kuriera</label>
                        <textarea className="form__input form__input--address form__textarea"
                               autoComplete='none'
                               value={notes}
                               onChange={e=>updateNotes(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="form__change form__change--center">
                <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>
                <button className='btn btn--frame form__controls' disabled={true} onClick={e => validate(e)}>Dalej</button>
            </div>
        </div>
    );
}

export default FormStepD;