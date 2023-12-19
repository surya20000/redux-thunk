import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initState ={
    users: []
}

export const userThunk = createAsyncThunk("users/setInitialState", async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data;
})

const userSlice = createSlice({
    name:"user",
    initialState:initState,
    reducers:{
        addInitialState:(state,action) =>{
            state.users = [...action.payload]
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(userThunk.fulfilled,(state,action) =>{
            state.users = action.payload
        })
    }
})

export const usersAction = userSlice.actions;
export const userReducer = userSlice.reducer;
export const userSelector = (state) => state.userReducer.users;