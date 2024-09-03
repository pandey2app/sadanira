import { put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START, DELETE_USER_START, GET_USER_BY_ID_START, GET_USER_START, LOGIN_USER_START, LOGOUT_USER_START, UPDATE_USER_START } from "../constants/user.constant";
import { addUserError, deleteUserError, getUserByIdError, getUserByIdSuccess, getUserError, getUserStart, getUserSuccess, loginUserError, loginUserSuccess, logoutUserError, logoutUserSuccess, updateUserError } from "../actions/user.action";
import { addUserToAPI, deleteUserFromAPI, getUserByIdFromAPI, getUserFromAPI, loginUserToAPI, updateUserToAPI } from "../services/user.service";

function* getUser(){    
    try {
        let user = yield getUserFromAPI()
        yield put(getUserSuccess(user))
    } catch (error) {
        yield put(getUserError(error.message))
    }
}

function* getUserById({payload}){    
    try {
        let user = yield getUserByIdFromAPI(payload)
        yield put(getUserByIdSuccess(user))
    } catch (error) {
        yield put(getUserByIdError(error.message))
    }
}

function* addUser({payload}){
    try {
        yield addUserToAPI(payload)
        
        yield put(getUserStart())
    } catch (error) {
        yield put(addUserError(error))
    }
}

function* updateUser({payload}){
    try {
        yield updateUserToAPI(payload.user, payload.id)
        yield put(getUserStart())
    } catch (error) {
        yield put(updateUserError(error.message))
    }
}

function* deleteUser({payload}){
    try {
        yield deleteUserFromAPI(payload)
        yield put(getUserStart())
    } catch (error) {
        yield put(deleteUserError(error.message))
    }
}

function* loginUser({payload}){
    try {
        const response = yield loginUserToAPI(payload)
        console.log(response);
        
        yield put(loginUserSuccess(response))
    } catch (error) {       
        yield put(loginUserError(error))
    }
}

function* logoutUser(){
    try {
        yield put(logoutUserSuccess())
    } catch (error) {
        yield put(logoutUserError(error.message))
    }
}

export default function* user(){
    yield takeLatest(ADD_USER_START, addUser)
    yield takeLatest(GET_USER_START, getUser)
    yield takeLatest(GET_USER_BY_ID_START, getUserById)
    yield takeLatest(UPDATE_USER_START, updateUser)
    yield takeLatest(DELETE_USER_START, deleteUser)
    yield takeLatest(LOGIN_USER_START, loginUser)
    yield takeLatest(LOGOUT_USER_START, logoutUser)
}