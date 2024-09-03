import { ADD_USER_ERROR, ADD_USER_SUCCESS, GET_USER_BY_ID_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../constants/user.constant";

const initialState = {
    currentUser: {},
    user: {},
    isLoggedIn: localStorage.getItem("isLoggedIn") ? true : false,
    getUserErrorMessage: null,
    loginError: null,
    addUserError: null,
    loginResponse: null,
    logoutResponse: null,
}

// User Reducer
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case ADD_USER_ERROR:
            return {
                ...state,
                addUserError: action.payload
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                currentUser: { ...action.payload }
            }
        case GET_USER_ERROR:
            return {
                ...state,
                getUserErrorMessage: action.payload 
            }
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                user: { ...action.payload }
            }
        case LOGIN_USER_SUCCESS:
            localStorage.setItem("isLoggedIn", true)
            return {
                ...state,
                loginError: null,
                loginResponse: action.payload ,
                isLoggedIn: true,
                currentUser: { ...action.payload }
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                loginError: action.payload
            }
        case LOGOUT_USER_SUCCESS:
            localStorage.removeItem("isLoggedIn")
            return {
                ...state,
                isLoggedIn: false,
                loginError: null,
                currentUser: {},
                addUserError: null,
                loginResponse: null,
                logoutResponse: action.payload,
            }
        default:
            return state;
    }
}  