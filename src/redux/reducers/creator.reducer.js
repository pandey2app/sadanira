import { GET_CREATOR_SUCCESS, LOGIN_CREATOR_SUCCESS, LOGOUT_CREATOR_SUCCESS } from "../constants/creator.constant"

const initialState = {
    creators : localStorage.getItem("creators") ? JSON.parse(localStorage.getItem("creators")):[],
    currentUser : localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")):{},
}
export const creatorReducer = (state = initialState, action )=>{
    switch (action.type) {
        case GET_CREATOR_SUCCESS: 
        localStorage.setItem("creators",JSON.stringify(action.payload??[]))
        return{
            ...state,
            creators: [...action.payload]
        }
        case LOGIN_CREATOR_SUCCESS: 
        localStorage.setItem("currentUser",JSON.stringify(action.payload))
        return{
            ...state,
            currentUser: {...action.payload}
        }
        case LOGOUT_CREATOR_SUCCESS: 
        localStorage.removeItem("currentUser")
        return{
            ...state,
            currentUser: {}
        }
        default:
            return state;
    }
}  