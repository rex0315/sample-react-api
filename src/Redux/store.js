import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ConfigureStore } from "@reduxjs/toolkit";

export const store = configureStore({
})  
const nitializeState = initialState({ value: "" } )
const slice = createSlice({
    name: "userName",
    initializeState,
    reducers: {
        getUserName(state, action) {
            state.value = action.payload;
        }
    }

});
