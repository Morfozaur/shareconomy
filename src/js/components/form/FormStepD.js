import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    fetchClientCity,
    fetchDate, fetchNotes,
    fetchPhone,
    fetchPostcode,
    fetchStreet,
    fetchTime
} from "../../redux/actions/allFetchers";
import iconUp from "../../../assets/icon-up.svg";
import iconDown from "../../../assets/icon-down.svg";
import TimeSelector from "./elements/TimeSelector";
import classNames from "classnames";

const FormStepD = ({prevForm, nextForm}) => {

    const dispatch = useDispatch();
    const {street, clientCity, postcode, phone, date, time, notes} = useSelector(state => state.formData);

    const updateStreet = (data) => dispatch(fetchStreet(data));
    const updateCity = (data) => dispatch(fetchClientCity(data));
    const updatePostcode = (data) => dispatch(fetchPostcode(data));
    const updatePhone = (data) => dispatch(fetchPhone(data));
    const updateDate = (data) => dispatch(fetchDate(data));
    const updateTime = (data) => dispatch(fetchTime(data));
    const updateNotes = (data) => dispatch(fetchNotes(data));

    const [unroll, setUnroll] = useState(false);

    const [streetCheck, setStreetCheck] = useState(true);
    const [cityCheck, setCityCheck] = useState(true);
    const [postcodeCheck, setPostcodeCheck] = useState(true);
    const [phoneCheck, setPhoneCheck] = useState(true);
    const [dateCheck, setDateCheck] = useState(true);


    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2)
    let day = deliveryDate.getDate();
    if (day <10) {day =`0${day}`}
    let month = deliveryDate.getMonth() + 1;
    if (month <10) {month =`0${month}`}
    const year = deliveryDate.getFullYear();
    const minDate = `${year}-${month}-${day}`
    const maxDate = `${year+1}-${month}-${day}`

    const setTime = (time) => {
        updateTime(time);
        setUnroll(false);
    };

    const validate = (e) => {
        e.preventDefault();
        let check = true;
        if (street.length < 2) {
            check = false;
            setStreetCheck(false)
        }
        if (clientCity.length < 2) {
            check = false;
            setCityCheck(false);
        }

        if (!(postcode.length === 6) || !(postcode[2] === "-")) {
            check = false;
            setPostcodeCheck(false);
        } else {
            const checkPost = postcode.replace('-', '')
            if (!(/^\d+$/.test(checkPost))) {
                check = false;
                setPostcodeCheck(false);
            }
        }
        if (!(/^\d+$/.test(phone)) || !(phone.length ===9)) {
            check = false;
            setPhoneCheck(false);
        }
        const userYear = date.substr(0,4);
        const userMonth = date.substr(5,2);
        const userDay = date.substr(8,2);

        if (userYear == year) {
            if (userMonth == month) {
                if (userDay < day) {
                    check = false;
                    setDateCheck(false);
                }
            } else if (userMonth < month) {
                check = false;
                setDateCheck(false);
            }
        } else if (userYear < year) {
            check = false;
            setDateCheck(false);
        }

        if (check) {
            nextForm(e);
        }
    };


    const setStreet = (e) => {
        setStreetCheck(true)
        updateStreet(e.target.value)
    };

    const setCity = (e) => {
        setCityCheck(true)
        updateCity(e.target.value)
    };

    const setPostcode = (e) => {
        setPostcodeCheck(true)
        updatePostcode(e.target.value)
    };

    const setPhone = (e) => {
        setPhoneCheck(true)
        updatePhone(e.target.value)
    };

    const setDate = (e) => {
        setDateCheck(true)
        updateDate(e.target.value)
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
                        <input className={classNames("form__input form__input--address", {'form__input--error': !streetCheck})}
                               type="text"
                               autoComplete='none'
                               value={street}
                               onChange={e=>setStreet(e)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Miasto</label>
                        <input className={classNames("form__input form__input--address", {'form__input--error': !cityCheck})}
                               type="text"
                               autoComplete='none'
                               value={clientCity}
                               onChange={e=>setCity(e)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Kod pocztowy</label>
                        <input className={classNames("form__input form__input--address", {'form__input--error': !postcodeCheck})}
                               type="text"
                               autoComplete='none'
                               value={postcode}
                               onChange={e=>setPostcode(e)}
                        />
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Numer telefonu</label>
                        <input className={classNames("form__input form__input--address", {'form__input--error': !phoneCheck})}
                               type="text"
                               autoComplete='none'
                               value={phone}
                               onChange={e=>setPhone(e)}
                        />
                    </div>
                </div>
                <div className="form__delivery">
                    <h4 className='font__header--small'>Termin odbioru:</h4>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Data</label>
                        <input className={classNames("form__input form__input--address", {'form__input--error': !dateCheck})}
                               type="date" name="date"
                               value={date}
                               min={minDate}
                               max={maxDate}
                               onChange={e=>setDate(e)}/>
                    </div>
                    <div className="form__group form__group--address">
                        <label htmlFor="" className="form__label">Godzina</label>
                        <div className="form__select form__input form__input--address">
                            <p className="form__placeholder" onClick={()=>setUnroll(e=>!e)}>{time}</p>
                            <img src={unroll ? iconUp : iconDown}
                                 className="form_arrow"
                                 alt='arrow'
                                 onClick={()=>setUnroll(e=>!e)}/>
                            {unroll &&
                            <TimeSelector setTime={setTime} setUnroll={setUnroll}/>}
                        </div>

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
                <button className='btn btn--frame form__controls'
                        disabled={!street || !clientCity || !postcode || !phone || !date || time === "— wybierz —"}
                        onClick={e => validate(e)}>Dalej</button>
            </div>
        </div>
    );
}

export default FormStepD;