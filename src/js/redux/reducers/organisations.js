const organisations = (state = [], action) => {
    switch (action.type) {
        case 'ORGANISATIONS':
            return action.payload
        default:
            return state
    }
};

export {organisations}