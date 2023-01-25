import { createSlice } from "@reduxjs/toolkit";

const state = {
    userId: null,
    login: null,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: state,
    reducers: {
        updateUser: (state, { payload }) => ({
            ...state,
            userId: payload.userId,
            login: payload.login
        }),
        isLoggedIn: (state, { payload }) => ({
            ...state,
            isLoggedIn: payload.isLoggedIn
        }),
        logOut: () => state,
          
    

    }
})