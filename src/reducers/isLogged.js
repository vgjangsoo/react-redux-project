const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state
        default:
    }
};

export default loggedReducer;