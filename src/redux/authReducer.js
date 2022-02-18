let InitialState = {
    isAuth: false,
    user: {}
}


const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.bool
            }
        }
        case 'SET_USER': {
            return {
                ...state,
                user: action.user
            }
        }
        default: return {
            ...state
        }
    }
}

export default authReducer;