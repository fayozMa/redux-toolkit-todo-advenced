import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isAuthReady:false,
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login: () => {},
        logout: () => {},
        isAuthChange: () => {},
    }
})

export const {logout,login,isAuthChange} = userSlice.reducer
export default userSlice.reducer