const currList = (state = false, action) => {
    switch (action.type) {
        case 'LIST':
            return action.payload
        default:
            return state
    }
};

export {currList}