import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationTime')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
    
}

// Creating action-creator
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/rest-auth/login', {
            username: username,
            password: password
        })
        .then(res => {
            console.warn(res.data);
            const token = res.data.key;
            const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(error => {
            // console.error(err.message);
            dispatch(authFail(error))
        })
    }
}


// Creating action-creator for auth-signup
const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:8000/rest-auth/register', {
            username: username, 
            email: email, 
            password1: password1, 
            password2: password2, 
        })
        .then(res => {
            const token = res.data.key;
            const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationTime', expirationTime);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(error => {
            dispatch(authFail(error));
        })
    }
}


export const authCheckstate = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(authLogout())
        }else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'));
            if (expirationTime <= new Date()) {
                dispatch(authLogout())
            }else {
                dispatch(authSuccess(token));
                dispatch(authCheckstate((expirationTime.getTime() - new Date().getTime()) / 1000))
            }

        } 
    }
}