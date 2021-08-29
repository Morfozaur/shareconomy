const fundraisers = (state = [], action) => {
    switch (action.type) {
        case 'FUNDRAISERS':
            return action.payload
        default:
            return state
    }
};

export {fundraisers}