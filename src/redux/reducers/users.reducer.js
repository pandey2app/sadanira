import { GET_USERS_ERROR, GET_USERS_SUCCESS } from "../constants/users.constant"

const initialState = {
    users: [],
    usersError: null,
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: [...action.payload]
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                usersError: action.payload
            }
        default:
            return state;
    }
}  