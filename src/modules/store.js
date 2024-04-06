import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";
import loginSlice from "../redux/loginSlice";

export default configureStore({
    reducer:{
        auth: authSlice,   
        login: loginSlice   
    },
})