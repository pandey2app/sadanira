import { all, fork } from "redux-saga/effects";
import category from "./category.saga";
import product from "./product.saga";
import user from "./user.saga";
import creator from "./creator.saga";
import contactUs from "./contactUs.saga";
import users from "./users.saga";

export default function* root(){
    yield all([
        fork(category),
        fork(product),
        fork(user),
        fork(users),
        fork(creator),
        fork(contactUs)
    ])
}