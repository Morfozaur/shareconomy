const formDataStarter = {
    donation: '',
    bags: '',
    city: '',
    recipient: '',
    organisation: '',
    address: {
        street: '',
        city: '',
        postcode: '',
        phone: ''
    },
    term: {
        date: '',
        time: '',
        notes: ''
    }
}

const formData = (state = false, action) => {
    switch (action.type) {
        case 'FORM-DONATION':
            return {...state, donation: action.payload}
        case 'FORM-BAGS':
            return {...state, bags: action.payload}
        case 'FORM-CITY':
            return {...state, city: action.payload}
        case 'FORM-RECIPIENT':
            return {...state, recipient: action.payload}
        case 'FORM-ADDRESS':
            return {...state, address: action.payload}
        case 'FORM-ORGANISATION':
            return {...state, organisation: action.payload}
        case 'FORM-TERM':
            return {...state, term: action.payload}
        default:
            return state
    }
};

export {formData}