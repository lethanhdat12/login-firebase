const initialState = {
    loginState: false,
    email: null,
    displayName: null,
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': {
            return {
                loginState: true,
                email: action.payload.email,
                displayName: action.payload.displayName
            }
        }
        case 'logout': {
            return {
                loginState: false,
                email: null,
                displayName: null
            }
        }
        default: return state;
    }
}

export default loginReducer;