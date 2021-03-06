import React from 'react';
import {useSelector} from "react-redux";
import icon1 from "../../../assets/icon-1.svg"
import icon4 from "../../../assets/icon-4.svg"


const FormSummary = ({prevForm, nextForm}) => {
    const {street, clientCity, postcode, phone, date, time, notes} = useSelector(state => state.formData);
    const {bags, donation, city} = useSelector(state => state.formData);
    const {dzieci, matki, bezdomni, niepełnosprawni, starsi} = useSelector(state => state.formData.recipient);

    const donationItem = {
        clothsGood:'ubrania, które nadają się do ponownego użycia',
        clothsBad:'ubrania do wyrzucenia',
        toys:'zabawki',
        books:'książki',
        others:'inne',
    }

    const recList = () => {
        let arr = [];
        if (dzieci) {arr.push("dzieciom")}
        if (matki) {arr.push("samotnym matkom")}
        if (bezdomni) {arr.push("bezdomnym")}
        if (niepełnosprawni) {arr.push("niepełnosprawnym")}
        if (starsi) {arr.push("osobom starszym")}
        return arr.join(', ')
    }

    return (
        <div className="form__step">
            <h3 className="form__title form__title--step form__title--finish">Podsumowanie Twojej darowizny</h3>
            <div className="form__section">
                <div className="form__donation">
                    <h4 className='font__header--small'>Oddajesz:</h4>
                    <div className="form__summary">
                        <img src={icon1} alt="shirt" className="form__icon"/>
                        <p className="form__register">{bags} {bags === 1 &&<>worek</>}{((bags > 1) && (bags < 5)) &&<>worki</>}{bags === 5 &&<>worków</>} / {donationItem[donation]} / {recList()} </p>
                    </div>
                    <div className="form__summary">
                        <img src={icon4} alt="recycle" className="form__icon"/>
                        <p className="form__register">dla lokalizacji: {city}</p>
                    </div>
                </div>
                <div className="form__summary form__summary--double">
                    <div className="form__column">
                        <h4 className='form__subtitle'>Adres odbioru:</h4>
                        <div className="form__group form__group--row">
                            <div className="form__row">Ulica</div>
                            <div className="form__row form__row--data">{street}</div>
                        </div>
                        <div className="form__group form__group--row">
                            <div className="form__row">Miasto</div>
                            <div className="form__row form__row--data">{clientCity}</div>
                        </div>
                        <div className="form__group form__group--row">
                            <div className="form__row">Kod pocztowy</div>
                            <div className="form__row form__row--data">{postcode}</div>
                        </div>
                        <div className="form__group form__group--row">
                            <div className="form__row">Numer telefonu</div>
                            <div className="form__row form__row--data">{phone}</div>
                        </div>
                    </div>
                    <div className="form__column">
                        <h4 className='form__subtitle'>Termin odbioru:</h4>
                        <div className="form__group form__group--row">
                            <div className="form__row">Data</div>
                            <div className="form__row form__row--data">{date}</div>
                        </div>
                        <div className="form__group form__group--row">
                            <div className="form__row ">Godzina</div>
                            <div className="form__row form__row--data">{time}</div>
                        </div>
                        <div className="form__group form__group--row">
                            <div className="form__row">Uwagi dla kuriera</div>
                            <div className="form__row form__row--data">{notes}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form__change">
                <button className='btn btn--frame form__controls' onClick={e => prevForm(e)}>Wstecz</button>
                <button className='btn btn--frame form__controls' onClick={e => nextForm(e)}>Potwierdź</button>
            </div>
        </div>
    );
}

export default FormSummary;