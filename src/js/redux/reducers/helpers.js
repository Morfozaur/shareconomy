const starter = {
    foundations: [],
    organisations: [],
    fundraisers: []
}

const helpers = (state = starter, action) => {
    switch (action.type) {
        case 'FOUNDATIONS':
            return {...state, foundations: action.payload}
        case 'ORGANISATIONS':
            return {...state, organisations: action.payload}
        case 'FUNDRAISERS':
            return {...state, fundraisers: action.payload}
        default:
            return state
    }
};

export {helpers}