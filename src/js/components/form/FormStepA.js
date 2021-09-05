import React, {useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {fetchDonation} from "../../redux/actions/allFetchers";

const FormStepA = () => {
    const dispatch = useDispatch();
    const updateDonation = (data) => dispatch(fetchDonation(data))
    const donation = useSelector(state => state.formData.donation);

    return (
        <div className="form__step">
            <p className="form__progress">Krok 1/4</p>
            <h3 className="form__title">Zaznacz, co chcesz oddać:</h3>
            <div className='form__section'>
                <div className="form__group">
                    <div className={classNames("form__radio btn--frame", {"form__radio--checked" : donation === "clothsGood"})} onClick={()=>updateDonation("clothsGood")}/>
                    <input type="radio"
                           name="clothsGood"
                           className="form__radio--del"
                           value={donation}
                           checked={donation === "clothsGood"}/>
                    <label htmlFor="clothsGood"
                           className="form__label">ubrania, które nadają się do ponownego użycia</label>
                </div>
                <div className="form__group">
                    <div className={classNames("form__radio btn--frame", {"form__radio--checked" : donation === "clothsBad"})} onClick={()=>updateDonation("clothsBad")}/>
                    <input type="radio"
                           name="clothsBad"
                           className="form__radio--del"
                           value={donation}
                           checked={donation === "clothsBad"} />
                    <label htmlFor="clothsGood" className="form__label">ubrania, do wyrzucenia</label>
                </div>
                <div className="form__group">
                    <div className={classNames("form__radio btn--frame", {"form__radio--checked" : donation === "toys"})} onClick={()=>updateDonation("toys")}/>
                    <input type="radio"
                           name="toys"
                           className="form__radio--del"
                           value={donation}
                           checked={donation === "toys"} />
                    <label htmlFor="toys"
                           className="form__label">zabawki</label>

                </div>
                <div className="form__group">
                    <div className={classNames("form__radio btn--frame", {"form__radio--checked" : donation === "books"})} onClick={()=>updateDonation("books")}/>
                    <input type="radio"
                           name="books"
                           className="form__radio--del"
                           value={donation}
                           checked={donation === "books"} />
                    <label htmlFor="books"
                           className="form__label">książki</label>

                </div>
                <div className="form__group">
                    <div className={classNames("form__radio btn--frame", {"form__radio--checked" : donation === "others"})} onClick={()=>updateDonation("others")}/>
                    <input type="radio"
                           name="others"
                           className="form__radio--del"
                           value={donation}
                           checked={donation === "others"} />
                    <label htmlFor="others"
                           className="form__label">inne</label>
                </div>
            </div>
            <button className="btn btn--frame form__change">Dalej</button>
        </div>
    );
}

export default FormStepA;