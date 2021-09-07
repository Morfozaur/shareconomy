const formDataStarter = {
    donation: '',
    bags: '— wybierz —',
    city: '— wybierz —',
    recipient: {
        dzieci: false,
        matki: false,
        bezdomni: false,
        niepełnosprawni: false,
        starsi: false
    },
    organisation: '',
    street: '',
    clientCity: '',
    postcode: '',
    phone: '',
    date: '',
    time: '— wybierz —',
    notes: ''
}

const formData = (state = formDataStarter, action) => {
    switch (action.type) {
        case 'FORM-DONATION':
            return {...state, donation: action.payload}
        case 'FORM-BAGS':
            return {...state, bags: action.payload}
        case 'FORM-CITY':
            return {...state, city: action.payload}
        case 'FORM-RECIPIENT':
            return {...state, recipient: action.payload}
        case 'FORM-ORGANISATION':
            return {...state, organisation: action.payload}
        case 'FORM-STREET':
            return {...state, street: action.payload}
        case 'FORM-CLIENT-CITY':
            return {...state, clientCity: action.payload}
        case 'FORM-POSTCODE':
            return {...state, postcode: action.payload}
        case 'FORM-PHONE':
            return {...state, phone: action.payload}
        case 'FORM-DATE':
            return {...state, date: action.payload}
        case 'FORM-TIME':
            return {...state, time: action.payload}
        case 'FORM-NOTES':
            return {...state, notes: action.payload}
        default:
            return state
    }
};

export {formData}