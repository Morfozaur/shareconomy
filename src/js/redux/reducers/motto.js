const motto = (state = {}, action) => {
    switch (action.type) {
        case 'MOTTO':
            return action.payload
        default:
            return state
    }
};

export {motto}