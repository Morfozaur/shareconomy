import React from 'react';
import {useSelector} from "react-redux";

const FormInfo = () => {

    const warnData = [
        'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.',
        'Wszystkie rzeczy do oddania zapakuj w 60l worki.  Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.',
        'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.',
        'Podaj adres oraz termin odbioru rzeczy.',
    ]
    const currForm = useSelector(state => state.currForm)

    return (
        <div className='warning'>
            <h3 className="warning__title">Ważne!</h3>
            {currForm< 5 && <p className="warning__info">{warnData[currForm-1]}</p>}
        </div>
    );
}

export default FormInfo;