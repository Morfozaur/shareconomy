const isLogged = (state = false, action) => {
    switch (action.type) {
        case 'LOG-ACTION':
            return action.payload
        default:
            return state
    }
};

export {isLogged}