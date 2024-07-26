import { ADD_CREATOR_ERROR, ADD_CREATOR_START, ADD_CREATOR_SUCCESS, DELETE_CREATOR_ERROR, DELETE_CREATOR_START, DELETE_CREATOR_SUCCESS, GET_CREATOR_ERROR, GET_CREATOR_START, GET_CREATOR_SUCCESS, LOGIN_CREATOR_ERROR, LOGIN_CREATOR_START, LOGIN_CREATOR_SUCCESS, LOGOUT_CREATOR_ERROR, LOGOUT_CREATOR_START, LOGOUT_CREATOR_SUCCESS, UPDATE_CREATOR_ERROR, UPDATE_CREATOR_START, UPDATE_CREATOR_SUCCESS } from "../constants/creator.constant"

// add creator
export const addCreatorStart = (creator)=>({
    type : ADD_CREATOR_START,
    payload : creator
})

export const addCreatorSuccess = (creator)=>({
    type : ADD_CREATOR_SUCCESS,
    payload : creator
})

export const addCreatorError = (error)=>({
    type : ADD_CREATOR_ERROR,
    payload : error
})

// get creator
export const getCreatorStart = ()=>({
    type : GET_CREATOR_START,
})

export const getCreatorSuccess = (creator)=>({
    type : GET_CREATOR_SUCCESS,
    payload : creator
})

export const getCreatorError = (error)=>({
    type : GET_CREATOR_ERROR,
    payload : error
})

// update creator
export const updateCreatorStart = (creator, id)=>({
    type : UPDATE_CREATOR_START,
    payload : {
        creator,
        id
    }
})

export const updateCreatorSuccess = (creator, id)=>({
    type : UPDATE_CREATOR_SUCCESS,
    payload : {
        creator,
        id
    }
})

export const updateCreatorError = (error)=>({
    type : UPDATE_CREATOR_ERROR,
    payload : error
})

// Delete creator
export const deleteCreatorStart = (id)=>({
    type : DELETE_CREATOR_START,
    payload : id
})

export const deleteCreatorSuccess = (id)=>({
    type : DELETE_CREATOR_SUCCESS,
    payload : id
})

export const deleteCreatorError = (error)=>({
    type : DELETE_CREATOR_ERROR,
    payload : error
})

// Login creator
export const loginCreatorStart = (creator)=>({
    type : LOGIN_CREATOR_START,
    payload : creator
})

export const loginCreatorSuccess = (creator)=>({
    type : LOGIN_CREATOR_SUCCESS,
    payload : creator
})

export const loginCreatorError = (error)=>({
    type : LOGIN_CREATOR_ERROR,
    payload : error
})

// Logout creator
export const logoutCreatorStart = ()=>({
    type : LOGOUT_CREATOR_START,
})

export const logoutCreatorSuccess = ()=>({
    type : LOGOUT_CREATOR_SUCCESS,
})

export const logoutCreatorError = (error)=>({
    type : LOGOUT_CREATOR_ERROR,
    payload : error
})
