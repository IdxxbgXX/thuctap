import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../constants/authConstant';
import axios from '../../axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let data = {};
        await axios.post('/api/v1/login', { email, password }, config).then((response) => data = response);
        console.log(data)
        if (data) {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user, token: data.token });
        }
    } catch (e) {
        console.log(e);
    }
}
export const register = (userData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_USER_REQUEST });

        let data = {}

        await axios.post('/api/v1/register', userData)
            .then(res => data = res)
        if (data.errCode === 1) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: data.message
            })
        } else {
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: data
            })
        }

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        console.log('su')
        await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}