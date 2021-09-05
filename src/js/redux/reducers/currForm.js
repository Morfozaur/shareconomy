const currForm = (state = 1, action) => {
    switch (action.type) {
        case 'FORM':
            return action.payload
        default:
            return state
    }
};

export {currForm}