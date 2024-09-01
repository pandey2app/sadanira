import { ADD_USER_SUCCESS, GET_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../constants/user.constant";

const initialState = {
    users : sessionStorage.getItem("users") ? JSON.parse(sessionStorage.getItem("users")):[],
    currentUser : sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")):{},
    addUserError: null,
}
export const userReducer = (state = initialState, action )=>{
    switch (action.type) {
        case ADD_USER_SUCCESS:
        return {
            ...state,
            currentUser: action.payload,
            addUserError: null,
        };
        case GET_USER_SUCCESS: 
        sessionStorage.setItem("users",JSON.stringify(action.payload))
        return{
            ...state,
            users: [...action.payload]
        }
        case LOGIN_USER_SUCCESS: 
        localStorage.setItem("currentUser",JSON.stringify(action.payload))
        return{
            ...state,
            currentUser: {...action.payload}
        }
        case LOGOUT_USER_SUCCESS: 
        localStorage.removeItem("currentUser")
        return{
            ...state,
            currentUser: {}
        }
        default:
            return state;
    }
}  