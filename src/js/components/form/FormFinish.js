import React from 'react';
import Decoration from "../elements/Decoration";

const FormFinish = () => {
    return (
        <div className="form__step form__step--finish">
            <div className="form__quote">Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.
            </div>
            <Decoration/>
        </div>
    );
}

export default FormFinish;