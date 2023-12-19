import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../redux/reducer";
import {thunk} from "redux-thunk"
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const myStore = configureStore({
    reducer:{
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})