import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";
import { categoryReducer } from "./category.reducer";
import { userReducer } from "./user.reducer";
import { usersReducer } from "./users.reducer";
import { creatorReducer } from "./creator.reducer";
import { contactUsReducer } from "./contactUs.reducer";
import { postReducer } from "./post.reducer";

export const rootReducer = combineReducers({
    product : productReducer,
    category : categoryReducer,
    user : userReducer,
    users : usersReducer,
    creator : creatorReducer,
    contactUs : contactUsReducer,
    post : postReducer
})