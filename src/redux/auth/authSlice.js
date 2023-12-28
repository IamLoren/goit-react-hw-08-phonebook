import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            email: '',
            name: '',
        },
        token:'',
        isLogged: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLogged = true
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.isLogged = true
        })
        .addCase(logoutThunk.fulfilled, (state) => {
            state.user = {
                email: '',
                name: '',
            }
            state.token = ''
            state.isLogged = false
        })
        .addCase(refreshThunk.fulfilled, (state, {payload}) => {
            state.user.name = payload.name
            state.user.email = payload.email
            state.isLogged = true
        })
    }
})

export const authReducer = authSlice.reducer