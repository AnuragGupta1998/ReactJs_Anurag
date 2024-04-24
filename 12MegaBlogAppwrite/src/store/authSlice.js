import { createSlice } from "@reduxjs/toolkit";

//initial state of store
const initialState = {
    status: false,
    userData: null

}

//to trace authentication
// creating Slice / reducer......

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout:(state)=>{
            state.status=false;
            state.userData=null;

        }
        
        // logout: (state, action) => {
        //     state.status = false;
        //     state.userData = null;
        // }

    }
})

export const {login,logout}=authSlice.actions;

export default authSlice.reducer;
