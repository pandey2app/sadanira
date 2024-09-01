import { ADD_CONTACT_US_SUCCESS, GET_CONTACT_US_SUCCESS } from "../constants/contactUs.constants";

const initialState = {
    contactUs : sessionStorage.getItem("contactUs") ? JSON.parse(sessionStorage.getItem("contactUs")):[],
}
export const contactUsReducer = (state = initialState, action )=>{
    switch (action.type) {
        case ADD_CONTACT_US_SUCCESS:
        return {
            ...state,
            contactUs: action.payload,
        };
        case GET_CONTACT_US_SUCCESS: 
        sessionStorage.setItem("contactUs",JSON.stringify(action.payload))
        return{
            ...state,
            contactUs: [...action.payload]
        }
        default:
            return state;
    }
}  