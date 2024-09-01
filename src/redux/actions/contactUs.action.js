import { ADD_CONTACT_US_ERROR, ADD_CONTACT_US_START, ADD_CONTACT_US_SUCCESS, DELETE_CONTACT_US_ERROR, DELETE_CONTACT_US_START, DELETE_CONTACT_US_SUCCESS, GET_CONTACT_US_ERROR, GET_CONTACT_US_START, GET_CONTACT_US_SUCCESS } from "../constants/contactUs.constants"

// add contactus message
export const addContactUsStart = (message)=>({
    type : ADD_CONTACT_US_START,
    payload : {...message}
})

export const addContactUsSuccess = (message)=>({
    type : ADD_CONTACT_US_SUCCESS,
    payload : message
})

export const addContactUsError = (error)=>({
    type : ADD_CONTACT_US_ERROR,
    payload : error
})

// get Contact us
export const getContactUsStart = ()=>({
    type : GET_CONTACT_US_START,
})

export const getContactUsSuccess = (contactUs)=>({
    type : GET_CONTACT_US_SUCCESS,
    payload : contactUs
})

export const getContactUsError = (error)=>({
    type : GET_CONTACT_US_ERROR,
    payload : error
})


// Delete user
export const deleteContactUsStart = (id)=>({
    type : DELETE_CONTACT_US_START,
    payload : id
})

export const deleteContactUsSuccess = (id)=>({
    type : DELETE_CONTACT_US_SUCCESS,
    payload : id
})

export const deleteContactUsError = (error)=>({
    type : DELETE_CONTACT_US_ERROR,
    payload : error
})

