const foundations = (state = [], action) => {
    switch (action.type) {
        case 'FOUNDATIONS':
            return action.payload
        default:
            return state
    }
};

export {foundations}