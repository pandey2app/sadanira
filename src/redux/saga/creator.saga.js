import { put, takeLatest } from "redux-saga/effects";
import { ADD_CREATOR_START, DELETE_CREATOR_START, GET_CREATOR_START, LOGIN_CREATOR_START, LOGOUT_CREATOR_START, UPDATE_CREATOR_START } from "../constants/creator.constant";
import { addCreatorToAPI, deleteCreatorFromAPI, getCreatorFromAPI, updateCreatorToAPI } from "../services/creator.service";
import { addCreatorError, deleteCreatorError, getCreatorError, getCreatorStart, getCreatorSuccess, loginCreatorError, loginCreatorSuccess, logoutCreatorError, logoutCreatorSuccess, updateCreatorError } from "../actions/creator.action";

function* getCreator(){
    try {
        let creators = yield getCreatorFromAPI()
        yield put(getCreatorSuccess(creators))
    } catch (error) {
        yield put(getCreatorError(error.message))
    }
}

function* addCreator({payload}){
    try {
        yield addCreatorToAPI(payload)
        yield put(getCreatorStart())
    } catch (error) {
        yield put(addCreatorError(error.message))
    }
}

function* updateCreator({payload}){
    try {
        yield updateCreatorToAPI(payload.creator, payload.id)
        yield put(getCreatorStart())
    } catch (error) {
        yield put(updateCreatorError(error.message))
    }
}

function* deleteCreator({payload}){
    try {
        yield deleteCreatorFromAPI(payload)
        yield put(getCreatorStart())
    } catch (error) {
        yield put(deleteCreatorError(error.message))
    }
}

function* loginCreator({payload}){
    try {
        yield put(loginCreatorSuccess(payload))
    } catch (error) {
        yield put(loginCreatorError(error.message))
    }
}

function* logoutCreator(){
    try {
        yield put(logoutCreatorSuccess())
    } catch (error) {
        yield put(logoutCreatorError(error.message))
    }
}

export default function* creator(){
    yield takeLatest(ADD_CREATOR_START, addCreator)
    yield takeLatest(GET_CREATOR_START, getCreator)
    yield takeLatest(UPDATE_CREATOR_START, updateCreator)
    yield takeLatest(DELETE_CREATOR_START, deleteCreator)
    yield takeLatest(LOGIN_CREATOR_START, loginCreator)
    yield takeLatest(LOGOUT_CREATOR_START, logoutCreator)
}