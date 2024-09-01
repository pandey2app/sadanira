import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product.reducer";
import { categoryReducer } from "./category.reducer";
import { userReducer } from "./user.reducer";
import { creatorReducer } from "./creator.reducer";
import { contactUsReducer } from "./contactUs.reducer";

export const rootReducer = combineReducers({
    product : productReducer,
    category : categoryReducer,
    user : userReducer,
    creator : creatorReducer,
    contactUs : contactUsReducer
})