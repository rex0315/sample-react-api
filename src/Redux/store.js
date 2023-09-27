import { configureStore, createSlice } from "@reduxjs/toolkit";
import { store } from "@reduxjs/toolkit";

const initializeState = initialState({ value: "" } )
const slice = createSlice({
    name: "userName",
    initializeState,
    reducers: {
        getUserName(state, action) {
            state.value = action.payload;
        }
    }

});
export const { getUserName } = slice.action;
export const store = configureStore({
    user: {userName: slice.reducers}
})  

