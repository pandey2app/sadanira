import { GET_USERS_ERROR, GET_USERS_START, GET_USERS_SUCCESS } from "../constants/users.constant"

// get user
export const getUsersStart = ()=>({
    type : GET_USERS_START,
})

export const getUsersSuccess = (users)=>({
    type : GET_USERS_SUCCESS,
    payload : users
})

export const getUsersError = (error)=>({
    type : GET_USERS_ERROR,
    payload : error
})
