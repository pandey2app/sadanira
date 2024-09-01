import { put, takeLatest } from "redux-saga/effects";
import { ADD_CONTACT_US_START, DELETE_CONTACT_US_START, GET_CONTACT_US_START } from "../constants/contactUs.constants";
import { addContactUsToAPI, deleteContactUsFromAPI, getContactUsFromAPI } from "../services/contactUs.service";
import { addContactUsError, deleteContactUsError, getContactUsError, getContactUsStart, getContactUsSuccess } from "../actions/contactUs.action";

function* getContactUs(){
    try {
        let contactUs = yield getContactUsFromAPI()
        yield put(getContactUsSuccess(contactUs))
    } catch (error) {
        yield put(getContactUsError(error.message))
    }
}

function* addContactUs({payload}){
    try {
        yield addContactUsToAPI(payload)
        
        yield put(getContactUsStart())
    } catch (error) {
        yield put(addContactUsError(error))
    }
}

function* deleteContactUs({payload}){
    try {
        yield deleteContactUsFromAPI(payload)
        yield put(getContactUsStart())
    } catch (error) {
        yield put(deleteContactUsError(error.message))
    }
}

export default function* contactUs(){
    yield takeLatest(ADD_CONTACT_US_START, addContactUs)
    yield takeLatest(GET_CONTACT_US_START, getContactUs)
    yield takeLatest(DELETE_CONTACT_US_START, deleteContactUs)
}