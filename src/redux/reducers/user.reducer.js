import { ADD_USER_ERROR, ADD_USER_SUCCESS, GET_USER_BY_ID_SUCCESS, GET_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../constants/user.constant";

const initialState = {
    currentUser: {},
    user: {},
    isLoggedIn: sessionStorage.getItem("isLoggedIn") ? true : false,
    loginError: null,
    addUserError: null,
    loginResponse: null,
}
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
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                user: { ...action.payload }
            }
        case LOGIN_USER_SUCCESS:
            sessionStorage.setItem("isLoggedIn", true)
            return {
                ...state,
                loginError: null,
                loginResponse: { ...action.payload },
                isLoggedIn: true,
                currentUser: { ...action.payload }
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                loginError: action.payload
            }
        case LOGOUT_USER_SUCCESS:
            sessionStorage.removeItem("isLoggedIn")
            return {
                ...state,
                isLoggedIn: false,
            }
        default:
            return state;
    }
}  