import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
    loading: false,
    token: null,
    error: null
}

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null    
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        token: action.token,
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    })
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)

        default: return state;
    }
}

export default reducer;