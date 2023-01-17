import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        userId: null,
        login: null,
        isLoggedIn: null,
    },
    reducers: {
        updateUser: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            login: payload.login
        }),
        isLoggedIn: (state, { payload }) => ({
            ...state,
            isLoggedIn: payload.isLoggedIn
        })
    }
})