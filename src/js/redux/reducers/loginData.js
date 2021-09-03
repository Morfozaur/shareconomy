const userData = {name: '', pass:''}

const loginData = (state=userData, action) => {
    switch (action.type) {
        case 'SET-DATA':
            return action.payload
        default:
            return state
    }
};

export {loginData}