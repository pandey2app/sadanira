import { put, takeLatest } from "redux-saga/effects";
import { GET_USERS_START } from "../constants/users.constant";
import { getUsersFromAPI } from "../services/users.service";
import { getUsersError, getUsersSuccess } from "../actions/users.action";

function* getUsers(){
    try {
        let users = yield getUsersFromAPI()
        yield put(getUsersSuccess(users))
    } catch (error) {
        yield put(getUsersError(error.message))
    }
}


export default function* users(){
    yield takeLatest(GET_USERS_START, getUsers)
}