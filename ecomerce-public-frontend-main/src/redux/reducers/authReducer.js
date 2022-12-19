import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../constants/authConstant';

const initState = {
    loading: false,
    user: {},
    isAuthenticated: false,
    error: ''
}

export const authLoginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                loading: false,
                isAuthenticated: false
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                isAuthenticated: true,
                user: action.payload,
                token: action.token
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}
export const authRegisterReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: false,
                isAuthenticated: false
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                isAuthenticated: true,
                user: action.payload
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}