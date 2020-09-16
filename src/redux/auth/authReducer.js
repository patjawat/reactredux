import authType from './authType'

const initialState = {
    isLogin: false,
    userId: '',
    token: '',
    refreshToken: '',
    expiresOn: '',
    data: '',
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case authType.USER_LOGIN:
            return {
                ...state,
                ...action.payload, 
                isLogin: state.isLogin = true
                
            }
        case authType.USER_LOGOUT:
            return {
                ...state,
                isLogin: state.isLogin = false
            }
        default:
            return state;
    }
}
export default authReducer;